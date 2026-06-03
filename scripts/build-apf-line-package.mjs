import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), '..');
const srcDir = path.join(rootDir, 'src');
const lineRoot = path.join(rootDir, '.stackline-build', 'angular-highcharts-lines');
const workRoot = path.join(rootDir, '.stackline-build', 'angular-highcharts-apf-work');

const lineConfig = {
  12: {
    angular: '12.2.17',
    compilerCli: '12.2.17',
    ngPackagr: '12.2.7',
    typescript: '4.3.5',
    tslib: '^2.1.0',
    target: 'es2015',
    module: 'es2020',
    lib: ['dom', 'es2018']
  },
  13: {
    angular: '13.4.0',
    compilerCli: '13.4.0',
    ngPackagr: '13.3.1',
    typescript: '4.6.4',
    tslib: '^2.3.0',
    target: 'es2015',
    module: 'es2020',
    lib: ['dom', 'es2020']
  }
};

function parseArgs(argv) {
  const index = argv.indexOf('--line');
  if (index < 0 || !argv[index + 1]) {
    throw new Error('Usage: node scripts/build-apf-line-package.mjs --line 12');
  }

  const major = Number(argv[index + 1]);
  if (!lineConfig[major]) {
    throw new Error(`No APF build config for Angular ${major}`);
  }

  return major;
}

function ensureCleanDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function copyFile(source, target) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

function copyDirectory(source, target) {
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(target), { recursive: true });
  execFileSync('rsync', ['-a', `${source}/`, `${target}/`], { stdio: 'inherit' });
}

function transformSource(fileName, source, major) {
  let code = source;

  if (major <= 13) {
    code = code.replace(/\s+standalone:\s*false,?/g, '');
  }

  return code;
}

function copySources(targetSrcDir, major) {
  ensureCleanDir(targetSrcDir);

  for (const fileName of fs.readdirSync(srcDir)) {
    if (fileName.endsWith('.spec.ts') || fileName === 'Mocks.ts' || fileName === 'stub.ts') {
      continue;
    }

    const sourcePath = path.join(srcDir, fileName);
    const targetPath = path.join(targetSrcDir, fileName);

    if (!fileName.endsWith('.ts')) {
      copyFile(sourcePath, targetPath);
      continue;
    }

    fs.writeFileSync(
      targetPath,
      transformSource(fileName, fs.readFileSync(sourcePath, 'utf8'), major)
    );
  }
}

function ensureLineMetadata(major) {
  const lineDir = path.join(lineRoot, `angular-${major}`);
  const packageFile = path.join(lineDir, 'package.json');

  execFileSync('node', ['scripts/prepare-line-package.mjs', '--line', String(major)], {
    cwd: rootDir,
    stdio: 'inherit'
  });

  return {
    lineDir,
    packageJson: readJson(packageFile),
    readme: fs.readFileSync(path.join(lineDir, 'README.md'), 'utf8'),
    license: fs.readFileSync(path.join(lineDir, 'LICENSE'), 'utf8')
  };
}

function createWorkPackageJson(linePackageJson, config) {
  return {
    ...linePackageJson,
    scripts: {
      build: 'ng-packagr -p ng-package.json'
    },
    dependencies: {
      tslib: config.tslib
    },
    devDependencies: {
      '@angular/common': config.angular,
      '@angular/compiler': config.angular,
      '@angular/compiler-cli': config.compilerCli,
      '@angular/core': config.angular,
      '@angular/platform-browser': config.angular,
      'ng-packagr': config.ngPackagr,
      '@types/node': '12.20.55',
      typescript: config.typescript
    }
  };
}

function createTsConfig(config) {
  return {
    compilerOptions: {
      target: config.target,
      module: config.module,
      moduleResolution: 'node',
      declaration: true,
      inlineSources: true,
      importHelpers: true,
      experimentalDecorators: true,
      skipLibCheck: true,
      lib: config.lib,
      types: []
    },
    angularCompilerOptions: {
      enableIvy: true,
      compilationMode: 'partial'
    }
  };
}

function packageFieldExists(outDir, packageField) {
  return !!packageField && fs.existsSync(path.join(outDir, packageField));
}

function pickExistingPackageField(outDir, fields) {
  return fields.find((field) => packageFieldExists(outDir, field));
}

function buildApfLine(major) {
  const config = lineConfig[major];
  const metadata = ensureLineMetadata(major);
  const workDir = path.join(workRoot, `angular-${major}`);
  const outDir = path.join(workDir, 'package');

  ensureCleanDir(workDir);
  copySources(path.join(workDir, 'src'), major);

  writeJson(path.join(workDir, 'package.json'), createWorkPackageJson(metadata.packageJson, config));
  writeJson(path.join(workDir, 'tsconfig.json'), createTsConfig(config));
  writeJson(path.join(workDir, 'ng-package.json'), {
    $schema: './node_modules/ng-packagr/ng-package.schema.json',
    dest: 'package',
    lib: {
      entryFile: 'src/public_api.ts'
    }
  });

  execFileSync('npm', ['install', '--ignore-scripts', '--no-audit', '--no-fund'], {
    cwd: workDir,
    stdio: 'inherit'
  });
  execFileSync('npx', ['ng-packagr', '-p', 'ng-package.json'], {
    cwd: workDir,
    stdio: 'inherit'
  });

  const generatedPackageJson = readJson(path.join(outDir, 'package.json'));
  const mainField = pickExistingPackageField(outDir, [
    generatedPackageJson.main,
    generatedPackageJson.fesm2020,
    generatedPackageJson.fesm2015,
    generatedPackageJson.module
  ]);
  const moduleField = pickExistingPackageField(outDir, [
    generatedPackageJson.module,
    generatedPackageJson.fesm2020,
    generatedPackageJson.fesm2015
  ]);
  const es2015Field = pickExistingPackageField(outDir, [
    generatedPackageJson.es2015,
    generatedPackageJson.fesm2015,
    generatedPackageJson.module
  ]);
  const finalPackageJson = {
    ...generatedPackageJson,
    ...metadata.packageJson,
    main: mainField,
    module: moduleField,
    es2015: es2015Field,
    esm2015: generatedPackageJson.esm2015,
    fesm2015: generatedPackageJson.fesm2015,
    typings: generatedPackageJson.typings,
    types: generatedPackageJson.typings || generatedPackageJson.types,
    files: [
      'bundles',
      'esm2015',
      'esm2020',
      'esm2022',
      'fesm2015',
      'fesm2020',
      'fesm2022',
      '*.d.ts',
      '*.metadata.json',
      'README.md',
      'LICENSE'
    ],
    dependencies: generatedPackageJson.dependencies || { tslib: config.tslib },
    peerDependencies: metadata.packageJson.peerDependencies,
    sideEffects: false
  };

  copyDirectory(outDir, metadata.lineDir);
  writeJson(path.join(metadata.lineDir, 'package.json'), finalPackageJson);
  fs.writeFileSync(path.join(metadata.lineDir, 'README.md'), metadata.readme);
  fs.writeFileSync(path.join(metadata.lineDir, 'LICENSE'), metadata.license);

  console.log(`Built APF/Ivy package for Angular ${major} at ${metadata.lineDir}`);
}

buildApfLine(parseArgs(process.argv.slice(2)));
