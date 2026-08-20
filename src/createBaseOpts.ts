import { ChartEvent } from './ChartEvent';

const chartEvents = [
    // Native DOM click already covers chart click.
    'addSeries',
    'afterPrint',
    'beforePrint',
    'drilldown',
    'drillup',
    'load',
    'redraw',
    'selection'
];

const seriesEvents = [
    'click',
    'afterAnimate',
    'checkboxClick',
    'hide',
    'legendItemClick',
    'mouseOut',
    'mouseOver',
    'show'
];

const pointEvents = [
    'click',
    'remove',
    'select',
    'unselect',
    'mouseOut',
    'mouseOver',
    'update'
];

const axisEvents = [
    'afterBreaks',
    'afterSetExtremes',
    'pointBreak',
    'pointInBreak',
    'setExtremes'
];

function bindEvents(target: any, eventNames: string[], component: any) {
    if (!component) {
        return;
    }

    eventNames.forEach(function (eventName: string) {
        target[eventName] = target[eventName] || function (this: any, event: Event) {
            component[eventName].emit(new ChartEvent(event, this));
        };
    });
}

export function createBaseOpts(
    chartCmp: any,
    seriesCmp: any,
    pointCmp: any,
    xAxisCmp: any,
    yAxisCmp: any,
    zAxisCmp: any,
    colorAxisCmp: any,
    element: any
) {
    const opts = {
        chart: {
            renderTo: element,
            events: {}
        },
        plotOptions: {
            series: {
                events: {},
                point: {
                    events: {}
                }
            }
        },
        xAxis: {
            events: {}
        },
        yAxis: {
            events: {}
        },
        zAxis: {
            events: {}
        },
        colorAxis: {
            events: {}
        }
    };

    bindEvents(opts.chart.events, chartEvents, chartCmp);
    bindEvents(opts.plotOptions.series.events, seriesEvents, seriesCmp);
    bindEvents(opts.plotOptions.series.point.events, pointEvents, pointCmp);
    bindEvents(opts.xAxis.events, axisEvents, xAxisCmp);
    bindEvents(opts.yAxis.events, axisEvents, yAxisCmp);
    bindEvents(opts.zAxis.events, axisEvents, zAxisCmp);
    bindEvents(opts.colorAxis.events, axisEvents, colorAxisCmp);

    return opts;
}
