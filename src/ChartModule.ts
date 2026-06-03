import { ModuleWithProviders, NgModule } from '@angular/core';

import { ChartColorAxisComponent } from './ChartColorAxisComponent';
import { ChartComponent } from './ChartComponent';
import { ChartPointComponent } from './ChartPointComponent';
import { ChartSeriesComponent } from './ChartSeriesComponent';
import { ChartXAxisComponent } from './ChartXAxisComponent';
import { ChartYAxisComponent } from './ChartYAxisComponent';
import { ChartZAxisComponent } from './ChartZAxisComponent';
import { HighchartsStatic } from './HighchartsService';

function registerHighchartsModule(highchartsStatic: HighchartsStatic, loadedModule: any) {
    const highchartsModule = loadedModule && loadedModule.default ? loadedModule.default : loadedModule;

    if (typeof highchartsModule === 'function') {
        highchartsModule(highchartsStatic);
    }
}

@NgModule({
    declarations: [
        ChartComponent,
        ChartSeriesComponent,
        ChartPointComponent,
        ChartXAxisComponent,
        ChartYAxisComponent,
        ChartZAxisComponent,
        ChartColorAxisComponent
    ],
    exports: [
        ChartComponent,
        ChartSeriesComponent,
        ChartPointComponent,
        ChartXAxisComponent,
        ChartYAxisComponent,
        ChartZAxisComponent,
        ChartColorAxisComponent
    ]
})
export class ChartModule {
    static forRoot(highchartsStatic: HighchartsStatic, ...highchartsModules: Array<any>): ModuleWithProviders<ChartModule> {
        highchartsModules.forEach((loadedModule) => {
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
