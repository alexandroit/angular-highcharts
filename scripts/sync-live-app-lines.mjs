import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), '..');
const testsRoot = '/storage/data/github/tests/angular-highcharts';
const templateAppDir = path.join(testsRoot, 'angular-9', 'src', 'app');
const packageRoot = path.join(rootDir, '.stackline-build', 'angular-highcharts-lines');

const lineConfig = {
  10: { version: '10.0.0', highcharts: '10.3.3', cli: '10.2.4', angular: '10.2.5', port: 4420 },
  11: { version: '11.0.0', highcharts: '10.3.3', cli: '11.2.19', angular: '11.2.14', port: 4421 },
  12: { version: '12.0.0', highcharts: '12.6.0', cli: '12.2.18', angular: '12.2.17', port: 4422, modernHighcharts: true },
  13: { version: '13.0.0', highcharts: '12.6.0', cli: '13.3.11', angular: '13.4.0', port: 4423, modernHighcharts: true },
  14: { version: '14.0.0', highcharts: '12.6.0', cli: '14.2.13', angular: '14.3.0', port: 4424, modernHighcharts: true },
  15: { version: '15.0.0', highcharts: '12.6.0', cli: '15.2.11', angular: '15.2.10', port: 4425, modernHighcharts: true },
  16: { version: '16.0.0', highcharts: '12.6.0', cli: '16.2.16', angular: '16.2.12', port: 4426, modernHighcharts: true },
  17: { version: '17.0.0', highcharts: '12.6.0', cli: '17.3.17', angular: '17.3.12', port: 4427, modernHighcharts: true },
  18: { version: '18.0.0', highcharts: '12.6.0', cli: '18.2.21', angular: '18.2.14', port: 4428, modernHighcharts: true },
  19: { version: '19.0.0', highcharts: '12.6.0', cli: '19.2.23', angular: '19.2.20', port: 4429, modernHighcharts: true },
  20: { version: '20.0.0', highcharts: '12.6.0', cli: '20.3.22', angular: '20.3.18', port: 4430, modernHighcharts: true },
  21: { version: '21.0.2', highcharts: '12.6.0', cli: '21.2.6', angular: '21.2.7', port: 4431, modernHighcharts: true }
};

