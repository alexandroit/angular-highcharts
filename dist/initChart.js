"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepAssign_1 = require("./deepAssign");
function initChart(highchartsService, userOpts, baseOpts, type) {
    var Highcharts = highchartsService.getHighchartsStatic();
    if (!Highcharts) {
        throw new Error('Base Highcharts module should be set via ChartModule.forRoot');
    }
    if (!Highcharts[type]) {
        throw new Error(type + " is unknown chart type.");
    }
    if (Array.isArray(userOpts.xAxis)) {
        baseOpts.xAxis = [baseOpts.xAxis];
    }
    if (Array.isArray(userOpts.yAxis)) {
        baseOpts.yAxis = [baseOpts.yAxis];
    }
    if (Array.isArray(userOpts.zAxis)) {
        baseOpts.zAxis = [baseOpts.zAxis];
    }
    if (Array.isArray(userOpts.colorAxis)) {
        baseOpts.colorAxis = [baseOpts.colorAxis];
    }
    var opts = deepAssign_1.deepAssign({}, baseOpts, userOpts);
    return new Highcharts[type](opts);
}
exports.initChart = initChart;
//# sourceMappingURL=initChart.js.map