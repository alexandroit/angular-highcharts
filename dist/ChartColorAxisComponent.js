"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChartColorAxisComponent = (function () {
    function ChartColorAxisComponent() {
        this.afterBreaks = new core_1.EventEmitter();
        this.afterSetExtremes = new core_1.EventEmitter();
        this.pointBreak = new core_1.EventEmitter();
        this.pointInBreak = new core_1.EventEmitter();
        this.setExtremes = new core_1.EventEmitter();
    }
    ChartColorAxisComponent.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'colorAxis'
                },] },
    ];
    ChartColorAxisComponent.ctorParameters = function () { return []; };
    ChartColorAxisComponent.propDecorators = {
        'afterBreaks': [{ type: core_1.Output },],
        'afterSetExtremes': [{ type: core_1.Output },],
        'pointBreak': [{ type: core_1.Output },],
        'pointInBreak': [{ type: core_1.Output },],
        'setExtremes': [{ type: core_1.Output },],
    };
    return ChartColorAxisComponent;
}());
exports.ChartColorAxisComponent = ChartColorAxisComponent;
//# sourceMappingURL=ChartColorAxisComponent.js.map