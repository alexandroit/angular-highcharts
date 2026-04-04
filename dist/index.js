"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChartComponent_1 = require("./ChartComponent");
exports.ChartComponent = ChartComponent_1.ChartComponent;
var ChartSeriesComponent_1 = require("./ChartSeriesComponent");
exports.ChartSeriesComponent = ChartSeriesComponent_1.ChartSeriesComponent;
var ChartPointComponent_1 = require("./ChartPointComponent");
exports.ChartPointComponent = ChartPointComponent_1.ChartPointComponent;
var ChartXAxisComponent_1 = require("./ChartXAxisComponent");
exports.ChartXAxisComponent = ChartXAxisComponent_1.ChartXAxisComponent;
var ChartYAxisComponent_1 = require("./ChartYAxisComponent");
exports.ChartYAxisComponent = ChartYAxisComponent_1.ChartYAxisComponent;
var ChartZAxisComponent_1 = require("./ChartZAxisComponent");
exports.ChartZAxisComponent = ChartZAxisComponent_1.ChartZAxisComponent;
var ChartColorAxisComponent_1 = require("./ChartColorAxisComponent");
exports.ChartColorAxisComponent = ChartColorAxisComponent_1.ChartColorAxisComponent;
var HighchartsService_1 = require("./HighchartsService");
var CHART_DIRECTIVES = [
    ChartComponent_1.ChartComponent,
    ChartSeriesComponent_1.ChartSeriesComponent,
    ChartPointComponent_1.ChartPointComponent,
    ChartXAxisComponent_1.ChartXAxisComponent,
    ChartYAxisComponent_1.ChartYAxisComponent,
    ChartZAxisComponent_1.ChartZAxisComponent,
    ChartColorAxisComponent_1.ChartColorAxisComponent
];
var ChartModule = (function () {
    function ChartModule() {
    }
    ChartModule.forRoot = function (highchartsStatic) {
        var highchartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            highchartsModules[_i - 1] = arguments[_i];
        }
        highchartsModules.forEach(function (module) {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule,
            providers: [
                { provide: HighchartsService_1.HighchartsStatic, useValue: highchartsStatic }
            ]
        };
    };
    ChartModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: CHART_DIRECTIVES,
                    exports: CHART_DIRECTIVES
                },] },
    ];
    ChartModule.ctorParameters = function () { return []; };
    return ChartModule;
}());
exports.ChartModule = ChartModule;
//# sourceMappingURL=index.js.map