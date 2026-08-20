export class ChartEvent {
    originalEvent: Event;
    context: any;

    constructor(event: any, context: any) {
        this.originalEvent = event;
        this.context = context;
    }
}
