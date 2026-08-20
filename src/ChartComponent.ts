import {
    AfterViewInit,
    ContentChild,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    Output
} from '@angular/core';

import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { HighchartsService } from './HighchartsService';
import { ChartEvent } from './ChartEvent';
import { initChart } from './initChart';
import { createBaseOpts } from './createBaseOpts';

@Component({
    selector: 'chart',
    template: '&nbsp;',
    standalone: false,
    providers: [HighchartsService],
})
export class ChartComponent implements AfterViewInit, OnChanges, OnDestroy {
    @ContentChild(ChartSeriesComponent, { static: false }) series!: ChartSeriesComponent;
    @ContentChild(ChartXAxisComponent, { static: false }) xAxis!: ChartXAxisComponent;
    @ContentChild(ChartYAxisComponent, { static: false }) yAxis!: ChartYAxisComponent;
    @ContentChild(ChartZAxisComponent, { static: false }) zAxis!: ChartZAxisComponent;
    @ContentChild(ChartColorAxisComponent, { static: false }) colorAxis!: ChartColorAxisComponent;
    @Output() create = new EventEmitter<any>();
    @Output() click = new EventEmitter<ChartEvent>();
    @Output() addSeries = new EventEmitter<ChartEvent>();
    @Output() afterPrint = new EventEmitter<ChartEvent>();
    @Output() beforePrint = new EventEmitter<ChartEvent>();
    @Output() drilldown = new EventEmitter<ChartEvent>();
    @Output() drillup = new EventEmitter<ChartEvent>();
    @Output() load = new EventEmitter<ChartEvent>();
    @Output() redraw = new EventEmitter<ChartEvent>();
    @Output() selection = new EventEmitter<ChartEvent>();
    chart: any;
    element: ElementRef;
    highchartsService: HighchartsService;
    private userOpts: any;
    private baseOpts: any;
    private viewInitialized = false;

    @Input() type: string = 'Chart';
    @Input() options: any;

    private init() {
        if (!this.userOpts || !this.baseOpts) {
            return;
        }

        this.destroyChart();
        this.chart = initChart(this.highchartsService, this.userOpts, this.baseOpts, this.type);
        this.create.emit(this.chart);
    }

    private destroyChart() {
        if (this.chart && this.chart.destroy) {
            this.chart.destroy();
        }

        this.chart = null;
    }

    ngAfterViewInit() {
        this.viewInitialized = true;
        this.baseOpts = createBaseOpts(
            this,
            this.series,
            this.series ? this.series.point : null,
            this.xAxis,
            this.yAxis,
            this.zAxis,
            this.colorAxis,
            this.element.nativeElement
        );
        this.userOpts = this.options;
        this.init();
    }

    ngOnChanges() {
        this.userOpts = this.options;

        if (this.viewInitialized) {
            this.init();
        }
    }

    ngOnDestroy() {
        this.destroyChart();
    }

    constructor(element: ElementRef, highchartsService: HighchartsService) {
        this.element = element;
        this.highchartsService = highchartsService;
    }
}