function parseArgs(argv) {
  let lines = Object.keys(lineConfig).map(Number);

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === '--lines') {
      lines = argv[index + 1].split(',').map((value) => Number(value.trim()));
      index += 1;
      continue;
    }

    if (arg === '--line') {
      lines = [Number(argv[index + 1])];
      index += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  lines.forEach((line) => {
    if (!lineConfig[line]) {
      throw new Error(`Unsupported Angular line: ${line}`);
    }
  });

  return lines;
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

function syncDirectory(source, target) {
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(path.dirname(target), { recursive: true });
  execFileSync('rsync', [
    '-a',
    '--exclude', 'node_modules',
    '--exclude', 'dist',
    '--exclude', '.angular',
    `${source}/`,
    `${target}/`
  ], { stdio: 'inherit' });
}

function packLinePackage(major) {
  const packageDir = path.join(packageRoot, `angular-${major}`);
  const packDir = path.join('/tmp', 'stackline-angular-highcharts-line-packs', `angular-${major}`);

  fs.rmSync(packDir, { recursive: true, force: true });
  fs.mkdirSync(packDir, { recursive: true });

  const tarball = execFileSync('npm', ['pack', '--silent'], {
    cwd: packageDir,
    encoding: 'utf8'
  }).trim().split('\n').pop();

  const packedFile = path.join(packageDir, tarball);
  const targetFile = path.join(packDir, tarball);
  fs.copyFileSync(packedFile, targetFile);
  fs.rmSync(packedFile, { force: true });

  return targetFile;
}

function createLineAppModule(source, includeModernModules) {
  let code = source
    .replace("import { ChartModule, HighchartsStatic } from '@stackline/angular-highcharts';", "import { ChartModule } from '@stackline/angular-highcharts';")
    .replace("    ChartModule\n  ],\n  providers: [\n    { provide: HighchartsStatic, useFactory: highchartsFactory }\n  ],", "    ChartModule.forRoot(highchartsFactory())\n  ],");

  code = code
    .replace("const NoData = require('highcharts/modules/no-data-to-display');", "const Accessibility = require('highcharts/modules/accessibility');\nconst NoData = require('highcharts/modules/no-data-to-display');")
    .replace('  NoData(Highcharts);', '  Accessibility(Highcharts);\n  NoData(Highcharts);');

  if (!includeModernModules) {
    return code;
  }

  const modernRequires = [
    "const Flowmap = require('highcharts/modules/flowmap');",
    "const GeoHeatmap = require('highcharts/modules/geoheatmap');",
    "const Pictorial = require('highcharts/modules/pictorial');",
    "const TiledWebMap = require('highcharts/modules/tiledwebmap');",
    "const Contour = require('highcharts/modules/contour');",
    "const PointAndFigure = require('highcharts/modules/pointandfigure');",
    "const Renko = require('highcharts/modules/renko');"
  ].join('\n');

  const modernCalls = [
    '  Flowmap(Highcharts);',
    '  GeoHeatmap(Highcharts);',
    '  Pictorial(Highcharts);',
    '  TiledWebMap(Highcharts);',
    '  Contour(Highcharts);',
    '  PointAndFigure(Highcharts);',
    '  Renko(Highcharts);'
  ].join('\n');

  code = code
    .replace("const NoData = require('highcharts/modules/no-data-to-display');", `${modernRequires}\nconst NoData = require('highcharts/modules/no-data-to-display');`)
    .replace('  NoData(Highcharts);', `${modernCalls}\n  NoData(Highcharts);`);

  const safeModuleInstaller = [
    'function installHighchartsModule(moduleRef: any) {',
    '  const factory = moduleRef && (moduleRef.default || moduleRef);',
    '',
    "  if (typeof factory === 'function') {",
    '    factory(Highcharts);',
    '  }',
    '}'
  ].join('\n');

  return code
    .replace('\nexport function highchartsFactory() {', `\n${safeModuleInstaller}\n\nexport function highchartsFactory() {`)
    .replace(/^  ([A-Za-z0-9_]+)\(Highcharts\);$/gm, '  installHighchartsModule($1);');
}

function createLineComponent(source, major, config) {
  let code = source
    .replace(/Angular CLI 9\.1\.15 \/ Angular 9\.1\.13 runtime/g, `Angular CLI ${config.cli} / Angular ${config.angular} runtime`)
    .replace(/@stackline\/angular-highcharts 9\.0\.0/g, `@stackline/angular-highcharts ${config.version}`)
    .replace(/Angular 9/g, `Angular ${major}`)
    .replace(/Angular 9 /g, `Angular ${major} `)
    .replace(/Angular 9\./g, `Angular ${major}.`)
    .replace(/Angular 9 live test/g, `Angular ${major} live test`)
    .replace(/Angular 9 input binding/g, `Angular ${major} input binding`)
    .replace(/Project generated with the Angular 9 CLI blueprint/g, `Project generated with the Angular ${major} CLI blueprint`);

  code = code.replace(
    "    var path = window.location && window.location.pathname ? window.location.pathname : '/';\n    this.viewMode = path.indexOf('/static') >= 0 ? 'static' : 'dynamic';",
    "    var path = window.location && window.location.pathname ? window.location.pathname : '/';\n    var search = window.location && window.location.search ? window.location.search : '';\n    this.viewMode = path.indexOf('/static') >= 0 || search.indexOf('view=static') >= 0 ? 'static' : 'dynamic';"
  );

  code = code.replace(
    `  private syncDynamicSeries(chart: any, seriesOptions: any[]) {
    var i: number;

    for (i = chart.series.length - 1; i >= seriesOptions.length; i--) {
      chart.series[i].remove(false);
    }

    for (i = 0; i < seriesOptions.length; i++) {
      var nextSeries = seriesOptions[i] || {};
      var currentSeries = chart.series[i];

      if (!currentSeries) {
        chart.addSeries(nextSeries, false, false);
        continue;
      }

      if (nextSeries.name && currentSeries.name !== nextSeries.name && currentSeries.update) {
        currentSeries.update({ name: nextSeries.name }, false);
      }

      if (currentSeries.setData) {
        currentSeries.setData(nextSeries.data || [], false, false);
      }
    }
  }`,
    `  private syncDynamicSeries(chart: any, seriesOptions: any[]) {
    var i: number;

    for (i = chart.series.length - 1; i >= seriesOptions.length; i--) {
      chart.series[i].remove(false);
    }

    for (i = 0; i < seriesOptions.length; i++) {
      var nextSeries = seriesOptions[i] || {};
      var currentSeries = chart.series[i];

      if (!currentSeries) {
        chart.addSeries(nextSeries, false, false);
        continue;
      }

      if (nextSeries.name && currentSeries.name !== nextSeries.name && currentSeries.update) {
        currentSeries.update({ name: nextSeries.name }, false);
      }

      this.updateDynamicSeriesData(chart, currentSeries, nextSeries);
    }
  }

  private updateDynamicSeriesData(chart: any, currentSeries: any, nextSeries: any) {
    var nextType = String(nextSeries.type || currentSeries.type || '').toLowerCase();

    if (this.shouldRebuildDynamicSeries(nextType)) {
      this.replaceDynamicSeries(chart, currentSeries, nextSeries);
      return;
    }

    if (currentSeries.setData) {
      try {
        currentSeries.setData(nextSeries.data || [], false, false);
        return;
      } catch (error) {
        this.replaceDynamicSeries(chart, currentSeries, nextSeries);
        return;
      }
    }

    if (currentSeries.update) {
      currentSeries.update(nextSeries, false);
    }
  }

  private shouldRebuildDynamicSeries(seriesType: string) {
    return seriesType === 'renko' || seriesType === 'pointandfigure';
  }

  private replaceDynamicSeries(chart: any, currentSeries: any, nextSeries: any) {
    if (currentSeries.update) {
      try {
        currentSeries.update(nextSeries, false);
        return;
      } catch (error) {
        // Some Highcharts derived series cannot be safely mutated in place.
      }
    }

    if (currentSeries.remove && chart.addSeries) {
      currentSeries.remove(false);
      chart.addSeries(nextSeries, false, false);
    }
  }`
  );

  if (!config.modernHighcharts) {
    return code;
  }

  code = code.replace(
    '    this.makeTreegraph()\n  ].map((example: ChartExample) => this.withTutorial(example));',
    [
      '    this.makeTreegraph(),',
      '    this.makeFlowmap(),',
      '    this.makeGeoHeatmap(),',
      '    this.makePictorial(),',
      '    this.makeContour(),',
      '    this.makeRenko(),',
      '    this.makePointAndFigure()',
      '  ].map((example: ChartExample) => this.withTutorial(example));'
    ].join('\n')
  );

  code = code.replace(
    "      this.makeDynamicExample('Live market treegraph', 'Treegraph grouping tracked Binance symbols by positive and negative movement.', 'liveTreegraphOptions', this.createLiveTreegraphOptions())",
    [
      "      this.makeDynamicExample('Live market flowmap', 'Flow links from a liquidity hub into tracked market points.', 'liveFlowmapOptions', this.createLiveFlowmapOptions()),",
      "      this.makeDynamicExample('Live geo heatmap', 'Geo heatmap cells from live market movement and liquidity.', 'liveGeoHeatmapOptions', this.createLiveGeoHeatmapOptions()),",
      "      this.makeDynamicExample('Live market pictorial', 'Pictorial bars using live quote volume.', 'livePictorialOptions', this.createLivePictorialOptions()),",
      "      this.makeDynamicExample('Live market contour', 'Contour surface from change, liquidity and volatility.', 'liveContourOptions', this.createLiveContourOptions()),",
      "      this.makeDynamicExample('Live Renko price bricks', 'Renko StockChart generated from the selected candle stream.', 'liveRenkoOptions', this.createLiveRenkoOptions(), 'StockChart'),",
      "      this.makeDynamicExample('Live point and figure', 'Point and figure StockChart generated from live candle closes.', 'livePointAndFigureOptions', this.createLivePointAndFigureOptions(), 'StockChart'),",
      "      this.makeDynamicExample('Live market treegraph', 'Treegraph grouping tracked Binance symbols by positive and negative movement.', 'liveTreegraphOptions', this.createLiveTreegraphOptions())"
    ].join('\n')
  );

  code = code.replace(
    "      case 'liveTreegraphOptions':\n        return this.createLiveTreegraphOptions();",
    [
      "      case 'liveFlowmapOptions':",
      '        return this.createLiveFlowmapOptions();',
      "      case 'liveGeoHeatmapOptions':",
      '        return this.createLiveGeoHeatmapOptions();',
      "      case 'livePictorialOptions':",
      '        return this.createLivePictorialOptions();',
      "      case 'liveContourOptions':",
      '        return this.createLiveContourOptions();',
      "      case 'liveRenkoOptions':",
      '        return this.createLiveRenkoOptions();',
      "      case 'livePointAndFigureOptions':",
      '        return this.createLivePointAndFigureOptions();',
      "      case 'liveTreegraphOptions':",
      '        return this.createLiveTreegraphOptions();'
    ].join('\n')
  );

  return code.replace('  onDynamicChartCreate(example: ChartExample, chart: any) {', `${modernChartMethods()}\n\n  onDynamicChartCreate(example: ChartExample, chart: any) {`);
}

function createLineComponentHtml(source, major, config) {
  let html = source
    .replace(/Angular CLI 9\.1\.15 \/ Angular 9\.1\.13 runtime/g, `Angular CLI ${config.cli} / Angular ${config.angular} runtime`)
    .replace(/@stackline\/angular-highcharts 9\.0\.0/g, `@stackline/angular-highcharts ${config.version}`)
    .replace(/Angular 9/g, `Angular ${major}`)
    .replace(/Project generated with the Angular 9 CLI blueprint/g, `Project generated with the Angular ${major} CLI blueprint`);

  return html;
}

function modernChartMethods() {
  return `  private modernMarketPoints() {
    var coords = [
      { lon: -46.6333, lat: -23.5505 },
      { lon: -74.0060, lat: 40.7128 },
      { lon: -0.1276, lat: 51.5072 },
      { lon: 2.3522, lat: 48.8566 },
      { lon: -99.1332, lat: 19.4326 },
      { lon: -70.6693, lat: -33.4489 },
      { lon: -58.3816, lat: -34.6037 },
      { lon: -79.3832, lat: 43.6532 }
    ];
    var rows = this.marketRows();
    var points: any[] = [];

    for (var i = 0; i < rows.length; i++) {
      points.push({
        id: rows[i].symbol,
        name: rows[i].symbol.replace('USDT', ''),
        lon: coords[i % coords.length].lon,
        lat: coords[i % coords.length].lat,
        value: rows[i].changePercent,
        quoteVolume: rows[i].quoteVolume
      });
    }

    return points;
  }

  private createLiveFlowmapOptions() {
    var points = this.modernMarketPoints();
    var data: any[] = [];
    var hub = { id: 'STACKLINE-HUB', name: 'Stackline liquidity hub', lon: -38.5, lat: 8.5 };

    for (var i = 0; i < points.length; i++) {
      data.push({
        from: hub.id,
        to: points[i].id,
        weight: Math.max(1, Math.round(points[i].quoteVolume / 250000000)),
        color: points[i].value >= 0 ? '#02c076' : '#f6465d'
      });
    }

    return {
      chart: { height: 380, map: null },
      title: { text: 'Live market flowmap' },
      subtitle: { text: 'Flow links weighted by live quote volume' },
      mapView: {
        projection: { name: 'WebMercator' },
        center: [-42, 18],
        zoom: 1.35
      },
      plotOptions: { series: { animation: false } },
      series: [
        {
          type: 'mappoint',
          name: 'Market points',
          data: [hub].concat(points),
          marker: { radius: 6 }
        },
        {
          type: 'flowmap',
          name: 'Liquidity flow',
          data: data,
          markerEnd: { width: 8, height: 8 },
          opacity: 0.72
        }
      ]
    };
  }

  private createLiveGeoHeatmapOptions() {
    var points = this.modernMarketPoints();
    var data: any[] = [];

    for (var i = 0; i < points.length; i++) {
      var lon = points[i].lon;
      var lat = points[i].lat;
      data.push({
        name: points[i].name,
        value: points[i].value,
        geometry: {
          type: 'Polygon',
          coordinates: [[
            [lon - 5, lat - 4],
            [lon + 5, lat - 4],
            [lon + 5, lat + 4],
            [lon - 5, lat + 4],
            [lon - 5, lat - 4]
          ]]
        }
      });
    }

    return {
      chart: { height: 380, map: null },
      title: { text: 'Live geo heatmap' },
      subtitle: { text: 'Market movement rendered as geographic heat cells' },
      mapView: {
        projection: { name: 'WebMercator' },
        center: [-42, 18],
        zoom: 1.25
      },
      colorAxis: {
        min: -5,
        max: 5,
        stops: [
          [0, '#f6465d'],
          [0.5, '#eef2f7'],
          [1, '#02c076']
        ]
      },
      plotOptions: { series: { animation: false } },
      series: [{ type: 'geoheatmap', name: '24h change', data: data }]
    };
  }

  private createLivePictorialOptions() {
    var rows = this.marketRows().slice(0, 6);
    var categories: string[] = [];
    var data: any[] = [];

    for (var i = 0; i < rows.length; i++) {
      categories.push(rows[i].symbol.replace('USDT', ''));
      data.push({
        y: Math.max(8, rows[i].quoteVolume / 100000000),
        color: rows[i].changePercent >= 0 ? '#02c076' : '#f6465d'
      });
    }

    return {
      chart: { type: 'pictorial', height: 380 },
      title: { text: 'Live market pictorial' },
      subtitle: { text: 'Quote volume drawn through a reusable SVG path' },
      xAxis: { categories: categories },
      yAxis: { title: { text: 'Quote volume score' }, max: 12 },
      plotOptions: {
        pictorial: {
          animation: false,
          stacking: 'normal',
          paths: [{
            definition: 'M 50 0 C 78 0 100 22 100 50 C 100 78 78 100 50 100 C 22 100 0 78 0 50 C 0 22 22 0 50 0 Z',
            max: 12
          }]
        }
      },
      series: [{ type: 'pictorial', name: 'Quote volume', data: data }]
    };
  }

  private createLiveTiledWebMapOptions() {
    var points = this.modernMarketPoints();
    var markers: any[] = [];

    for (var i = 0; i < points.length; i++) {
      markers.push({
        name: points[i].name,
        lon: points[i].lon,
        lat: points[i].lat,
        z: Math.max(2, Math.abs(points[i].value) * 3),
        color: points[i].value >= 0 ? '#02c076' : '#f6465d'
      });
    }

    return {
      chart: { height: 380, map: null },
      title: { text: 'Live tiled web map' },
      subtitle: { text: 'OpenStreetMap tiles with live market markers' },
      mapView: {
        projection: { name: 'WebMercator' },
        center: [-42, 18],
        zoom: 1.25
      },
      plotOptions: { series: { animation: false } },
      series: [
        {
          type: 'tiledwebmap',
          name: 'OpenStreetMap',
          provider: { type: 'OpenStreetMap' }
        },
        {
          type: 'mapbubble',
          name: 'Market movement',
          data: markers,
          minSize: 8,
          maxSize: 28
        }
      ]
    };
  }

  private createLiveContourOptions() {
    var rows = this.marketRows();
    var data: any[] = [];
    var metrics = ['Change', 'Range', 'Volume', 'Trades', 'Price'];

    for (var x = 0; x < rows.length; x++) {
      var row = rows[x];
      var values = [
        row.changePercent,
        (row.high - row.low) / Math.max(row.open, 1) * 100,
        row.quoteVolume / 1000000000,
        (row.trades || 0) / 1000000,
        row.price / Math.max(row.open, 1) - 1
      ];

      for (var y = 0; y < values.length; y++) {
        data.push([x, y, parseFloat(values[y].toFixed(3))]);
      }
    }

    return {
      chart: { type: 'contour', height: 380 },
      title: { text: 'Live market contour' },
      subtitle: { text: 'Surface built from live market metrics' },
      xAxis: { categories: rows.map(function (row: any) { return row.symbol.replace('USDT', ''); }) },
      yAxis: { categories: metrics, title: { text: null } },
      colorAxis: {
        stops: [
          [0, '#f6465d'],
          [0.5, '#eef2f7'],
          [1, '#02c076']
        ]
      },
      plotOptions: { series: { animation: false, turboThreshold: 0 } },
      series: [{ type: 'contour', name: 'Market surface', data: data }]
    };
  }

  private closePriceSeries() {
    var source = this.binanceOhlcData.length ? this.binanceOhlcData : [
      [Date.now() - 7000, 620, 628, 616, 624],
      [Date.now() - 6000, 624, 630, 621, 629],
      [Date.now() - 5000, 629, 631, 625, 626],
      [Date.now() - 4000, 626, 636, 625, 634],
      [Date.now() - 3000, 634, 639, 631, 637],
      [Date.now() - 2000, 637, 641, 635, 640],
      [Date.now() - 1000, 640, 642, 633, 635]
    ];
    var data: any[] = [];
    var firstClose = source[0][4];
    var hasBoxMovement = false;

    for (var i = 0; i < source.length; i++) {
      if (Math.abs(source[i][4] - firstClose) >= 0.01) {
        hasBoxMovement = true;
      }
      data.push({ x: source[i][0], y: source[i][4] });
    }

    if (!hasBoxMovement && data.length > 2) {
      data[1].y = firstClose + 0.02;
      data[2].y = firstClose - 0.02;
    }

    return data;
  }

  private createLiveRenkoOptions() {
    return {
      chart: { height: 380 },
      rangeSelector: { enabled: false },
      navigator: { enabled: false },
      scrollbar: { enabled: false },
      title: { text: 'Live Renko price bricks' },
      subtitle: { text: 'Calculated from selected candle closes' },
      plotOptions: { series: { animation: false } },
      series: [{
        type: 'renko',
        name: this.binanceSymbol + ' Renko',
        data: this.closePriceSeries(),
        boxSize: 0.01
      }]
    };
  }

  private createLivePointAndFigureOptions() {
    return {
      chart: { height: 380 },
      rangeSelector: { enabled: false },
      navigator: { enabled: false },
      scrollbar: { enabled: false },
      title: { text: 'Live point and figure' },
      subtitle: { text: 'Calculated from selected candle closes' },
      plotOptions: { series: { animation: false } },
      series: [{
        type: 'pointandfigure',
        name: this.binanceSymbol + ' P&F',
        data: this.closePriceSeries(),
        boxSize: 0.01,
        reversalAmount: 1
      }]
    };
  }

  private makeFlowmap(): ChartExample {
    return {
      title: 'Flowmap',
      description: 'Highcharts 11+ flow links between map points.',
      options: this.createLiveFlowmapOptions(),
      html: '<chart [options]="flowmapOptions"></chart>'
    };
  }

  private makeGeoHeatmap(): ChartExample {
    return {
      title: 'Geo heatmap',
      description: 'Highcharts 11+ geographic heat cells.',
      options: this.createLiveGeoHeatmapOptions(),
      html: '<chart [options]="geoHeatmapOptions"></chart>'
    };
  }

  private makePictorial(): ChartExample {
    return {
      title: 'Pictorial chart',
      description: 'Highcharts 11+ pictorial series using SVG path definitions.',
      options: this.createLivePictorialOptions(),
      html: '<chart [options]="pictorialOptions"></chart>'
    };
  }

  private makeTiledWebMap(): ChartExample {
    return {
      title: 'Tiled web map',
      description: 'Highcharts 11+ tiled map layer with market markers.',
      options: this.createLiveTiledWebMapOptions(),
      html: '<chart [options]="tiledWebMapOptions"></chart>'
    };
  }

  private makeContour(): ChartExample {
    return {
      title: 'Contour chart',
      description: 'Highcharts 12+ contour series from a metric surface.',
      options: this.createLiveContourOptions(),
      html: '<chart [options]="contourOptions"></chart>'
    };
  }

  private makeRenko(): ChartExample {
    return {
      title: 'Renko chart',
      description: 'Highcharts 12+ Renko StockChart price bricks.',
      constructorType: 'StockChart',
      options: this.createLiveRenkoOptions(),
      html: '<chart [type]="\\'StockChart\\'" [options]="renkoOptions"></chart>'
    };
  }

  private makePointAndFigure(): ChartExample {
    return {
      title: 'Point and figure chart',
      description: 'Highcharts 12+ point and figure StockChart.',
      constructorType: 'StockChart',
      options: this.createLivePointAndFigureOptions(),
      html: '<chart [type]="\\'StockChart\\'" [options]="pointAndFigureOptions"></chart>'
    };
  }`;
}

function updatePackageJson(dir, major, config, packageDependency) {
  const packageFile = path.join(dir, 'package.json');
  const packageJson = readJson(packageFile);
  const aotMode = config.modernHighcharts ? 'true' : 'false';
  packageJson.name = `stackline-angular-highcharts-angular-${major}`;
  packageJson.private = true;
  packageJson.scripts = {
    ...(packageJson.scripts || {}),
    ng: 'ng',
    start: config.modernHighcharts
      ? `ng serve --aot=true --host 0.0.0.0 --port ${config.port}`
      : `ng serve --host 0.0.0.0 --port ${config.port}`,
    build: `ng build --base-href ./ --build-optimizer=false --vendor-chunk=true --named-chunks=true --aot=${aotMode}`
  };
  packageJson.dependencies['@stackline/angular-highcharts'] = packageDependency;
  packageJson.dependencies.highcharts = config.highcharts;
  writeJson(packageFile, packageJson);
}

function updateAngularJson(dir, outputPath, config) {
  const angularFile = path.join(dir, 'angular.json');
  const angularJson = readJson(angularFile);
  const projectName = angularJson.defaultProject || Object.keys(angularJson.projects)[0];
  const project = angularJson.projects[projectName];

  if (project && project.architect && project.architect.build && project.architect.build.options) {
    project.architect.build.options.outputPath = outputPath;

    if (config.modernHighcharts) {
      project.architect.build.options.aot = true;
    }
  }

  writeJson(angularFile, angularJson);
}

function writeAppFiles(dir, major, config) {
  const appDir = path.join(dir, 'src', 'app');
  const componentTs = fs.readFileSync(path.join(templateAppDir, 'app.component.ts'), 'utf8');
  const componentHtml = fs.readFileSync(path.join(templateAppDir, 'app.component.html'), 'utf8');
  const componentCss = fs.readFileSync(path.join(templateAppDir, 'app.component.css'), 'utf8');
  const moduleTs = fs.readFileSync(path.join(templateAppDir, 'app.module.ts'), 'utf8');

  fs.mkdirSync(appDir, { recursive: true });
  fs.writeFileSync(path.join(appDir, 'app.component.ts'), createLineComponent(componentTs, major, config));
  fs.writeFileSync(path.join(appDir, 'app.component.html'), createLineComponentHtml(componentHtml, major, config));
  fs.writeFileSync(path.join(appDir, 'app.component.css'), componentCss);
  fs.writeFileSync(path.join(appDir, 'app.module.ts'), createLineAppModule(moduleTs, !!config.modernHighcharts));

  const mainFile = path.join(dir, 'src', 'main.ts');
  if (fs.existsSync(mainFile)) {
    const mainTs = fs.readFileSync(mainFile, 'utf8').replace("import '@angular/compiler';\n", '');
    fs.writeFileSync(mainFile, mainTs);
  }
}

function updateIndexHtml(dir, major) {
  const indexFile = path.join(dir, 'src', 'index.html');
  if (!fs.existsSync(indexFile)) {
    return;
  }

  let html = fs.readFileSync(indexFile, 'utf8');
  html = html.replace(/<title>.*?<\/title>/, `<title>Stackline Angular Highcharts ${major}</title>`);
  fs.writeFileSync(indexFile, html);
}

function syncLine(major) {
  const config = lineConfig[major];
  const docsDir = path.join(rootDir, 'docs-src', `angular-${major}`);
  const testDir = path.join(testsRoot, `angular-${major}`);
  const tarballPath = packLinePackage(major);

  writeAppFiles(docsDir, major, config);
  updatePackageJson(docsDir, major, config, config.version);
  updateAngularJson(docsDir, `../../docs/angular-${major}/live`, config);
  updateIndexHtml(docsDir, major);

  syncDirectory(docsDir, testDir);
  updatePackageJson(testDir, major, config, `file:${tarballPath}`);
  updateAngularJson(testDir, `dist/angular-${major}`, config);
  updateIndexHtml(testDir, major);

  console.log(`Synced Angular ${major} live app with Highcharts ${config.highcharts}`);
}

parseArgs(process.argv.slice(2)).forEach(syncLine);
