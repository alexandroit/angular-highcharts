import { HighchartsService } from './HighchartsService';
import { deepAssign } from './deepAssign';

export function initChart(highchartsService: HighchartsService, userOpts: any, baseOpts: any, type: string) {
    const Highcharts: any = highchartsService.getHighchartsStatic();

    if (!Highcharts) {
        throw new Error('Base Highcharts module should be set via ChartModule.forRoot');
    }
    if (!Highcharts[type]) {
        throw new Error(`${type} is unknown chart type.`);
    }

    const normalizedBaseOpts = deepAssign({}, baseOpts);

    alignAxisShape(normalizedBaseOpts, userOpts, 'xAxis');
    alignAxisShape(normalizedBaseOpts, userOpts, 'yAxis');
    alignAxisShape(normalizedBaseOpts, userOpts, 'zAxis');
    alignAxisShape(normalizedBaseOpts, userOpts, 'colorAxis');

    const opts = deepAssign({}, normalizedBaseOpts, userOpts);

    return new Highcharts[type](opts);
}

function alignAxisShape(baseOpts: any, userOpts: any, axisName: string): void {
    if (Array.isArray(userOpts[axisName])) {
        baseOpts[axisName] = [baseOpts[axisName]];
    }
}
