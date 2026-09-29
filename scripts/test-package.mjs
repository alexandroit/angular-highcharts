import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const workspace = fs.mkdtempSync(path.join(os.tmpdir(), 'stackline-angular-highcharts-packed-'));
try {
  const packed = JSON.parse(execFileSync('npm', ['pack', '--ignore-scripts', '--json', '--pack-destination', workspace], {cwd:path.join(root, 'dist'), encoding:'utf8'}))[0];
  const archive = path.join(workspace, packed.filename);
  const integrity = 'sha512-' + createHash('sha512').update(fs.readFileSync(archive)).digest('base64');
  for (const key of [source.name, 'angular-highcharts']) {
    const cwd = path.join(workspace, key === source.name ? 'direct' : 'legacy-key');
    fs.mkdirSync(cwd);
    fs.writeFileSync(path.join(cwd, 'package.json'), JSON.stringify({name:'packed-consumer',version:'1.0.0',private:true,dependencies:{[key]:'file:'+archive,'@angular/core':'22.1.3','@angular/common':'22.1.3','@angular/compiler':'22.1.3',highcharts:'13.0.2',rxjs:'7.8.2'}}));
    execFileSync('npm', ['install','--ignore-scripts','--package-lock=true','--no-fund'], {cwd,encoding:'utf8',stdio:'pipe'});
    const lock = JSON.parse(fs.readFileSync(path.join(cwd,'package-lock.json'),'utf8'));
    assert.equal(lock.packages['node_modules/'+key].integrity, integrity);
    const installed = JSON.parse(fs.readFileSync(path.join(cwd,'node_modules',key,'package.json'),'utf8'));
    assert.equal(installed.version, source.version);
    assert.deepEqual(installed.dependencies, source.dependencies);
    execFileSync('npm', ['ls','--all'], {cwd,encoding:'utf8',stdio:'pipe'});
    execFileSync('npm', ['audit','--omit=dev','--audit-level=low'], {cwd,encoding:'utf8',stdio:'pipe'});
    execFileSync(process.execPath, ['--input-type=module','-e',`await import('@angular/compiler'); const api=await import(${JSON.stringify(key)}); for(const name of ['ChartModule','ChartComponent','ChartSeriesComponent','HighchartsService']) {if(typeof api[name]!=='function') throw Error(name+' public API is absent')}`], {cwd,encoding:'utf8',stdio:'pipe'});
    console.log(`Packed ${key} installation, public API, tree, integrity and production audit PASS.`);
  }
} finally {
  fs.rmSync(workspace, {recursive:true,force:true});
}
