import {
  copyFileSync,
  existsSync,
  unlinkSync
} from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const [action, family] = process.argv.slice(2);

if (!['install', 'build'].includes(action) || !/^angular-\d+$/.test(family || '')) {
  throw new Error('Usage: run-compat-doc-line.mjs <install|build> <angular-major>');
}

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const familyRoot = path.join(repositoryRoot, 'docs-src', family);
const fixtureManifest = path.join(familyRoot, 'package.fixture.json');
const fixtureLock = path.join(familyRoot, 'package-lock.fixture.json');
const activeManifest = path.join(familyRoot, 'package.json');
const activeLock = path.join(familyRoot, 'package-lock.json');

if (!existsSync(fixtureManifest)) {
  throw new Error(`Missing compatibility fixture: ${fixtureManifest}`);
}

if (existsSync(activeManifest) || existsSync(activeLock)) {
  throw new Error(`Refusing to overwrite active dependency files in ${familyRoot}`);
}

let result;

try {
  copyFileSync(fixtureManifest, activeManifest);
  if (existsSync(fixtureLock)) copyFileSync(fixtureLock, activeLock);

  const args = action === 'install'
    ? ['install', '--ignore-scripts']
    : ['run', 'build'];
  result = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', args, {
    cwd: familyRoot,
    stdio: 'inherit'
  });
} finally {
  if (existsSync(activeManifest)) unlinkSync(activeManifest);
  if (existsSync(activeLock)) unlinkSync(activeLock);
}

if (result.error) throw result.error;
if (result.status !== 0) process.exit(result.status || 1);
