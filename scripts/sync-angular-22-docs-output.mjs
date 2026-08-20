import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceDir = path.join(
  rootDir,
  'docs-src',
  'angular-22',
  'dist',
  'stackline-angular-highcharts-angular-22',
  'browser'
);
const targetDir = path.join(rootDir, 'docs', 'angular-22', 'live');

if (!fs.existsSync(path.join(sourceDir, 'index.html'))) {
  throw new Error('The Angular 22 browser documentation build is missing.');
}

fs.rmSync(targetDir, { recursive: true, force: true });
fs.cpSync(sourceDir, targetDir, { recursive: true });
console.log('Synced the Angular 22 browser build into docs/angular-22/live.');
