import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ChartModule } from '@stackline/angular-highcharts';
import Highcharts from 'highcharts/esm/highcharts.js';
import 'highcharts/esm/highcharts-more.js';
import 'highcharts/esm/highcharts-3d.js';
import 'highcharts/esm/modules/heatmap.js';
import 'highcharts/esm/modules/treemap.js';
import 'highcharts/esm/modules/funnel.js';
import 'highcharts/esm/modules/solid-gauge.js';
import 'highcharts/esm/modules/stock.js';
import 'highcharts/esm/modules/map.js';
import 'highcharts/esm/modules/drilldown.js';
import 'highcharts/esm/modules/data-sorting.js';
import 'highcharts/esm/modules/sankey.js';
import 'highcharts/esm/modules/dependency-wheel.js';
import 'highcharts/esm/modules/networkgraph.js';
import 'highcharts/esm/modules/sunburst.js';
import 'highcharts/esm/modules/wordcloud.js';
import 'highcharts/esm/modules/xrange.js';
import 'highcharts/esm/modules/timeline.js';
import 'highcharts/esm/modules/variwide.js';
import 'highcharts/esm/modules/variable-pie.js';
import 'highcharts/esm/modules/item-series.js';
import 'highcharts/esm/modules/streamgraph.js';
import 'highcharts/esm/modules/bullet.js';
import 'highcharts/esm/modules/cylinder.js';
import 'highcharts/esm/modules/dumbbell.js';
import 'highcharts/esm/modules/dotplot.js';
import 'highcharts/esm/modules/funnel3d.js';
import 'highcharts/esm/modules/heikinashi.js';
import 'highcharts/esm/modules/hollowcandlestick.js';
import 'highcharts/esm/modules/lollipop.js';
import 'highcharts/esm/modules/parallel-coordinates.js';
import 'highcharts/esm/modules/pareto.js';
import 'highcharts/esm/modules/histogram-bellcurve.js';
import 'highcharts/esm/modules/pyramid3d.js';
import 'highcharts/esm/modules/tilemap.js';
import 'highcharts/esm/modules/treegraph.js';
import 'highcharts/esm/modules/vector.js';
import 'highcharts/esm/modules/venn.js';
import 'highcharts/esm/modules/windbarb.js';
import 'highcharts/esm/modules/arc-diagram.js';
import 'highcharts/esm/modules/organization.js';
import 'highcharts/esm/modules/accessibility.js';
import 'highcharts/esm/modules/flowmap.js';
import 'highcharts/esm/modules/geoheatmap.js';
import 'highcharts/esm/modules/pictorial.js';
import 'highcharts/esm/modules/contour.js';
import 'highcharts/esm/modules/pointandfigure.js';
import 'highcharts/esm/modules/renko.js';
import 'highcharts/esm/modules/no-data-to-display.js';

import { App } from './app';

export function highchartsFactory() {
  return Highcharts;
}

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartModule.forRoot(highchartsFactory())
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
