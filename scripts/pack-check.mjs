import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const packageFile = path.join(distDir, 'package.json');

assert.ok(fs.existsSync(packageFile), 'The distribution package.json is missing. Run npm run build first.');

const packageJson = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
assert.equal(packageJson.name, '@stackline/angular-highcharts');
assert.equal(packageJson.version, '22.1.2');
assert.equal(packageJson.peerDependencies['@angular/core'], '>=22.0.0 <24.0.0');
assert.equal(packageJson.peerDependencies.highcharts, '>=5.0.0 <=13.0.2');

for (const field of ['main', 'module', 'types']) {
  assert.ok(packageJson[field], `The ${field} package field is missing.`);
  assert.ok(fs.existsSync(path.join(distDir, packageJson[field])), `The ${field} target does not exist.`);
}

const pack = JSON.parse(execFileSync('npm', ['pack', '--dry-run', '--json'], {
  cwd: distDir,
  encoding: 'utf8'
}))[0];
const files = pack.files.map((entry) => entry.path);

assert.ok(files.includes('LICENSE'));
assert.ok(files.includes('README.md'));
assert.ok(files.includes('fesm2022/stackline-angular-highcharts.mjs'));
assert.ok(files.includes('types/stackline-angular-highcharts.d.ts'));
assert.ok(files.every((file) => !file.includes('node_modules') && !file.includes('.spec.')));

const declarations = fs.readFileSync(path.join(distDir, packageJson.types), 'utf8');
assert.match(declarations, /constructor\(event: any, context: any\)/);

for (const publicName of [
  'ChartModule',
  'ChartComponent',
  'ChartSeriesComponent',
  'ChartPointComponent',
  'ChartXAxisComponent',
  'ChartYAxisComponent',
  'ChartZAxisComponent',
  'ChartColorAxisComponent',
  'HighchartsStatic',
  'HighchartsService'
]) {
  assert.match(declarations, new RegExp(`\\b${publicName}\\b`));
}

console.log(`Package archive verified: ${pack.filename}, ${files.length} files.`);
