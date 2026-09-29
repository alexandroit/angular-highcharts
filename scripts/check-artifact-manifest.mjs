import assert from 'node:assert/strict';
import fs from 'node:fs';
const packed = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
const source = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
for (const field of ['name', 'version', 'dependencies', 'peerDependencies', 'repository', 'license', 'engines', 'sideEffects']) {
  assert.deepEqual(packed[field], source[field], `Compiled manifest differs in ${field}`);
}
assert.equal(packed.main, 'fesm2022/stackline-angular-highcharts.mjs');
assert.equal(packed.types, 'types/stackline-angular-highcharts.d.ts');
assert.ok(!packed.scripts && !packed.devDependencies && !packed.overrides, 'Development metadata must not ship in the APF package');
console.log('Compiled artifact identity matches the exact source release metadata.');
