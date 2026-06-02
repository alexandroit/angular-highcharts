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

function bindEvents(target, eventNames, component) {
    if (!component) {
        return;
    }

    eventNames.forEach(function (eventName) {
        target[eventName] = target[eventName] || function (event: any) {
            component[eventName].emit(new ChartEvent(event, this));
        };
    });
}

export function createBaseOpts(chartCmp, seriesCmp, pointCmp, xAxisCmp, yAxisCmp, zAxisCmp, colorAxisCmp, element) {
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
