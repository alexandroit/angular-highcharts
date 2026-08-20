import assert from 'node:assert/strict';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(rootDir, 'docs', 'angular-22', 'live');
const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
const docsPackageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'docs-src', 'angular-22', 'package.json'), 'utf8'));
const explicitUrl = process.env.STACKLINE_HIGHCHARTS_URL;
const chromeCandidates = [
  process.env.PUPPETEER_EXECUTABLE_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser'
].filter(Boolean);

function contentType(filePath) {
  if (filePath.endsWith('.html')) return 'text/html; charset=utf-8';
  if (filePath.endsWith('.js')) return 'text/javascript; charset=utf-8';
  if (filePath.endsWith('.css')) return 'text/css; charset=utf-8';
  if (filePath.endsWith('.json')) return 'application/json; charset=utf-8';
  if (filePath.endsWith('.svg')) return 'image/svg+xml';
  return 'application/octet-stream';
}

async function startServer() {
  if (explicitUrl) {
    return { url: explicitUrl, close: async () => undefined };
  }

  assert.ok(fs.existsSync(path.join(docsDir, 'index.html')), 'Build the Angular 22 docs before browser testing.');

  const server = http.createServer((request, response) => {
    const requestPath = new URL(request.url || '/', 'http://127.0.0.1').pathname;
    const relativePath = requestPath === '/' ? 'index.html' : decodeURIComponent(requestPath.slice(1));
    const filePath = path.resolve(docsDir, relativePath);

    if (!filePath.startsWith(`${docsDir}${path.sep}`) || !fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
      response.writeHead(404).end('Not found');
      return;
    }

    response.writeHead(200, { 'content-type': contentType(filePath) });
    fs.createReadStream(filePath).pipe(response);
  });

  await new Promise((resolve, reject) => {
    server.once('error', reject);
    server.listen(0, '127.0.0.1', resolve);
  });

  const address = server.address();
  assert.ok(address && typeof address === 'object');
  return {
    url: `http://127.0.0.1:${address.port}/`,
    close: () => new Promise((resolve, reject) => server.close((error) => error ? reject(error) : resolve()))
  };
}

const chrome = chromeCandidates.find((candidate) => fs.existsSync(candidate));
assert.ok(chrome, 'Chrome or Chromium was not found.');

const server = await startServer();
const browser = await puppeteer.launch({
  executablePath: chrome,
  headless: true,
  args: ['--no-sandbox', '--disable-dev-shm-usage']
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  const failures = [];

  page.on('pageerror', (error) => failures.push(`pageerror: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() === 'error') failures.push(`console: ${message.text()}`);
  });
  page.on('requestfailed', (request) => failures.push(`request: ${request.url()}`));
  page.on('response', (response) => {
    if (response.status() >= 400) failures.push(`http ${response.status()}: ${response.url()}`);
  });

  const separator = server.url.includes('?') ? '&' : '?';
  const response = await page.goto(`${server.url}${separator}view=static`, {
    waitUntil: 'networkidle0',
    timeout: 90_000
  });
  assert.ok(response?.ok(), `Documentation returned HTTP ${response?.status()}.`);
  await page.waitForSelector('svg.highcharts-root', { visible: true, timeout: 60_000 });

  const result = await page.evaluate(() => ({
    body: document.body.textContent || '',
    chartHosts: document.querySelectorAll('chart').length,
    chartSvgs: document.querySelectorAll('svg.highcharts-root').length,
    seriesGroups: document.querySelectorAll('.highcharts-series-group').length
  }));

  assert.ok(result.body.includes(`@stackline/angular-highcharts ${packageJson.version}`));
  assert.ok(result.body.includes(`Angular CLI ${docsPackageJson.devDependencies['@angular/cli']} / Angular ${docsPackageJson.dependencies['@angular/core']} runtime`));
  assert.ok(result.body.includes(`Highcharts ${docsPackageJson.dependencies.highcharts}`));
  assert.ok(result.chartHosts >= 50, `Expected at least 50 chart hosts, received ${result.chartHosts}.`);
  assert.equal(result.chartSvgs, result.chartHosts, 'At least one chart host failed to render an SVG.');
  assert.ok(result.seriesGroups >= result.chartSvgs, 'Rendered charts are missing series groups.');
  assert.deepEqual(failures, []);

  console.log(`Browser docs verified: ${result.chartSvgs} Highcharts SVGs with no runtime or HTTP failures.`);
} finally {
  await browser.close();
  await server.close();
}
