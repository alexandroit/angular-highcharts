import { Input, Component, Output, EventEmitter, ContentChild } from '@angular/core';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { HighchartsService } from './HighchartsService';
import { initChart } from './initChart';
import { createBaseOpts } from './createBaseOpts';
import * as i0 from "@angular/core";
import * as i1 from "./HighchartsService";
export class ChartComponent {
    series;
    xAxis;
    yAxis;
    zAxis;
    colorAxis;
    create = new EventEmitter();
    click = new EventEmitter();
    addSeries = new EventEmitter();
    afterPrint = new EventEmitter();
    beforePrint = new EventEmitter();
    drilldown = new EventEmitter();
    drillup = new EventEmitter();
    load = new EventEmitter();
    redraw = new EventEmitter();
    selection = new EventEmitter();
    chart;
    element;
    highchartsService;
    userOpts;
    baseOpts;
    type = 'Chart';
    set options(opts) {
        this.userOpts = opts;
        this.init();
    }
    ;
    init() {
        if (this.userOpts && this.baseOpts) {
            this.chart = initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
            this.create.emit(this.chart);
        }
    }
    ngAfterViewInit() {
        this.baseOpts = createBaseOpts(this, this.series, this.series ? this.series.point : null, this.xAxis, this.yAxis, this.zAxis, this.colorAxis, this.element.nativeElement);
        this.init();
    }
    constructor(element, highchartsService) {
        this.element = element;
        this.highchartsService = highchartsService;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ChartComponent, deps: [{ token: i0.ElementRef }, { token: i1.HighchartsService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: ChartComponent, selector: "chart", inputs: { type: "type", options: "options" }, outputs: { create: "create", click: "click", addSeries: "addSeries", afterPrint: "afterPrint", beforePrint: "beforePrint", drilldown: "drilldown", drillup: "drillup", load: "load", redraw: "redraw", selection: "selection" }, providers: [HighchartsService], queries: [{ propertyName: "series", first: true, predicate: ChartSeriesComponent, descendants: true }, { propertyName: "xAxis", first: true, predicate: ChartXAxisComponent, descendants: true }, { propertyName: "yAxis", first: true, predicate: ChartYAxisComponent, descendants: true }, { propertyName: "zAxis", first: true, predicate: ChartZAxisComponent, descendants: true }, { propertyName: "colorAxis", first: true, predicate: ChartColorAxisComponent, descendants: true }], ngImport: i0, template: '&nbsp;', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: ChartComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'chart',
                    template: '&nbsp;',
                    providers: [HighchartsService],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.HighchartsService }]; }, propDecorators: { series: [{
                type: ContentChild,
                args: [ChartSeriesComponent, { static: false }]
            }], xAxis: [{
                type: ContentChild,
                args: [ChartXAxisComponent, { static: false }]
            }], yAxis: [{
                type: ContentChild,
                args: [ChartYAxisComponent, { static: false }]
            }], zAxis: [{
                type: ContentChild,
                args: [ChartZAxisComponent, { static: false }]
            }], colorAxis: [{
                type: ContentChild,
                args: [ChartColorAxisComponent, { static: false }]
            }], create: [{
                type: Output
            }], click: [{
                type: Output
            }], addSeries: [{
                type: Output
            }], afterPrint: [{
                type: Output
            }], beforePrint: [{
                type: Output
            }], drilldown: [{
                type: Output
            }], drillup: [{
                type: Output
            }], load: [{
                type: Output
            }], redraw: [{
                type: Output
            }], selection: [{
                type: Output
            }], type: [{
                type: Input
            }], options: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvQ2hhcnRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBYyxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFakcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQU9sRCxNQUFNLE9BQU8sY0FBYztJQUNnQyxNQUFNLENBQXVCO0lBQzlCLEtBQUssQ0FBc0I7SUFDM0IsS0FBSyxDQUFzQjtJQUMzQixLQUFLLENBQXNCO0lBQ3ZCLFNBQVMsQ0FBMEI7SUFDbkYsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDakMsS0FBSyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDdkMsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDM0MsVUFBVSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDNUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDN0MsU0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDM0MsT0FBTyxHQUFHLElBQUks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QUFmLE1BQU07Z0JBQ0csU0FBUztzQkFBbEIsTUFBTTtnQkFNRSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ08sT0FBTztzQkFBbkIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBFbGVtZW50UmVmLCBDb21wb25lbnQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBDb250ZW50Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2hhcnRTZXJpZXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0U2VyaWVzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL0NoYXJ0WEF4aXNDb21wb25lbnQnO1xuaW1wb3J0IHsgQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vQ2hhcnRZQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBDaGFydFpBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydFpBeGlzQ29tcG9uZW50JztcbmltcG9ydCB7IENoYXJ0Q29sb3JBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9DaGFydENvbG9yQXhpc0NvbXBvbmVudCc7XG5pbXBvcnQgeyBIaWdoY2hhcnRzU2VydmljZSB9IGZyb20gJy4vSGlnaGNoYXJ0c1NlcnZpY2UnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5pbXBvcnQgeyBpbml0Q2hhcnQgfSBmcm9tICcuL2luaXRDaGFydCc7XG5pbXBvcnQgeyBjcmVhdGVCYXNlT3B0cyB9IGZyb20gJy4vY3JlYXRlQmFzZU9wdHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NoYXJ0JyxcbiAgICB0ZW1wbGF0ZTogJyZuYnNwOycsXG4gICAgcHJvdmlkZXJzOiBbSGlnaGNoYXJ0c1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGFydENvbXBvbmVudCB7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFNlcmllc0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIHNlcmllczogQ2hhcnRTZXJpZXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFhBeGlzQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgeEF4aXM6IENoYXJ0WEF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFlBeGlzQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgeUF4aXM6IENoYXJ0WUF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydFpBeGlzQ29tcG9uZW50LCB7IHN0YXRpYzogZmFsc2UgfSkgekF4aXM6IENoYXJ0WkF4aXNDb21wb25lbnQ7XG4gICAgQENvbnRlbnRDaGlsZChDaGFydENvbG9yQXhpc0NvbXBvbmVudCwgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbG9yQXhpczogQ2hhcnRDb2xvckF4aXNDb21wb25lbnQ7XG4gICAgQE91dHB1dCgpIGNyZWF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICAgIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWRkU2VyaWVzID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBhZnRlclByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBiZWZvcmVQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgZHJpbGxkb3duID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBkcmlsbHVwID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBsb2FkID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSByZWRyYXcgPSBuZXcgRXZlbnRFbWl0dGVyPENoYXJ0RXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIHNlbGVjdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBjaGFydDogYW55O1xuICAgIGVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gICAgaGlnaGNoYXJ0c1NlcnZpY2UgOiBIaWdoY2hhcnRzU2VydmljZTtcbiAgICBwcml2YXRlIHVzZXJPcHRzOiBhbnk7XG4gICAgcHJpdmF0ZSBiYXNlT3B0czogYW55O1xuICAgIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdDaGFydCc7XG4gICAgQElucHV0KCkgc2V0IG9wdGlvbnMob3B0cyA6IGFueSkge1xuICAgICAgICB0aGlzLnVzZXJPcHRzID0gb3B0cztcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfTtcblxuICAgIHByaXZhdGUgaW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlck9wdHMgJiYgdGhpcy5iYXNlT3B0cykge1xuICAgICAgICAgICAgdGhpcy5jaGFydCA9IGluaXRDaGFydCh0aGlzLmhpZ2hjaGFydHNTZXJ2aWNlLCB0aGlzLnVzZXJPcHRzLCB0aGlzLmJhc2VPcHRzLCB0aGlzLnR5cGUpO1xuICAgICAgICAgICAgdGhpcy5jcmVhdGUuZW1pdCh0aGlzLmNoYXJ0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT3B0cyA9IGNyZWF0ZUJhc2VPcHRzKFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgIHRoaXMuc2VyaWVzLFxuICAgICAgICAgICAgdGhpcy5zZXJpZXMgPyB0aGlzLnNlcmllcy5wb2ludCA6IG51bGwsXG4gICAgICAgICAgICB0aGlzLnhBeGlzLFxuICAgICAgICAgICAgdGhpcy55QXhpcyxcbiAgICAgICAgICAgIHRoaXMuekF4aXMsXG4gICAgICAgICAgICB0aGlzLmNvbG9yQXhpcyxcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50XG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQ6IEVsZW1lbnRSZWYsIGhpZ2hjaGFydHNTZXJ2aWNlIDogSGlnaGNoYXJ0c1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5oaWdoY2hhcnRzU2VydmljZSA9IGhpZ2hjaGFydHNTZXJ2aWNlO1xuICAgIH1cbn1cbiJdfQ==