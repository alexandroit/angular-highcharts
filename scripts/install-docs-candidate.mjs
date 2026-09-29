import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs-src/angular-22');
const output = path.join(root, '.stackline-build/docs-candidate');
const name = '@stackline/angular-highcharts';
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'dist/package.json'), 'utf8'));
const source = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
assert.equal(manifest.version, source.version);
assert.deepEqual(manifest.dependencies, source.dependencies);
fs.mkdirSync(output, { recursive: true });
const packed = JSON.parse(execFileSync('npm', ['pack', '--ignore-scripts', '--json', '--pack-destination', output], { cwd: path.join(root, 'dist'), encoding: 'utf8' }))[0];
const archive = path.join(output, packed.filename);
const integrity = 'sha512-' + createHash('sha512').update(fs.readFileSync(archive)).digest('base64');
const files = ['package.json', 'package-lock.json'];
const original = files.map(file => fs.readFileSync(path.join(docs, file)));
try {
  const app = JSON.parse(original[0]);
  app.dependencies[name] = 'file:' + archive;
  app.dependencies.tslib = source.dependencies.tslib;
  fs.writeFileSync(path.join(docs, 'package.json'), JSON.stringify(app, null, 2) + '\n');
  execFileSync('npm', ['install', '--ignore-scripts', '--package-lock=true', '--no-fund'], { cwd: docs, stdio: 'inherit' });
  const lock = JSON.parse(fs.readFileSync(path.join(docs, 'package-lock.json'), 'utf8'));
  assert.equal(lock.packages['node_modules/' + name].integrity, integrity);
  const installed = JSON.parse(fs.readFileSync(path.join(docs, 'node_modules', name, 'package.json'), 'utf8'));
  assert.deepEqual(installed, manifest);
  execFileSync('npm', ['ls', '--all'], { cwd: docs, stdio: 'pipe', encoding: 'utf8' });
  execFileSync('npm', ['audit', '--audit-level=low'], { cwd: docs, stdio: 'inherit' });
  fs.copyFileSync(path.join(docs, 'package-lock.json'), path.join(output, 'consumer-package-lock.json'));
  fs.writeFileSync(path.join(output, 'verified.json'), JSON.stringify({name, version: manifest.version, integrity, archive, manifest}, null, 2) + '\n');
  console.log(`Installed and audited the exact compiled candidate ${name}@${manifest.version} (${integrity}).`);
} finally {
  files.forEach((file, index) => fs.writeFileSync(path.join(docs, file), original[index]));
}
