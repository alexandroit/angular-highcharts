import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(rootDir, 'dist');
const targetDir = path.join(rootDir, 'docs-src', 'angular-22', 'packages', 'angular-highcharts');

if (!fs.existsSync(path.join(sourceDir, 'package.json'))) {
  throw new Error('Build the Angular package before syncing the docs package.');
}

fs.rmSync(targetDir, { recursive: true, force: true });
fs.cpSync(sourceDir, targetDir, { recursive: true });
console.log('Synced the Angular 22 package build into the documentation app.');
