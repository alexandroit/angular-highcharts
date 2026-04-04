import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { HighchartsStatic } from './HighchartsService';
var CHART_DIRECTIVES = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent,
    ChartZAxisComponent,
    ChartColorAxisComponent
];
var ChartModule = /** @class */ (function () {
    function ChartModule() {
    }
    ChartModule_1 = ChartModule;
    ChartModule.forRoot = function (highchartsStatic) {
        var highchartsModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            highchartsModules[_i - 1] = arguments[_i];
        }
        // Plug highcharts modules
        highchartsModules.forEach(function (module) {
            module(highchartsStatic);
        });
        return {
            ngModule: ChartModule_1,
            providers: [
                { provide: HighchartsStatic, useFactory: function () { return highchartsStatic; } }
            ]
        };
    };
    var ChartModule_1;
    ChartModule = ChartModule_1 = __decorate([
        NgModule({
            declarations: CHART_DIRECTIVES,
            exports: CHART_DIRECTIVES
        })
    ], ChartModule);
    return ChartModule;
}());
export { ChartModule };
export { ChartComponent, ChartSeriesComponent, ChartPointComponent, ChartXAxisComponent, ChartYAxisComponent, ChartZAxisComponent, ChartColorAxisComponent, };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0ByZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzLyIsInNvdXJjZXMiOlsicHVibGljX2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFBO0FBRXRELElBQU0sZ0JBQWdCLEdBQVU7SUFDNUIsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0NBQzFCLENBQUM7QUFNRjtJQUFBO0lBY0EsQ0FBQztvQkFkWSxXQUFXO0lBQ2IsbUJBQU8sR0FBZCxVQUFlLGdCQUFrQztRQUFFLDJCQUFxQzthQUFyQyxVQUFxQyxFQUFyQyxxQkFBcUMsRUFBckMsSUFBcUM7WUFBckMsMENBQXFDOztRQUNwRiwwQkFBMEI7UUFDMUIsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUM3QixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU87WUFDSCxRQUFRLEVBQUUsYUFBVztZQUNyQixTQUFTLEVBQUU7Z0JBQ1AsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLGNBQU0sT0FBQSxnQkFBZ0IsRUFBaEIsQ0FBZ0IsRUFBRTthQUNwRTtTQUNKLENBQUM7SUFDTixDQUFDOztJQWJRLFdBQVc7UUFKdkIsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLGdCQUFnQjtZQUM5QixPQUFPLEVBQUUsZ0JBQWdCO1NBQzVCLENBQUM7T0FDVyxXQUFXLENBY3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxXQUFXO0FBZ0J4QixPQUFPLEVBQ0gsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixtQkFBbUIsRUFDbkIsbUJBQW1CLEVBQ25CLG1CQUFtQixFQUNuQixtQkFBbUIsRUFDbkIsdUJBQXVCLEdBQzFCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0U2VyaWVzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0UG9pbnRDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0UG9pbnRDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRYQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRYQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFlBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFlBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WkF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WkF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRDb2xvckF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0Q29sb3JBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IEhpZ2hjaGFydHNTdGF0aWMgfSBmcm9tICcuL0hpZ2hjaGFydHNTZXJ2aWNlJ1xuXG5jb25zdCBDSEFSVF9ESVJFQ1RJVkVTOiBhbnlbXSA9IFtcbiAgICBDaGFydENvbXBvbmVudCxcbiAgICBDaGFydFNlcmllc0NvbXBvbmVudCxcbiAgICBDaGFydFBvaW50Q29tcG9uZW50LFxuICAgIENoYXJ0WEF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRZQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydFpBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogQ0hBUlRfRElSRUNUSVZFUyxcbiAgICBleHBvcnRzOiBDSEFSVF9ESVJFQ1RJVkVTXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0TW9kdWxlIHtcbiAgICBzdGF0aWMgZm9yUm9vdChoaWdoY2hhcnRzU3RhdGljOiBIaWdoY2hhcnRzU3RhdGljLCAuLi5oaWdoY2hhcnRzTW9kdWxlczogQXJyYXk8RnVuY3Rpb24+KTogTW9kdWxlV2l0aFByb3ZpZGVyczxDaGFydE1vZHVsZT4ge1xuICAgICAgICAvLyBQbHVnIGhpZ2hjaGFydHMgbW9kdWxlc1xuICAgICAgICBoaWdoY2hhcnRzTW9kdWxlcy5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICAgICAgICAgIG1vZHVsZShoaWdoY2hhcnRzU3RhdGljKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IENoYXJ0TW9kdWxlLFxuICAgICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAgICAgeyBwcm92aWRlOiBIaWdoY2hhcnRzU3RhdGljLCB1c2VGYWN0b3J5OiAoKSA9PiBoaWdoY2hhcnRzU3RhdGljIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmV4cG9ydCB7XG4gICAgQ2hhcnRDb21wb25lbnQsXG4gICAgQ2hhcnRTZXJpZXNDb21wb25lbnQsXG4gICAgQ2hhcnRQb2ludENvbXBvbmVudCxcbiAgICBDaGFydFhBeGlzQ29tcG9uZW50LFxuICAgIENoYXJ0WUF4aXNDb21wb25lbnQsXG4gICAgQ2hhcnRaQXhpc0NvbXBvbmVudCxcbiAgICBDaGFydENvbG9yQXhpc0NvbXBvbmVudCxcbn07XG4iXX0=