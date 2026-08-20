import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const packageFile = path.join(rootDir, 'dist', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageFile, 'utf8'));
const moduleFile = 'fesm2022/stackline-angular-highcharts.mjs';
const typesFile = 'types/stackline-angular-highcharts.d.ts';

Object.assign(packageJson, {
  main: moduleFile,
  module: moduleFile,
  es2022: moduleFile,
  esm2022: moduleFile,
  fesm2022: moduleFile,
  typings: typesFile,
  types: typesFile
});

fs.writeFileSync(packageFile, `${JSON.stringify(packageJson, null, 2)}\n`);
console.log('Finalized APF compatibility fields in dist/package.json.');
