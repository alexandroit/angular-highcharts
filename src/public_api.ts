import { NgModule, ModuleWithProviders } from '@angular/core';

import { ChartComponent } from './ChartComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { HighchartsStatic, HighchartsService } from './HighchartsService';

const CHART_DIRECTIVES: any[] = [
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent,
    ChartZAxisComponent,
    ChartColorAxisComponent
];

function registerHighchartsModule(highchartsStatic: HighchartsStatic, loadedModule: any) {
    const highchartsModule = loadedModule && loadedModule.default ? loadedModule.default : loadedModule;

    if (typeof highchartsModule === 'function') {
        highchartsModule(highchartsStatic);
    }
}

@NgModule({
    declarations: CHART_DIRECTIVES,
    exports: CHART_DIRECTIVES
})
export class ChartModule {
    static forRoot(highchartsStatic: HighchartsStatic, ...highchartsModules: Array<Function>): ModuleWithProviders<ChartModule> {
        highchartsModules.forEach((loadedModule: any) => {
            registerHighchartsModule(highchartsStatic, loadedModule);
        });

        return {
            ngModule: ChartModule,
            providers: [
                { provide: HighchartsStatic, useFactory: () => highchartsStatic }
            ]
        };
    }
}

export {
    ChartComponent,
    ChartSeriesComponent,
    ChartPointComponent,
    ChartXAxisComponent,
    ChartYAxisComponent,
    ChartZAxisComponent,
    ChartColorAxisComponent,
    HighchartsStatic,
    HighchartsService,
};
