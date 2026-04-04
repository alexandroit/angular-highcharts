import { Directive, Output, EventEmitter } from '@angular/core';
export class ChartZAxisComponent {
    constructor() {
        this.afterBreaks = new EventEmitter();
        this.afterSetExtremes = new EventEmitter();
        this.pointBreak = new EventEmitter();
        this.pointInBreak = new EventEmitter();
        this.setExtremes = new EventEmitter();
    }
}
ChartZAxisComponent.decorators = [
    { type: Directive, args: [{
                selector: 'zAxis'
            },] }
];
ChartZAxisComponent.propDecorators = {
    afterBreaks: [{ type: Output }],
    afterSetExtremes: [{ type: Output }],
    pointBreak: [{ type: Output }],
    pointInBreak: [{ type: Output }],
    setExtremes: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhcnRaQXhpc0NvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvc3RvcmFnZS9kYXRhL2dpdGh1Yi9yZXZpdmVqcy9hbmd1bGFyMi1oaWdoY2hhcnRzL2FuZ3VsYXIyLWhpZ2hjaGFydHMvc3JjLyIsInNvdXJjZXMiOlsiQ2hhcnRaQXhpc0NvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNaEUsTUFBTSxPQUFPLG1CQUFtQjtJQUhoQztRQUljLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM3QyxxQkFBZ0IsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ2xELGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzVDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUM5QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDM0QsQ0FBQzs7O1lBVEEsU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxPQUFPO2FBQ3BCOzs7MEJBRUksTUFBTTsrQkFDTixNQUFNO3lCQUNOLE1BQU07MkJBQ04sTUFBTTswQkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hhcnRFdmVudCB9IGZyb20gJy4vQ2hhcnRFdmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnekF4aXMnXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0WkF4aXNDb21wb25lbnQge1xuICAgIEBPdXRwdXQoKSBhZnRlckJyZWFrcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgYWZ0ZXJTZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRCcmVhayA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbiAgICBAT3V0cHV0KCkgcG9pbnRJbkJyZWFrID0gbmV3IEV2ZW50RW1pdHRlcjxDaGFydEV2ZW50PigpO1xuICAgIEBPdXRwdXQoKSBzZXRFeHRyZW1lcyA9IG5ldyBFdmVudEVtaXR0ZXI8Q2hhcnRFdmVudD4oKTtcbn1cbiJdfQ==