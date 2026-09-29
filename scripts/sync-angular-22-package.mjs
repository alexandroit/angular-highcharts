import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docsDir = path.join(rootDir, 'docs-src', 'angular-22');
const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
const name = '@stackline/angular-highcharts';
if (process.env.STACKLINE_HIGHCHARTS_CANDIDATE === '1') {
  const evidence = readJson(path.join(rootDir, '.stackline-build/docs-candidate/verified.json'));
  const source = readJson(path.join(rootDir, 'package.json'));
  const installed = readJson(path.join(docsDir, 'node_modules', name, 'package.json'));
  assert.equal(evidence.version, source.version);
  assert.deepEqual(installed, evidence.manifest);
  assert.deepEqual(installed.dependencies, source.dependencies);
  console.log(`Verified the compiled candidate ${name}@${source.version} for the Angular 22 browser contract.`);
} else {
const docsPackage = readJson(path.join(docsDir, 'package.json'));
const version = docsPackage.dependencies[name];
assert.match(version, /^\d+\.\d+\.\d+$/, 'The docs package must use an exact published version.');
const locked = readJson(path.join(docsDir, 'package-lock.json')).packages[`node_modules/${name}`];
assert.equal(locked.version, version);
assert.equal(locked.resolved, `https://registry.npmjs.org/${name}/-/angular-highcharts-${version}.tgz`);
assert.match(locked.integrity, /^sha512-/);
const installed = readJson(path.join(docsDir, 'node_modules', name, 'package.json'));
assert.equal(installed.name, name);
assert.equal(installed.version, version);
console.log(`Verified the published ${name}@${version} for the Angular 22 documentation app.`);
}
