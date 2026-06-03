import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'src');
const outRoot = path.join(rootDir, '.stackline-build', 'angular-highcharts-lines');
const packageName = '@stackline/angular-highcharts';
const lineMajors = [2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

function parseArgs(argv) {
  const options = {
    lines: lineMajors,
    publish: false,
    registry: 'http://127.0.0.1:4873'
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--publish') {
      options.publish = true;
      continue;
    }

    if (arg === '--registry') {
      options.registry = argv[index + 1];
      index += 1;
      continue;
    }

    if (arg === '--line') {
      options.lines = [Number(argv[index + 1])];
      index += 1;
      continue;
    }

    if (arg === '--lines') {
      options.lines = argv[index + 1].split(',').map((value) => Number(value.trim()));
      index += 1;
      continue;
    }

    if (arg === '--help' || arg === '-h') {
      printHelp();
      process.exit(0);
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  options.lines.forEach((line) => {
    if (!lineMajors.includes(line)) {
      throw new Error(`Unsupported Angular line: ${line}`);
    }
  });

  return options;
}

function printHelp() {
  console.log(`
Usage:
  node scripts/prepare-line-package.mjs --line 21
  node scripts/prepare-line-package.mjs --lines 2,4,5
  node scripts/prepare-line-package.mjs --publish

The script prepares one package folder per Angular major under:
  .stackline-build/angular-highcharts-lines/angular-<major>

Publishing uses Verdaccio by default and runs sequentially.
`.trim());
}

function ensureCleanDir(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
}

function copyFile(source, target) {
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function writeJson(filePath, value) {
  fs.writeFileSync(filePath, `${JSON.stringify(value, null, 2)}\n`);
}

function getPackageVersion(major) {
  if (major === 21) {
    return '21.0.2';
  }

  return `${major}.0.0`;
}

function getPeerRange(major) {
  return `>=${major}.0.0 <${major + 1}.0.0`;
}

function getTestedHighchartsVersion(major) {
  if (major >= 9 && major <= 11) {
    return '10.3.3';
  }

  if (major >= 12) {
    return '12.6.0';
  }

  return null;
}

function getHighchartsInstallName(major) {
  const testedVersion = getTestedHighchartsVersion(major);
  return testedVersion ? `highcharts@${testedVersion}` : 'highcharts';
}

function getHighchartsPeerRange(major) {
  if (major >= 9 && major <= 11) {
    return '>=5.0.0 <=10.3.3';
  }

  if (major >= 12) {
    return '>=5.0.0 <=12.6.0';
  }

  return '>=5.0.0';
}

function getHighchartsCompatibilitySection(major) {
  const testedVersion = getTestedHighchartsVersion(major);

  if (!testedVersion) {
    return '';
  }

  if (major >= 12) {
    return `
## Highcharts Compatibility

The Angular ${major} validation app uses \`highcharts@${testedVersion}\`, which is the highest Highcharts version tested for this line.

The maintained Stackline Angular ${major} line is published with a Highcharts peer range of \`${getHighchartsPeerRange(major)}\` so applications get a clear, reproducible compatibility ceiling while still keeping Highcharts as an application-owned peer dependency.
`;
  }

  return `
## Highcharts Compatibility

The Angular ${major} validation app uses \`highcharts@${testedVersion}\`, which is the highest Highcharts version tested without Angular ${major} CLI/Webpack syntax-loader changes.

Highcharts 11.x and 12.x were tested for this line and rejected because their distributed modules use newer JavaScript syntax than the Angular ${major} default build pipeline accepts. If your application customizes Webpack/Babel to transpile package modules, you can run your own compatibility test, but the maintained Stackline Angular ${major} line is published against \`${testedVersion}\`.
`;
}

function getHighchartsModuleList(major) {
  if (major >= 12) {
    return 'more, 3d, heatmap, treemap, funnel, solid-gauge, stock, map, drilldown, sankey, dependency-wheel, networkgraph, sunburst, wordcloud, xrange, timeline, variwide, variable-pie, item, streamgraph, bullet, dumbbell, lollipop, pareto, histogram-bellcurve, tilemap, venn, arc-diagram, organization, flowmap, geoheatmap, pictorial, contour, pointandfigure, renko';
  }

  if (major >= 9) {
    return 'more, 3d, heatmap, treemap, funnel, solid-gauge, stock, map, drilldown, sankey, dependency-wheel, networkgraph, sunburst, wordcloud, xrange, timeline, variwide, variable-pie, item, streamgraph, bullet, dumbbell, lollipop, pareto, histogram-bellcurve, tilemap, venn, arc-diagram, organization';
  }

  return 'more, 3d, heatmap, treemap, funnel, solid-gauge, stock, map, drilldown';
}

function getStackBlitzLink(major) {
  if (major < 9) {
    return '';
  }

  return ` | **[StackBlitz](https://stackblitz.com/github/alexandroit/stackline-angular-highcharts-stackblitz/tree/master/angular-${major}?file=src%2Fapp%2Fapp.component.ts&startScript=start)**`;
}

function transformSource(fileName, source, major) {
  let code = source;

  if (major <= 13) {
    code = code.replace(/\s+standalone:\s*false,?/g, '');
  }

  if (major <= 7) {
    code = code.replace(/@ContentChild\(([^,\n]+),\s*\{\s*static:\s*false\s*\}\)/g, '@ContentChild($1)');
  }

  return code;
}

function copySourcesForLine(tempSrcDir, major) {
  ensureCleanDir(tempSrcDir);

  for (const fileName of fs.readdirSync(srcDir)) {
    if (fileName.endsWith('.spec.ts') || fileName === 'Mocks.ts' || fileName === 'stub.ts') {
      continue;
    }

    const sourcePath = path.join(srcDir, fileName);
    const targetPath = path.join(tempSrcDir, fileName);

    if (!fileName.endsWith('.ts')) {
      copyFile(sourcePath, targetPath);
      continue;
    }

    const source = fs.readFileSync(sourcePath, 'utf8');
    fs.writeFileSync(targetPath, transformSource(fileName, source, major));
  }
}

function createReadme(major, version) {
  return `# @stackline/angular-highcharts

> A maintained Angular ${major} wrapper for Highcharts, Highstock, and Highmaps applications, with standard chart rendering, constructor switching, module registration, directive event outputs, native chart instance access, realtime data demos, and Angular-versioned release lines.

[![npm version](https://img.shields.io/npm/v/@stackline/angular-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-highcharts)
[![npm monthly](https://img.shields.io/npm/dm/@stackline/angular-highcharts.svg?style=flat-square)](https://www.npmjs.com/package/@stackline/angular-highcharts)
[![license](https://img.shields.io/npm/l/@stackline/angular-highcharts.svg?style=flat-square)](https://github.com/alexandroit/angular-highcharts/blob/master/LICENSE)
[![Angular ${major}](https://img.shields.io/badge/Angular-${major}.x-red?style=flat-square&logo=angular)](https://alexandro.net/docs/angular/angular-highcharts/angular-${major}/)
[![Highcharts](https://img.shields.io/badge/Highcharts-5%2B-2f7ed8?style=flat-square)](https://www.highcharts.com/)
[![Reddit community](https://img.shields.io/badge/community-r%2FStackline-ff4500?style=flat-square&logo=reddit&logoColor=white)](https://www.reddit.com/r/Stackline/)

**[Documentation & Live Demos](https://alexandro.net/docs/angular/angular-highcharts/)** | **[Angular ${major} Demo](https://alexandro.net/docs/angular/angular-highcharts/angular-${major}/)**${getStackBlitzLink(major)} | **[npm](https://www.npmjs.com/package/@stackline/angular-highcharts)** | **[Issues](https://github.com/alexandroit/angular-highcharts/issues)** | **[Repository](https://github.com/alexandroit/angular-highcharts)** | **[Community Discussions](https://www.reddit.com/r/Stackline/)**

<p align="center">
  <img src="https://assets.alexandro.net/2026/06/angular2-highcharts.gif" alt="Stackline Angular Highcharts live examples" width="920">
</p>

**Angular ${major} release:** \`${version}\`

---

> **Credits:** Original Angular Highcharts wrapper lineage by [Eugene Gluhotorenko](https://github.com/gevgeny/angular2-highcharts). Current Stackline maintenance, Angular release-line packaging, docs, live tests, publishing, and repository stewardship by [Alexandro Paixao Marques](https://github.com/alexandroit/angular-highcharts).

---

## Why this library?

\`@stackline/angular-highcharts\` keeps the early Angular Highcharts wrapper API alive while making it usable in a maintained, versioned Stackline package line.

The goal is not to hide Highcharts. The package stays thin: your application still owns the real Highcharts options object, the Highcharts constructor choice, module registration, event handling, and native chart instance. The wrapper gives Angular templates a stable \`<chart>\` component, Angular event outputs, axis/series/point directives, and release families aligned to Angular majors.

The Angular ${major} package family is \`${version}\` and is intended for Angular \`${major}.x\` applications. The live validation app for this line uses a real Angular ${major} project, renders static chart examples, renders realtime market examples, and validates that dynamic charts update existing Highcharts instances instead of blinking through full object recreation.

## Features

| Feature | Supported |
| :--- | :---: |
| Angular ${major} tested release line | ✅ |
| Standard \`Highcharts.Chart\` rendering | ✅ |
| \`StockChart\` constructor support | ✅ |
| Highmaps constructor support when Highmaps is registered | ✅ |
| Highcharts module registration through \`ChartModule.forRoot(...)\` | ✅ |
| Native Highcharts options object | ✅ |
| Native chart instance access through \`(create)\` | ✅ |
| Chart event outputs | ✅ |
| Series event outputs | ✅ |
| Point event outputs | ✅ |
| \`xAxis\` and \`yAxis\` directive outputs | ✅ |
| \`zAxis\` directive outputs | ✅ |
| \`colorAxis\` directive outputs | ✅ |
| Dynamic data updates | ✅ |
| Realtime WebSocket demo coverage | ✅ |
| REST history + live candle demo coverage | ✅ |
| Static examples for common chart types | ✅ |
| Versioned docs builds per Angular line | ✅ |

## Table of Contents

1. [Angular Version Compatibility](#angular-version-compatibility)
2. [Installation](#installation)
3. [Setup](#setup)
4. [Basic Usage](#basic-usage)
5. [Constructor Switch](#constructor-switch)
6. [Highcharts Modules](#highcharts-modules)
7. [Events and Directives](#events-and-directives)
8. [Native Chart Instance](#native-chart-instance)
9. [Common Chart Types](#common-chart-types)
10. [Dynamic Updates](#dynamic-updates)
11. [API Surface](#api-surface)
12. [Wrapper Capabilities](#wrapper-capabilities)
13. [License](#license)

## Angular Version Compatibility

Each package family targets one Angular major. Keep the package major aligned with the Angular major used by your application.

| Package family | Angular family | Peer range | Install |
| :---: | :---: | :---: | :--- |
| \`${major}.x\` | Angular \`${major}.x\` | \`${getPeerRange(major)}\` | \`npm install @stackline/angular-highcharts@${version} ${getHighchartsInstallName(major)} --save-exact\` |

## Installation

\`\`\`bash
npm install @stackline/angular-highcharts@${version} ${getHighchartsInstallName(major)} --save-exact
\`\`\`

The package declares \`highcharts\` as a peer dependency so your application can choose the Highcharts version and modules it needs.
${getHighchartsCompatibilitySection(major)}

## Setup

### 1. Import the module

\`\`\`ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from '@stackline/angular-highcharts';

declare var require: any;

@NgModule({
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts'))
  ]
})
export class AppModule {}
\`\`\`

## Basic Usage

### 1. Render a chart

\`\`\`html
<chart [options]="options"></chart>
\`\`\`

### 2. Keep options in the component

\`\`\`ts
options = {
  chart: { type: 'line' },
  title: { text: 'Simple chart' },
  xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr'] },
  yAxis: { title: { text: 'Revenue' } },
  series: [
    { name: 'Orders', data: [29.9, 71.5, 106.4, 129.2] }
  ]
};
\`\`\`

## Constructor Switch

Use the \`type\` input when the chart should be created with another Highcharts constructor.

\`\`\`html
<chart [type]="'StockChart'" [options]="stockOptions"></chart>
\`\`\`

\`\`\`ts
stockOptions = {
  rangeSelector: { selected: 1 },
  title: { text: 'BNBUSDT candles' },
  series: [
    {
      type: 'candlestick',
      name: 'BNBUSDT',
      data: []
    }
  ]
};
\`\`\`

Common constructor values:

| Constructor | Usage |
| :--- | :--- |
| \`Chart\` | Default Highcharts charts. |
| \`StockChart\` | Highstock timelines, candlesticks, ranges, and financial charts. |
| \`Map\` / \`mapChart\` style constructors | Highmaps-style charts when the matching Highcharts build is registered. |

## Highcharts Modules

Register Highcharts modules through \`ChartModule.forRoot(...)\`. The wrapper calls each module with the Highcharts static object before charts are created.

\`\`\`ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from '@stackline/angular-highcharts';

declare var require: any;

@NgModule({
  imports: [
    BrowserModule,
    ChartModule.forRoot(
      require('highcharts'),
      require('highcharts/highcharts-more'),
      require('highcharts/modules/solid-gauge'),
      require('highcharts/modules/heatmap'),
      require('highcharts/modules/treemap'),
      require('highcharts/modules/funnel')
    )
  ]
})
export class AppModule {}
\`\`\`

The live test matrix covers examples for line, spline, area, areaspline, column, bar, stacked column, pie, donut, scatter, bubble, combination, polar, gauge, solid gauge, heatmap, treemap, funnel, 3D column, StockChart, map-like charts, and no-data states.

## Events and Directives

The wrapper exposes Angular outputs for Highcharts chart, series, point, and axis event families.

\`\`\`html
<chart
  [options]="directiveOptions"
  (create)="onChartCreate($event)"
  (load)="record('chart load')"
  (redraw)="record('chart redraw')"
  (selection)="record('chart selection')"
>
  <series
    (click)="record('series click')"
    (legendItemClick)="record('legend click')"
  >
    <point
      (click)="record('point click')"
      (mouseOver)="record('point hover')"
    ></point>
  </series>

  <xAxis (setExtremes)="record('xAxis extremes')"></xAxis>
  <yAxis (setExtremes)="record('yAxis extremes')"></yAxis>
  <zAxis (afterSetExtremes)="record('zAxis extremes')"></zAxis>
  <colorAxis (setExtremes)="record('colorAxis extremes')"></colorAxis>
</chart>
\`\`\`

\`\`\`ts
events: string[] = [];

onChartCreate(chart: any) {
  this.record('chart created with ' + chart.series.length + ' series');
}

record(message: string) {
  this.events.unshift(new Date().toLocaleTimeString() + ' - ' + message);
  this.events = this.events.slice(0, 8);
}
\`\`\`

## Native Chart Instance

Use \`(create)\` to keep the native Highcharts instance. This is the right path for realtime dashboards because it lets you update series progressively instead of recreating the full options object.

\`\`\`html
<chart [options]="options" (create)="saveChart($event)"></chart>
\`\`\`

\`\`\`ts
chart: any;

saveChart(chart: any) {
  this.chart = chart;
}

addPoint(value: number) {
  if (!this.chart || !this.chart.series.length) {
    return;
  }

  this.chart.series[0].addPoint(value, true, false);
}

replaceSeries(data: number[]) {
  if (!this.chart || !this.chart.series.length) {
    return;
  }

  this.chart.series[0].setData(data, true, false);
}
\`\`\`

## Common Chart Types

Use normal Highcharts options. The wrapper does not invent a second chart configuration language.

\`\`\`ts
columnOptions = {
  chart: { type: 'column' },
  title: { text: 'Monthly sales' },
  xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr'] },
  yAxis: { title: { text: 'Sales' } },
  series: [
    { name: 'Online', data: [12, 18, 24, 31] },
    { name: 'Retail', data: [8, 13, 19, 22] }
  ]
};

pieOptions = {
  chart: { type: 'pie' },
  title: { text: 'Share by channel' },
  series: [
    {
      name: 'Share',
      data: [
        ['Organic', 42],
        ['Paid', 28],
        ['Referral', 18],
        ['Direct', 12]
      ]
    }
  ]
};
\`\`\`

## Dynamic Updates

For dashboards and live screens, keep the native chart instance from \`(create)\`
and update series data directly. This avoids recreating the full chart surface
on every frame.

\`\`\`ts
updateCandles(ohlcData: any[], volumeData: any[]) {
  if (!this.chart) {
    return;
  }

  this.chart.series[0].setData(ohlcData, false, false);
  this.chart.series[1].setData(volumeData, false, false);
  this.chart.redraw();
}
\`\`\`

## API Surface

### \`<chart>\` inputs

| Input | Type | Description |
| :--- | :--- | :--- |
| \`options\` | \`any\` | Native Highcharts options object. |
| \`type\` | \`string\` | Highcharts constructor name. Defaults to \`Chart\`. |

### \`<chart>\` outputs

| Output | Description |
| :--- | :--- |
| \`create\` | Emits the native chart instance after creation. |
| \`load\`, \`redraw\`, \`selection\`, \`click\` | Chart-level Highcharts events. |
| \`addSeries\`, \`afterPrint\`, \`beforePrint\`, \`drilldown\`, \`drillup\` | Additional chart lifecycle and interaction events. |

### Directive outputs

| Directive | Events |
| :--- | :--- |
| \`<series>\` | Series event outputs such as click and legend interaction. |
| \`<point>\` | Point event outputs such as click, select, and mouse interaction. |
| \`<xAxis>\`, \`<yAxis>\` | Axis event outputs such as \`setExtremes\` and \`afterSetExtremes\`. |
| \`<zAxis>\` | 3D / z-axis event outputs. |
| \`<colorAxis>\` | Heatmap, map, and color-scale event outputs. |

## Wrapper Capabilities

| Capability | Example |
| :--- | :--- |
| Options API | \`<chart [options]="options">\` |
| Constructor switch | \`<chart [type]="'StockChart'" [options]="options">\` |
| Directive events | \`<series>\`, \`<point>\`, \`<xAxis>\`, \`<yAxis>\`, \`<zAxis>\`, \`<colorAxis>\` |
| Highcharts modules | ${getHighchartsModuleList(major)} |

## License

MIT
`;
}

function createPackageJson(major, version) {
  return {
    name: packageName,
    version,
    description: `Angular ${major} wrapper components for Highcharts, Highstock, Highmaps, zAxis, and colorAxis integrations`,
    main: major >= 9 ? 'dist/index.js' : 'index.js',
    ...(major >= 9 ? {
      module: 'dist/index.js',
      es2015: 'dist/index.js'
    } : {}),
    typings: major >= 9 ? 'dist/index.d.ts' : 'index.d.ts',
    types: major >= 9 ? 'dist/index.d.ts' : 'index.d.ts',
    files: major >= 9
      ? ['dist', 'index.js', 'index.d.ts', 'README.md', 'LICENSE']
      : ['*.js', '*.d.ts', 'README.md', 'LICENSE'],
    sideEffects: false,
    repository: {
      type: 'git',
      url: 'git+https://github.com/alexandroit/angular-highcharts.git'
    },
    publishConfig: {
      access: 'public'
    },
    keywords: [
      'angular',
      `angular${major}`,
      'angular-library',
      'typescript',
      'charts',
      'highcharts',
      'highcharts-angular',
      'chart-wrapper',
      'highstock',
      'highmaps',
      'coloraxis',
      'zaxis',
      'accessibility-focused',
      'aria-tested',
      'keyboard-tested',
      'a11y',
      'maintained',
      'stackline'
    ],
    author: 'Alexandro Paixao Marques',
    license: 'MIT',
    bugs: {
      url: 'https://github.com/alexandroit/angular-highcharts/issues'
    },
    homepage: 'https://alexandro.net/docs/angular/angular-highcharts/',
    peerDependencies: {
      '@angular/core': getPeerRange(major),
      highcharts: getHighchartsPeerRange(major)
    }
  };
}

function createTsConfig(tempSrcDir, packageDir, major) {
  const tsConfig = {
    compilerOptions: {
      emitDecoratorMetadata: true,
      experimentalDecorators: true,
      target: major >= 9 ? 'es2015' : 'es5',
      lib: ['dom', 'es2015'],
      module: major >= 9 ? 'es2015' : 'commonjs',
      moduleResolution: 'node',
      skipLibCheck: true,
      removeComments: true,
      sourceMap: false,
      declaration: true,
      outDir: path.join(packageDir, 'dist'),
      rootDir: tempSrcDir,
      types: []
    },
    include: [path.join(tempSrcDir, '**/*.ts')]
  };

  const tsConfigPath = path.join(packageDir, 'tsconfig.stackline.json');
  writeJson(tsConfigPath, tsConfig);
  return tsConfigPath;
}

function patchLegacyDeclarations(packageDir, major) {
  if (major > 8) {
    return;
  }

  const publicApi = path.join(packageDir, 'dist', 'public_api.d.ts');
  if (fs.existsSync(publicApi)) {
    const source = fs.readFileSync(publicApi, 'utf8');
    fs.writeFileSync(publicApi, source.replace(/ModuleWithProviders<ChartModule>/g, 'ModuleWithProviders'));
  }
}

function coreRef(name) {
  return {
    __symbolic: 'reference',
    module: '@angular/core',
    name
  };
}

function localRef(moduleName, name) {
  return {
    __symbolic: 'reference',
    module: `./${moduleName}`,
    name
  };
}

function selfRef(name) {
  return {
    __symbolic: 'reference',
    name
  };
}

function symbolicCall(expression, args = []) {
  return {
    __symbolic: 'call',
    expression,
    arguments: args
  };
}

function decorator(name, args = []) {
  return symbolicCall(coreRef(name), args);
}

function outputMember() {
  return [{
    __symbolic: 'property',
    decorators: [decorator('Output')]
  }];
}

function inputMember() {
  return [{
    __symbolic: 'property',
    decorators: [decorator('Input')]
  }];
}

function contentChildMember(moduleName, name) {
  return [{
    __symbolic: 'property',
    decorators: [decorator('ContentChild', [localRef(moduleName, name)])]
  }];
}

function methodMember() {
  return [{ __symbolic: 'method' }];
}

function legacyMetadata(metadata, extras = {}) {
  return [3, 1].map((version) => ({
    __symbolic: 'module',
    version,
    metadata,
    ...extras
  }));
}

function writeMetadata(packageDir, relativeFileName, metadata, extras) {
  const filePath = path.join(packageDir, 'dist', `${relativeFileName}.metadata.json`);
  fs.writeFileSync(filePath, JSON.stringify(legacyMetadata(metadata, extras)));
}

function writeLegacyMetadataFiles(packageDir) {
  const axisOutputs = ['afterBreaks', 'afterSetExtremes', 'pointBreak', 'pointInBreak', 'setExtremes'];
  const chartDirectives = [
    localRef('ChartComponent', 'ChartComponent'),
    localRef('ChartSeriesComponent', 'ChartSeriesComponent'),
    localRef('ChartPointComponent', 'ChartPointComponent'),
    localRef('ChartXAxisComponent', 'ChartXAxisComponent'),
    localRef('ChartYAxisComponent', 'ChartYAxisComponent'),
    localRef('ChartZAxisComponent', 'ChartZAxisComponent'),
    localRef('ChartColorAxisComponent', 'ChartColorAxisComponent')
  ];

  writeMetadata(packageDir, 'ChartComponent', {
    ChartComponent: {
      __symbolic: 'class',
      decorators: [
        decorator('Component', [{
          selector: 'chart',
          template: '&nbsp;',
          providers: [localRef('HighchartsService', 'HighchartsService')]
        }])
      ],
      members: {
        series: contentChildMember('ChartSeriesComponent', 'ChartSeriesComponent'),
        xAxis: contentChildMember('ChartXAxisComponent', 'ChartXAxisComponent'),
        yAxis: contentChildMember('ChartYAxisComponent', 'ChartYAxisComponent'),
        zAxis: contentChildMember('ChartZAxisComponent', 'ChartZAxisComponent'),
        colorAxis: contentChildMember('ChartColorAxisComponent', 'ChartColorAxisComponent'),
        create: outputMember(),
        click: outputMember(),
        addSeries: outputMember(),
        afterPrint: outputMember(),
        beforePrint: outputMember(),
        drilldown: outputMember(),
        drillup: outputMember(),
        load: outputMember(),
        redraw: outputMember(),
        selection: outputMember(),
        type: inputMember(),
        options: inputMember(),
        init: methodMember(),
        destroyChart: methodMember(),
        ngAfterViewInit: methodMember(),
        ngOnChanges: methodMember(),
        ngOnDestroy: methodMember(),
        __ctor__: [{
          __symbolic: 'constructor',
          parameters: [
            coreRef('ElementRef'),
            localRef('HighchartsService', 'HighchartsService')
          ]
        }]
      }
    }
  });

  writeMetadata(packageDir, 'ChartSeriesComponent', {
    ChartSeriesComponent: {
      __symbolic: 'class',
      decorators: [decorator('Directive', [{ selector: 'series' }])],
      members: {
        point: contentChildMember('ChartPointComponent', 'ChartPointComponent'),
        click: outputMember(),
        afterAnimate: outputMember(),
        checkboxClick: outputMember(),
        hide: outputMember(),
        legendItemClick: outputMember(),
        mouseOver: outputMember(),
        mouseOut: outputMember(),
        show: outputMember()
      }
    }
  });

  writeMetadata(packageDir, 'ChartPointComponent', {
    ChartPointComponent: {
      __symbolic: 'class',
      decorators: [decorator('Directive', [{ selector: 'point' }])],
      members: ['click', 'remove', 'select', 'unselect', 'mouseOver', 'mouseOut', 'update']
        .reduce((members, name) => ({ ...members, [name]: outputMember() }), {})
    }
  });

  [
    ['ChartXAxisComponent', 'xAxis'],
    ['ChartYAxisComponent', 'yAxis'],
    ['ChartZAxisComponent', 'zAxis'],
    ['ChartColorAxisComponent', 'colorAxis']
  ].forEach(([className, selector]) => {
    writeMetadata(packageDir, className, {
      [className]: {
        __symbolic: 'class',
        decorators: [decorator('Directive', [{ selector }])],
        members: axisOutputs.reduce((members, name) => ({ ...members, [name]: outputMember() }), {})
      }
    });
  });

  writeMetadata(packageDir, 'HighchartsService', {
    HighchartsStatic: {
      __symbolic: 'class',
      decorators: [decorator('Injectable')]
    },
    HighchartsService: {
      __symbolic: 'class',
      decorators: [decorator('Injectable')],
      members: {
        __ctor__: [{
          __symbolic: 'constructor',
          parameters: [selfRef('HighchartsStatic')]
        }],
        getHighchartsStatic: methodMember()
      }
    }
  });

  writeMetadata(packageDir, 'ChartModule', {
    ChartModule: {
      __symbolic: 'class',
      decorators: [
        decorator('NgModule', [{
          declarations: chartDirectives,
          exports: chartDirectives
        }])
      ]
    }
  });

  writeMetadata(packageDir, 'public_api', {
    ChartModule: localRef('ChartModule', 'ChartModule'),
    ChartComponent: localRef('ChartComponent', 'ChartComponent'),
    ChartSeriesComponent: localRef('ChartSeriesComponent', 'ChartSeriesComponent'),
    ChartPointComponent: localRef('ChartPointComponent', 'ChartPointComponent'),
    ChartXAxisComponent: localRef('ChartXAxisComponent', 'ChartXAxisComponent'),
    ChartYAxisComponent: localRef('ChartYAxisComponent', 'ChartYAxisComponent'),
    ChartZAxisComponent: localRef('ChartZAxisComponent', 'ChartZAxisComponent'),
    ChartColorAxisComponent: localRef('ChartColorAxisComponent', 'ChartColorAxisComponent'),
    HighchartsStatic: localRef('HighchartsService', 'HighchartsStatic'),
    HighchartsService: localRef('HighchartsService', 'HighchartsService')
  });

  writeMetadata(packageDir, 'index', {}, {
    exports: [{ from: './public_api' }]
  });

  writeMetadata(packageDir, 'ChartEvent', {
    ChartEvent: {
      __symbolic: 'class',
      members: {
        __ctor__: [{
          __symbolic: 'constructor',
          parameters: [null, null]
        }]
      }
    }
  });

  ['createBaseOpts', 'deepAssign', 'initChart'].forEach((functionName) => {
    writeMetadata(packageDir, functionName, {
      [functionName]: { __symbolic: 'function' }
    });
  });
}

function prepareLinePackage(major) {
  const version = getPackageVersion(major);
  const packageDir = path.join(outRoot, `angular-${major}`);
  const tempSrcDir = path.join(packageDir, '.src');

  ensureCleanDir(packageDir);
  copySourcesForLine(tempSrcDir, major);

  const tsConfigPath = createTsConfig(tempSrcDir, packageDir, major);
  execFileSync('npx', ['tsc', '-p', tsConfigPath, '--pretty', 'false'], {
    cwd: rootDir,
    stdio: 'inherit'
  });

  patchLegacyDeclarations(packageDir, major);

  if (major <= 9) {
    writeLegacyMetadataFiles(packageDir);
  }

  fs.rmSync(tempSrcDir, { recursive: true, force: true });
  fs.rmSync(tsConfigPath, { force: true });

  fs.writeFileSync(path.join(packageDir, 'index.js'), "module.exports = require('./dist/index');\n");
  fs.writeFileSync(path.join(packageDir, 'index.d.ts'), "export * from './dist/index';\n");
  fs.writeFileSync(path.join(packageDir, 'README.md'), createReadme(major, version));
  copyFile(path.join(rootDir, 'LICENSE'), path.join(packageDir, 'LICENSE'));
  writeJson(path.join(packageDir, 'package.json'), createPackageJson(major, version));

  return { major, version, packageDir };
}

function runNpm(args, cwd) {
  const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  execFileSync(npmCommand, args, {
    cwd,
    stdio: 'inherit'
  });
}

function publishLine(line, registry, setLatest) {
  const tag = `angular-${line.major}`;
  const registryArgs = [
    `--registry=${registry}`,
    `--@stackline:registry=${registry}`
  ];

  runNpm([
    'publish',
    '--access',
    'public',
    '--tag',
    tag,
    ...registryArgs
  ], line.packageDir);

  if (setLatest) {
    runNpm([
      'dist-tag',
      'add',
      `${packageName}@${line.version}`,
      'latest',
      ...registryArgs
    ], rootDir);
  }
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  fs.mkdirSync(outRoot, { recursive: true });

  const prepared = [];

  for (const major of options.lines) {
    const line = prepareLinePackage(major);
    prepared.push(line);
    console.log(`Prepared Angular ${line.major} package ${packageName}@${line.version}`);

    if (options.publish) {
      publishLine(line, options.registry, options.lines.length === 1 || line.major === 21);
      console.log(`Published Angular ${line.major} package ${packageName}@${line.version} to ${options.registry}`);
    }
  }

  const summary = prepared.map((line) => ({
    angular: line.major,
    version: line.version,
    packageDir: path.relative(rootDir, line.packageDir)
  }));

  console.log(JSON.stringify(summary, null, 2));
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
