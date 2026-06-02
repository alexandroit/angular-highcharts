webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\nmain {\n  width: calc(100% - 32px);\n  max-width: 1360px;\n  margin: 0 auto;\n  padding: 32px 0 48px;\n}\n\nheader,\n.panel,\n.chart-card {\n  background: #fff;\n  border: 1px solid #d9e5ee;\n  border-radius: 8px;\n  -webkit-box-shadow: 0 10px 28px rgba(23, 52, 77, .08);\n          box-shadow: 0 10px 28px rgba(23, 52, 77, .08);\n}\n\nheader {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  gap: 20px;\n  padding: 24px;\n  margin-bottom: 18px;\n}\n\n.header-copy {\n  min-width: 0;\n}\n\n.route-tabs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  gap: 8px;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n}\n\n.route-tabs a {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  min-height: 36px;\n  padding: 0 14px;\n  border: 1px solid #d0dbe6;\n  border-radius: 6px;\n  color: #254966;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.route-tabs a.active {\n  border-color: #146c94;\n  background: #146c94;\n  color: #fff;\n}\n\nheader span {\n  display: block;\n  margin-bottom: 8px;\n  color: #466179;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .05em;\n  text-transform: uppercase;\n}\n\nh1,\nh2,\nh3,\np {\n  margin-top: 0;\n}\n\nh1 {\n  margin-bottom: 8px;\n  font-size: 30px;\n  line-height: 1.2;\n}\n\np {\n  color: #50677d;\n}\n\nheader p {\n  margin-bottom: 0;\n}\n\n.panel {\n  padding: 24px;\n  margin-bottom: 18px;\n}\n\n.intro-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  gap: 16px;\n}\n\n.status-pill {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: #e7f2ff;\n  color: #205b8f;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.capability-grid,\n.examples-grid,\n.event-grid {\n  display: -ms-grid;\n  display: grid;\n  gap: 16px;\n}\n\n.capability-grid {\n  -ms-grid-columns: (minmax(220px, 1fr))[auto-fit];\n      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n\n.capability-grid div {\n  padding: 14px;\n  border: 1px solid #dbe6ef;\n  border-radius: 6px;\n  background: #f8fbfd;\n}\n\n.capability-grid strong,\n.capability-grid span {\n  display: block;\n}\n\n.capability-grid span {\n  margin-top: 6px;\n  color: #536b80;\n  font-size: 13px;\n  line-height: 1.45;\n}\n\n.examples-grid {\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: start;\n}\n\n.chart-card {\n  width: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  padding: 18px;\n}\n\n.chart-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n\n.chart-head h2,\n.chart-head h3 {\n  margin-bottom: 6px;\n}\n\n.chart-head h3 {\n  font-size: 18px;\n}\n\n.chart-head span {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  padding: 6px 9px;\n  border-radius: 999px;\n  background: #eef3f8;\n  color: #41576b;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.feature-panel {\n  margin-top: 18px;\n}\n\n.market-source-panel {\n  margin-bottom: 18px;\n}\n\n.live-market-card {\n  margin-bottom: 18px;\n  padding: 18px;\n  background: #0b0d10;\n  border-color: #242933;\n  color: #f5f7fb;\n}\n\n.live-market-card.market-light {\n  background: #fff;\n  border-color: #d9e5ee;\n  color: #101828;\n}\n\n.live-market-card p {\n  color: #a7afbc;\n}\n\n.live-market-card.market-light p {\n  color: #667085;\n}\n\n.live-market-card .chart-head span {\n  background: #1d2430;\n  color: #dfe6ef;\n}\n\n.live-market-card.market-light .chart-head span {\n  background: #eef4ff;\n  color: #344054;\n}\n\n.market-head h2 {\n  margin-bottom: 6px;\n}\n\n.market-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 12px 18px;\n  margin-bottom: 12px;\n  padding: 12px;\n  border: 1px solid #232a35;\n  border-radius: 6px;\n  background: #11161d;\n}\n\n@media (max-width: 760px) {\n  header {\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .route-tabs {\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    width: 100%;\n  }\n}\n\n.market-light .market-toolbar {\n  border-color: #d0d5dd;\n  background: #f8fafc;\n}\n\n.market-toolbar div {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 8px;\n}\n\n.market-toolbar strong {\n  color: #c3cad6;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.market-light .market-toolbar strong {\n  color: #475467;\n}\n\n.market-toolbar button {\n  min-height: 32px;\n  padding: 0 11px;\n  border: 1px solid #343b48;\n  background: #171d26;\n  color: #dfe6ef;\n}\n\n.market-light .market-toolbar button {\n  border-color: #d0d5dd;\n  background: #fff;\n  color: #344054;\n}\n\n.market-toolbar button.active {\n  border-color: #f0b90b;\n  background: #f0b90b;\n  color: #111;\n}\n\n.market-light .market-toolbar button.active {\n  border-color: #146c94;\n  background: #146c94;\n  color: #fff;\n}\n\n.market-toolbar .reload-button {\n  margin-left: auto;\n  background: #146c94;\n  border-color: #146c94;\n  color: #fff;\n}\n\n.market-ticker,\n.market-status {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 10px 18px;\n  margin-bottom: 10px;\n  color: #9ca5b1;\n  font-size: 13px;\n}\n\n.market-light .market-ticker,\n.market-light .market-status {\n  color: #667085;\n}\n\n.market-ticker strong {\n  margin-left: 4px;\n  color: #f5f7fb;\n}\n\n.market-light .market-ticker strong {\n  color: #101828;\n}\n\n.market-ticker .positive strong,\n.market-ticker .positive {\n  color: #02c076;\n}\n\n.market-ticker .negative strong,\n.market-ticker .negative {\n  color: #f6465d;\n}\n\n.market-status {\n  color: #c6ccd5;\n}\n\n.market-frame {\n  min-height: 560px;\n  border: 1px solid #242933;\n  border-radius: 6px;\n  overflow: hidden;\n  background: #050505;\n}\n\n.market-light .market-frame {\n  border-color: #d0d5dd;\n  background: #fff;\n}\n\n.market-frame chart {\n  min-height: 560px;\n}\n\n.endpoint-grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (minmax(260px, 1fr))[auto-fit];\n      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 12px;\n  margin-top: 12px;\n  margin-bottom: 14px;\n}\n\n.endpoint-grid div {\n  padding: 12px;\n  border: 1px solid #232a35;\n  border-radius: 6px;\n  background: #11161d;\n}\n\n.market-light .endpoint-grid div {\n  border-color: #d0d5dd;\n  background: #f8fafc;\n}\n\n.endpoint-grid strong,\n.endpoint-grid code {\n  display: block;\n}\n\n.endpoint-grid strong {\n  margin-bottom: 8px;\n  color: #c3cad6;\n}\n\n.market-light .endpoint-grid strong {\n  color: #475467;\n}\n\n.endpoint-grid code {\n  overflow-wrap: anywhere;\n  color: #8bd3ff;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.market-light .endpoint-grid code {\n  color: #0b5cad;\n}\n\n.chart-frame {\n  width: 100%;\n  min-height: 340px;\n}\n\n.chart-frame.large {\n  min-height: 380px;\n}\n\n.chart-frame chart {\n  display: block;\n  width: 100%;\n  min-height: 320px;\n}\n\n.tutorial-collapse {\n  margin-top: 14px;\n  border: 1px solid #d9e5ee;\n  border-radius: 8px;\n  background: #f8fbfd;\n  overflow: hidden;\n}\n\n.live-market-card .tutorial-collapse {\n  border-color: #242933;\n  background: #11161d;\n}\n\n.live-market-card.market-light .tutorial-collapse {\n  border-color: #d9e5ee;\n  background: #f8fbfd;\n}\n\n.tutorial-collapse summary {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  gap: 12px;\n  min-height: 44px;\n  padding: 0 14px;\n  cursor: pointer;\n  color: #1e3145;\n  font-weight: 700;\n}\n\n.live-market-card .tutorial-collapse summary {\n  color: #f5f7fb;\n}\n\n.live-market-card.market-light .tutorial-collapse summary {\n  color: #1e3145;\n}\n\n.tutorial-collapse summary::-webkit-details-marker {\n  display: none;\n}\n\n.tutorial-collapse summary:before {\n  content: '+';\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 22px;\n  height: 22px;\n  margin-right: 8px;\n  border-radius: 50%;\n  background: #e7f2ff;\n  color: #205b8f;\n  font-weight: 800;\n}\n\n.tutorial-collapse[open] summary:before {\n  content: '-';\n}\n\n.tutorial-collapse summary span {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: auto;\n}\n\n.tutorial-collapse summary small {\n  color: #667085;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.live-market-card .tutorial-collapse summary small {\n  color: #a7afbc;\n}\n\n.live-market-card.market-light .tutorial-collapse summary small {\n  color: #667085;\n}\n\n.code-layer-grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (minmax(0, 1fr))[3];\n      grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n  padding: 14px;\n  border-top: 1px solid #d9e5ee;\n}\n\n.live-market-card .code-layer-grid {\n  border-top-color: #242933;\n}\n\n.live-market-card.market-light .code-layer-grid {\n  border-top-color: #d9e5ee;\n}\n\n.code-layer-grid h4 {\n  margin: 0 0 8px;\n  color: #344054;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.live-market-card .code-layer-grid h4 {\n  color: #dfe6ef;\n}\n\n.live-market-card.market-light .code-layer-grid h4 {\n  color: #344054;\n}\n\n.code-layer-grid pre {\n  max-height: 420px;\n  margin: 0;\n}\n\npre {\n  overflow: auto;\n  padding: 16px;\n  border-radius: 6px;\n  background: #112236;\n  color: #f3f8ff;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\nbutton {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n  min-height: 38px;\n  padding: 0 16px;\n  border: 0;\n  border-radius: 6px;\n  background: #146c94;\n  color: #fff;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.event-grid {\n  -ms-grid-columns: minmax(0, 1.2fr) minmax(260px, .8fr);\n      grid-template-columns: minmax(0, 1.2fr) minmax(260px, .8fr);\n}\n\n.event-log {\n  padding: 16px;\n  border: 1px solid #d9e5ee;\n  border-radius: 6px;\n  background: #f8fbfd;\n}\n\n.event-log ul {\n  margin: 12px 0 0;\n  padding-left: 18px;\n}\n\n.event-log li {\n  margin-bottom: 6px;\n  color: #40586d;\n}\n\n@media (max-width: 760px) {\n  .intro-panel,\n  .chart-head {\n    display: block;\n  }\n\n  .status-pill,\n  .chart-head span,\n  button {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin-top: 12px;\n  }\n\n  .examples-grid,\n  .event-grid,\n  .endpoint-grid,\n  .code-layer-grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n  }\n\n  .market-toolbar .reload-button {\n    margin-left: 0;\n  }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<main>\n  <header>\n    <div class=\"header-copy\">\n      <span>Angular CLI 1.7.4 / Angular 5.2.11 runtime</span>\n      <h1>@stackline/angular-highcharts 5.0.0</h1>\n      <p>Project generated with the Angular 5 CLI blueprint and running the published Angular 5 package line.</p>\n    </div>\n    <nav class=\"route-tabs\">\n      <a href=\"./\" [class.active]=\"viewMode === 'dynamic'\">Live dynamic examples</a>\n      <a href=\"static\" [class.active]=\"viewMode === 'static'\">Static examples</a>\n    </nav>\n  </header>\n\n  <div *ngIf=\"viewMode === 'dynamic'\">\n    <section\n      class=\"chart-card live-market-card\"\n      [class.market-light]=\"binanceTheme === 'light'\"\n      [class.market-dark]=\"binanceTheme === 'dark'\"\n    >\n      <div class=\"chart-head market-head\">\n        <div>\n          <h2>Live crypto candles</h2>\n          <p>REST candle history from Binance through the Mask API with realtime WebSocket candle updates.</p>\n        </div>\n        <span>StockChart</span>\n      </div>\n\n      <div class=\"market-toolbar\">\n        <div>\n          <strong>Theme</strong>\n          <button type=\"button\" [class.active]=\"binanceTheme === 'dark'\" (click)=\"selectBinanceTheme('dark')\">Dark</button>\n          <button type=\"button\" [class.active]=\"binanceTheme === 'light'\" (click)=\"selectBinanceTheme('light')\">Light</button>\n        </div>\n        <div>\n          <strong>Symbol</strong>\n          <button type=\"button\" *ngFor=\"let symbol of binanceSymbols\" [class.active]=\"symbol === binanceSymbol\" (click)=\"selectBinanceSymbol(symbol)\">{{ symbol }}</button>\n        </div>\n        <div>\n          <strong>Interval</strong>\n          <button type=\"button\" *ngFor=\"let interval of binanceIntervals\" [class.active]=\"interval === binanceInterval\" (click)=\"selectBinanceInterval(interval)\">{{ interval }}</button>\n        </div>\n        <button type=\"button\" class=\"reload-button\" (click)=\"reloadBinanceChart()\">Reload</button>\n      </div>\n\n      <div class=\"market-ticker\" *ngIf=\"binanceLastCandle\">\n        <span>Open <strong>{{ formatPrice(binanceLastCandle.open) }}</strong></span>\n        <span>High <strong>{{ formatPrice(binanceLastCandle.high) }}</strong></span>\n        <span>Low <strong>{{ formatPrice(binanceLastCandle.low) }}</strong></span>\n        <span>Close <strong>{{ formatPrice(binanceLastCandle.close) }}</strong></span>\n        <span [class.positive]=\"binanceLastCandle.changePercent >= 0\" [class.negative]=\"binanceLastCandle.changePercent < 0\">Change <strong>{{ formatPercent(binanceLastCandle.changePercent) }}</strong></span>\n      </div>\n\n      <div class=\"market-status\">\n        <span>{{ binanceStatus }}</span>\n        <span>{{ binanceSocketStatus }}</span>\n        <span>{{ binanceCandleCount }} candles</span>\n      </div>\n\n      <div class=\"chart-frame market-frame\">\n        <chart [type]=\"'StockChart'\" [options]=\"binanceOptions\" (create)=\"onBinanceChartCreate($event)\"></chart>\n      </div>\n\n      <div class=\"endpoint-grid\">\n        <div>\n          <strong>REST history</strong>\n          <code>{{ binanceRestUrl || 'Waiting for REST endpoint...' }}</code>\n        </div>\n        <div>\n          <strong>Realtime WebSocket</strong>\n          <code>{{ binanceWsUrl || 'Waiting for WebSocket endpoint...' }}</code>\n        </div>\n      </div>\n\n      <details class=\"tutorial-collapse\">\n        <summary>\n          <span>Open tutorial</span>\n          <small>HTML / TS / SCSS</small>\n        </summary>\n        <div class=\"code-layer-grid\">\n          <div>\n            <h4>HTML</h4>\n            <pre>{{ binanceTutorialHtml }}</pre>\n          </div>\n          <div>\n            <h4>TS</h4>\n            <pre>{{ binanceTutorialTs }}</pre>\n          </div>\n          <div>\n            <h4>SCSS</h4>\n            <pre>{{ binanceTutorialScss }}</pre>\n          </div>\n        </div>\n      </details>\n    </section>\n\n    <section class=\"examples-grid\">\n      <article class=\"chart-card\" *ngFor=\"let example of dynamicExamples\">\n        <div class=\"chart-head\">\n          <div>\n            <h3>{{ example.title }}</h3>\n            <p>{{ example.description }}</p>\n          </div>\n          <span>Live</span>\n        </div>\n\n        <div class=\"chart-frame\">\n          <chart [options]=\"example.options\" (create)=\"onDynamicChartCreate(example, $event)\"></chart>\n        </div>\n\n        <details class=\"tutorial-collapse\">\n          <summary>\n            <span>Open tutorial</span>\n            <small>HTML / TS / SCSS</small>\n          </summary>\n          <div class=\"code-layer-grid\">\n            <div>\n              <h4>HTML</h4>\n              <pre>{{ example.tutorialHtml }}</pre>\n            </div>\n            <div>\n              <h4>TS</h4>\n              <pre>{{ example.tutorialTs }}</pre>\n            </div>\n            <div>\n              <h4>SCSS</h4>\n              <pre>{{ example.tutorialScss }}</pre>\n            </div>\n          </div>\n        </details>\n      </article>\n    </section>\n  </div>\n\n  <div *ngIf=\"viewMode === 'static'\">\n    <section class=\"panel intro-panel\">\n      <div>\n        <h2>Static examples</h2>\n        <p>Original one-row examples with fixed demo option objects.</p>\n      </div>\n      <div class=\"status-pill\">Secondary URL</div>\n    </section>\n\n    <section class=\"examples-grid\">\n      <article class=\"chart-card\" *ngFor=\"let example of examples\">\n        <div class=\"chart-head\">\n          <div>\n            <h3>{{ example.title }}</h3>\n            <p>{{ example.description }}</p>\n          </div>\n          <span>{{ example.constructorType || 'Chart' }}</span>\n        </div>\n\n        <div class=\"chart-frame\">\n          <chart [type]=\"example.constructorType || 'Chart'\" [options]=\"example.options\" (create)=\"onCreate(example.title, $event)\"></chart>\n        </div>\n\n        <details class=\"tutorial-collapse\">\n          <summary>\n            <span>Open tutorial</span>\n            <small>HTML / TS / SCSS</small>\n          </summary>\n          <div class=\"code-layer-grid\">\n            <div>\n              <h4>HTML</h4>\n              <pre>{{ example.tutorialHtml }}</pre>\n            </div>\n            <div>\n              <h4>TS</h4>\n              <pre>{{ example.tutorialTs }}</pre>\n            </div>\n            <div>\n              <h4>SCSS</h4>\n              <pre>{{ example.tutorialScss }}</pre>\n            </div>\n          </div>\n        </details>\n      </article>\n    </section>\n\n    <section class=\"panel feature-panel\">\n      <div class=\"chart-head\">\n        <div>\n          <h2>Dynamic update</h2>\n          <p>Replaces the options object to validate the Angular 5 input binding.</p>\n        </div>\n        <button type=\"button\" (click)=\"randomizeDynamicChart()\">Update data</button>\n      </div>\n\n      <div class=\"chart-frame large\">\n        <chart [options]=\"dynamicOptions\" (create)=\"onCreate('Dynamic update', $event)\"></chart>\n      </div>\n\n      <details class=\"tutorial-collapse\">\n        <summary>\n          <span>Open tutorial</span>\n          <small>HTML / TS / SCSS</small>\n        </summary>\n        <div class=\"code-layer-grid\">\n          <div>\n            <h4>HTML</h4>\n            <pre>{{ dynamicTutorialHtml }}</pre>\n          </div>\n          <div>\n            <h4>TS</h4>\n            <pre>{{ dynamicTutorialTs }}</pre>\n          </div>\n          <div>\n            <h4>SCSS</h4>\n            <pre>{{ dynamicTutorialScss }}</pre>\n          </div>\n        </div>\n      </details>\n    </section>\n\n    <section class=\"panel feature-panel\">\n      <div class=\"chart-head\">\n        <div>\n          <h2>Directive and event outputs</h2>\n          <p>Projected wrapper directives wire chart, series, point and axis events.</p>\n        </div>\n      </div>\n\n      <div class=\"chart-frame large\">\n        <chart [options]=\"directiveOptions\" (create)=\"onCreate('Directive chart', $event)\" (load)=\"record('chart load')\" (redraw)=\"record('chart redraw')\">\n          <series (click)=\"record('series click')\" (legendItemClick)=\"record('legend click')\">\n            <point (click)=\"record('point click')\" (mouseOver)=\"record('point hover')\"></point>\n          </series>\n          <xAxis (setExtremes)=\"record('xAxis extremes')\"></xAxis>\n          <yAxis (setExtremes)=\"record('yAxis extremes')\"></yAxis>\n        </chart>\n      </div>\n\n      <details class=\"tutorial-collapse\">\n        <summary>\n          <span>Open tutorial</span>\n          <small>HTML / TS / SCSS</small>\n        </summary>\n        <div class=\"code-layer-grid\">\n          <div>\n            <h4>HTML</h4>\n            <pre>{{ directiveTutorialHtml }}</pre>\n          </div>\n          <div>\n            <h4>TS</h4>\n            <pre>{{ directiveTutorialTs }}</pre>\n          </div>\n          <div>\n            <h4>SCSS</h4>\n            <pre>{{ directiveTutorialScss }}</pre>\n          </div>\n        </div>\n      </details>\n\n      <div class=\"event-log\">\n        <strong>Event log</strong>\n        <p *ngIf=\"!events.length\">Interact with the chart to collect events.</p>\n        <ul>\n          <li *ngFor=\"let event of events\">{{ event }}</li>\n        </ul>\n      </div>\n    </section>\n  </div>\n\n  <footer class=\"panel capabilities-footer\">\n    <h2>Wrapper capabilities</h2>\n    <div class=\"capability-grid\">\n      <div>\n        <strong>Options API</strong>\n        <span><code>&lt;chart [options]=\"options\"&gt;</code></span>\n      </div>\n      <div>\n        <strong>Constructor switch</strong>\n        <span><code>[type]=\"'StockChart'\"</code></span>\n      </div>\n      <div>\n        <strong>Directive events</strong>\n        <span><code>&lt;series&gt;</code>, <code>&lt;point&gt;</code>, <code>&lt;xAxis&gt;</code>, <code>&lt;yAxis&gt;</code></span>\n      </div>\n      <div>\n        <strong>Highcharts modules</strong>\n        <span>more, 3d, heatmap, treemap, funnel, solid-gauge, stock, map, drilldown</span>\n      </div>\n    </div>\n  </footer>\n</main>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        var _this = this;
        this.viewMode = 'dynamic';
        this.events = [];
        this.dynamicData = [29, 42, 55, 61, 73, 88];
        this.binanceSymbol = 'BNBUSDT';
        this.binanceInterval = '1s';
        this.binanceTheme = 'light';
        this.binanceSymbols = ['BNBUSDT', 'BTCUSDT'];
        this.binanceIntervals = ['1s', '1m', '15m', '1h', '4h', '1d', '1w'];
        // Mask API: keep Binance as the data source, but route browser traffic through
        // api-b.alexandro.net because some networks block requests by Binance domain.
        this.maskApiRestBaseUrl = 'https://api-b.alexandro.net';
        this.maskApiWsBaseUrl = 'wss://api-b.alexandro.net';
        this.binanceRestHosts = [
            this.maskApiRestBaseUrl + '/api/v3/klines',
            this.maskApiRestBaseUrl + '/data-api/api/v3/klines'
        ];
        this.binanceWsBaseUrl = this.maskApiWsBaseUrl + '/ws/';
        this.binanceWsUrl = '';
        this.binanceRestUrl = '';
        this.binanceStatus = 'Loading REST candles...';
        this.binanceSocketStatus = 'WebSocket disconnected';
        this.binanceCandleCount = 0;
        this.binanceLastCandle = null;
        this.binanceOptions = this.createBinanceOptions();
        this.binanceChart = null;
        this.binanceSocket = null;
        this.binanceOhlcData = [];
        this.binanceVolumeData = [];
        this.marketSymbols = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'SOLUSDT', 'XRPUSDT', 'ADAUSDT', 'DOGEUSDT', 'TRXUSDT'];
        this.marketRestUrl = '';
        this.marketWsUrl = '';
        this.marketStatus = 'Waiting for market stream';
        this.marketTickers = {};
        this.marketHistory = {};
        this.cryptoTreemapUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=24h';
        this.cryptoTreemapStatus = 'Loading CoinGecko top 50 market cap snapshot...';
        this.cryptoTreemapRows = [];
        this.dynamicExamples = [];
        this.marketSocket = null;
        this.marketSnapshotTimer = null;
        this.marketSnapshotLoading = false;
        this.cryptoTreemapTimer = null;
        this.cryptoTreemapLoading = false;
        this.dynamicRefreshTimer = null;
        this.dynamicRefreshQueued = false;
        this.dynamicCharts = {};
        this.examples = [
            this.makeBasic('Line chart', 'Default Highcharts.Chart with a line series.', 'line'),
            this.makeBasic('Spline chart', 'Smooth line series with regular categories.', 'spline'),
            this.makeBasic('Area chart', 'Filled area series for trend volume.', 'area'),
            this.makeBasic('Areaspline chart', 'Smooth filled area series.', 'areaspline'),
            this.makeBasic('Column chart', 'Vertical columns for category comparison.', 'column'),
            this.makeBasic('Bar chart', 'Horizontal bars for compact comparisons.', 'bar'),
            this.makeStackedColumn(),
            this.makePie(),
            this.makeDonut(),
            this.makeScatter(),
            this.makeBubble(),
            this.makeCombination(),
            this.makePolar(),
            this.makeGauge(),
            this.makeSolidGauge(),
            this.makeHeatmap(),
            this.makeTreemap(),
            this.makeFunnel(),
            this.make3dColumn(),
            this.makeStockChart(),
            this.makeMapLikeChart(),
            this.makeNoDataChart()
        ].map(function (example) { return _this.withTutorial(example); });
        this.dynamicOptions = this.createDynamicOptions();
        this.dynamicHtml = "<button (click)=\"randomizeDynamicChart()\">Update data</button>\n<chart [options]=\"dynamicOptions\" (create)=\"onCreate('Dynamic update', $event)\"></chart>";
        this.dynamicTutorialHtml = this.wrapTutorialHtml(this.dynamicHtml);
        this.dynamicTutorialTs = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'dynamic-chart-example',\n  templateUrl: './dynamic-chart-example.component.html',\n  styleUrls: ['./dynamic-chart-example.component.css']\n})\nexport class DynamicChartExampleComponent {\n  dynamicData = [29, 42, 55, 61, 73, 88];\n  dynamicOptions: any = this.createDynamicOptions();\n\n  randomizeDynamicChart() {\n    this.dynamicData = this.dynamicData.map(function () {\n      return Math.round(20 + Math.random() * 90);\n    });\n    this.dynamicOptions = this.createDynamicOptions();\n  }\n\n  onCreate(chart: any) {\n    console.log('Dynamic chart created', chart.series.length);\n  }\n\n  private createDynamicOptions() {\n    return {\n      chart: { type: 'line', height: 340 },\n      title: { text: 'Dynamic update' },\n      subtitle: { text: 'Changing the options object re-initializes the wrapper' },\n      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },\n      yAxis: { title: { text: 'Requests' } },\n      series: [{ name: 'Updated data', data: this.dynamicData }]\n    };\n  }\n}";
        this.dynamicTutorialScss = this.defaultTutorialScss(340);
        this.directiveOptions = {
            chart: { type: 'column', height: 340 },
            title: { text: 'Directive/event wiring' },
            subtitle: { text: '<series>, <point>, <xAxis> and <yAxis> outputs' },
            xAxis: { categories: ['North', 'South', 'East', 'West'] },
            yAxis: { title: { text: 'Tickets' } },
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {}
                    }
                }
            },
            series: [
                { name: 'Open', data: [12, 18, 9, 15] },
                { name: 'Closed', data: [9, 13, 7, 11] }
            ]
        };
        this.directiveHtml = "<chart\n  [options]=\"directiveOptions\"\n  (create)=\"onCreate('Directive chart', $event)\"\n  (load)=\"record('chart load')\"\n  (redraw)=\"record('chart redraw')\"\n>\n  <series\n    (click)=\"record('series click')\"\n    (legendItemClick)=\"record('legend click')\"\n  >\n    <point\n      (click)=\"record('point click')\"\n      (mouseOver)=\"record('point hover')\"\n    ></point>\n  </series>\n  <xAxis (setExtremes)=\"record('xAxis extremes')\"></xAxis>\n  <yAxis (setExtremes)=\"record('yAxis extremes')\"></yAxis>\n</chart>";
        this.directiveTutorialHtml = this.wrapTutorialHtml(this.directiveHtml);
        this.directiveTutorialTs = "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'directive-events-example',\n  templateUrl: './directive-events-example.component.html',\n  styleUrls: ['./directive-events-example.component.css']\n})\nexport class DirectiveEventsExampleComponent {\n  events: string[] = [];\n\n  directiveOptions: any = {\n    chart: { type: 'column', height: 340 },\n    title: { text: 'Directive/event wiring' },\n    subtitle: { text: '<series>, <point>, <xAxis> and <yAxis> outputs' },\n    xAxis: { categories: ['North', 'South', 'East', 'West'] },\n    yAxis: { title: { text: 'Tickets' } },\n    plotOptions: {\n      series: {\n        cursor: 'pointer',\n        point: { events: {} }\n      }\n    },\n    series: [\n      { name: 'Open', data: [12, 18, 9, 15] },\n      { name: 'Closed', data: [9, 13, 7, 11] }\n    ]\n  };\n\n  onCreate(chart: any) {\n    this.record('chart created with ' + chart.series.length + ' series');\n  }\n\n  record(message: string) {\n    this.events.unshift(new Date().toLocaleTimeString() + ' - ' + message);\n    this.events = this.events.slice(0, 8);\n  }\n}";
        this.directiveTutorialScss = this.defaultTutorialScss(340);
        this.binanceTutorialHtml = "<section\n  class=\"live-market-card\"\n  [class.market-light]=\"binanceTheme === 'light'\"\n  [class.market-dark]=\"binanceTheme === 'dark'\"\n>\n  <div class=\"market-toolbar\">\n    <button type=\"button\" (click)=\"selectBinanceTheme('dark')\">Dark</button>\n    <button type=\"button\" (click)=\"selectBinanceTheme('light')\">Light</button>\n    <button type=\"button\" (click)=\"selectBinanceSymbol('BNBUSDT')\">BNBUSDT</button>\n    <button type=\"button\" (click)=\"selectBinanceSymbol('BTCUSDT')\">BTCUSDT</button>\n    <button type=\"button\" (click)=\"selectBinanceInterval('1s')\">1s</button>\n    <button type=\"button\" (click)=\"selectBinanceInterval('1m')\">1m</button>\n    <button type=\"button\" (click)=\"selectBinanceInterval('1d')\">1d</button>\n  </div>\n\n  <chart\n    [type]=\"'StockChart'\"\n    [options]=\"binanceOptions\"\n    (create)=\"onBinanceChartCreate($event)\"\n  ></chart>\n</section>";
        this.binanceTutorialTs = "import { Component, OnDestroy, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'binance-candles-example',\n  templateUrl: './binance-candles-example.component.html',\n  styleUrls: ['./binance-candles-example.component.css']\n})\nexport class BinanceCandlesExampleComponent implements OnInit, OnDestroy {\n  binanceSymbol = 'BNBUSDT';\n  binanceInterval = '1s';\n  binanceTheme = 'light';\n  binanceRestHosts = [\n    'https://api-b.alexandro.net/api/v3/klines',\n    'https://api-b.alexandro.net/data-api/api/v3/klines'\n  ];\n  // Mask API: the example still uses Binance public market data, but browser\n  // requests go through api-b.alexandro.net to avoid firewall/domain blocks.\n  binanceWsBaseUrl = 'wss://api-b.alexandro.net/ws/';\n  binanceOptions: any = this.createBinanceOptions();\n\n  private binanceChart: any = null;\n  private binanceSocket: any = null;\n  private binanceOhlcData: any[] = [];\n  private binanceVolumeData: any[] = [];\n\n  ngOnInit() {\n    this.loadBinanceHistory();\n  }\n\n  ngOnDestroy() {\n    this.disconnectBinanceSocket();\n  }\n\n  onBinanceChartCreate(chart: any) {\n    this.binanceChart = chart;\n    this.applyBinanceSeries();\n  }\n\n  selectBinanceTheme(theme: string) {\n    this.binanceTheme = theme;\n    this.binanceOptions = this.createBinanceOptions();\n    if (this.binanceChart && this.binanceChart.update) {\n      this.binanceChart.update(this.binanceOptions, false);\n      this.applyBinanceSeries();\n    }\n  }\n\n  selectBinanceSymbol(symbol: string) {\n    this.binanceSymbol = symbol;\n    this.loadBinanceHistory();\n  }\n\n  selectBinanceInterval(interval: string) {\n    this.binanceInterval = interval;\n    this.loadBinanceHistory();\n  }\n\n  private loadBinanceHistory() {\n    this.disconnectBinanceSocket();\n    var url = this.binanceRestHosts[0] +\n      '?symbol=' + this.binanceSymbol +\n      '&interval=' + this.binanceInterval +\n      '&limit=300';\n    var xhr = new XMLHttpRequest();\n\n    xhr.onreadystatechange = () => {\n      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {\n        this.receiveBinanceHistory(JSON.parse(xhr.responseText));\n      }\n    };\n\n    xhr.open('GET', url, true);\n    xhr.send();\n  }\n\n  private receiveBinanceHistory(candles: any[]) {\n    this.binanceOhlcData = [];\n    this.binanceVolumeData = [];\n\n    for (var i = 0; i < candles.length; i++) {\n      var candle = candles[i];\n      var point = [\n        parseInt(candle[0], 10),\n        parseFloat(candle[1]),\n        parseFloat(candle[2]),\n        parseFloat(candle[3]),\n        parseFloat(candle[4])\n      ];\n      this.binanceOhlcData.push(point);\n      this.binanceVolumeData.push({\n        x: point[0],\n        y: parseFloat(candle[5]),\n        color: point[4] >= point[1] ? '#02c076' : '#f6465d'\n      });\n    }\n\n    this.applyBinanceSeries();\n    this.connectBinanceSocket();\n  }\n\n  private connectBinanceSocket() {\n    var url = this.binanceWsBaseUrl +\n      this.binanceSymbol.toLowerCase() +\n      '@kline_' +\n      this.binanceInterval;\n    this.binanceSocket = new WebSocket(url);\n\n    this.binanceSocket.onmessage = (message: any) => {\n      var payload = JSON.parse(message.data);\n      if (payload && payload.k) {\n        this.receiveLiveCandle(payload.k);\n      }\n    };\n  }\n\n  private receiveLiveCandle(kline: any) {\n    var point = [\n      kline.t,\n      parseFloat(kline.o),\n      parseFloat(kline.h),\n      parseFloat(kline.l),\n      parseFloat(kline.c)\n    ];\n    this.binanceOhlcData[this.binanceOhlcData.length - 1] = point;\n    this.applyBinanceSeries();\n  }\n\n  private applyBinanceSeries() {\n    if (!this.binanceChart || !this.binanceChart.series) {\n      return;\n    }\n    this.binanceChart.series[0].setData(this.binanceOhlcData.slice(0), false);\n    this.binanceChart.series[1].setData(this.calculateMovingAverage(7), false);\n    this.binanceChart.series[2].setData(this.calculateMovingAverage(25), false);\n    this.binanceChart.series[3].setData(this.calculateMovingAverage(99), false);\n    this.binanceChart.series[4].setData(this.binanceVolumeData.slice(0), false);\n    this.binanceChart.redraw();\n  }\n\n  private calculateMovingAverage(period: number) {\n    var result: any[] = [];\n    var sum = 0;\n    for (var i = 0; i < this.binanceOhlcData.length; i++) {\n      sum += this.binanceOhlcData[i][4];\n      if (i >= period) {\n        sum -= this.binanceOhlcData[i - period][4];\n      }\n      if (i >= period - 1) {\n        result.push([this.binanceOhlcData[i][0], sum / period]);\n      }\n    }\n    return result;\n  }\n\n  private disconnectBinanceSocket() {\n    if (this.binanceSocket) {\n      this.binanceSocket.close();\n      this.binanceSocket = null;\n    }\n  }\n\n  private createBinanceOptions() {\n    return {\n      chart: { height: 560, backgroundColor: '#ffffff', plotBackgroundColor: '#ffffff' },\n      title: { text: this.binanceSymbol + ' live candles' },\n      rangeSelector: { enabled: false },\n      navigator: { enabled: false },\n      scrollbar: { enabled: false },\n      yAxis: [{ height: '68%' }, { top: '73%', height: '22%', offset: 0 }],\n      plotOptions: {\n        candlestick: {\n          color: '#f6465d',\n          upColor: '#02c076',\n          lineColor: '#f6465d',\n          upLineColor: '#02c076'\n        },\n        series: { animation: false, turboThreshold: 0 }\n      },\n      series: [\n        { type: 'candlestick', name: 'Price', data: [] },\n        { type: 'line', name: 'MA(7)', data: [], color: '#f5d300' },\n        { type: 'line', name: 'MA(25)', data: [], color: '#ff4ec9' },\n        { type: 'line', name: 'MA(99)', data: [], color: '#8e44ad' },\n        { type: 'column', name: 'Volume', data: [], yAxis: 1 }\n      ]\n    };\n  }\n}";
        this.binanceTutorialScss = ".live-market-card {\n  padding: 18px;\n  border: 1px solid #d9e5ee;\n  border-radius: 8px;\n  background: #fff;\n}\n\n.market-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\nbutton {\n  min-height: 32px;\n  padding: 0 12px;\n  border: 1px solid #d0d5dd;\n  border-radius: 6px;\n  background: #fff;\n  color: #344054;\n  cursor: pointer;\n}\n\nchart {\n  display: block;\n  width: 100%;\n  min-height: 560px;\n}";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.readRoute();
        this.readInitialBinanceTheme();
        this.binanceOptions = this.createBinanceOptions();
        this.dynamicExamples = this.createDynamicMarketExamples();
        if (this.viewMode === 'dynamic') {
            this.loadBinanceHistory();
            this.loadMarketTickerSnapshot();
            this.marketSnapshotTimer = setInterval(function () { return _this.loadMarketTickerSnapshot(false); }, 20000);
            this.loadCryptoTreemapSnapshot();
            this.cryptoTreemapTimer = setInterval(function () { return _this.loadCryptoTreemapSnapshot(false); }, 60000);
            this.connectMarketTickerStream();
        }
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.disconnectBinanceSocket();
        this.disconnectMarketTickerStream();
        if (this.dynamicRefreshTimer) {
            clearTimeout(this.dynamicRefreshTimer);
            this.dynamicRefreshTimer = null;
        }
        if (this.marketSnapshotTimer) {
            clearInterval(this.marketSnapshotTimer);
            this.marketSnapshotTimer = null;
        }
        if (this.cryptoTreemapTimer) {
            clearInterval(this.cryptoTreemapTimer);
            this.cryptoTreemapTimer = null;
        }
        this.dynamicCharts = {};
    };
    AppComponent.prototype.readRoute = function () {
        var path = window.location && window.location.pathname ? window.location.pathname : '/';
        this.viewMode = path.indexOf('/static') >= 0 ? 'static' : 'dynamic';
    };
    AppComponent.prototype.onBinanceChartCreate = function (chart) {
        this.binanceChart = chart;
        this.applyBinanceSeries();
    };
    AppComponent.prototype.selectBinanceSymbol = function (symbol) {
        if (this.binanceSymbol === symbol) {
            return;
        }
        this.binanceSymbol = symbol;
        this.loadBinanceHistory();
    };
    AppComponent.prototype.selectBinanceInterval = function (interval) {
        if (this.binanceInterval === interval) {
            return;
        }
        this.binanceInterval = interval;
        this.loadBinanceHistory();
    };
    AppComponent.prototype.selectBinanceTheme = function (theme) {
        if (this.binanceTheme === theme) {
            return;
        }
        this.binanceTheme = theme;
        this.binanceOptions = this.createBinanceOptions();
        if (this.binanceChart && this.binanceChart.update) {
            this.binanceChart.update(this.binanceOptions, false);
            this.applyBinanceSeries();
        }
    };
    AppComponent.prototype.reloadBinanceChart = function () {
        this.loadBinanceHistory();
    };
    AppComponent.prototype.loadBinanceHistory = function () {
        this.disconnectBinanceSocket();
        this.binanceOhlcData = [];
        this.binanceVolumeData = [];
        this.binanceCandleCount = 0;
        this.binanceLastCandle = null;
        this.binanceStatus = 'Loading REST candles for ' + this.binanceSymbol + ' ' + this.binanceInterval + '...';
        this.binanceSocketStatus = 'Waiting for REST history';
        this.applyBinanceSeries();
        this.loadBinanceHistoryFromHost(0);
    };
    AppComponent.prototype.readInitialBinanceTheme = function () {
        var search = window.location && window.location.search ? window.location.search : '';
        if (search.indexOf('theme=dark') !== -1) {
            this.binanceTheme = 'dark';
        }
    };
    AppComponent.prototype.loadMarketTickerSnapshot = function (showLoading) {
        var _this = this;
        if (this.marketSnapshotLoading) {
            return;
        }
        var symbolsParam = encodeURIComponent(JSON.stringify(this.marketSymbols));
        var url = this.maskApiRestBaseUrl + '/api/v3/ticker/24hr?symbols=' + symbolsParam;
        var xhr = new XMLHttpRequest();
        this.marketSnapshotLoading = true;
        this.marketRestUrl = url;
        if (showLoading !== false) {
            this.marketStatus = 'Loading tracked 24hr ticker snapshot...';
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            _this.marketSnapshotLoading = false;
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    var tickers = JSON.parse(xhr.responseText);
                    for (var i = 0; i < tickers.length; i++) {
                        _this.receiveMarketTicker(_this.normalizeRestTicker(tickers[i]));
                    }
                    _this.marketStatus = 'REST ticker snapshot loaded';
                    _this.refreshDynamicExamples();
                }
                catch (error) {
                    _this.marketStatus = 'REST ticker parse failed';
                }
            }
            else {
                _this.marketStatus = 'REST ticker snapshot failed';
            }
        };
        xhr.onerror = function () {
            _this.marketSnapshotLoading = false;
            _this.marketStatus = 'REST ticker snapshot failed';
        };
        xhr.open('GET', url, true);
        xhr.send();
    };
    AppComponent.prototype.loadCryptoTreemapSnapshot = function (showLoading) {
        var _this = this;
        if (this.cryptoTreemapLoading) {
            return;
        }
        var xhr = new XMLHttpRequest();
        this.cryptoTreemapLoading = true;
        if (showLoading !== false) {
            this.cryptoTreemapStatus = 'Loading CoinGecko top 50 market cap snapshot...';
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            _this.cryptoTreemapLoading = false;
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    var coins = JSON.parse(xhr.responseText);
                    var rows = [];
                    for (var i = 0; i < coins.length; i++) {
                        rows.push(_this.normalizeCoinGeckoCoin(coins[i]));
                    }
                    _this.cryptoTreemapRows = rows;
                    _this.cryptoTreemapStatus = 'CoinGecko market cap snapshot updated: top ' + rows.length;
                    _this.refreshDynamicExamples();
                }
                catch (error) {
                    _this.cryptoTreemapStatus = 'CoinGecko market cap parse failed';
                }
            }
            else {
                _this.cryptoTreemapStatus = 'CoinGecko market cap snapshot failed';
            }
        };
        xhr.onerror = function () {
            _this.cryptoTreemapLoading = false;
            _this.cryptoTreemapStatus = 'CoinGecko market cap snapshot failed';
        };
        xhr.open('GET', this.cryptoTreemapUrl, true);
        xhr.send();
    };
    AppComponent.prototype.connectMarketTickerStream = function () {
        var _this = this;
        this.disconnectMarketTickerStream();
        var streams = [];
        for (var i = 0; i < this.marketSymbols.length; i++) {
            streams.push(this.marketSymbols[i].toLowerCase() + '@miniTicker');
        }
        this.marketWsUrl = this.maskApiWsBaseUrl + '/stream?streams=' + streams.join('/');
        this.marketStatus = 'Connecting tracked market miniTicker stream...';
        try {
            this.marketSocket = new WebSocket(this.marketWsUrl);
        }
        catch (error) {
            this.marketStatus = 'Market WebSocket failed to start';
            return;
        }
        this.marketSocket.onopen = function () {
            _this.marketStatus = 'Live tracked market miniTicker connected';
        };
        this.marketSocket.onclose = function () {
            _this.marketStatus = 'Market WebSocket disconnected';
        };
        this.marketSocket.onerror = function () {
            _this.marketStatus = 'Market WebSocket error';
        };
        this.marketSocket.onmessage = function (message) {
            try {
                var payload = JSON.parse(message.data);
                var data = payload && payload.data ? payload.data : payload;
                if (data && data.length !== undefined) {
                    for (var i = 0; i < data.length; i++) {
                        _this.receiveMiniTickerPayload(data[i]);
                    }
                }
                else {
                    _this.receiveMiniTickerPayload(data);
                }
                _this.marketStatus = 'Live market miniTicker update: ' + new Date().toLocaleTimeString();
                _this.scheduleDynamicRefresh();
            }
            catch (error) {
                _this.marketStatus = 'Market WebSocket parse error';
            }
        };
    };
    AppComponent.prototype.disconnectMarketTickerStream = function () {
        if (!this.marketSocket) {
            return;
        }
        this.marketSocket.onopen = null;
        this.marketSocket.onclose = null;
        this.marketSocket.onerror = null;
        this.marketSocket.onmessage = null;
        this.marketSocket.close();
        this.marketSocket = null;
    };
    AppComponent.prototype.normalizeRestTicker = function (ticker) {
        return {
            symbol: ticker.symbol,
            price: parseFloat(ticker.lastPrice),
            open: parseFloat(ticker.openPrice),
            high: parseFloat(ticker.highPrice),
            low: parseFloat(ticker.lowPrice),
            volume: parseFloat(ticker.volume),
            quoteVolume: parseFloat(ticker.quoteVolume),
            changePercent: parseFloat(ticker.priceChangePercent)
        };
    };
    AppComponent.prototype.normalizeCoinGeckoCoin = function (coin) {
        return {
            name: this.safeTreemapText(coin.name || ''),
            symbol: this.safeTreemapText((coin.symbol || '').toUpperCase()),
            price: parseFloat(coin.current_price),
            marketCap: parseFloat(coin.market_cap),
            changePercent: parseFloat(coin.price_change_percentage_24h)
        };
    };
    AppComponent.prototype.safeTreemapText = function (value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    };
    AppComponent.prototype.normalizeMiniTicker = function (ticker) {
        var open = parseFloat(ticker.o);
        var close = parseFloat(ticker.c);
        return {
            symbol: ticker.s,
            price: close,
            open: open,
            high: parseFloat(ticker.h),
            low: parseFloat(ticker.l),
            volume: parseFloat(ticker.v),
            quoteVolume: parseFloat(ticker.q),
            changePercent: open ? (close - open) / open * 100 : 0
        };
    };
    AppComponent.prototype.receiveMiniTickerPayload = function (data) {
        var ticker = this.normalizeMiniTicker(data);
        if (this.isTrackedMarketSymbol(ticker.symbol)) {
            this.receiveMarketTicker(ticker);
        }
    };
    AppComponent.prototype.receiveMarketTicker = function (ticker) {
        if (!ticker || !ticker.symbol) {
            return;
        }
        this.marketTickers[ticker.symbol] = ticker;
        if (!this.marketHistory[ticker.symbol]) {
            this.marketHistory[ticker.symbol] = [];
        }
        this.marketHistory[ticker.symbol].push([Date.now(), ticker.price]);
        while (this.marketHistory[ticker.symbol].length > 60) {
            this.marketHistory[ticker.symbol].shift();
        }
    };
    AppComponent.prototype.isTrackedMarketSymbol = function (symbol) {
        for (var i = 0; i < this.marketSymbols.length; i++) {
            if (this.marketSymbols[i] === symbol) {
                return true;
            }
        }
        return false;
    };
    AppComponent.prototype.scheduleDynamicRefresh = function () {
        var _this = this;
        if (this.dynamicRefreshQueued) {
            return;
        }
        this.dynamicRefreshQueued = true;
        this.dynamicRefreshTimer = setTimeout(function () {
            _this.dynamicRefreshQueued = false;
            _this.dynamicRefreshTimer = null;
            _this.refreshDynamicExamples();
        }, 900);
    };
    AppComponent.prototype.refreshDynamicExamples = function () {
        this.updateAllDynamicCharts();
    };
    AppComponent.prototype.loadBinanceHistoryFromHost = function (index) {
        var _this = this;
        if (index >= this.binanceRestHosts.length) {
            this.binanceStatus = 'REST history failed on both Binance endpoints.';
            this.binanceSocketStatus = 'WebSocket not started';
            return;
        }
        var url = this.binanceRestHosts[index] +
            '?symbol=' + encodeURIComponent(this.binanceSymbol) +
            '&interval=' + encodeURIComponent(this.binanceInterval) +
            '&limit=300';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    var candles = JSON.parse(xhr.responseText);
                    _this.receiveBinanceHistory(candles, url);
                }
                catch (error) {
                    _this.loadBinanceHistoryFromHost(index + 1);
                }
                return;
            }
            _this.loadBinanceHistoryFromHost(index + 1);
        };
        xhr.onerror = function () { return _this.loadBinanceHistoryFromHost(index + 1); };
        xhr.open('GET', url, true);
        xhr.send();
    };
    AppComponent.prototype.receiveBinanceHistory = function (candles, url) {
        var ohlc = [];
        var volume = [];
        for (var i = 0; i < candles.length; i++) {
            var candle = candles[i];
            var point = this.toOhlcPoint(candle);
            ohlc.push(point);
            volume.push({
                x: point[0],
                y: parseFloat(candle[5]),
                color: point[4] >= point[1] ? '#02c076' : '#f6465d'
            });
        }
        this.binanceOhlcData = ohlc;
        this.binanceVolumeData = volume;
        this.binanceRestUrl = url;
        this.binanceCandleCount = ohlc.length;
        this.binanceLastCandle = this.createCandleMeta(ohlc[ohlc.length - 1]);
        this.binanceStatus = 'REST candles loaded from ' + this.shortUrl(url);
        this.applyBinanceSeries();
        this.connectBinanceSocket();
    };
    AppComponent.prototype.connectBinanceSocket = function () {
        var _this = this;
        this.disconnectBinanceSocket();
        this.binanceWsUrl = this.binanceWsBaseUrl +
            this.binanceSymbol.toLowerCase() +
            '@kline_' +
            this.binanceInterval;
        this.binanceSocketStatus = 'Connecting to ' + this.binanceWsUrl;
        try {
            this.binanceSocket = new WebSocket(this.binanceWsUrl);
        }
        catch (error) {
            this.binanceSocketStatus = 'WebSocket failed to start';
            return;
        }
        this.binanceSocket.onopen = function () {
            _this.binanceSocketStatus = 'Live WebSocket connected';
        };
        this.binanceSocket.onclose = function () {
            _this.binanceSocketStatus = 'WebSocket disconnected';
        };
        this.binanceSocket.onerror = function () {
            _this.binanceSocketStatus = 'WebSocket error';
        };
        this.binanceSocket.onmessage = function (message) {
            try {
                var payload = JSON.parse(message.data);
                if (payload && payload.k) {
                    _this.receiveBinanceLiveCandle(payload.k);
                }
            }
            catch (error) {
                _this.binanceSocketStatus = 'WebSocket parse error';
            }
        };
    };
    AppComponent.prototype.disconnectBinanceSocket = function () {
        if (!this.binanceSocket) {
            return;
        }
        this.binanceSocket.onopen = null;
        this.binanceSocket.onclose = null;
        this.binanceSocket.onerror = null;
        this.binanceSocket.onmessage = null;
        this.binanceSocket.close();
        this.binanceSocket = null;
    };
    AppComponent.prototype.receiveBinanceLiveCandle = function (kline) {
        var point = [
            kline.t,
            parseFloat(kline.o),
            parseFloat(kline.h),
            parseFloat(kline.l),
            parseFloat(kline.c)
        ];
        var volumePoint = {
            x: point[0],
            y: parseFloat(kline.v),
            color: point[4] >= point[1] ? '#02c076' : '#f6465d'
        };
        this.upsertTimePoint(this.binanceOhlcData, point);
        this.upsertTimePoint(this.binanceVolumeData, volumePoint);
        this.trimBinanceData();
        this.binanceCandleCount = this.binanceOhlcData.length;
        this.binanceLastCandle = this.createCandleMeta(point);
        this.binanceSocketStatus = 'Live WebSocket update: ' + new Date().toLocaleTimeString();
        this.applyBinanceSeries();
    };
    AppComponent.prototype.upsertTimePoint = function (target, point) {
        var pointTime = point.x || point[0];
        var last = target.length ? target[target.length - 1] : null;
        var lastTime = last ? (last.x || last[0]) : null;
        if (last && lastTime === pointTime) {
            target[target.length - 1] = point;
            return;
        }
        target.push(point);
    };
    AppComponent.prototype.trimBinanceData = function () {
        while (this.binanceOhlcData.length > 300) {
            this.binanceOhlcData.shift();
        }
        while (this.binanceVolumeData.length > 300) {
            this.binanceVolumeData.shift();
        }
    };
    AppComponent.prototype.applyBinanceSeries = function () {
        if (!this.binanceChart || !this.binanceChart.series || this.binanceChart.series.length < 5) {
            return;
        }
        this.binanceChart.setTitle({ text: this.binanceSymbol + ' live candles' }, { text: 'REST history + Binance WebSocket updates (' + this.binanceInterval + ')' }, false);
        this.binanceChart.series[0].setData(this.binanceOhlcData.slice(0), false);
        this.binanceChart.series[1].setData(this.calculateMovingAverage(7), false);
        this.binanceChart.series[2].setData(this.calculateMovingAverage(25), false);
        this.binanceChart.series[3].setData(this.calculateMovingAverage(99), false);
        this.binanceChart.series[4].setData(this.binanceVolumeData.slice(0), false);
        this.binanceChart.redraw();
    };
    AppComponent.prototype.toOhlcPoint = function (candle) {
        return [
            parseInt(candle[0], 10),
            parseFloat(candle[1]),
            parseFloat(candle[2]),
            parseFloat(candle[3]),
            parseFloat(candle[4])
        ];
    };
    AppComponent.prototype.createCandleMeta = function (point) {
        if (!point) {
            return null;
        }
        var open = point[1];
        var close = point[4];
        var change = close - open;
        var changePercent = open ? change / open * 100 : 0;
        return {
            time: point[0],
            open: open,
            high: point[2],
            low: point[3],
            close: close,
            change: change,
            changePercent: changePercent
        };
    };
    AppComponent.prototype.calculateMovingAverage = function (period) {
        var result = [];
        var sum = 0;
        for (var i = 0; i < this.binanceOhlcData.length; i++) {
            sum += this.binanceOhlcData[i][4];
            if (i >= period) {
                sum -= this.binanceOhlcData[i - period][4];
            }
            if (i >= period - 1) {
                result.push([
                    this.binanceOhlcData[i][0],
                    parseFloat((sum / period).toFixed(4))
                ]);
            }
        }
        return result;
    };
    AppComponent.prototype.shortUrl = function (url) {
        return url.replace('https://', '').replace('wss://', '');
    };
    AppComponent.prototype.formatPrice = function (value) {
        if (value === null || typeof value === 'undefined') {
            return '--';
        }
        return value.toFixed(value >= 1000 ? 2 : 4);
    };
    AppComponent.prototype.formatPercent = function (value) {
        if (value === null || typeof value === 'undefined') {
            return '--';
        }
        return (value >= 0 ? '+' : '') + value.toFixed(2) + '%';
    };
    AppComponent.prototype.withTutorial = function (example) {
        var optionsName = this.extractOptionsName(example.html);
        var className = this.toComponentClassName(example.title);
        var wrappedHtml = this.wrapTutorialHtml(example.html);
        example.tutorialHtml = wrappedHtml;
        example.tutorialTs = "import { Component } from '@angular/core';\n\n@Component({\n  selector: '" + this.toSelectorName(example.title) + "',\n  templateUrl: './" + this.toFileName(example.title) + ".component.html',\n  styleUrls: ['./" + this.toFileName(example.title) + ".component.css']\n})\nexport class " + className + " {\n  " + optionsName + ": any = " + this.stringifyOptions(example.options) + ";\n\n  onCreate(chart: any) {\n    console.log('" + example.title + " created', chart.series.length);\n  }\n}";
        example.tutorialScss = this.defaultTutorialScss(example.options && example.options.chart && example.options.chart.height ? example.options.chart.height : 320);
        return example;
    };
    AppComponent.prototype.wrapTutorialHtml = function (html) {
        return "<div class=\"chart-shell\">\n  " + html + "\n</div>";
    };
    AppComponent.prototype.extractOptionsName = function (html) {
        var match = html.match(/\[options\]="([^"]+)"/);
        return match && match[1] ? match[1] : 'chartOptions';
    };
    AppComponent.prototype.stringifyOptions = function (options) {
        return JSON.stringify(options, null, 2)
            .replace(/"([^"]+)":/g, '$1:')
            .replace(/"/g, '\'');
    };
    AppComponent.prototype.toComponentClassName = function (title) {
        var name = this.toWords(title).join('');
        if (/^[0-9]/.test(name)) {
            name = 'Chart' + name;
        }
        return name + 'ExampleComponent';
    };
    AppComponent.prototype.toSelectorName = function (title) {
        return 'chart-' + this.toFileName(title);
    };
    AppComponent.prototype.toFileName = function (title) {
        return this.toWords(title).join('-').toLowerCase();
    };
    AppComponent.prototype.toWords = function (value) {
        var words = value.replace(/[^a-zA-Z0-9]+/g, ' ').split(' ');
        var clean = [];
        for (var i = 0; i < words.length; i++) {
            if (words[i]) {
                clean.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
            }
        }
        return clean.length ? clean : ['Chart'];
    };
    AppComponent.prototype.defaultTutorialScss = function (height) {
        return ".chart-shell {\n  width: 100%;\n  padding: 16px;\n  border: 1px solid #d9e5ee;\n  border-radius: 8px;\n  background: #fff;\n  box-sizing: border-box;\n}\n\nchart {\n  display: block;\n  width: 100%;\n  min-height: " + height + "px;\n}";
    };
    AppComponent.prototype.createDynamicMarketExamples = function () {
        var examples = [
            this.makeDynamicExample('Live crypto treemap', 'Top 50 coins sized by market cap and colored by 24h change.', 'liveTreemapOptions', this.createLiveTreemapOptions()),
            this.makeDynamicExample('Live price move line', 'Normalized live price movement from Binance miniTicker WebSocket.', 'liveLineOptions', this.createLiveLineOptions()),
            this.makeDynamicExample('Live price heartbeat spline', 'Heartbeat-style normalized pulse from live price and change data.', 'liveSplineOptions', this.createLiveSplineOptions()),
            this.makeDynamicExample('Live quote volume area', 'Area comparison using live quote volume.', 'liveAreaOptions', this.createLiveAreaOptions()),
            this.makeDynamicExample('Live quote volume areaspline', 'Smooth area chart from live quote volume.', 'liveAreasplineOptions', this.createLiveAreasplineOptions()),
            this.makeDynamicExample('Live change column', '24h percentage change updated by WebSocket.', 'liveColumnOptions', this.createLiveColumnOptions()),
            this.makeDynamicExample('Live volume bar', 'Horizontal bar chart from live quote volume.', 'liveBarOptions', this.createLiveBarOptions()),
            this.makeDynamicExample('Live stacked volume', 'Stacked columns splitting volume into base and quote-derived views.', 'liveStackedOptions', this.createLiveStackedOptions()),
            this.makeDynamicExample('Live volume pie', 'Volume share across tracked symbols.', 'livePieOptions', this.createLivePieOptions()),
            this.makeDynamicExample('Live volume donut', 'Donut variation of the same live volume share.', 'liveDonutOptions', this.createLiveDonutOptions()),
            this.makeDynamicExample('Live price scatter', 'Price versus quote volume for the tracked symbols.', 'liveScatterOptions', this.createLiveScatterOptions()),
            this.makeDynamicExample('Live change bubble', 'Change percent, price and volume in a bubble chart.', 'liveBubbleOptions', this.createLiveBubbleOptions()),
            this.makeDynamicExample('Live combo chart', 'Column volume plus spline change percent.', 'liveComboOptions', this.createLiveComboOptions()),
            this.makeDynamicExample('Live polar strength', 'Market strength rendered in polar/radar form.', 'livePolarOptions', this.createLivePolarOptions()),
            this.makeDynamicExample('Live BNB change gauge', 'Gauge driven by BNBUSDT 24h change.', 'liveGaugeOptions', this.createLiveGaugeOptions()),
            this.makeDynamicExample('Live market score solid gauge', 'Solid gauge score from the tracked symbols.', 'liveSolidGaugeOptions', this.createLiveSolidGaugeOptions()),
            this.makeDynamicExample('Live market heatmap', 'Heatmap built from change and volatility metrics.', 'liveHeatmapOptions', this.createLiveHeatmapOptions()),
            this.makeDynamicExample('Live liquidity funnel', 'Funnel sorted from highest to lowest quote volume.', 'liveFunnelOptions', this.createLiveFunnelOptions()),
            this.makeDynamicExample('Live 3D volume columns', '3D columns from live quote volume.', 'live3dColumnOptions', this.createLive3dColumnOptions())
        ];
        for (var i = 0; i < examples.length; i++) {
            examples[i] = this.withTutorial(examples[i]);
        }
        return examples;
    };
    AppComponent.prototype.makeDynamicExample = function (title, description, optionsName, options) {
        return {
            key: optionsName,
            title: title,
            description: description,
            options: options,
            html: '<chart [options]="' + optionsName + '"></chart>'
        };
    };
    AppComponent.prototype.marketRows = function () {
        var rows = [];
        for (var i = 0; i < this.marketSymbols.length; i++) {
            var symbol = this.marketSymbols[i];
            rows.push(this.marketTickers[symbol] || this.fallbackTicker(symbol, i));
        }
        return rows;
    };
    AppComponent.prototype.fallbackTicker = function (symbol, index) {
        var base = [67000, 3600, 660, 155, 2.2, 0.65, 0.16, 0.11][index] || (10 + index);
        var change = [1.2, -0.8, 0.4, 2.1, -1.1, 0.7, 1.8, -0.3][index] || 0;
        return {
            symbol: symbol,
            price: base,
            open: base * (1 - change / 100),
            high: base * 1.02,
            low: base * 0.98,
            volume: 1000000 + index * 120000,
            quoteVolume: 900000000 - index * 70000000,
            changePercent: change
        };
    };
    AppComponent.prototype.cryptoTreemapRowsForChart = function () {
        if (this.cryptoTreemapRows.length) {
            return this.cryptoTreemapRows;
        }
        return [
            { name: 'Bitcoin', symbol: 'BTC', price: 67516, marketCap: 1352661264706, changePercent: -5.67 },
            { name: 'Ethereum', symbol: 'ETH', price: 1922.75, marketCap: 232156210067, changePercent: -3.27 },
            { name: 'Tether', symbol: 'USDT', price: 0.998454, marketCap: 187951404193, changePercent: -0.01 },
            { name: 'BNB', symbol: 'BNB', price: 665.54, marketCap: 89722947955, changePercent: -3.06 },
            { name: 'XRP', symbol: 'XRP', price: 1.23, marketCap: 76555364639, changePercent: -4.94 },
            { name: 'USD Coin', symbol: 'USDC', price: 0.999595, marketCap: 75837344337, changePercent: -0.01 },
            { name: 'Solana', symbol: 'SOL', price: 76.77, marketCap: 44417058835, changePercent: -5.08 },
            { name: 'TRON', symbol: 'TRX', price: 0.337746, marketCap: 32024356142, changePercent: -2.23 }
        ];
    };
    AppComponent.prototype.marketLabels = function (rows) {
        var labels = [];
        for (var i = 0; i < rows.length; i++) {
            labels.push(rows[i].symbol.replace('USDT', ''));
        }
        return labels;
    };
    AppComponent.prototype.marketValues = function (rows, field, divisor) {
        var values = [];
        for (var i = 0; i < rows.length; i++) {
            values.push(parseFloat(((rows[i][field] || 0) / divisor).toFixed(4)));
        }
        return values;
    };
    AppComponent.prototype.marketPieData = function (rows) {
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push([rows[i].symbol.replace('USDT', ''), parseFloat((rows[i].quoteVolume / 1000000).toFixed(2))]);
        }
        return data;
    };
    AppComponent.prototype.marketHistorySeries = function () {
        var series = [];
        for (var i = 0; i < this.marketSymbols.length; i++) {
            var symbol = this.marketSymbols[i];
            var history = this.marketHistory[symbol] && this.marketHistory[symbol].length ? this.marketHistory[symbol] : [[Date.now(), this.fallbackTicker(symbol, i).price]];
            series.push({
                name: symbol.replace('USDT', ''),
                data: history.slice(0),
                marker: { enabled: false }
            });
        }
        return series;
    };
    AppComponent.prototype.marketMoveSeries = function () {
        var rows = this.marketRows().slice(0, 6);
        var now = Date.now();
        var pointCount = 48;
        var series = [];
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var symbol = row.symbol.replace('USDT', '');
            var open = row.open || row.price || 1;
            var liveMove = open ? ((row.price || open) - open) / open * 100 : 0;
            var change = row.changePercent || liveMove;
            var data = [];
            for (var pointIndex = 0; pointIndex < pointCount; pointIndex++) {
                var age = pointCount - pointIndex;
                var progress = pointIndex / (pointCount - 1);
                var x = now - age * 1000;
                var drift = change * progress;
                var wave = Math.sin((pointIndex + i * 4) / 5) * (0.35 + i * 0.04);
                var microMove = Math.cos((pointIndex + i) / 2.7) * 0.16;
                var value = drift + wave + microMove;
                data.push([x, parseFloat(value.toFixed(3))]);
            }
            series.push({
                name: symbol + ' move',
                data: data,
                marker: { enabled: false },
                lineWidth: i === 0 ? 3 : 2
            });
        }
        return series;
    };
    AppComponent.prototype.marketHeartbeatSeries = function () {
        var rows = this.marketRows().slice(0, 4);
        var now = Date.now();
        var pointCount = 48;
        var series = [];
        for (var i = 0; i < rows.length; i++) {
            var row = rows[i];
            var symbol = row.symbol.replace('USDT', '');
            var baseChange = row.changePercent || 0;
            var open = row.open || row.price || 1;
            var priceDrift = open ? ((row.price || open) - open) / open * 100 : 0;
            var data = [];
            for (var pointIndex = 0; pointIndex < pointCount; pointIndex++) {
                var age = pointCount - pointIndex;
                var x = now - age * 1000;
                var rhythm = Math.sin((pointIndex + i * 3) / 2.3) * (1.4 + i * 0.22);
                var breath = Math.sin((pointIndex + i) / 7) * 0.75;
                var beatPosition = (pointIndex + i * 2) % 12;
                var pulse = beatPosition === 0 ? 8.5 : (beatPosition === 1 ? 4.8 : (beatPosition === 2 ? -2.4 : 0));
                var marketLean = baseChange * 0.9 + priceDrift * 0.65;
                var value = 100 + marketLean + rhythm + breath + pulse;
                data.push([x, parseFloat(value.toFixed(2))]);
            }
            series.push({
                name: symbol + ' pulse',
                data: data,
                marker: { enabled: false },
                lineWidth: i === 0 ? 3 : 2
            });
        }
        return series;
    };
    AppComponent.prototype.marketScore = function (rows) {
        var sum = 0;
        for (var i = 0; i < rows.length; i++) {
            sum += rows[i].changePercent;
        }
        var avg = rows.length ? sum / rows.length : 0;
        var score = 50 + avg * 5;
        return Math.max(0, Math.min(100, parseFloat(score.toFixed(2))));
    };
    AppComponent.prototype.createLiveLineOptions = function () {
        return {
            chart: { type: 'line', height: 320 },
            title: { text: 'Live price move line' },
            subtitle: { text: this.marketStatus },
            xAxis: { type: 'datetime' },
            yAxis: {
                title: { text: 'Move from open, %' },
                plotLines: [{ value: 0, color: '#94a3b8', width: 1, dashStyle: 'ShortDash', zIndex: 1 }]
            },
            tooltip: {
                shared: true,
                valueSuffix: '%',
                valueDecimals: 3
            },
            plotOptions: {
                line: {
                    animation: false,
                    marker: { enabled: false }
                }
            },
            series: this.marketMoveSeries()
        };
    };
    AppComponent.prototype.createLiveSplineOptions = function () {
        return {
            chart: { type: 'spline', height: 320 },
            title: { text: 'Live price heartbeat spline' },
            subtitle: { text: this.marketStatus },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 90
            },
            yAxis: {
                title: { text: 'Normalized pulse' },
                plotLines: [{ value: 100, color: '#94a3b8', width: 1, dashStyle: 'ShortDash', zIndex: 1 }]
            },
            tooltip: {
                shared: true,
                valueSuffix: ' pulse',
                valueDecimals: 2
            },
            plotOptions: {
                spline: {
                    animation: false,
                    marker: { enabled: false }
                }
            },
            series: this.marketHeartbeatSeries()
        };
    };
    AppComponent.prototype.createLiveAreaOptions = function () {
        var rows = this.marketRows();
        return {
            chart: { type: 'area', height: 320 },
            title: { text: 'Live quote volume area' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { title: { text: 'Quote volume, millions' } },
            series: [{ name: 'Quote volume', data: this.marketValues(rows, 'quoteVolume', 1000000) }]
        };
    };
    AppComponent.prototype.createLiveAreasplineOptions = function () {
        var options = this.createLiveAreaOptions();
        options.chart.type = 'areaspline';
        options.title.text = 'Live quote volume areaspline';
        return options;
    };
    AppComponent.prototype.createLiveColumnOptions = function () {
        var rows = this.marketRows();
        return {
            chart: { type: 'column', height: 320 },
            title: { text: 'Live 24h change column' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { title: { text: 'Change %' } },
            series: [{ name: '24h change %', data: this.marketValues(rows, 'changePercent', 1) }]
        };
    };
    AppComponent.prototype.createLiveBarOptions = function () {
        var rows = this.marketRows();
        return {
            chart: { type: 'bar', height: 320 },
            title: { text: 'Live volume bar' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { title: { text: 'Quote volume, millions' } },
            series: [{ name: 'Quote volume', data: this.marketValues(rows, 'quoteVolume', 1000000) }]
        };
    };
    AppComponent.prototype.createLiveStackedOptions = function () {
        var rows = this.marketRows();
        return {
            chart: { type: 'column', height: 320 },
            title: { text: 'Live stacked volume' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { min: 0, title: { text: 'Volume score' }, stackLabels: { enabled: true } },
            plotOptions: { column: { stacking: 'normal' } },
            series: [
                { name: 'Base volume', data: this.marketValues(rows, 'volume', 1000000) },
                { name: 'Quote volume', data: this.marketValues(rows, 'quoteVolume', 100000000) }
            ]
        };
    };
    AppComponent.prototype.createLivePieOptions = function () {
        return {
            chart: { type: 'pie', height: 320 },
            title: { text: 'Live volume pie' },
            series: [{ name: 'Quote volume', data: this.marketPieData(this.marketRows()) }]
        };
    };
    AppComponent.prototype.createLiveDonutOptions = function () {
        var options = this.createLivePieOptions();
        options.title.text = 'Live volume donut';
        options.plotOptions = { pie: { innerSize: '55%' } };
        return options;
    };
    AppComponent.prototype.createLiveScatterOptions = function () {
        var rows = this.marketRows();
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push({
                name: rows[i].symbol.replace('USDT', ''),
                x: parseFloat(rows[i].changePercent.toFixed(4)),
                y: parseFloat((rows[i].quoteVolume / 1000000).toFixed(4))
            });
        }
        return {
            chart: { type: 'scatter', zoomType: 'xy', height: 320 },
            title: { text: 'Live price scatter' },
            xAxis: { title: { text: '24h change %' } },
            yAxis: { title: { text: 'Quote volume, millions' } },
            series: [{ name: 'Symbols', data: data }]
        };
    };
    AppComponent.prototype.createLiveBubbleOptions = function () {
        var rows = this.marketRows();
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push({
                name: rows[i].symbol.replace('USDT', ''),
                x: parseFloat(rows[i].changePercent.toFixed(4)),
                y: parseFloat(rows[i].price.toFixed(4)),
                z: Math.max(10, parseFloat((rows[i].quoteVolume / 100000000).toFixed(4)))
            });
        }
        return {
            chart: { type: 'bubble', plotBorderWidth: 1, zoomType: 'xy', height: 320 },
            title: { text: 'Live change bubble' },
            xAxis: { title: { text: '24h change %' } },
            yAxis: { title: { text: 'Price USDT' } },
            series: [{ name: 'Symbols', data: data }]
        };
    };
    AppComponent.prototype.createLiveComboOptions = function () {
        var rows = this.marketRows();
        return {
            chart: { height: 320 },
            title: { text: 'Live combo chart' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: [{ title: { text: 'Quote volume, millions' } }, { title: { text: 'Change %' }, opposite: true }],
            series: [
                { type: 'column', name: 'Quote volume', data: this.marketValues(rows, 'quoteVolume', 1000000) },
                { type: 'spline', name: '24h change %', data: this.marketValues(rows, 'changePercent', 1), yAxis: 1 }
            ]
        };
    };
    AppComponent.prototype.createLivePolarOptions = function () {
        var rows = this.marketRows();
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push(parseFloat((50 + rows[i].changePercent * 5).toFixed(2)));
        }
        return {
            chart: { polar: true, type: 'line', height: 320 },
            title: { text: 'Live polar strength' },
            pane: { size: '80%' },
            xAxis: { categories: this.marketLabels(rows), tickmarkPlacement: 'on', lineWidth: 0 },
            yAxis: { gridLineInterpolation: 'polygon', lineWidth: 0, min: 0, max: 100 },
            series: [{ name: 'Strength', data: data, pointPlacement: 'on' }]
        };
    };
    AppComponent.prototype.createLiveGaugeOptions = function () {
        var ticker = this.marketTickers['BNBUSDT'] || this.fallbackTicker('BNBUSDT', 2);
        return {
            chart: { type: 'gauge', height: 320 },
            title: { text: 'Live BNB change gauge' },
            pane: { startAngle: -150, endAngle: 150 },
            yAxis: { min: -10, max: 10, title: { text: '24h %' } },
            series: [{ name: 'BNB change', data: [parseFloat(ticker.changePercent.toFixed(2))] }]
        };
    };
    AppComponent.prototype.createLiveSolidGaugeOptions = function () {
        var score = this.marketScore(this.marketRows());
        return {
            chart: { type: 'solidgauge', height: 320 },
            title: { text: 'Live market score solid gauge' },
            pane: {
                center: ['50%', '60%'],
                size: '90%',
                startAngle: -90,
                endAngle: 90,
                background: { backgroundColor: '#eef3f8', innerRadius: '60%', outerRadius: '100%', shape: 'arc' }
            },
            yAxis: {
                min: 0,
                max: 100,
                stops: [[0.3, '#f6465d'], [0.55, '#f0b90b'], [0.75, '#02c076']],
                lineWidth: 0,
                tickWidth: 0,
                minorTickInterval: null,
                tickAmount: 2,
                title: { text: null }
            },
            series: [{ name: 'Market score', data: [score] }]
        };
    };
    AppComponent.prototype.createLiveHeatmapOptions = function () {
        var rows = this.marketRows();
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push([i, 0, parseFloat(rows[i].changePercent.toFixed(2))]);
            data.push([i, 1, parseFloat(((rows[i].high - rows[i].low) / rows[i].price * 100).toFixed(2))]);
        }
        return {
            chart: { type: 'heatmap', height: 320 },
            title: { text: 'Live market heatmap' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { categories: ['Change %', 'Range %'], title: null },
            colorAxis: { min: -5, max: 5, minColor: '#f6465d', maxColor: '#02c076' },
            series: [{ name: 'Metric', borderWidth: 1, data: data, dataLabels: { enabled: true, color: '#111' } }]
        };
    };
    AppComponent.prototype.createLiveTreemapOptions = function () {
        var rows = this.cryptoTreemapRowsForChart();
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            var change = parseFloat(rows[i].changePercent.toFixed(2));
            data.push({
                name: rows[i].symbol,
                value: rows[i].marketCap,
                colorValue: change,
                custom: {
                    name: rows[i].name,
                    symbol: rows[i].symbol,
                    change: change,
                    price: rows[i].price,
                    marketCap: rows[i].marketCap
                }
            });
        }
        return {
            chart: {
                type: 'treemap',
                className: 'crypto-treemap-chart',
                height: 620,
                backgroundColor: '#ffffff',
                plotBackgroundColor: '#ffffff',
                spacing: [12, 0, 8, 0],
                events: {
                    load: function () {
                        var chart = this;
                        var hideTooltip = function () {
                            if (chart.tooltip && chart.tooltip.hide) {
                                chart.tooltip.hide(0);
                            }
                        };
                        var hideWhenOutside = function (event) {
                            var target = event && event.target ? event.target : null;
                            if (chart.container && target && chart.container.contains && chart.container.contains(target)) {
                                return;
                            }
                            hideTooltip();
                        };
                        if (chart.container && chart.container.addEventListener) {
                            chart.container.addEventListener('mouseleave', hideTooltip);
                            chart.container.addEventListener('blur', hideTooltip, true);
                        }
                        if (document && document.addEventListener) {
                            document.addEventListener('mousedown', hideWhenOutside, true);
                            document.addEventListener('touchstart', hideWhenOutside, true);
                            document.addEventListener('scroll', hideTooltip, true);
                        }
                        if (window && window.addEventListener) {
                            window.addEventListener('blur', hideTooltip);
                        }
                    }
                }
            },
            title: {
                text: 'Top 50 coins by market cap',
                style: { color: '#111827', fontSize: '22px', fontWeight: '700' }
            },
            subtitle: {
                text: this.cryptoTreemapStatus + ' | colored by 24h change',
                style: { color: '#475569', fontSize: '14px' }
            },
            colorAxis: {
                min: -10,
                max: 10,
                stops: [[0, '#f33b36'], [0.45, '#fb7b72'], [0.5, '#e5e7eb'], [0.55, '#82e77c'], [1, '#29b916']]
            },
            tooltip: {
                backgroundColor: '#ffffff',
                borderColor: '#cbd5e1',
                hideDelay: 0,
                shadow: true,
                zIndex: 100000,
                style: { color: '#111827' },
                headerFormat: '',
                pointFormat: '<b>{point.custom.name} ({point.custom.symbol})</b><br/>Market cap: ${point.custom.marketCap:,.0f}<br/>Price: ${point.custom.price}<br/>24h change: {point.custom.change:.2f}%'
            },
            plotOptions: {
                treemap: {
                    animation: false,
                    borderColor: '#ffffff',
                    borderWidth: 2,
                    stickyTracking: false,
                    point: {
                        events: {
                            mouseOver: function () {
                                var point = this;
                                var chart = point.series && point.series.chart ? point.series.chart : null;
                                if (chart && chart.tooltip && chart.tooltip.label && chart.tooltip.label.toFront) {
                                    setTimeout(function () {
                                        chart.tooltip.label.toFront();
                                    }, 0);
                                }
                            },
                            mouseOut: function () {
                                var point = this;
                                if (point.series && point.series.chart && point.series.chart.tooltip) {
                                    point.series.chart.tooltip.hide(0);
                                }
                            }
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        crop: true,
                        overflow: 'none',
                        align: 'center',
                        verticalAlign: 'middle',
                        style: {
                            color: '#030712',
                            fontSize: '13px',
                            fontWeight: '700',
                            textOutline: 'none'
                        },
                        formatter: function () {
                            var point = this.point || {};
                            var custom = point.custom || {};
                            var shape = point.shapeArgs || {};
                            var width = shape.width || 0;
                            var height = shape.height || 0;
                            var change = custom.change || 0;
                            var sign = change > 0 ? '+' : '';
                            if (width < 42 || height < 28) {
                                return point.name;
                            }
                            if (width > 220 && height > 150) {
                                return custom.name + ' (' + point.name + ')<br/>$' + custom.price + '<br/>' + sign + change.toFixed(2) + '%';
                            }
                            if (width > 110 && height > 72) {
                                return point.name + '<br/>$' + custom.price + '<br/>' + sign + change.toFixed(2) + '%';
                            }
                            return point.name + '<br/>' + sign + change.toFixed(1) + '%';
                        }
                    }
                }
            },
            series: [{
                    type: 'treemap',
                    layoutAlgorithm: 'squarified',
                    alternateStartingDirection: true,
                    turboThreshold: 0,
                    data: data
                }]
        };
    };
    AppComponent.prototype.createLiveFunnelOptions = function () {
        var rows = this.marketRows().slice(0);
        rows.sort(function (a, b) {
            return b.quoteVolume - a.quoteVolume;
        });
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push([rows[i].symbol.replace('USDT', ''), parseFloat((rows[i].quoteVolume / 1000000).toFixed(2))]);
        }
        return {
            chart: { type: 'funnel', height: 320 },
            title: { text: 'Live liquidity funnel' },
            series: [{ name: 'Quote volume', data: data }]
        };
    };
    AppComponent.prototype.createLive3dColumnOptions = function () {
        var rows = this.marketRows();
        return {
            chart: { type: 'column', height: 320, options3d: { enabled: true, alpha: 12, beta: 12, depth: 45 } },
            title: { text: 'Live 3D volume columns' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { title: { text: 'Quote volume, millions' } },
            series: [{ name: 'Quote volume', data: this.marketValues(rows, 'quoteVolume', 1000000) }]
        };
    };
    AppComponent.prototype.onDynamicChartCreate = function (example, chart) {
        if (!example || !example.key) {
            return;
        }
        this.dynamicCharts[example.key] = chart;
        this.updateDynamicChart(example.key);
    };
    AppComponent.prototype.updateAllDynamicCharts = function () {
        for (var i = 0; i < this.dynamicExamples.length; i++) {
            var example = this.dynamicExamples[i];
            if (example && example.key) {
                this.updateDynamicChart(example.key);
            }
        }
    };
    AppComponent.prototype.updateDynamicChart = function (key) {
        var chart = this.dynamicCharts[key];
        var options = this.createDynamicOptionsByKey(key);
        if (!chart || !chart.series || !options) {
            return;
        }
        if (chart.setTitle) {
            chart.setTitle(options.title || null, options.subtitle || null, false);
        }
        this.syncDynamicCategories(chart, options);
        this.syncDynamicSeries(chart, options.series || []);
        if (chart.redraw) {
            chart.redraw();
        }
    };
    AppComponent.prototype.syncDynamicCategories = function (chart, options) {
        var xAxisOptions = options.xAxis;
        var yAxisOptions = options.yAxis;
        if (xAxisOptions && xAxisOptions.categories && chart.xAxis && chart.xAxis[0] && chart.xAxis[0].setCategories) {
            chart.xAxis[0].setCategories(xAxisOptions.categories, false);
        }
        if (yAxisOptions && yAxisOptions.categories && chart.yAxis && chart.yAxis[0] && chart.yAxis[0].setCategories) {
            chart.yAxis[0].setCategories(yAxisOptions.categories, false);
        }
    };
    AppComponent.prototype.syncDynamicSeries = function (chart, seriesOptions) {
        var i;
        for (i = chart.series.length - 1; i >= seriesOptions.length; i--) {
            chart.series[i].remove(false);
        }
        for (i = 0; i < seriesOptions.length; i++) {
            var nextSeries = seriesOptions[i] || {};
            var currentSeries = chart.series[i];
            if (!currentSeries) {
                chart.addSeries(nextSeries, false, false);
                continue;
            }
            if (nextSeries.name && currentSeries.name !== nextSeries.name && currentSeries.update) {
                currentSeries.update({ name: nextSeries.name }, false);
            }
            if (currentSeries.setData) {
                currentSeries.setData(nextSeries.data || [], false, false);
            }
        }
    };
    AppComponent.prototype.createDynamicOptionsByKey = function (key) {
        switch (key) {
            case 'liveLineOptions':
                return this.createLiveLineOptions();
            case 'liveSplineOptions':
                return this.createLiveSplineOptions();
            case 'liveAreaOptions':
                return this.createLiveAreaOptions();
            case 'liveAreasplineOptions':
                return this.createLiveAreasplineOptions();
            case 'liveColumnOptions':
                return this.createLiveColumnOptions();
            case 'liveBarOptions':
                return this.createLiveBarOptions();
            case 'liveStackedOptions':
                return this.createLiveStackedOptions();
            case 'livePieOptions':
                return this.createLivePieOptions();
            case 'liveDonutOptions':
                return this.createLiveDonutOptions();
            case 'liveScatterOptions':
                return this.createLiveScatterOptions();
            case 'liveBubbleOptions':
                return this.createLiveBubbleOptions();
            case 'liveComboOptions':
                return this.createLiveComboOptions();
            case 'livePolarOptions':
                return this.createLivePolarOptions();
            case 'liveGaugeOptions':
                return this.createLiveGaugeOptions();
            case 'liveSolidGaugeOptions':
                return this.createLiveSolidGaugeOptions();
            case 'liveHeatmapOptions':
                return this.createLiveHeatmapOptions();
            case 'liveTreemapOptions':
                return this.createLiveTreemapOptions();
            case 'liveFunnelOptions':
                return this.createLiveFunnelOptions();
            case 'live3dColumnOptions':
                return this.createLive3dColumnOptions();
            default:
                return null;
        }
    };
    AppComponent.prototype.onCreate = function (name, chart) {
        this.record(name + ' created with ' + chart.series.length + ' series');
    };
    AppComponent.prototype.record = function (message) {
        this.events.unshift(new Date().toLocaleTimeString() + ' - ' + message);
        this.events = this.events.slice(0, 8);
    };
    AppComponent.prototype.randomizeDynamicChart = function () {
        this.dynamicData = this.dynamicData.map(function () {
            return Math.round(20 + Math.random() * 90);
        });
        this.dynamicOptions = this.createDynamicOptions();
    };
    AppComponent.prototype.makeBasic = function (title, description, type) {
        return {
            title: title,
            description: description,
            options: {
                chart: { type: type, height: 320 },
                title: { text: title },
                subtitle: { text: '@stackline/angular-highcharts Angular 5 live test' },
                xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
                yAxis: { title: { text: 'Requests' } },
                series: [
                    { name: 'API', data: [29, 42, 55, 61, 73, 88] },
                    { name: 'Dashboard', data: [18, 31, 37, 46, 58, 63] }
                ]
            },
            html: '<chart [options]="' + type + 'Options"></chart>'
        };
    };
    AppComponent.prototype.createBinanceOptions = function () {
        var theme = this.getBinanceChartTheme();
        return {
            chart: {
                height: 560,
                backgroundColor: theme.background,
                plotBackgroundColor: theme.plotBackground,
                spacing: [16, 20, 18, 12],
                style: {
                    fontFamily: 'Arial, Helvetica, sans-serif'
                }
            },
            credits: { enabled: false },
            rangeSelector: { enabled: false },
            navigator: {
                enabled: false
            },
            scrollbar: {
                enabled: false
            },
            title: {
                text: this.binanceSymbol + ' live candles',
                align: 'left',
                style: { color: theme.title, fontSize: '16px', fontWeight: '600' }
            },
            subtitle: {
                text: 'REST history + Binance WebSocket updates (' + this.binanceInterval + ')',
                align: 'left',
                style: { color: theme.subtitle }
            },
            legend: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                itemStyle: { color: theme.legend },
                itemHoverStyle: { color: theme.legendHover }
            },
            xAxis: {
                lineColor: theme.axisLine,
                tickColor: theme.axisLine,
                gridLineColor: theme.grid,
                labels: { style: { color: theme.axisText } },
                crosshair: {
                    color: theme.crosshair,
                    dashStyle: 'Dash'
                }
            },
            yAxis: [{
                    height: '68%',
                    lineColor: theme.axisLine,
                    gridLineColor: theme.grid,
                    opposite: true,
                    title: { text: null },
                    labels: { style: { color: theme.axisText } }
                }, {
                    top: '73%',
                    height: '22%',
                    offset: 0,
                    lineColor: theme.axisLine,
                    gridLineColor: theme.grid,
                    opposite: true,
                    title: { text: 'Volume', style: { color: theme.axisText } },
                    labels: { style: { color: theme.axisText } }
                }],
            tooltip: {
                shared: true,
                backgroundColor: theme.tooltipBackground,
                borderColor: theme.tooltipBorder,
                style: { color: theme.tooltipText },
                valueDecimals: 4
            },
            plotOptions: {
                candlestick: {
                    color: '#f6465d',
                    upColor: '#02c076',
                    lineColor: '#f6465d',
                    upLineColor: '#02c076'
                },
                column: {
                    borderWidth: 0,
                    groupPadding: 0.08,
                    pointPadding: 0.02
                },
                series: {
                    animation: false,
                    turboThreshold: 0
                }
            },
            series: [{
                    type: 'candlestick',
                    name: 'Price',
                    data: [],
                    tooltip: { valueDecimals: 4 }
                }, {
                    type: 'line',
                    name: 'MA(7)',
                    data: [],
                    color: '#f5d300',
                    lineWidth: 1,
                    marker: { enabled: false }
                }, {
                    type: 'line',
                    name: 'MA(25)',
                    data: [],
                    color: '#ff4ec9',
                    lineWidth: 1,
                    marker: { enabled: false }
                }, {
                    type: 'line',
                    name: 'MA(99)',
                    data: [],
                    color: '#8e44ad',
                    lineWidth: 1,
                    marker: { enabled: false }
                }, {
                    type: 'column',
                    name: 'Volume',
                    data: [],
                    yAxis: 1
                }]
        };
    };
    AppComponent.prototype.getBinanceChartTheme = function () {
        if (this.binanceTheme === 'light') {
            return {
                background: '#ffffff',
                plotBackground: '#ffffff',
                title: '#101828',
                subtitle: '#667085',
                legend: '#475467',
                legendHover: '#101828',
                axisText: '#667085',
                axisLine: '#d0d5dd',
                grid: '#edf2f7',
                crosshair: '#98a2b3',
                tooltipBackground: 'rgba(255, 255, 255, .96)',
                tooltipBorder: '#d0d5dd',
                tooltipText: '#101828'
            };
        }
        return {
            background: '#050505',
            plotBackground: '#050505',
            title: '#f5f5f5',
            subtitle: '#8a8f98',
            legend: '#b7bcc7',
            legendHover: '#ffffff',
            axisText: '#aeb4bd',
            axisLine: '#333842',
            grid: '#1d2026',
            crosshair: '#565b66',
            tooltipBackground: 'rgba(12, 15, 20, .94)',
            tooltipBorder: '#313640',
            tooltipText: '#f5f5f5'
        };
    };
    AppComponent.prototype.makeStackedColumn = function () {
        return {
            title: 'Stacked column',
            description: 'Column stacking with normal Highcharts options.',
            options: {
                chart: { type: 'column', height: 320 },
                title: { text: 'Stacked column' },
                xAxis: { categories: ['Ops', 'Sales', 'Support', 'Finance'] },
                yAxis: { min: 0, title: { text: 'Total work' }, stackLabels: { enabled: true } },
                plotOptions: { column: { stacking: 'normal' } },
                series: [
                    { name: 'Planned', data: [5, 3, 4, 7] },
                    { name: 'Active', data: [2, 2, 3, 2] },
                    { name: 'Closed', data: [3, 4, 4, 2] }
                ]
            },
            html: '<chart [options]="stackedColumnOptions"></chart>'
        };
    };
    AppComponent.prototype.makePie = function () {
        return {
            title: 'Pie chart',
            description: 'Classic proportional distribution.',
            options: {
                chart: { type: 'pie', height: 320 },
                title: { text: 'Traffic sources' },
                series: [{ name: 'Share', data: [['Direct', 42], ['Search', 33], ['Referral', 15], ['Campaign', 10]] }]
            },
            html: '<chart [options]="pieOptions"></chart>'
        };
    };
    AppComponent.prototype.makeDonut = function () {
        return {
            title: 'Donut chart',
            description: 'Pie chart with innerSize.',
            options: {
                chart: { type: 'pie', height: 320 },
                title: { text: 'Device mix' },
                plotOptions: { pie: { innerSize: '55%' } },
                series: [{ name: 'Devices', data: [['Desktop', 48], ['Mobile', 44], ['Tablet', 8]] }]
            },
            html: '<chart [options]="donutOptions"></chart>'
        };
    };
    AppComponent.prototype.makeScatter = function () {
        return {
            title: 'Scatter chart',
            description: 'XY tuple data.',
            options: {
                chart: { type: 'scatter', zoomType: 'xy', height: 320 },
                title: { text: 'Quality vs speed' },
                xAxis: { title: { text: 'Speed' } },
                yAxis: { title: { text: 'Quality' } },
                series: [{ name: 'Builds', data: [[12, 80], [18, 78], [24, 86], [32, 84], [40, 91], [46, 88]] }]
            },
            html: '<chart [options]="scatterOptions"></chart>'
        };
    };
    AppComponent.prototype.makeBubble = function () {
        return {
            title: 'Bubble chart',
            description: 'Uses highcharts-more module.',
            options: {
                chart: { type: 'bubble', plotBorderWidth: 1, zoomType: 'xy', height: 320 },
                title: { text: 'Impact matrix' },
                xAxis: { title: { text: 'Effort' } },
                yAxis: { title: { text: 'Value' } },
                series: [{ name: 'Initiatives', data: [[9, 81, 63], [98, 5, 89], [51, 50, 73], [41, 22, 14], [58, 24, 20]] }]
            },
            html: '<chart [options]="bubbleOptions"></chart>'
        };
    };
    AppComponent.prototype.makeCombination = function () {
        return {
            title: 'Combination chart',
            description: 'Column, spline and pie in one options object.',
            options: {
                title: { text: 'Mixed metrics' },
                chart: { height: 320 },
                xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'] },
                labels: { items: [{ html: 'Total', style: { left: '50px', top: '18px', color: '#333' } }] },
                series: [
                    { type: 'column', name: 'Revenue', data: [3, 2, 1, 3, 4] },
                    { type: 'spline', name: 'Trend', data: [2.4, 2.7, 3.1, 3.8, 4.3] },
                    {
                        type: 'pie',
                        name: 'Share',
                        data: [{ name: 'A', y: 13 }, { name: 'B', y: 23 }, { name: 'C', y: 19 }],
                        center: [80, 55],
                        size: 90,
                        showInLegend: false,
                        dataLabels: { enabled: false }
                    }
                ]
            },
            html: '<chart [options]="combinationOptions"></chart>'
        };
    };
    AppComponent.prototype.makePolar = function () {
        return {
            title: 'Polar/radar chart',
            description: 'Uses highcharts-more with polar chart options.',
            options: {
                chart: { polar: true, type: 'line', height: 320 },
                title: { text: 'Team coverage' },
                pane: { size: '80%' },
                xAxis: { categories: ['UX', 'API', 'Ops', 'QA', 'Docs'], tickmarkPlacement: 'on', lineWidth: 0 },
                yAxis: { gridLineInterpolation: 'polygon', lineWidth: 0, min: 0 },
                series: [{ name: 'Score', data: [5, 4, 3, 5, 4], pointPlacement: 'on' }]
            },
            html: '<chart [options]="polarOptions"></chart>'
        };
    };
    AppComponent.prototype.makeGauge = function () {
        return {
            title: 'Gauge chart',
            description: 'Gauge series from highcharts-more.',
            options: {
                chart: { type: 'gauge', height: 320 },
                title: { text: 'Availability' },
                pane: { startAngle: -150, endAngle: 150 },
                yAxis: { min: 0, max: 100, title: { text: 'Uptime' } },
                series: [{ name: 'Uptime', data: [92] }]
            },
            html: '<chart [options]="gaugeOptions"></chart>'
        };
    };
    AppComponent.prototype.makeSolidGauge = function () {
        return {
            title: 'Solid gauge',
            description: 'Uses highcharts-more and solid-gauge modules.',
            options: {
                chart: { type: 'solidgauge', height: 320 },
                title: { text: 'Completion' },
                pane: {
                    center: ['50%', '60%'],
                    size: '90%',
                    startAngle: -90,
                    endAngle: 90,
                    background: { backgroundColor: '#eef3f8', innerRadius: '60%', outerRadius: '100%', shape: 'arc' }
                },
                yAxis: {
                    min: 0,
                    max: 100,
                    stops: [[0.3, '#d9534f'], [0.7, '#f0ad4e'], [0.9, '#2f8f68']],
                    lineWidth: 0,
                    tickWidth: 0,
                    minorTickInterval: null,
                    tickAmount: 2,
                    title: { text: null }
                },
                series: [{ name: 'Done', data: [76] }]
            },
            html: '<chart [options]="solidGaugeOptions"></chart>'
        };
    };
    AppComponent.prototype.makeHeatmap = function () {
        return {
            title: 'Heatmap',
            description: 'Uses the heatmap module.',
            options: {
                chart: { type: 'heatmap', height: 320 },
                title: { text: 'Weekly activity' },
                xAxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'] },
                yAxis: { categories: ['AM', 'PM'], title: null },
                colorAxis: { min: 0, minColor: '#ffffff', maxColor: '#1f78b4' },
                series: [{
                        name: 'Activity',
                        borderWidth: 1,
                        data: [[0, 0, 4], [1, 0, 7], [2, 0, 9], [3, 0, 5], [4, 0, 6], [0, 1, 6], [1, 1, 3], [2, 1, 8], [3, 1, 4], [4, 1, 10]],
                        dataLabels: { enabled: true, color: '#333' }
                    }]
            },
            html: '<chart [options]="heatmapOptions"></chart>'
        };
    };
    AppComponent.prototype.makeTreemap = function () {
        return {
            title: 'Treemap',
            description: 'Uses the treemap module.',
            options: {
                chart: { type: 'treemap', height: 320 },
                title: { text: 'Cost centers' },
                series: [{
                        type: 'treemap',
                        layoutAlgorithm: 'squarified',
                        data: [
                            { name: 'Engineering', value: 6, color: '#2f7ed8' },
                            { name: 'Support', value: 4, color: '#0d9488' },
                            { name: 'Sales', value: 5, color: '#f59e0b' },
                            { name: 'Ops', value: 3, color: '#64748b' }
                        ]
                    }]
            },
            html: '<chart [options]="treemapOptions"></chart>'
        };
    };
    AppComponent.prototype.makeFunnel = function () {
        return {
            title: 'Funnel chart',
            description: 'Uses the funnel module.',
            options: {
                chart: { type: 'funnel', height: 320 },
                title: { text: 'Pipeline' },
                series: [{ name: 'Leads', data: [['New', 156], ['Qualified', 92], ['Proposal', 48], ['Closed', 21]] }]
            },
            html: '<chart [options]="funnelOptions"></chart>'
        };
    };
    AppComponent.prototype.make3dColumn = function () {
        return {
            title: '3D column',
            description: 'Uses the highcharts-3d module.',
            options: {
                chart: { type: 'column', height: 320, options3d: { enabled: true, alpha: 12, beta: 12, depth: 45 } },
                title: { text: '3D volume' },
                xAxis: { categories: ['A', 'B', 'C', 'D'] },
                yAxis: { title: { text: 'Volume' } },
                series: [{ name: 'Volume', data: [7, 5, 9, 6] }]
            },
            html: '<chart [options]="column3dOptions"></chart>'
        };
    };
    AppComponent.prototype.makeStockChart = function () {
        return {
            title: 'StockChart constructor',
            description: 'Uses [type]="StockChart" after loading the stock module.',
            constructorType: 'StockChart',
            options: {
                chart: { height: 320 },
                title: { text: 'Stock-style timeline' },
                rangeSelector: { selected: 1 },
                series: [{
                        name: 'Price',
                        data: [
                            [Date.UTC(2026, 0, 1), 12],
                            [Date.UTC(2026, 1, 1), 15],
                            [Date.UTC(2026, 2, 1), 14],
                            [Date.UTC(2026, 3, 1), 18],
                            [Date.UTC(2026, 4, 1), 21],
                            [Date.UTC(2026, 5, 1), 20]
                        ]
                    }]
            },
            html: '<chart [type]="StockChart" [options]="stockOptions"></chart>'
        };
    };
    AppComponent.prototype.makeMapLikeChart = function () {
        return {
            title: 'Map module',
            description: 'Uses the map module with simple inline mapData.',
            options: {
                chart: { type: 'map', height: 320 },
                title: { text: 'Simple territory map' },
                colorAxis: { min: 0 },
                series: [{
                        type: 'map',
                        name: 'Score',
                        mapData: [
                            { path: 'M 0 0 L 120 0 L 120 80 L 0 80 Z', name: 'North', value: 10 },
                            { path: 'M 130 0 L 250 0 L 250 80 L 130 80 Z', name: 'South', value: 7 },
                            { path: 'M 65 90 L 185 90 L 185 170 L 65 170 Z', name: 'Central', value: 13 }
                        ],
                        dataLabels: { enabled: true, format: '{point.name}' }
                    }]
            },
            html: '<chart [options]="mapOptions"></chart>'
        };
    };
    AppComponent.prototype.makeNoDataChart = function () {
        return {
            title: 'No data state',
            description: 'Uses no-data-to-display module.',
            options: {
                chart: { type: 'line', height: 320 },
                title: { text: 'Empty state' },
                lang: { noData: 'No chart data yet' },
                noData: { style: { fontWeight: '600', fontSize: '15px', color: '#50677d' } },
                series: []
            },
            html: '<chart [options]="noDataOptions"></chart>'
        };
    };
    AppComponent.prototype.createDynamicOptions = function () {
        return {
            chart: { type: 'line', height: 340 },
            title: { text: 'Dynamic update' },
            subtitle: { text: 'Changing the options object re-initializes the wrapper' },
            xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
            yAxis: { title: { text: 'Requests' } },
            series: [{ name: 'Updated data', data: this.dynamicData }]
        };
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export highchartsFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stackline_angular_highcharts__ = __webpack_require__("./node_modules/@stackline/angular-highcharts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stackline_angular_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__stackline_angular_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts__ = __webpack_require__("./node_modules/highcharts/highcharts.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_highcharts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__ = __webpack_require__("./node_modules/highcharts/highcharts-more.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_highcharts_3d__ = __webpack_require__("./node_modules/highcharts/highcharts-3d.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_highcharts_highcharts_3d___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_highcharts_highcharts_3d__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highcharts_modules_heatmap__ = __webpack_require__("./node_modules/highcharts/modules/heatmap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_highcharts_modules_heatmap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_highcharts_modules_heatmap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_highcharts_modules_treemap__ = __webpack_require__("./node_modules/highcharts/modules/treemap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_highcharts_modules_treemap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_highcharts_modules_treemap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highcharts_modules_funnel__ = __webpack_require__("./node_modules/highcharts/modules/funnel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_highcharts_modules_funnel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_highcharts_modules_funnel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_highcharts_modules_solid_gauge__ = __webpack_require__("./node_modules/highcharts/modules/solid-gauge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_highcharts_modules_solid_gauge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_highcharts_modules_solid_gauge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_highcharts_modules_stock__ = __webpack_require__("./node_modules/highcharts/modules/stock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_highcharts_modules_stock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_highcharts_modules_stock__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_highcharts_modules_map__ = __webpack_require__("./node_modules/highcharts/modules/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_highcharts_modules_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_highcharts_modules_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_highcharts_modules_drilldown__ = __webpack_require__("./node_modules/highcharts/modules/drilldown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_highcharts_modules_drilldown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_highcharts_modules_drilldown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_highcharts_modules_no_data_to_display__ = __webpack_require__("./node_modules/highcharts/modules/no-data-to-display.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_highcharts_modules_no_data_to_display___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_highcharts_modules_no_data_to_display__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__("./src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















function highchartsFactory() {
    __WEBPACK_IMPORTED_MODULE_6_highcharts_highcharts_more__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
    __WEBPACK_IMPORTED_MODULE_7_highcharts_highcharts_3d__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
    __WEBPACK_IMPORTED_MODULE_8_highcharts_modules_heatmap__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
    __WEBPACK_IMPORTED_MODULE_9_highcharts_modules_treemap__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
    __WEBPACK_IMPORTED_MODULE_10_highcharts_modules_funnel__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
    __WEBPACK_IMPORTED_MODULE_11_highcharts_modules_solid_gauge__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
    __WEBPACK_IMPORTED_MODULE_12_highcharts_modules_stock__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
    __WEBPACK_IMPORTED_MODULE_13_highcharts_modules_map__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
    __WEBPACK_IMPORTED_MODULE_14_highcharts_modules_drilldown__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
    __WEBPACK_IMPORTED_MODULE_15_highcharts_modules_no_data_to_display__(__WEBPACK_IMPORTED_MODULE_5_highcharts__);
    return __WEBPACK_IMPORTED_MODULE_5_highcharts__;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__stackline_angular_highcharts__["ChartModule"]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__stackline_angular_highcharts__["HighchartsStatic"], useFactory: highchartsFactory }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map