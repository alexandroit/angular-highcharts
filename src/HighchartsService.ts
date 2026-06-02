import { Injectable } from '@angular/core';

@Injectable()
export class HighchartsStatic {
}

@Injectable()
export class HighchartsService {
    private highchartsStatic: HighchartsStatic;

    constructor(highchartsStatic: HighchartsStatic) {
        this.highchartsStatic = highchartsStatic;
    }

    getHighchartsStatic(): HighchartsStatic {
        return this.highchartsStatic;
    }
}
