(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /storage/data/github/tests/angular-highcharts/angular-10/src/main.ts */"zUnb");


/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n}\n\n:host,\n:host * {\n  box-sizing: border-box;\n}\n\nmain {\n  width: calc(100% - 32px);\n  max-width: 1360px;\n  margin: 0 auto;\n  padding: 32px 0 48px;\n}\n\nheader,\n.panel,\n.chart-card {\n  background: #fff;\n  border: 1px solid #d9e5ee;\n  border-radius: 8px;\n  box-shadow: 0 10px 28px rgba(23, 52, 77, .08);\n}\n\nheader {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 24px;\n  margin-bottom: 18px;\n}\n\n.header-copy {\n  min-width: 0;\n}\n\n.route-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  justify-content: flex-end;\n  flex: 0 0 auto;\n}\n\n.route-tabs a {\n  display: inline-flex;\n  align-items: center;\n  min-height: 36px;\n  padding: 0 14px;\n  border: 1px solid #d0dbe6;\n  border-radius: 6px;\n  color: #254966;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n}\n\n.route-tabs a.active {\n  border-color: #146c94;\n  background: #146c94;\n  color: #fff;\n}\n\nheader span {\n  display: block;\n  margin-bottom: 8px;\n  color: #466179;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .05em;\n  text-transform: uppercase;\n}\n\nh1,\nh2,\nh3,\np {\n  margin-top: 0;\n}\n\nh1 {\n  margin-bottom: 8px;\n  font-size: 30px;\n  line-height: 1.2;\n}\n\np {\n  color: #50677d;\n}\n\nheader p {\n  margin-bottom: 0;\n}\n\n.panel {\n  padding: 24px;\n  margin-bottom: 18px;\n}\n\n.intro-panel {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n}\n\n.status-pill {\n  flex: 0 0 auto;\n  padding: 8px 12px;\n  border-radius: 999px;\n  background: #e7f2ff;\n  color: #205b8f;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.capability-grid,\n.examples-grid,\n.event-grid {\n  display: grid;\n  gap: 16px;\n}\n\n.capability-grid {\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n}\n\n.capability-grid div {\n  padding: 14px;\n  border: 1px solid #dbe6ef;\n  border-radius: 6px;\n  background: #f8fbfd;\n}\n\n.capability-grid strong,\n.capability-grid span {\n  display: block;\n}\n\n.capability-grid span {\n  margin-top: 6px;\n  color: #536b80;\n  font-size: 13px;\n  line-height: 1.45;\n}\n\n.examples-grid {\n  grid-template-columns: 1fr;\n  align-items: start;\n}\n\n.chart-card {\n  width: 100%;\n  min-width: 0;\n  box-sizing: border-box;\n  padding: 18px;\n  overflow: hidden;\n}\n\n.chart-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 14px;\n}\n\n.chart-head h2,\n.chart-head h3 {\n  margin-bottom: 6px;\n}\n\n.chart-head h3 {\n  font-size: 18px;\n}\n\n.chart-head span {\n  flex: 0 0 auto;\n  padding: 6px 9px;\n  border-radius: 999px;\n  background: #eef3f8;\n  color: #41576b;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.feature-panel {\n  margin-top: 18px;\n}\n\n.market-source-panel {\n  margin-bottom: 18px;\n}\n\n.live-market-card {\n  margin-bottom: 18px;\n  padding: 18px;\n  background: #0b0d10;\n  border-color: #242933;\n  color: #f5f7fb;\n}\n\n.live-market-card.market-light {\n  background: #fff;\n  border-color: #d9e5ee;\n  color: #101828;\n}\n\n.live-market-card p {\n  color: #a7afbc;\n}\n\n.live-market-card.market-light p {\n  color: #667085;\n}\n\n.live-market-card .chart-head span {\n  background: #1d2430;\n  color: #dfe6ef;\n}\n\n.live-market-card.market-light .chart-head span {\n  background: #eef4ff;\n  color: #344054;\n}\n\n.market-head h2 {\n  margin-bottom: 6px;\n}\n\n.market-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 12px 18px;\n  margin-bottom: 12px;\n  padding: 12px;\n  border: 1px solid #232a35;\n  border-radius: 6px;\n  background: #11161d;\n}\n\n@media (max-width: 760px) {\n  header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .route-tabs {\n    justify-content: flex-start;\n    width: 100%;\n  }\n}\n\n.market-light .market-toolbar {\n  border-color: #d0d5dd;\n  background: #f8fafc;\n}\n\n.market-toolbar div {\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n\n.market-toolbar strong {\n  color: #c3cad6;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.market-light .market-toolbar strong {\n  color: #475467;\n}\n\n.market-toolbar button {\n  min-height: 32px;\n  padding: 0 11px;\n  border: 1px solid #343b48;\n  background: #171d26;\n  color: #dfe6ef;\n}\n\n.market-light .market-toolbar button {\n  border-color: #d0d5dd;\n  background: #fff;\n  color: #344054;\n}\n\n.market-toolbar button.active {\n  border-color: #f0b90b;\n  background: #f0b90b;\n  color: #111;\n}\n\n.market-light .market-toolbar button.active {\n  border-color: #146c94;\n  background: #146c94;\n  color: #fff;\n}\n\n.market-toolbar .reload-button {\n  margin-left: auto;\n  background: #146c94;\n  border-color: #146c94;\n  color: #fff;\n}\n\n.market-ticker,\n.market-status {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px 18px;\n  margin-bottom: 10px;\n  color: #9ca5b1;\n  font-size: 13px;\n}\n\n.market-light .market-ticker,\n.market-light .market-status {\n  color: #667085;\n}\n\n.market-ticker strong {\n  margin-left: 4px;\n  color: #f5f7fb;\n}\n\n.market-ticker em {\n  font-style: normal;\n}\n\n.market-light .market-ticker strong {\n  color: #101828;\n}\n\n.market-ticker .positive strong,\n.market-ticker .positive {\n  color: #02c076;\n}\n\n.market-ticker .negative strong,\n.market-ticker .negative {\n  color: #f6465d;\n}\n\n.market-status {\n  color: #c6ccd5;\n}\n\n.market-frame {\n  min-height: 560px;\n  border: 1px solid #242933;\n  border-radius: 6px;\n  overflow: hidden;\n  background: #050505;\n}\n\n.market-light .market-frame {\n  border-color: #d0d5dd;\n  background: #fff;\n}\n\n.market-frame chart {\n  min-height: 560px;\n}\n\n.endpoint-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 12px;\n  margin-top: 12px;\n  margin-bottom: 14px;\n}\n\n.endpoint-grid div {\n  padding: 12px;\n  border: 1px solid #232a35;\n  border-radius: 6px;\n  background: #11161d;\n}\n\n.market-light .endpoint-grid div {\n  border-color: #d0d5dd;\n  background: #f8fafc;\n}\n\n.endpoint-grid strong,\n.endpoint-grid code {\n  display: block;\n}\n\n.endpoint-grid strong {\n  margin-bottom: 8px;\n  color: #c3cad6;\n}\n\n.market-light .endpoint-grid strong {\n  color: #475467;\n}\n\n.endpoint-grid code {\n  overflow-wrap: anywhere;\n  color: #8bd3ff;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.market-light .endpoint-grid code {\n  color: #0b5cad;\n}\n\n.chart-frame {\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  min-height: 340px;\n  overflow: hidden;\n}\n\n.chart-frame.large {\n  min-height: 380px;\n}\n\n.chart-frame chart {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n  min-width: 0;\n  min-height: 320px;\n}\n\n.chart-frame ::ng-deep .highcharts-container,\n.chart-frame ::ng-deep svg {\n  max-width: 100% !important;\n}\n\n.tutorial-collapse {\n  margin-top: 14px;\n  border: 1px solid #d9e5ee;\n  border-radius: 8px;\n  background: #f8fbfd;\n  overflow: hidden;\n}\n\n.live-market-card .tutorial-collapse {\n  border-color: #242933;\n  background: #11161d;\n}\n\n.live-market-card.market-light .tutorial-collapse {\n  border-color: #d9e5ee;\n  background: #f8fbfd;\n}\n\n.tutorial-collapse summary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  min-height: 44px;\n  padding: 0 14px;\n  cursor: pointer;\n  color: #1e3145;\n  font-weight: 700;\n}\n\n.live-market-card .tutorial-collapse summary {\n  color: #f5f7fb;\n}\n\n.live-market-card.market-light .tutorial-collapse summary {\n  color: #1e3145;\n}\n\n.tutorial-collapse summary::-webkit-details-marker {\n  display: none;\n}\n\n.tutorial-collapse summary:before {\n  content: '+';\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  margin-right: 8px;\n  border-radius: 50%;\n  background: #e7f2ff;\n  color: #205b8f;\n  font-weight: 800;\n}\n\n.tutorial-collapse[open] summary:before {\n  content: '-';\n}\n\n.tutorial-collapse summary span {\n  display: inline-flex;\n  align-items: center;\n  margin-right: auto;\n}\n\n.tutorial-collapse summary small {\n  color: #667085;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.live-market-card .tutorial-collapse summary small {\n  color: #a7afbc;\n}\n\n.live-market-card.market-light .tutorial-collapse summary small {\n  color: #667085;\n}\n\n.code-layer-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n  padding: 14px;\n  border-top: 1px solid #d9e5ee;\n}\n\n.live-market-card .code-layer-grid {\n  border-top-color: #242933;\n}\n\n.live-market-card.market-light .code-layer-grid {\n  border-top-color: #d9e5ee;\n}\n\n.code-layer-grid h4 {\n  margin: 0 0 8px;\n  color: #344054;\n  font-size: 12px;\n  text-transform: uppercase;\n}\n\n.live-market-card .code-layer-grid h4 {\n  color: #dfe6ef;\n}\n\n.live-market-card.market-light .code-layer-grid h4 {\n  color: #344054;\n}\n\n.code-layer-grid pre {\n  max-height: 420px;\n  margin: 0;\n}\n\npre {\n  overflow: auto;\n  padding: 16px;\n  border-radius: 6px;\n  background: #112236;\n  color: #f3f8ff;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\nbutton {\n  flex: 0 0 auto;\n  min-height: 38px;\n  padding: 0 16px;\n  border: 0;\n  border-radius: 6px;\n  background: #146c94;\n  color: #fff;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.event-grid {\n  grid-template-columns: minmax(0, 1.2fr) minmax(260px, .8fr);\n}\n\n.event-log {\n  padding: 16px;\n  border: 1px solid #d9e5ee;\n  border-radius: 6px;\n  background: #f8fbfd;\n}\n\n.event-log ul {\n  margin: 12px 0 0;\n  padding-left: 18px;\n}\n\n.event-log li {\n  margin-bottom: 6px;\n  color: #40586d;\n}\n\n@media (max-width: 760px) {\n  main {\n    width: calc(100% - 20px);\n    padding-top: 20px;\n  }\n\n  header,\n  .panel,\n  .chart-card {\n    padding: 16px;\n  }\n\n  .intro-panel,\n  .chart-head {\n    display: block;\n  }\n\n  .status-pill,\n  .chart-head span,\n  button {\n    display: inline-flex;\n    align-items: center;\n    margin-top: 12px;\n  }\n\n  .examples-grid,\n  .event-grid,\n  .endpoint-grid,\n  .code-layer-grid {\n    grid-template-columns: 1fr;\n  }\n\n  h1 {\n    font-size: 25px;\n    overflow-wrap: anywhere;\n  }\n\n  h2 {\n    font-size: 22px;\n    line-height: 1.2;\n  }\n\n  h3 {\n    font-size: 17px;\n  }\n\n  .market-toolbar {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 12px;\n  }\n\n  .live-market-card .market-head,\n  .live-market-card .market-toolbar,\n  .live-market-card .market-status {\n    display: none;\n  }\n\n  .market-toolbar div {\n    display: flex;\n    width: 100%;\n  }\n\n  .market-toolbar .reload-button {\n    margin-left: 0;\n  }\n\n  .market-ticker,\n  .market-status {\n    display: grid;\n    grid-template-columns: 1fr;\n    gap: 6px;\n  }\n\n  .market-ticker {\n    display: grid;\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n    gap: 3px;\n    overflow: hidden;\n    padding-bottom: 0;\n    white-space: nowrap;\n    font-size: 9px;\n    line-height: 1.35;\n  }\n\n  .market-ticker span {\n    min-width: 0;\n    overflow: hidden;\n  }\n\n  .market-ticker strong {\n    margin-left: 2px;\n  }\n\n  .market-frame,\n  .market-frame chart {\n    min-height: 440px;\n  }\n\n  .chart-frame {\n    margin-right: 0;\n    min-height: 300px;\n  }\n\n  .chart-frame chart {\n    min-height: 280px;\n  }\n\n  .tutorial-collapse summary {\n    align-items: flex-start;\n    min-height: 48px;\n    padding: 10px 12px;\n  }\n\n  .tutorial-collapse summary small {\n    max-width: 90px;\n    text-align: right;\n    overflow-wrap: anywhere;\n  }\n\n  pre {\n    max-width: 100%;\n    white-space: pre-wrap;\n    overflow-wrap: anywhere;\n  }\n}\n\n@media (max-width: 430px) {\n  main {\n    width: calc(100% - 16px);\n  }\n\n  header,\n  .panel,\n  .chart-card,\n  .live-market-card {\n    padding: 14px;\n  }\n\n  button {\n    width: 100%;\n    justify-content: center;\n  }\n\n  .route-tabs {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .route-tabs a {\n    justify-content: center;\n    min-width: 0;\n    padding-right: 8px;\n    padding-left: 8px;\n    text-align: center;\n  }\n\n  .market-toolbar button {\n    width: auto;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixpQkFBaUI7RUFDakIsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsU0FBUztFQUNULGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFFBQVE7RUFDUix5QkFBeUI7RUFDekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBOzs7O0VBSUUsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7SUFDRSx1QkFBdUI7SUFDdkIsc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7RUFDYjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFNBQVM7RUFDVCxhQUFhO0VBQ2IsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsU0FBUztFQUNULGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsaUJBQWlCO0VBQ25COztFQUVBOzs7SUFHRSxhQUFhO0VBQ2Y7O0VBRUE7O0lBRUUsY0FBYztFQUNoQjs7RUFFQTs7O0lBR0Usb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7Ozs7SUFJRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLFNBQVM7RUFDWDs7RUFFQTs7O0lBR0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsYUFBYTtJQUNiLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7O0lBRUUsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQixRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0RBQWdEO0lBQ2hELFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTs7SUFFRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTs7OztJQUlFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG46aG9zdCxcbjpob3N0ICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5tYWluIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICBtYXgtd2lkdGg6IDEzNjBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDMycHggMCA0OHB4O1xufVxuXG5oZWFkZXIsXG4ucGFuZWwsXG4uY2hhcnQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWU1ZWU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDI4cHggcmdiYSgyMywgNTIsIDc3LCAuMDgpO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMjBweDtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLmhlYWRlci1jb3B5IHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4ucm91dGUtdGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXg6IDAgMCBhdXRvO1xufVxuXG4ucm91dGUtdGFicyBhIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDM2cHg7XG4gIHBhZGRpbmc6IDAgMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QwZGJlNjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogIzI1NDk2NjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yb3V0ZS10YWJzIGEuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMTQ2Yzk0O1xuICBiYWNrZ3JvdW5kOiAjMTQ2Yzk0O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuaGVhZGVyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogIzQ2NjE3OTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogLjA1ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbmgxLFxuaDIsXG5oMyxcbnAge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuXG5wIHtcbiAgY29sb3I6ICM1MDY3N2Q7XG59XG5cbmhlYWRlciBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnBhbmVsIHtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLmludHJvLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG59XG5cbi5zdGF0dXMtcGlsbCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XG4gIGJhY2tncm91bmQ6ICNlN2YyZmY7XG4gIGNvbG9yOiAjMjA1YjhmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jYXBhYmlsaXR5LWdyaWQsXG4uZXhhbXBsZXMtZ3JpZCxcbi5ldmVudC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uY2FwYWJpbGl0eS1ncmlkIHtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XG59XG5cbi5jYXBhYmlsaXR5LWdyaWQgZGl2IHtcbiAgcGFkZGluZzogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZTZlZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmYmZkO1xufVxuXG4uY2FwYWJpbGl0eS1ncmlkIHN0cm9uZyxcbi5jYXBhYmlsaXR5LWdyaWQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2FwYWJpbGl0eS1ncmlkIHNwYW4ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGNvbG9yOiAjNTM2YjgwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xufVxuXG4uZXhhbXBsZXMtZ3JpZCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICBhbGlnbi1pdGVtczogc3RhcnQ7XG59XG5cbi5jaGFydC1jYXJkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMThweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNoYXJ0LWhlYWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5jaGFydC1oZWFkIGgyLFxuLmNoYXJ0LWhlYWQgaDMge1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5jaGFydC1oZWFkIGgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY2hhcnQtaGVhZCBzcGFuIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIHBhZGRpbmc6IDZweCA5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBiYWNrZ3JvdW5kOiAjZWVmM2Y4O1xuICBjb2xvcjogIzQxNTc2YjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZmVhdHVyZS1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG59XG5cbi5tYXJrZXQtc291cmNlLXBhbmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLmxpdmUtbWFya2V0LWNhcmQge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBwYWRkaW5nOiAxOHB4O1xuICBiYWNrZ3JvdW5kOiAjMGIwZDEwO1xuICBib3JkZXItY29sb3I6ICMyNDI5MzM7XG4gIGNvbG9yOiAjZjVmN2ZiO1xufVxuXG4ubGl2ZS1tYXJrZXQtY2FyZC5tYXJrZXQtbGlnaHQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItY29sb3I6ICNkOWU1ZWU7XG4gIGNvbG9yOiAjMTAxODI4O1xufVxuXG4ubGl2ZS1tYXJrZXQtY2FyZCBwIHtcbiAgY29sb3I6ICNhN2FmYmM7XG59XG5cbi5saXZlLW1hcmtldC1jYXJkLm1hcmtldC1saWdodCBwIHtcbiAgY29sb3I6ICM2NjcwODU7XG59XG5cbi5saXZlLW1hcmtldC1jYXJkIC5jaGFydC1oZWFkIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjMWQyNDMwO1xuICBjb2xvcjogI2RmZTZlZjtcbn1cblxuLmxpdmUtbWFya2V0LWNhcmQubWFya2V0LWxpZ2h0IC5jaGFydC1oZWFkIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiAjZWVmNGZmO1xuICBjb2xvcjogIzM0NDA1NDtcbn1cblxuLm1hcmtldC1oZWFkIGgyIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xufVxuXG4ubWFya2V0LXRvb2xiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweCAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjMyYTM1O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICMxMTE2MWQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICBoZWFkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAucm91dGUtdGFicyB7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5tYXJrZXQtbGlnaHQgLm1hcmtldC10b29sYmFyIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDBkNWRkO1xuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xufVxuXG4ubWFya2V0LXRvb2xiYXIgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG5cbi5tYXJrZXQtdG9vbGJhciBzdHJvbmcge1xuICBjb2xvcjogI2MzY2FkNjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubWFya2V0LWxpZ2h0IC5tYXJrZXQtdG9vbGJhciBzdHJvbmcge1xuICBjb2xvcjogIzQ3NTQ2Nztcbn1cblxuLm1hcmtldC10b29sYmFyIGJ1dHRvbiB7XG4gIG1pbi1oZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDAgMTFweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM0M2I0ODtcbiAgYmFja2dyb3VuZDogIzE3MWQyNjtcbiAgY29sb3I6ICNkZmU2ZWY7XG59XG5cbi5tYXJrZXQtbGlnaHQgLm1hcmtldC10b29sYmFyIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogI2QwZDVkZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMzNDQwNTQ7XG59XG5cbi5tYXJrZXQtdG9vbGJhciBidXR0b24uYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjBiOTBiO1xuICBiYWNrZ3JvdW5kOiAjZjBiOTBiO1xuICBjb2xvcjogIzExMTtcbn1cblxuLm1hcmtldC1saWdodCAubWFya2V0LXRvb2xiYXIgYnV0dG9uLmFjdGl2ZSB7XG4gIGJvcmRlci1jb2xvcjogIzE0NmM5NDtcbiAgYmFja2dyb3VuZDogIzE0NmM5NDtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5tYXJrZXQtdG9vbGJhciAucmVsb2FkLWJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBiYWNrZ3JvdW5kOiAjMTQ2Yzk0O1xuICBib3JkZXItY29sb3I6ICMxNDZjOTQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWFya2V0LXRpY2tlcixcbi5tYXJrZXQtc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHggMThweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM5Y2E1YjE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLm1hcmtldC1saWdodCAubWFya2V0LXRpY2tlcixcbi5tYXJrZXQtbGlnaHQgLm1hcmtldC1zdGF0dXMge1xuICBjb2xvcjogIzY2NzA4NTtcbn1cblxuLm1hcmtldC10aWNrZXIgc3Ryb25nIHtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgY29sb3I6ICNmNWY3ZmI7XG59XG5cbi5tYXJrZXQtdGlja2VyIGVtIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4ubWFya2V0LWxpZ2h0IC5tYXJrZXQtdGlja2VyIHN0cm9uZyB7XG4gIGNvbG9yOiAjMTAxODI4O1xufVxuXG4ubWFya2V0LXRpY2tlciAucG9zaXRpdmUgc3Ryb25nLFxuLm1hcmtldC10aWNrZXIgLnBvc2l0aXZlIHtcbiAgY29sb3I6ICMwMmMwNzY7XG59XG5cbi5tYXJrZXQtdGlja2VyIC5uZWdhdGl2ZSBzdHJvbmcsXG4ubWFya2V0LXRpY2tlciAubmVnYXRpdmUge1xuICBjb2xvcjogI2Y2NDY1ZDtcbn1cblxuLm1hcmtldC1zdGF0dXMge1xuICBjb2xvcjogI2M2Y2NkNTtcbn1cblxuLm1hcmtldC1mcmFtZSB7XG4gIG1pbi1oZWlnaHQ6IDU2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMjQyOTMzO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICMwNTA1MDU7XG59XG5cbi5tYXJrZXQtbGlnaHQgLm1hcmtldC1mcmFtZSB7XG4gIGJvcmRlci1jb2xvcjogI2QwZDVkZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLm1hcmtldC1mcmFtZSBjaGFydCB7XG4gIG1pbi1oZWlnaHQ6IDU2MHB4O1xufVxuXG4uZW5kcG9pbnQtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjYwcHgsIDFmcikpO1xuICBnYXA6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG59XG5cbi5lbmRwb2ludC1ncmlkIGRpdiB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyMzJhMzU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZDogIzExMTYxZDtcbn1cblxuLm1hcmtldC1saWdodCAuZW5kcG9pbnQtZ3JpZCBkaXYge1xuICBib3JkZXItY29sb3I6ICNkMGQ1ZGQ7XG4gIGJhY2tncm91bmQ6ICNmOGZhZmM7XG59XG5cbi5lbmRwb2ludC1ncmlkIHN0cm9uZyxcbi5lbmRwb2ludC1ncmlkIGNvZGUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmVuZHBvaW50LWdyaWQgc3Ryb25nIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogI2MzY2FkNjtcbn1cblxuLm1hcmtldC1saWdodCAuZW5kcG9pbnQtZ3JpZCBzdHJvbmcge1xuICBjb2xvcjogIzQ3NTQ2Nztcbn1cblxuLmVuZHBvaW50LWdyaWQgY29kZSB7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xuICBjb2xvcjogIzhiZDNmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG4ubWFya2V0LWxpZ2h0IC5lbmRwb2ludC1ncmlkIGNvZGUge1xuICBjb2xvcjogIzBiNWNhZDtcbn1cblxuLmNoYXJ0LWZyYW1lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWluLXdpZHRoOiAwO1xuICBtaW4taGVpZ2h0OiAzNDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNoYXJ0LWZyYW1lLmxhcmdlIHtcbiAgbWluLWhlaWdodDogMzgwcHg7XG59XG5cbi5jaGFydC1mcmFtZSBjaGFydCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDA7XG4gIG1pbi1oZWlnaHQ6IDMyMHB4O1xufVxuXG4uY2hhcnQtZnJhbWUgOjpuZy1kZWVwIC5oaWdoY2hhcnRzLWNvbnRhaW5lcixcbi5jaGFydC1mcmFtZSA6Om5nLWRlZXAgc3ZnIHtcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi50dXRvcmlhbC1jb2xsYXBzZSB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWU1ZWU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxpdmUtbWFya2V0LWNhcmQgLnR1dG9yaWFsLWNvbGxhcHNlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjQyOTMzO1xuICBiYWNrZ3JvdW5kOiAjMTExNjFkO1xufVxuXG4ubGl2ZS1tYXJrZXQtY2FyZC5tYXJrZXQtbGlnaHQgLnR1dG9yaWFsLWNvbGxhcHNlIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDllNWVlO1xuICBiYWNrZ3JvdW5kOiAjZjhmYmZkO1xufVxuXG4udHV0b3JpYWwtY29sbGFwc2Ugc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBtaW4taGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nOiAwIDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICMxZTMxNDU7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5saXZlLW1hcmtldC1jYXJkIC50dXRvcmlhbC1jb2xsYXBzZSBzdW1tYXJ5IHtcbiAgY29sb3I6ICNmNWY3ZmI7XG59XG5cbi5saXZlLW1hcmtldC1jYXJkLm1hcmtldC1saWdodCAudHV0b3JpYWwtY29sbGFwc2Ugc3VtbWFyeSB7XG4gIGNvbG9yOiAjMWUzMTQ1O1xufVxuXG4udHV0b3JpYWwtY29sbGFwc2Ugc3VtbWFyeTo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50dXRvcmlhbC1jb2xsYXBzZSBzdW1tYXJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcrJztcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiAjZTdmMmZmO1xuICBjb2xvcjogIzIwNWI4ZjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnR1dG9yaWFsLWNvbGxhcHNlW29wZW5dIHN1bW1hcnk6YmVmb3JlIHtcbiAgY29udGVudDogJy0nO1xufVxuXG4udHV0b3JpYWwtY29sbGFwc2Ugc3VtbWFyeSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnR1dG9yaWFsLWNvbGxhcHNlIHN1bW1hcnkgc21hbGwge1xuICBjb2xvcjogIzY2NzA4NTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubGl2ZS1tYXJrZXQtY2FyZCAudHV0b3JpYWwtY29sbGFwc2Ugc3VtbWFyeSBzbWFsbCB7XG4gIGNvbG9yOiAjYTdhZmJjO1xufVxuXG4ubGl2ZS1tYXJrZXQtY2FyZC5tYXJrZXQtbGlnaHQgLnR1dG9yaWFsLWNvbGxhcHNlIHN1bW1hcnkgc21hbGwge1xuICBjb2xvcjogIzY2NzA4NTtcbn1cblxuLmNvZGUtbGF5ZXItZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiAxNHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q5ZTVlZTtcbn1cblxuLmxpdmUtbWFya2V0LWNhcmQgLmNvZGUtbGF5ZXItZ3JpZCB7XG4gIGJvcmRlci10b3AtY29sb3I6ICMyNDI5MzM7XG59XG5cbi5saXZlLW1hcmtldC1jYXJkLm1hcmtldC1saWdodCAuY29kZS1sYXllci1ncmlkIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2Q5ZTVlZTtcbn1cblxuLmNvZGUtbGF5ZXItZ3JpZCBoNCB7XG4gIG1hcmdpbjogMCAwIDhweDtcbiAgY29sb3I6ICMzNDQwNTQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmxpdmUtbWFya2V0LWNhcmQgLmNvZGUtbGF5ZXItZ3JpZCBoNCB7XG4gIGNvbG9yOiAjZGZlNmVmO1xufVxuXG4ubGl2ZS1tYXJrZXQtY2FyZC5tYXJrZXQtbGlnaHQgLmNvZGUtbGF5ZXItZ3JpZCBoNCB7XG4gIGNvbG9yOiAjMzQ0MDU0O1xufVxuXG4uY29kZS1sYXllci1ncmlkIHByZSB7XG4gIG1heC1oZWlnaHQ6IDQyMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbnByZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6ICMxMTIyMzY7XG4gIGNvbG9yOiAjZjNmOGZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbmJ1dHRvbiB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBtaW4taGVpZ2h0OiAzOHB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjMTQ2Yzk0O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXZlbnQtZ3JpZCB7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDEuMmZyKSBtaW5tYXgoMjYwcHgsIC44ZnIpO1xufVxuXG4uZXZlbnQtbG9nIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZTVlZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kOiAjZjhmYmZkO1xufVxuXG4uZXZlbnQtbG9nIHVsIHtcbiAgbWFyZ2luOiAxMnB4IDAgMDtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xufVxuXG4uZXZlbnQtbG9nIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBjb2xvcjogIzQwNTg2ZDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XG4gIG1haW4ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgfVxuXG4gIGhlYWRlcixcbiAgLnBhbmVsLFxuICAuY2hhcnQtY2FyZCB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5pbnRyby1wYW5lbCxcbiAgLmNoYXJ0LWhlYWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLnN0YXR1cy1waWxsLFxuICAuY2hhcnQtaGVhZCBzcGFuLFxuICBidXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcbiAgfVxuXG4gIC5leGFtcGxlcy1ncmlkLFxuICAuZXZlbnQtZ3JpZCxcbiAgLmVuZHBvaW50LWdyaWQsXG4gIC5jb2RlLWxheWVyLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgaDEge1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG4gIGgzIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gIH1cblxuICAubWFya2V0LXRvb2xiYXIge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLmxpdmUtbWFya2V0LWNhcmQgLm1hcmtldC1oZWFkLFxuICAubGl2ZS1tYXJrZXQtY2FyZCAubWFya2V0LXRvb2xiYXIsXG4gIC5saXZlLW1hcmtldC1jYXJkIC5tYXJrZXQtc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLm1hcmtldC10b29sYmFyIGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5tYXJrZXQtdG9vbGJhciAucmVsb2FkLWJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cblxuICAubWFya2V0LXRpY2tlcixcbiAgLm1hcmtldC1zdGF0dXMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ2FwOiA2cHg7XG4gIH1cblxuICAubWFya2V0LXRpY2tlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCBtaW5tYXgoMCwgMWZyKSk7XG4gICAgZ2FwOiAzcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xuICB9XG5cbiAgLm1hcmtldC10aWNrZXIgc3BhbiB7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cblxuICAubWFya2V0LXRpY2tlciBzdHJvbmcge1xuICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gIH1cblxuICAubWFya2V0LWZyYW1lLFxuICAubWFya2V0LWZyYW1lIGNoYXJ0IHtcbiAgICBtaW4taGVpZ2h0OiA0NDBweDtcbiAgfVxuXG4gIC5jaGFydC1mcmFtZSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICB9XG5cbiAgLmNoYXJ0LWZyYW1lIGNoYXJ0IHtcbiAgICBtaW4taGVpZ2h0OiAyODBweDtcbiAgfVxuXG4gIC50dXRvcmlhbC1jb2xsYXBzZSBzdW1tYXJ5IHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcbiAgfVxuXG4gIC50dXRvcmlhbC1jb2xsYXBzZSBzdW1tYXJ5IHNtYWxsIHtcbiAgICBtYXgtd2lkdGg6IDkwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIH1cblxuICBwcmUge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgb3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQzMHB4KSB7XG4gIG1haW4ge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgfVxuXG4gIGhlYWRlcixcbiAgLnBhbmVsLFxuICAuY2hhcnQtY2FyZCxcbiAgLmxpdmUtbWFya2V0LWNhcmQge1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gIH1cblxuICBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLnJvdXRlLXRhYnMge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xuICB9XG5cbiAgLnJvdXRlLXRhYnMgYSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAubWFya2V0LXRvb2xiYXIgYnV0dG9uIHtcbiAgICB3aWR0aDogYXV0bztcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    production: false
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
    constructor() {
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
            this.makeNoDataChart(),
            this.makeSankey(),
            this.makeDependencyWheel(),
            this.makeNetworkGraph(),
            this.makeSunburst(),
            this.makeWordcloud(),
            this.makeXRange(),
            this.makeTimeline(),
            this.makeVariwide(),
            this.makeVariablePie(),
            this.makeItemSeries(),
            this.makeStreamgraph(),
            this.makeBullet(),
            this.makeDumbbell(),
            this.makeLollipop(),
            this.makePareto(),
            this.makeHistogramBellcurve(),
            this.makeTilemap(),
            this.makeVenn(),
            this.makeArcDiagram(),
            this.makeOrganization(),
            this.makeCylinder(),
            this.makeFunnel3d(),
            this.makePyramid3d(),
            this.makeDotplot(),
            this.makePackedBubble(),
            this.makeParallelCoordinates(),
            this.makeHeikinAshi(),
            this.makeHollowCandlestick(),
            this.makeVector(),
            this.makeWindbarb(),
            this.makeTreegraph()
        ].map((example) => this.withTutorial(example));
        this.dynamicOptions = this.createDynamicOptions();
        this.dynamicHtml = `<button (click)="randomizeDynamicChart()">Update data</button>
<chart [options]="dynamicOptions" (create)="onCreate('Dynamic update', $event)"></chart>`;
        this.dynamicTutorialHtml = this.wrapTutorialHtml(this.dynamicHtml);
        this.dynamicTutorialTs = `import { Component } from '@angular/core';

@Component({
  selector: 'dynamic-chart-example',
  templateUrl: './dynamic-chart-example.component.html',
  styleUrls: ['./dynamic-chart-example.component.css']
})
export class DynamicChartExampleComponent {
  dynamicData = [29, 42, 55, 61, 73, 88];
  dynamicOptions: any = this.createDynamicOptions();

  randomizeDynamicChart() {
    this.dynamicData = this.dynamicData.map(function () {
      return Math.round(20 + Math.random() * 90);
    });
    this.dynamicOptions = this.createDynamicOptions();
  }

  onCreate(chart: any) {
    console.log('Dynamic chart created', chart.series.length);
  }

  private createDynamicOptions() {
    return {
      chart: { type: 'line', height: 340 },
      title: { text: 'Dynamic update' },
      subtitle: { text: 'Changing the options object re-initializes the wrapper' },
      xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
      yAxis: { title: { text: 'Requests' } },
      series: [{ name: 'Updated data', data: this.dynamicData }]
    };
  }
}`;
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
        this.directiveHtml = `<chart
  [options]="directiveOptions"
  (create)="onCreate('Directive chart', $event)"
  (load)="record('chart load')"
  (redraw)="record('chart redraw')"
>
  <series
    (click)="record('series click')"
    (legendItemClick)="record('legend click')"
  >
    <point
      (click)="record('point click')"
      (mouseOver)="record('point hover')"
    ></point>
  </series>
  <xAxis (setExtremes)="record('xAxis extremes')"></xAxis>
  <yAxis (setExtremes)="record('yAxis extremes')"></yAxis>
</chart>`;
        this.directiveTutorialHtml = this.wrapTutorialHtml(this.directiveHtml);
        this.directiveTutorialTs = `import { Component } from '@angular/core';

@Component({
  selector: 'directive-events-example',
  templateUrl: './directive-events-example.component.html',
  styleUrls: ['./directive-events-example.component.css']
})
export class DirectiveEventsExampleComponent {
  events: string[] = [];

  directiveOptions: any = {
    chart: { type: 'column', height: 340 },
    title: { text: 'Directive/event wiring' },
    subtitle: { text: '<series>, <point>, <xAxis> and <yAxis> outputs' },
    xAxis: { categories: ['North', 'South', 'East', 'West'] },
    yAxis: { title: { text: 'Tickets' } },
    plotOptions: {
      series: {
        cursor: 'pointer',
        point: { events: {} }
      }
    },
    series: [
      { name: 'Open', data: [12, 18, 9, 15] },
      { name: 'Closed', data: [9, 13, 7, 11] }
    ]
  };

  onCreate(chart: any) {
    this.record('chart created with ' + chart.series.length + ' series');
  }

  record(message: string) {
    this.events.unshift(new Date().toLocaleTimeString() + ' - ' + message);
    this.events = this.events.slice(0, 8);
  }
}`;
        this.directiveTutorialScss = this.defaultTutorialScss(340);
        this.binanceTutorialHtml = `<section
  class="live-market-card"
  [class.market-light]="binanceTheme === 'light'"
  [class.market-dark]="binanceTheme === 'dark'"
>
  <div class="market-toolbar">
    <button type="button" (click)="selectBinanceTheme('dark')">Dark</button>
    <button type="button" (click)="selectBinanceTheme('light')">Light</button>
    <button type="button" (click)="selectBinanceSymbol('BNBUSDT')">BNBUSDT</button>
    <button type="button" (click)="selectBinanceSymbol('BTCUSDT')">BTCUSDT</button>
    <button type="button" (click)="selectBinanceInterval('1s')">1s</button>
    <button type="button" (click)="selectBinanceInterval('1m')">1m</button>
    <button type="button" (click)="selectBinanceInterval('1d')">1d</button>
  </div>

  <chart
    [type]="'StockChart'"
    [options]="binanceOptions"
    (create)="onBinanceChartCreate($event)"
  ></chart>
</section>`;
        this.binanceTutorialTs = `import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'binance-candles-example',
  templateUrl: './binance-candles-example.component.html',
  styleUrls: ['./binance-candles-example.component.css']
})
export class BinanceCandlesExampleComponent implements OnInit, OnDestroy {
  binanceSymbol = 'BNBUSDT';
  binanceInterval = '1s';
  binanceTheme = 'light';
  binanceRestHosts = [
    'https://api-b.alexandro.net/api/v3/klines',
    'https://api-b.alexandro.net/data-api/api/v3/klines'
  ];
  // Mask API: the example still uses Binance public market data, but browser
  // requests go through api-b.alexandro.net to avoid firewall/domain blocks.
  binanceWsBaseUrl = 'wss://api-b.alexandro.net/ws/';
  binanceOptions: any = this.createBinanceOptions();

  private binanceChart: any = null;
  private binanceSocket: any = null;
  private binanceOhlcData: any[] = [];
  private binanceVolumeData: any[] = [];

  ngOnInit() {
    this.loadBinanceHistory();
  }

  ngOnDestroy() {
    this.disconnectBinanceSocket();
  }

  onBinanceChartCreate(chart: any) {
    this.binanceChart = chart;
    this.applyBinanceSeries();
  }

  selectBinanceTheme(theme: string) {
    this.binanceTheme = theme;
    this.binanceOptions = this.createBinanceOptions();
    if (this.binanceChart && this.binanceChart.update) {
      this.binanceChart.update(this.binanceOptions, false);
      this.applyBinanceSeries();
    }
  }

  selectBinanceSymbol(symbol: string) {
    this.binanceSymbol = symbol;
    this.loadBinanceHistory();
  }

  selectBinanceInterval(interval: string) {
    this.binanceInterval = interval;
    this.loadBinanceHistory();
  }

  private loadBinanceHistory() {
    this.disconnectBinanceSocket();
    var url = this.binanceRestHosts[0] +
      '?symbol=' + this.binanceSymbol +
      '&interval=' + this.binanceInterval +
      '&limit=300';
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        this.receiveBinanceHistory(JSON.parse(xhr.responseText));
      }
    };

    xhr.open('GET', url, true);
    xhr.send();
  }

  private receiveBinanceHistory(candles: any[]) {
    this.binanceOhlcData = [];
    this.binanceVolumeData = [];

    for (var i = 0; i < candles.length; i++) {
      var candle = candles[i];
      var point = [
        parseInt(candle[0], 10),
        parseFloat(candle[1]),
        parseFloat(candle[2]),
        parseFloat(candle[3]),
        parseFloat(candle[4])
      ];
      this.binanceOhlcData.push(point);
      this.binanceVolumeData.push({
        x: point[0],
        y: parseFloat(candle[5]),
        color: point[4] >= point[1] ? '#02c076' : '#f6465d'
      });
    }

    this.applyBinanceSeries();
    this.connectBinanceSocket();
  }

  private connectBinanceSocket() {
    var url = this.binanceWsBaseUrl +
      this.binanceSymbol.toLowerCase() +
      '@kline_' +
      this.binanceInterval;
    this.binanceSocket = new WebSocket(url);

    this.binanceSocket.onmessage = (message: any) => {
      var payload = JSON.parse(message.data);
      if (payload && payload.k) {
        this.receiveLiveCandle(payload.k);
      }
    };
  }

  private receiveLiveCandle(kline: any) {
    var point = [
      kline.t,
      parseFloat(kline.o),
      parseFloat(kline.h),
      parseFloat(kline.l),
      parseFloat(kline.c)
    ];
    this.binanceOhlcData[this.binanceOhlcData.length - 1] = point;
    this.applyBinanceSeries();
  }

  private applyBinanceSeries() {
    if (!this.binanceChart || !this.binanceChart.series) {
      return;
    }
    this.binanceChart.series[0].setData(this.binanceOhlcData.slice(0), false);
    this.binanceChart.series[1].setData(this.calculateMovingAverage(7), false);
    this.binanceChart.series[2].setData(this.calculateMovingAverage(25), false);
    this.binanceChart.series[3].setData(this.calculateMovingAverage(99), false);
    this.binanceChart.series[4].setData(this.binanceVolumeData.slice(0), false);
    this.binanceChart.redraw();
  }

  private calculateMovingAverage(period: number) {
    var result: any[] = [];
    var sum = 0;
    for (var i = 0; i < this.binanceOhlcData.length; i++) {
      sum += this.binanceOhlcData[i][4];
      if (i >= period) {
        sum -= this.binanceOhlcData[i - period][4];
      }
      if (i >= period - 1) {
        result.push([this.binanceOhlcData[i][0], sum / period]);
      }
    }
    return result;
  }

  private disconnectBinanceSocket() {
    if (this.binanceSocket) {
      this.binanceSocket.close();
      this.binanceSocket = null;
    }
  }

  private createBinanceOptions() {
    return {
      chart: { height: 560, backgroundColor: '#ffffff', plotBackgroundColor: '#ffffff' },
      title: { text: this.binanceSymbol + ' live candles' },
      rangeSelector: { enabled: false },
      navigator: { enabled: false },
      scrollbar: { enabled: false },
      yAxis: [{ height: '68%' }, { top: '73%', height: '22%', offset: 0 }],
      plotOptions: {
        candlestick: {
          color: '#f6465d',
          upColor: '#02c076',
          lineColor: '#f6465d',
          upLineColor: '#02c076'
        },
        series: { animation: false, turboThreshold: 0 }
      },
      series: [
        { type: 'candlestick', name: 'Price', data: [] },
        { type: 'line', name: 'MA(7)', data: [], color: '#f5d300' },
        { type: 'line', name: 'MA(25)', data: [], color: '#ff4ec9' },
        { type: 'line', name: 'MA(99)', data: [], color: '#8e44ad' },
        { type: 'column', name: 'Volume', data: [], yAxis: 1 }
      ]
    };
  }
}`;
        this.binanceTutorialScss = `.live-market-card {
  padding: 18px;
  border: 1px solid #d9e5ee;
  border-radius: 8px;
  background: #fff;
}

.market-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 12px;
}

button {
  min-height: 32px;
  padding: 0 12px;
  border: 1px solid #d0d5dd;
  border-radius: 6px;
  background: #fff;
  color: #344054;
  cursor: pointer;
}

chart {
  display: block;
  width: 100%;
  min-height: 560px;
}`;
    }
    ngOnInit() {
        this.readRoute();
        this.readInitialBinanceTheme();
        this.binanceOptions = this.createBinanceOptions();
        this.dynamicExamples = this.createDynamicMarketExamples();
        if (this.viewMode === 'dynamic') {
            this.loadBinanceHistory();
            this.loadMarketTickerSnapshot();
            this.marketSnapshotTimer = setInterval(() => this.loadMarketTickerSnapshot(false), 20000);
            this.loadCryptoTreemapSnapshot();
            this.cryptoTreemapTimer = setInterval(() => this.loadCryptoTreemapSnapshot(false), 60000);
            this.connectMarketTickerStream();
        }
    }
    ngOnDestroy() {
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
    }
    readRoute() {
        var path = window.location && window.location.pathname ? window.location.pathname : '/';
        var search = window.location && window.location.search ? window.location.search : '';
        this.viewMode = path.indexOf('/static') >= 0 || search.indexOf('view=static') >= 0 ? 'static' : 'dynamic';
    }
    onBinanceChartCreate(chart) {
        this.binanceChart = chart;
        this.applyBinanceSeries();
    }
    selectBinanceSymbol(symbol) {
        if (this.binanceSymbol === symbol) {
            return;
        }
        this.binanceSymbol = symbol;
        this.loadBinanceHistory();
    }
    selectBinanceInterval(interval) {
        if (this.binanceInterval === interval) {
            return;
        }
        this.binanceInterval = interval;
        this.loadBinanceHistory();
    }
    selectBinanceTheme(theme) {
        if (this.binanceTheme === theme) {
            return;
        }
        this.binanceTheme = theme;
        this.binanceOptions = this.createBinanceOptions();
        if (this.binanceChart && this.binanceChart.update) {
            this.binanceChart.update(this.binanceOptions, false);
            this.applyBinanceSeries();
        }
    }
    reloadBinanceChart() {
        this.loadBinanceHistory();
    }
    loadBinanceHistory() {
        this.disconnectBinanceSocket();
        this.binanceOhlcData = [];
        this.binanceVolumeData = [];
        this.binanceCandleCount = 0;
        this.binanceLastCandle = null;
        this.binanceStatus = 'Loading REST candles for ' + this.binanceSymbol + ' ' + this.binanceInterval + '...';
        this.binanceSocketStatus = 'Waiting for REST history';
        this.applyBinanceSeries();
        this.loadBinanceHistoryFromHost(0);
    }
    readInitialBinanceTheme() {
        var search = window.location && window.location.search ? window.location.search : '';
        if (search.indexOf('theme=dark') !== -1) {
            this.binanceTheme = 'dark';
        }
    }
    loadMarketTickerSnapshot(showLoading) {
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
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }
            this.marketSnapshotLoading = false;
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    var tickers = JSON.parse(xhr.responseText);
                    for (var i = 0; i < tickers.length; i++) {
                        this.receiveMarketTicker(this.normalizeRestTicker(tickers[i]));
                    }
                    this.marketStatus = 'REST ticker snapshot loaded';
                    this.refreshDynamicExamples();
                }
                catch (error) {
                    this.marketStatus = 'REST ticker parse failed';
                }
            }
            else {
                this.marketStatus = 'REST ticker snapshot failed';
            }
        };
        xhr.onerror = () => {
            this.marketSnapshotLoading = false;
            this.marketStatus = 'REST ticker snapshot failed';
        };
        xhr.open('GET', url, true);
        xhr.send();
    }
    loadCryptoTreemapSnapshot(showLoading) {
        if (this.cryptoTreemapLoading) {
            return;
        }
        var xhr = new XMLHttpRequest();
        this.cryptoTreemapLoading = true;
        if (showLoading !== false) {
            this.cryptoTreemapStatus = 'Loading CoinGecko top 50 market cap snapshot...';
        }
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }
            this.cryptoTreemapLoading = false;
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    var coins = JSON.parse(xhr.responseText);
                    var rows = [];
                    for (var i = 0; i < coins.length; i++) {
                        rows.push(this.normalizeCoinGeckoCoin(coins[i]));
                    }
                    this.cryptoTreemapRows = rows;
                    this.cryptoTreemapStatus = 'CoinGecko market cap snapshot updated: top ' + rows.length;
                    this.refreshDynamicExamples();
                }
                catch (error) {
                    this.cryptoTreemapStatus = 'CoinGecko market cap parse failed';
                }
            }
            else {
                this.cryptoTreemapStatus = 'CoinGecko market cap snapshot failed';
            }
        };
        xhr.onerror = () => {
            this.cryptoTreemapLoading = false;
            this.cryptoTreemapStatus = 'CoinGecko market cap snapshot failed';
        };
        xhr.open('GET', this.cryptoTreemapUrl, true);
        xhr.send();
    }
    connectMarketTickerStream() {
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
        this.marketSocket.onopen = () => {
            this.marketStatus = 'Live tracked market miniTicker connected';
        };
        this.marketSocket.onclose = () => {
            this.marketStatus = 'Market WebSocket disconnected';
        };
        this.marketSocket.onerror = () => {
            this.marketStatus = 'Market WebSocket error';
        };
        this.marketSocket.onmessage = (message) => {
            try {
                var payload = JSON.parse(message.data);
                var data = payload && payload.data ? payload.data : payload;
                if (data && data.length !== undefined) {
                    for (var i = 0; i < data.length; i++) {
                        this.receiveMiniTickerPayload(data[i]);
                    }
                }
                else {
                    this.receiveMiniTickerPayload(data);
                }
                this.marketStatus = 'Live market miniTicker update: ' + new Date().toLocaleTimeString();
                this.scheduleDynamicRefresh();
            }
            catch (error) {
                this.marketStatus = 'Market WebSocket parse error';
            }
        };
    }
    disconnectMarketTickerStream() {
        if (!this.marketSocket) {
            return;
        }
        this.marketSocket.onopen = null;
        this.marketSocket.onclose = null;
        this.marketSocket.onerror = null;
        this.marketSocket.onmessage = null;
        this.marketSocket.close();
        this.marketSocket = null;
    }
    normalizeRestTicker(ticker) {
        return {
            symbol: ticker.symbol,
            price: parseFloat(ticker.lastPrice),
            open: parseFloat(ticker.openPrice),
            high: parseFloat(ticker.highPrice),
            low: parseFloat(ticker.lowPrice),
            volume: parseFloat(ticker.volume),
            quoteVolume: parseFloat(ticker.quoteVolume),
            changePercent: parseFloat(ticker.priceChangePercent),
            trades: parseFloat(ticker.count)
        };
    }
    normalizeCoinGeckoCoin(coin) {
        return {
            name: this.safeTreemapText(coin.name || ''),
            symbol: this.safeTreemapText((coin.symbol || '').toUpperCase()),
            price: parseFloat(coin.current_price),
            marketCap: parseFloat(coin.market_cap),
            changePercent: parseFloat(coin.price_change_percentage_24h)
        };
    }
    safeTreemapText(value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
    normalizeMiniTicker(ticker) {
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
            changePercent: open ? (close - open) / open * 100 : 0,
            trades: undefined
        };
    }
    receiveMiniTickerPayload(data) {
        var ticker = this.normalizeMiniTicker(data);
        if (this.isTrackedMarketSymbol(ticker.symbol)) {
            this.receiveMarketTicker(ticker);
        }
    }
    receiveMarketTicker(ticker) {
        if (!ticker || !ticker.symbol) {
            return;
        }
        var previous = this.marketTickers[ticker.symbol];
        if (previous && (ticker.trades === undefined || isNaN(ticker.trades))) {
            ticker.trades = previous.trades;
        }
        this.marketTickers[ticker.symbol] = ticker;
        if (!this.marketHistory[ticker.symbol]) {
            this.marketHistory[ticker.symbol] = [];
        }
        this.marketHistory[ticker.symbol].push([Date.now(), ticker.price]);
        while (this.marketHistory[ticker.symbol].length > 60) {
            this.marketHistory[ticker.symbol].shift();
        }
    }
    isTrackedMarketSymbol(symbol) {
        for (var i = 0; i < this.marketSymbols.length; i++) {
            if (this.marketSymbols[i] === symbol) {
                return true;
            }
        }
        return false;
    }
    scheduleDynamicRefresh() {
        if (this.dynamicRefreshQueued) {
            return;
        }
        this.dynamicRefreshQueued = true;
        this.dynamicRefreshTimer = setTimeout(() => {
            this.dynamicRefreshQueued = false;
            this.dynamicRefreshTimer = null;
            this.refreshDynamicExamples();
        }, 900);
    }
    refreshDynamicExamples() {
        this.updateAllDynamicCharts();
    }
    loadBinanceHistoryFromHost(index) {
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
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }
            if (xhr.status >= 200 && xhr.status < 300) {
                try {
                    var candles = JSON.parse(xhr.responseText);
                    this.receiveBinanceHistory(candles, url);
                }
                catch (error) {
                    this.loadBinanceHistoryFromHost(index + 1);
                }
                return;
            }
            this.loadBinanceHistoryFromHost(index + 1);
        };
        xhr.onerror = () => this.loadBinanceHistoryFromHost(index + 1);
        xhr.open('GET', url, true);
        xhr.send();
    }
    receiveBinanceHistory(candles, url) {
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
        this.refreshDynamicExamples();
        this.connectBinanceSocket();
    }
    connectBinanceSocket() {
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
        this.binanceSocket.onopen = () => {
            this.binanceSocketStatus = 'Live WebSocket connected';
        };
        this.binanceSocket.onclose = () => {
            this.binanceSocketStatus = 'WebSocket disconnected';
        };
        this.binanceSocket.onerror = () => {
            this.binanceSocketStatus = 'WebSocket error';
        };
        this.binanceSocket.onmessage = (message) => {
            try {
                var payload = JSON.parse(message.data);
                if (payload && payload.k) {
                    this.receiveBinanceLiveCandle(payload.k);
                }
            }
            catch (error) {
                this.binanceSocketStatus = 'WebSocket parse error';
            }
        };
    }
    disconnectBinanceSocket() {
        if (!this.binanceSocket) {
            return;
        }
        this.binanceSocket.onopen = null;
        this.binanceSocket.onclose = null;
        this.binanceSocket.onerror = null;
        this.binanceSocket.onmessage = null;
        this.binanceSocket.close();
        this.binanceSocket = null;
    }
    receiveBinanceLiveCandle(kline) {
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
        this.scheduleDynamicRefresh();
    }
    upsertTimePoint(target, point) {
        var pointTime = point.x || point[0];
        var last = target.length ? target[target.length - 1] : null;
        var lastTime = last ? (last.x || last[0]) : null;
        if (last && lastTime === pointTime) {
            target[target.length - 1] = point;
            return;
        }
        target.push(point);
    }
    trimBinanceData() {
        while (this.binanceOhlcData.length > 300) {
            this.binanceOhlcData.shift();
        }
        while (this.binanceVolumeData.length > 300) {
            this.binanceVolumeData.shift();
        }
    }
    applyBinanceSeries() {
        if (!this.binanceChart || !this.binanceChart.series || this.binanceChart.series.length < 5) {
            return;
        }
        var isMobile = this.isMobileViewport();
        this.binanceChart.setTitle({ text: isMobile ? '' : this.binanceSymbol + ' live candles' }, { text: isMobile ? '' : 'REST history + Binance WebSocket updates (' + this.binanceInterval + ')' }, false);
        this.binanceChart.series[0].setData(this.binanceOhlcData.slice(0), false);
        this.binanceChart.series[1].setData(this.calculateMovingAverage(7), false);
        this.binanceChart.series[2].setData(this.calculateMovingAverage(25), false);
        this.binanceChart.series[3].setData(this.calculateMovingAverage(99), false);
        this.binanceChart.series[4].setData(this.binanceVolumeData.slice(0), false);
        this.binanceChart.redraw();
    }
    toOhlcPoint(candle) {
        return [
            parseInt(candle[0], 10),
            parseFloat(candle[1]),
            parseFloat(candle[2]),
            parseFloat(candle[3]),
            parseFloat(candle[4])
        ];
    }
    createCandleMeta(point) {
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
    }
    calculateMovingAverage(period) {
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
    }
    shortUrl(url) {
        return url.replace('https://', '').replace('wss://', '');
    }
    formatPrice(value) {
        if (value === null || typeof value === 'undefined') {
            return '--';
        }
        return value.toFixed(value >= 1000 ? 2 : 4);
    }
    formatPercent(value) {
        if (value === null || typeof value === 'undefined') {
            return '--';
        }
        return (value >= 0 ? '+' : '') + value.toFixed(2) + '%';
    }
    withTutorial(example) {
        var optionsName = this.extractOptionsName(example.html);
        var className = this.toComponentClassName(example.title);
        var wrappedHtml = this.wrapTutorialHtml(example.html);
        example.tutorialHtml = wrappedHtml;
        example.tutorialTs = `import { Component } from '@angular/core';

@Component({
  selector: '${this.toSelectorName(example.title)}',
  templateUrl: './${this.toFileName(example.title)}.component.html',
  styleUrls: ['./${this.toFileName(example.title)}.component.css']
})
export class ${className} {
  ${optionsName}: any = ${this.stringifyOptions(example.options)};

  onCreate(chart: any) {
    console.log('${example.title} created', chart.series.length);
  }
}`;
        example.tutorialScss = this.defaultTutorialScss(example.options && example.options.chart && example.options.chart.height ? example.options.chart.height : 320);
        return example;
    }
    wrapTutorialHtml(html) {
        return `<div class="chart-shell">
  ${html}
</div>`;
    }
    extractOptionsName(html) {
        var match = html.match(/\[options\]="([^"]+)"/);
        return match && match[1] ? match[1] : 'chartOptions';
    }
    stringifyOptions(options) {
        return JSON.stringify(options, null, 2)
            .replace(/"([^"]+)":/g, '$1:')
            .replace(/"/g, '\'');
    }
    toComponentClassName(title) {
        var name = this.toWords(title).join('');
        if (/^[0-9]/.test(name)) {
            name = 'Chart' + name;
        }
        return name + 'ExampleComponent';
    }
    toSelectorName(title) {
        return 'chart-' + this.toFileName(title);
    }
    toFileName(title) {
        return this.toWords(title).join('-').toLowerCase();
    }
    toWords(value) {
        var words = value.replace(/[^a-zA-Z0-9]+/g, ' ').split(' ');
        var clean = [];
        for (var i = 0; i < words.length; i++) {
            if (words[i]) {
                clean.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
            }
        }
        return clean.length ? clean : ['Chart'];
    }
    defaultTutorialScss(height) {
        return `.chart-shell {
  width: 100%;
  padding: 16px;
  border: 1px solid #d9e5ee;
  border-radius: 8px;
  background: #fff;
  box-sizing: border-box;
}

chart {
  display: block;
  width: 100%;
  min-height: ${height}px;
}`;
    }
    createDynamicMarketExamples() {
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
            this.makeDynamicExample('Live 3D volume columns', '3D columns from live quote volume.', 'live3dColumnOptions', this.createLive3dColumnOptions()),
            this.makeDynamicExample('Live volume cylinder', 'Cylinder chart driven by Binance quote volume.', 'liveCylinderOptions', this.createLiveCylinderOptions()),
            this.makeDynamicExample('Live liquidity funnel 3D', '3D funnel sorted by Binance quote volume.', 'liveFunnel3dOptions', this.createLiveFunnel3dOptions()),
            this.makeDynamicExample('Live trade activity pyramid 3D', '3D pyramid using Binance 24hr trade counts when available.', 'livePyramid3dOptions', this.createLivePyramid3dOptions()),
            this.makeDynamicExample('Live change dot plot', 'Dot plot from live 24hr percentage change.', 'liveDotplotOptions', this.createLiveDotplotOptions()),
            this.makeDynamicExample('Live liquidity packed bubbles', 'Packed bubbles grouped by live Binance liquidity rank.', 'livePackedBubbleOptions', this.createLivePackedBubbleOptions()),
            this.makeDynamicExample('Live market parallel coordinates', 'Parallel coordinates comparing live Binance price, range, volume and trade activity.', 'liveParallelCoordinatesOptions', this.createLiveParallelCoordinatesOptions()),
            this.makeDynamicExample('Live Heikin Ashi candles', 'Heikin Ashi rendering from the selected Binance candle stream.', 'liveHeikinAshiOptions', this.createLiveHeikinAshiOptions(), 'StockChart'),
            this.makeDynamicExample('Live hollow candlestick', 'Hollow candlestick rendering from the selected Binance candle stream.', 'liveHollowCandlestickOptions', this.createLiveHollowCandlestickOptions(), 'StockChart'),
            this.makeDynamicExample('Live market vector field', 'Vector direction and strength derived from Binance change and liquidity.', 'liveVectorOptions', this.createLiveVectorOptions()),
            this.makeDynamicExample('Live market wind barb', 'Wind barb style view of live market momentum derived from Binance tickers.', 'liveWindbarbOptions', this.createLiveWindbarbOptions()),
            this.makeDynamicExample('Live market treegraph', 'Treegraph grouping tracked Binance symbols by positive and negative movement.', 'liveTreegraphOptions', this.createLiveTreegraphOptions())
        ];
        for (var i = 0; i < examples.length; i++) {
            examples[i] = this.withTutorial(examples[i]);
        }
        return examples;
    }
    makeDynamicExample(title, description, optionsName, options, constructorType) {
        return {
            key: optionsName,
            title: title,
            description: description,
            constructorType: constructorType,
            options: options,
            html: constructorType
                ? '<chart [type]="\'' + constructorType + '\'" [options]="' + optionsName + '"></chart>'
                : '<chart [options]="' + optionsName + '"></chart>'
        };
    }
    marketRows() {
        var rows = [];
        for (var i = 0; i < this.marketSymbols.length; i++) {
            var symbol = this.marketSymbols[i];
            rows.push(this.marketTickers[symbol] || this.fallbackTicker(symbol, i));
        }
        return rows;
    }
    fallbackTicker(symbol, index) {
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
            changePercent: change,
            trades: 1500000 - index * 120000
        };
    }
    cryptoTreemapRowsForChart() {
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
    }
    marketLabels(rows) {
        var labels = [];
        for (var i = 0; i < rows.length; i++) {
            labels.push(rows[i].symbol.replace('USDT', ''));
        }
        return labels;
    }
    marketValues(rows, field, divisor) {
        var values = [];
        for (var i = 0; i < rows.length; i++) {
            values.push(parseFloat(((rows[i][field] || 0) / divisor).toFixed(4)));
        }
        return values;
    }
    marketPieData(rows) {
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push([rows[i].symbol.replace('USDT', ''), parseFloat((rows[i].quoteVolume / 1000000).toFixed(2))]);
        }
        return data;
    }
    marketHistorySeries() {
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
    }
    marketMoveSeries() {
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
    }
    marketHeartbeatSeries() {
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
    }
    marketScore(rows) {
        var sum = 0;
        for (var i = 0; i < rows.length; i++) {
            sum += rows[i].changePercent;
        }
        var avg = rows.length ? sum / rows.length : 0;
        var score = 50 + avg * 5;
        return Math.max(0, Math.min(100, parseFloat(score.toFixed(2))));
    }
    sortedMarketRowsBy(field) {
        var rows = this.marketRows().slice(0);
        rows.sort(function (a, b) {
            return (b[field] || 0) - (a[field] || 0);
        });
        return rows;
    }
    rangePercent(row) {
        var price = row && row.price ? row.price : 1;
        return price ? (row.high - row.low) / price * 100 : 0;
    }
    metricScore(value, min, max) {
        if (max === min) {
            return 50;
        }
        return parseFloat(Math.max(0, Math.min(100, (value - min) / (max - min) * 100)).toFixed(2));
    }
    maxField(rows, field) {
        var max = 0;
        for (var i = 0; i < rows.length; i++) {
            max = Math.max(max, rows[i][field] || 0);
        }
        return max || 1;
    }
    candleDataForDynamicCharts() {
        if (this.binanceOhlcData.length) {
            return this.binanceOhlcData.slice(-80);
        }
        var now = Date.now();
        var data = [];
        var close = this.fallbackTicker(this.binanceSymbol, 2).price;
        for (var i = 0; i < 40; i++) {
            var open = close + Math.sin(i / 3) * 3;
            var high = open + 6 + Math.cos(i / 4) * 2;
            var low = open - 6 - Math.sin(i / 5) * 2;
            close = open + Math.sin(i / 2) * 4;
            data.push([now - (40 - i) * 1000, open, high, low, close]);
        }
        return data;
    }
    createLiveLineOptions() {
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
    }
    createLiveSplineOptions() {
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
    }
    createLiveAreaOptions() {
        var rows = this.marketRows();
        return {
            chart: { type: 'area', height: 320 },
            title: { text: 'Live quote volume area' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { title: { text: 'Quote volume, millions' } },
            series: [{ name: 'Quote volume', data: this.marketValues(rows, 'quoteVolume', 1000000) }]
        };
    }
    createLiveAreasplineOptions() {
        var options = this.createLiveAreaOptions();
        options.chart.type = 'areaspline';
        options.title.text = 'Live quote volume areaspline';
        return options;
    }
    createLiveColumnOptions() {
        var rows = this.marketRows();
        return {
            chart: { type: 'column', height: 320 },
            title: { text: 'Live 24h change column' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { title: { text: 'Change %' } },
            series: [{ name: '24h change %', data: this.marketValues(rows, 'changePercent', 1) }]
        };
    }
    createLiveBarOptions() {
        var rows = this.marketRows();
        return {
            chart: { type: 'bar', height: 320 },
            title: { text: 'Live volume bar' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { title: { text: 'Quote volume, millions' } },
            series: [{ name: 'Quote volume', data: this.marketValues(rows, 'quoteVolume', 1000000) }]
        };
    }
    createLiveStackedOptions() {
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
    }
    createLivePieOptions() {
        return {
            chart: { type: 'pie', height: 320 },
            title: { text: 'Live volume pie' },
            series: [{ name: 'Quote volume', data: this.marketPieData(this.marketRows()) }]
        };
    }
    createLiveDonutOptions() {
        var options = this.createLivePieOptions();
        options.title.text = 'Live volume donut';
        options.plotOptions = { pie: { innerSize: '55%' } };
        return options;
    }
    createLiveScatterOptions() {
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
    }
    createLiveBubbleOptions() {
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
    }
    createLiveComboOptions() {
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
    }
    createLivePolarOptions() {
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
    }
    createLiveGaugeOptions() {
        var ticker = this.marketTickers['BNBUSDT'] || this.fallbackTicker('BNBUSDT', 2);
        return {
            chart: { type: 'gauge', height: 320 },
            title: { text: 'Live BNB change gauge' },
            pane: { startAngle: -150, endAngle: 150 },
            yAxis: { min: -10, max: 10, title: { text: '24h %' } },
            series: [{ name: 'BNB change', data: [parseFloat(ticker.changePercent.toFixed(2))] }]
        };
    }
    createLiveSolidGaugeOptions() {
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
    }
    createLiveHeatmapOptions() {
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
    }
    createLiveTreemapOptions() {
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
    }
    createLiveFunnelOptions() {
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
    }
    createLive3dColumnOptions() {
        var rows = this.marketRows();
        return {
            chart: { type: 'column', height: 320, options3d: { enabled: true, alpha: 12, beta: 12, depth: 45 } },
            title: { text: 'Live 3D volume columns' },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { title: { text: 'Quote volume, millions' } },
            series: [{ name: 'Quote volume', data: this.marketValues(rows, 'quoteVolume', 1000000) }]
        };
    }
    createLiveCylinderOptions() {
        var rows = this.sortedMarketRowsBy('quoteVolume').slice(0, 6);
        return {
            chart: {
                type: 'cylinder',
                height: 340,
                options3d: { enabled: true, alpha: 15, beta: 15, depth: 45, viewDistance: 25 }
            },
            title: { text: 'Live volume cylinder' },
            subtitle: { text: this.marketStatus },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: { title: { text: 'Quote volume, millions' } },
            plotOptions: { series: { depth: 35, colorByPoint: true, animation: false } },
            series: [{ name: 'Quote volume', data: this.marketValues(rows, 'quoteVolume', 1000000) }]
        };
    }
    createLiveFunnel3dOptions() {
        var rows = this.sortedMarketRowsBy('quoteVolume').slice(0, 6);
        return {
            chart: {
                type: 'funnel3d',
                height: 360,
                options3d: { enabled: true, alpha: 10, depth: 50, viewDistance: 50 }
            },
            title: { text: 'Live liquidity funnel 3D' },
            subtitle: { text: this.marketStatus },
            plotOptions: {
                series: {
                    animation: false,
                    neckWidth: '30%',
                    neckHeight: '25%',
                    width: '72%',
                    height: '82%',
                    dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.y:.0f}M' }
                }
            },
            series: [{ name: 'Quote volume', data: this.marketPieData(rows) }]
        };
    }
    createLivePyramid3dOptions() {
        var rows = this.sortedMarketRowsBy('trades').slice(0, 6);
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push([rows[i].symbol.replace('USDT', ''), Math.round((rows[i].trades || 0) / 1000)]);
        }
        return {
            chart: {
                type: 'pyramid3d',
                height: 360,
                options3d: { enabled: true, alpha: 10, depth: 50, viewDistance: 50 }
            },
            title: { text: 'Live trade activity pyramid 3D' },
            subtitle: { text: 'Binance 24hr ticker count, thousands' },
            plotOptions: {
                series: {
                    animation: false,
                    width: '72%',
                    height: '82%',
                    dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.y:.0f}K' }
                }
            },
            series: [{ name: 'Trades', data: data }]
        };
    }
    createLiveDotplotOptions() {
        var rows = this.marketRows();
        return {
            chart: { type: 'dotplot', height: 320 },
            title: { text: 'Live change dot plot' },
            subtitle: { text: this.marketStatus },
            xAxis: { categories: this.marketLabels(rows) },
            yAxis: {
                title: { text: '24h change %' },
                plotLines: [{ value: 0, color: '#94a3b8', width: 1, dashStyle: 'ShortDash', zIndex: 1 }]
            },
            plotOptions: { series: { animation: false } },
            series: [{ name: '24h change', data: this.marketValues(rows, 'changePercent', 1) }]
        };
    }
    createLivePackedBubbleOptions() {
        var rows = this.sortedMarketRowsBy('quoteVolume');
        var top = [];
        var middle = [];
        var watch = [];
        for (var i = 0; i < rows.length; i++) {
            var point = {
                name: rows[i].symbol.replace('USDT', ''),
                value: parseFloat((rows[i].quoteVolume / 1000000).toFixed(2))
            };
            if (i < 3) {
                top.push(point);
            }
            else if (i < 6) {
                middle.push(point);
            }
            else {
                watch.push(point);
            }
        }
        return {
            chart: { type: 'packedbubble', height: 360 },
            title: { text: 'Live liquidity packed bubbles' },
            subtitle: { text: this.marketStatus },
            tooltip: { pointFormat: '<b>{point.name}</b>: {point.value:.2f}M quote volume' },
            plotOptions: {
                packedbubble: {
                    animation: false,
                    minSize: '28%',
                    maxSize: '92%',
                    layoutAlgorithm: { splitSeries: false, gravitationalConstant: 0.04 }
                }
            },
            series: [
                { name: 'Top liquidity', data: top },
                { name: 'Mid liquidity', data: middle },
                { name: 'Watchlist', data: watch }
            ]
        };
    }
    createLiveParallelCoordinatesOptions() {
        var rows = this.marketRows().slice(0, 6);
        var maxVolume = this.maxField(rows, 'quoteVolume');
        var maxTrades = this.maxField(rows, 'trades');
        var series = [];
        for (var i = 0; i < rows.length; i++) {
            var changeScore = this.metricScore(rows[i].changePercent, -10, 10);
            var rangeScore = this.metricScore(this.rangePercent(rows[i]), 0, 12);
            var volumeScore = this.metricScore(rows[i].quoteVolume, 0, maxVolume);
            var tradeScore = this.metricScore(rows[i].trades || 0, 0, maxTrades);
            var priceScore = this.metricScore(rows[i].price, rows[rows.length - 1].price || 0, rows[0].price || 1);
            series.push({
                name: rows[i].symbol.replace('USDT', ''),
                data: [priceScore, changeScore, rangeScore, volumeScore, tradeScore]
            });
        }
        return {
            chart: { parallelCoordinates: true, type: 'line', height: 360 },
            title: { text: 'Live market parallel coordinates' },
            subtitle: { text: 'Scores normalized from Binance ticker fields' },
            xAxis: { categories: ['Price', 'Change', 'Range', 'Volume', 'Trades'] },
            yAxis: { title: { text: null }, min: 0, max: 100 },
            plotOptions: { series: { animation: false, marker: { enabled: false } } },
            series: series
        };
    }
    createLiveHeikinAshiOptions() {
        return {
            chart: { height: 340 },
            title: { text: 'Live Heikin Ashi candles' },
            subtitle: { text: this.binanceSymbol + ' ' + this.binanceInterval + ' candles' },
            rangeSelector: { enabled: false },
            navigator: { enabled: false },
            scrollbar: { enabled: false },
            plotOptions: { series: { animation: false } },
            series: [{ type: 'heikinashi', name: this.binanceSymbol, data: this.candleDataForDynamicCharts() }]
        };
    }
    createLiveHollowCandlestickOptions() {
        return {
            chart: { height: 340 },
            title: { text: 'Live hollow candlestick' },
            subtitle: { text: this.binanceSymbol + ' ' + this.binanceInterval + ' candles' },
            rangeSelector: { enabled: false },
            navigator: { enabled: false },
            scrollbar: { enabled: false },
            plotOptions: { series: { animation: false } },
            series: [{ type: 'hollowcandlestick', name: this.binanceSymbol, data: this.candleDataForDynamicCharts() }]
        };
    }
    createLiveVectorOptions() {
        var rows = this.marketRows();
        var maxVolume = this.maxField(rows, 'quoteVolume');
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            var direction = rows[i].changePercent >= 0 ? 45 : 225;
            var length = 6 + Math.abs(rows[i].changePercent) * 1.8 + (rows[i].quoteVolume / maxVolume) * 6;
            data.push([i, this.metricScore(rows[i].quoteVolume, 0, maxVolume), parseFloat(length.toFixed(2)), direction]);
        }
        return {
            chart: { type: 'vector', height: 340 },
            title: { text: 'Live market vector field' },
            subtitle: { text: 'Direction from live change; length from change plus liquidity' },
            xAxis: { categories: this.marketLabels(rows), min: -0.5, max: rows.length - 0.5 },
            yAxis: { min: 0, max: 100, title: { text: 'Liquidity score' } },
            tooltip: { pointFormat: 'Length: <b>{point.length:.2f}</b><br/>Direction: <b>{point.direction} deg</b>' },
            plotOptions: { series: { animation: false } },
            series: [{ name: 'Momentum vectors', data: data }]
        };
    }
    createLiveWindbarbOptions() {
        var rows = this.marketRows();
        var now = Date.now();
        var data = [];
        for (var i = 0; i < rows.length; i++) {
            data.push({
                x: now + i * 60000,
                value: parseFloat((Math.abs(rows[i].changePercent) * 3 + this.rangePercent(rows[i])).toFixed(2)),
                direction: rows[i].changePercent >= 0 ? 70 : 250,
                name: rows[i].symbol.replace('USDT', '')
            });
        }
        return {
            chart: { height: 320 },
            title: { text: 'Live market wind barb' },
            subtitle: { text: 'Momentum style view derived from Binance ticker movement' },
            xAxis: { type: 'datetime' },
            yAxis: { title: { text: 'Momentum speed' } },
            plotOptions: { series: { animation: false } },
            series: [{ type: 'windbarb', name: 'Momentum', data: data }]
        };
    }
    createLiveTreegraphOptions() {
        var rows = this.marketRows();
        var data = [
            { id: 'Tracked Binance markets' },
            { id: 'Positive move', parent: 'Tracked Binance markets' },
            { id: 'Negative move', parent: 'Tracked Binance markets' }
        ];
        for (var i = 0; i < rows.length; i++) {
            var label = rows[i].symbol.replace('USDT', '') + ' ' + rows[i].changePercent.toFixed(2) + '%';
            data.push({
                id: label,
                parent: rows[i].changePercent >= 0 ? 'Positive move' : 'Negative move',
                color: rows[i].changePercent >= 0 ? '#02c076' : '#f6465d'
            });
        }
        return {
            chart: { type: 'treegraph', height: 380 },
            title: { text: 'Live market treegraph' },
            subtitle: { text: 'Tracked symbols grouped by live 24h move' },
            plotOptions: {
                series: {
                    animation: false,
                    dataLabels: { style: { textOutline: 'none' } },
                    marker: { symbol: 'rect', width: 120 }
                }
            },
            series: [{ data: data }]
        };
    }
    onDynamicChartCreate(example, chart) {
        if (!example || !example.key) {
            return;
        }
        this.dynamicCharts[example.key] = chart;
        this.updateDynamicChart(example.key);
    }
    updateAllDynamicCharts() {
        for (var i = 0; i < this.dynamicExamples.length; i++) {
            var example = this.dynamicExamples[i];
            if (example && example.key) {
                this.updateDynamicChart(example.key);
            }
        }
    }
    updateDynamicChart(key) {
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
    }
    syncDynamicCategories(chart, options) {
        var xAxisOptions = options.xAxis;
        var yAxisOptions = options.yAxis;
        if (xAxisOptions && xAxisOptions.categories && chart.xAxis && chart.xAxis[0] && chart.xAxis[0].setCategories) {
            chart.xAxis[0].setCategories(xAxisOptions.categories, false);
        }
        if (yAxisOptions && yAxisOptions.categories && chart.yAxis && chart.yAxis[0] && chart.yAxis[0].setCategories) {
            chart.yAxis[0].setCategories(yAxisOptions.categories, false);
        }
    }
    syncDynamicSeries(chart, seriesOptions) {
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
    }
    createDynamicOptionsByKey(key) {
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
            case 'liveCylinderOptions':
                return this.createLiveCylinderOptions();
            case 'liveFunnel3dOptions':
                return this.createLiveFunnel3dOptions();
            case 'livePyramid3dOptions':
                return this.createLivePyramid3dOptions();
            case 'liveDotplotOptions':
                return this.createLiveDotplotOptions();
            case 'livePackedBubbleOptions':
                return this.createLivePackedBubbleOptions();
            case 'liveParallelCoordinatesOptions':
                return this.createLiveParallelCoordinatesOptions();
            case 'liveHeikinAshiOptions':
                return this.createLiveHeikinAshiOptions();
            case 'liveHollowCandlestickOptions':
                return this.createLiveHollowCandlestickOptions();
            case 'liveVectorOptions':
                return this.createLiveVectorOptions();
            case 'liveWindbarbOptions':
                return this.createLiveWindbarbOptions();
            case 'liveTreegraphOptions':
                return this.createLiveTreegraphOptions();
            default:
                return null;
        }
    }
    onCreate(name, chart) {
        this.record(name + ' created with ' + chart.series.length + ' series');
    }
    record(message) {
        this.events.unshift(new Date().toLocaleTimeString() + ' - ' + message);
        this.events = this.events.slice(0, 8);
    }
    randomizeDynamicChart() {
        this.dynamicData = this.dynamicData.map(function () {
            return Math.round(20 + Math.random() * 90);
        });
        this.dynamicOptions = this.createDynamicOptions();
    }
    makeBasic(title, description, type) {
        return {
            title: title,
            description: description,
            options: {
                chart: { type: type, height: 320 },
                title: { text: title },
                subtitle: { text: '@stackline/angular-highcharts Angular 10 live test' },
                xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
                yAxis: { title: { text: 'Requests' } },
                series: [
                    { name: 'API', data: [29, 42, 55, 61, 73, 88] },
                    { name: 'Dashboard', data: [18, 31, 37, 46, 58, 63] }
                ]
            },
            html: '<chart [options]="' + type + 'Options"></chart>'
        };
    }
    createBinanceOptions() {
        var theme = this.getBinanceChartTheme();
        var isMobile = this.isMobileViewport();
        var pricePaneHeight = isMobile ? '84%' : '68%';
        var volumePaneTop = isMobile ? '87%' : '73%';
        var volumePaneHeight = isMobile ? '10%' : '22%';
        return {
            chart: {
                height: isMobile ? 540 : 560,
                alignTicks: !isMobile,
                backgroundColor: theme.background,
                plotBackgroundColor: theme.plotBackground,
                margin: isMobile ? [8, 8, 24, 4] : undefined,
                marginTop: isMobile ? 8 : undefined,
                marginRight: isMobile ? 8 : undefined,
                marginBottom: isMobile ? 24 : undefined,
                marginLeft: isMobile ? 4 : undefined,
                spacing: isMobile ? [4, 4, 4, 4] : [16, 20, 18, 12],
                spacingTop: isMobile ? 0 : undefined,
                spacingRight: isMobile ? 0 : undefined,
                spacingBottom: isMobile ? 0 : undefined,
                spacingLeft: isMobile ? 0 : undefined,
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
                text: isMobile ? '' : this.binanceSymbol + ' live candles',
                align: 'left',
                style: { color: theme.title, fontSize: '16px', fontWeight: '600' }
            },
            subtitle: {
                text: isMobile ? '' : 'REST history + Binance WebSocket updates (' + this.binanceInterval + ')',
                align: 'left',
                style: { color: theme.subtitle }
            },
            legend: {
                enabled: !isMobile,
                align: 'left',
                verticalAlign: 'top',
                itemStyle: { color: theme.legend },
                itemHoverStyle: { color: theme.legendHover }
            },
            xAxis: {
                lineColor: theme.axisLine,
                tickColor: theme.axisLine,
                gridLineColor: theme.grid,
                labels: { style: { color: theme.axisText, fontSize: isMobile ? '9px' : undefined } },
                crosshair: {
                    color: theme.crosshair,
                    dashStyle: 'Dash'
                }
            },
            yAxis: [{
                    height: pricePaneHeight,
                    lineColor: theme.axisLine,
                    gridLineColor: theme.grid,
                    startOnTick: !isMobile,
                    endOnTick: !isMobile,
                    minPadding: isMobile ? 0.01 : undefined,
                    maxPadding: isMobile ? 0.01 : undefined,
                    opposite: true,
                    title: { text: null },
                    labels: { style: { color: theme.axisText, fontSize: isMobile ? '9px' : undefined } }
                }, {
                    top: volumePaneTop,
                    height: volumePaneHeight,
                    offset: 0,
                    lineColor: theme.axisLine,
                    gridLineColor: theme.grid,
                    startOnTick: false,
                    endOnTick: false,
                    opposite: true,
                    title: { text: isMobile ? null : 'Volume', style: { color: theme.axisText } },
                    labels: { style: { color: theme.axisText, fontSize: isMobile ? '9px' : undefined } }
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
    }
    isMobileViewport() {
        return typeof window !== 'undefined' && window.innerWidth <= 760;
    }
    getBinanceChartTheme() {
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
    }
    makeStackedColumn() {
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
    }
    makePie() {
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
    }
    makeDonut() {
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
    }
    makeScatter() {
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
    }
    makeBubble() {
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
    }
    makeCombination() {
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
    }
    makePolar() {
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
    }
    makeGauge() {
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
    }
    makeSolidGauge() {
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
    }
    makeHeatmap() {
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
    }
    makeTreemap() {
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
    }
    makeFunnel() {
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
    }
    make3dColumn() {
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
    }
    makeStockChart() {
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
    }
    makeMapLikeChart() {
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
    }
    makeNoDataChart() {
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
    }
    makeSankey() {
        return {
            title: 'Sankey flow',
            description: 'Flow weights between operational stages.',
            options: {
                chart: { height: 320 },
                title: { text: 'Support flow' },
                series: [{
                        type: 'sankey',
                        name: 'Tickets',
                        keys: ['from', 'to', 'weight'],
                        data: [
                            ['Intake', 'Triage', 24],
                            ['Triage', 'Engineering', 12],
                            ['Triage', 'Support', 8],
                            ['Engineering', 'Resolved', 9],
                            ['Support', 'Resolved', 7],
                            ['Engineering', 'Backlog', 3]
                        ]
                    }]
            },
            html: '<chart [options]="sankeyFlowOptions"></chart>'
        };
    }
    makeDependencyWheel() {
        return {
            title: 'Dependency wheel',
            description: 'Circular dependency relationships from the dependency-wheel module.',
            options: {
                chart: { height: 340 },
                title: { text: 'Team dependencies' },
                series: [{
                        type: 'dependencywheel',
                        name: 'Handoffs',
                        keys: ['from', 'to', 'weight'],
                        data: [
                            ['Design', 'Frontend', 5],
                            ['Frontend', 'API', 4],
                            ['API', 'Data', 3],
                            ['Data', 'QA', 2],
                            ['QA', 'Design', 1]
                        ],
                        dataLabels: { color: '#333' }
                    }]
            },
            html: '<chart [options]="dependencyWheelOptions"></chart>'
        };
    }
    makeNetworkGraph() {
        return {
            title: 'Network graph',
            description: 'Relationship graph with stable layout settings.',
            options: {
                chart: { type: 'networkgraph', height: 340 },
                title: { text: 'Service map' },
                plotOptions: {
                    networkgraph: {
                        layoutAlgorithm: {
                            enableSimulation: false,
                            integration: 'verlet'
                        }
                    }
                },
                series: [{
                        dataLabels: { enabled: true, linkFormat: '' },
                        data: [
                            ['Gateway', 'Auth'],
                            ['Gateway', 'Catalog'],
                            ['Catalog', 'Search'],
                            ['Catalog', 'Billing'],
                            ['Billing', 'Ledger'],
                            ['Search', 'Cache']
                        ]
                    }]
            },
            html: '<chart [options]="networkGraphOptions"></chart>'
        };
    }
    makeSunburst() {
        return {
            title: 'Sunburst',
            description: 'Hierarchical radial breakdown from the sunburst module.',
            options: {
                chart: { height: 340 },
                title: { text: 'Product areas' },
                series: [{
                        type: 'sunburst',
                        data: [
                            { id: 'root', parent: '', name: 'Product' },
                            { id: 'platform', parent: 'root', name: 'Platform' },
                            { id: 'apps', parent: 'root', name: 'Apps' },
                            { id: 'api', parent: 'platform', name: 'API', value: 5 },
                            { id: 'jobs', parent: 'platform', name: 'Jobs', value: 3 },
                            { id: 'admin', parent: 'apps', name: 'Admin', value: 4 },
                            { id: 'reports', parent: 'apps', name: 'Reports', value: 2 }
                        ],
                        allowDrillToNode: true,
                        dataLabels: { format: '{point.name}' }
                    }]
            },
            html: '<chart [options]="sunburstOptions"></chart>'
        };
    }
    makeWordcloud() {
        return {
            title: 'Word cloud',
            description: 'Weighted text visualization from the wordcloud module.',
            options: {
                chart: { height: 320 },
                title: { text: 'Feedback themes' },
                series: [{
                        type: 'wordcloud',
                        name: 'Mentions',
                        data: [
                            { name: 'Performance', weight: 18 },
                            { name: 'Accessibility', weight: 14 },
                            { name: 'Charts', weight: 12 },
                            { name: 'Realtime', weight: 10 },
                            { name: 'Angular', weight: 9 },
                            { name: 'Docs', weight: 8 }
                        ]
                    }]
            },
            html: '<chart [options]="wordcloudOptions"></chart>'
        };
    }
    makeXRange() {
        return {
            title: 'X-range timeline',
            description: 'Horizontal time spans from the xrange module.',
            options: {
                chart: { type: 'xrange', height: 320 },
                title: { text: 'Release plan' },
                xAxis: { type: 'datetime' },
                yAxis: { categories: ['Design', 'Build', 'QA'], reversed: true, title: null },
                series: [{
                        name: 'Work',
                        borderColor: '#d0d5dd',
                        pointWidth: 20,
                        data: [
                            { x: Date.UTC(2026, 0, 1), x2: Date.UTC(2026, 0, 12), y: 0, name: 'Design' },
                            { x: Date.UTC(2026, 0, 10), x2: Date.UTC(2026, 0, 28), y: 1, name: 'Build' },
                            { x: Date.UTC(2026, 0, 24), x2: Date.UTC(2026, 1, 5), y: 2, name: 'QA' }
                        ]
                    }]
            },
            html: '<chart [options]="xRangeTimelineOptions"></chart>'
        };
    }
    makeTimeline() {
        return {
            title: 'Timeline',
            description: 'Milestone timeline from the timeline module.',
            options: {
                chart: { type: 'timeline', height: 320 },
                title: { text: 'Release milestones' },
                xAxis: { visible: false },
                yAxis: { visible: false },
                series: [{
                        data: [
                            { name: 'Scope', label: 'Scope locked', description: 'Requirements finalized' },
                            { name: 'Build', label: 'Build complete', description: 'Feature branch merged' },
                            { name: 'Release', label: 'Release', description: 'Production rollout' }
                        ]
                    }]
            },
            html: '<chart [options]="timelineOptions"></chart>'
        };
    }
    makeVariwide() {
        return {
            title: 'Variwide',
            description: 'Column width represents a second dimension.',
            options: {
                chart: { type: 'variwide', height: 320 },
                title: { text: 'Revenue by segment size' },
                xAxis: { type: 'category' },
                series: [{
                        name: 'Revenue',
                        data: [
                            { name: 'SMB', y: 42, z: 80 },
                            { name: 'Mid-market', y: 64, z: 55 },
                            { name: 'Enterprise', y: 88, z: 30 }
                        ]
                    }]
            },
            html: '<chart [options]="variwideOptions"></chart>'
        };
    }
    makeVariablePie() {
        return {
            title: 'Variable pie',
            description: 'Slice angle and radius carry separate values.',
            options: {
                chart: { type: 'variablepie', height: 320 },
                title: { text: 'Channel quality' },
                series: [{
                        minPointSize: 10,
                        innerSize: '20%',
                        zMin: 0,
                        name: 'Channels',
                        data: [
                            { name: 'Direct', y: 35, z: 80 },
                            { name: 'Search', y: 42, z: 65 },
                            { name: 'Referral', y: 18, z: 45 },
                            { name: 'Email', y: 12, z: 30 }
                        ]
                    }]
            },
            html: '<chart [options]="variablePieOptions"></chart>'
        };
    }
    makeItemSeries() {
        return {
            title: 'Item series',
            description: 'Item icons used for compact composition charts.',
            options: {
                chart: { type: 'item', height: 320 },
                title: { text: 'Work split' },
                legend: { labelFormat: '{name} <span style="opacity: 0.6">{y}</span>' },
                series: [{
                        name: 'Tasks',
                        data: [
                            ['Frontend', 12],
                            ['Backend', 10],
                            ['QA', 6],
                            ['Docs', 4]
                        ]
                    }]
            },
            html: '<chart [options]="itemSeriesOptions"></chart>'
        };
    }
    makeStreamgraph() {
        return {
            title: 'Streamgraph',
            description: 'Stacked flow over time from the streamgraph module.',
            options: {
                chart: { type: 'streamgraph', height: 340 },
                title: { text: 'Capacity stream' },
                xAxis: { categories: ['W1', 'W2', 'W3', 'W4', 'W5'] },
                series: [
                    { name: 'Build', data: [2, 3, 5, 4, 6] },
                    { name: 'Review', data: [1, 2, 2, 3, 2] },
                    { name: 'Support', data: [3, 2, 3, 2, 1] }
                ]
            },
            html: '<chart [options]="streamgraphOptions"></chart>'
        };
    }
    makeBullet() {
        return {
            title: 'Bullet chart',
            description: 'Actual value with target marker from the bullet module.',
            options: {
                chart: { type: 'bullet', inverted: true, height: 260 },
                title: { text: 'SLA target' },
                xAxis: { categories: ['Response time'] },
                yAxis: { plotBands: [{ from: 0, to: 70, color: '#f5d4d4' }, { from: 70, to: 90, color: '#fff0c2' }, { from: 90, to: 100, color: '#d9f2e6' }], title: null },
                series: [{ data: [{ y: 92, target: 95 }] }]
            },
            html: '<chart [options]="bulletOptions"></chart>'
        };
    }
    makeDumbbell() {
        return {
            title: 'Dumbbell chart',
            description: 'Before/after comparison from the dumbbell module.',
            options: {
                chart: { type: 'dumbbell', inverted: true, height: 320 },
                title: { text: 'Before and after' },
                xAxis: { type: 'category' },
                yAxis: { title: { text: 'Score' } },
                series: [{
                        name: 'Score',
                        data: [
                            { name: 'API', low: 62, high: 84 },
                            { name: 'Docs', low: 48, high: 76 },
                            { name: 'QA', low: 55, high: 80 }
                        ]
                    }]
            },
            html: '<chart [options]="dumbbellOptions"></chart>'
        };
    }
    makeLollipop() {
        return {
            title: 'Lollipop chart',
            description: 'Lollipop series for compact ranked data.',
            options: {
                chart: { type: 'lollipop', height: 320 },
                title: { text: 'Queue size' },
                xAxis: { type: 'category' },
                series: [{ name: 'Items', data: [['API', 12], ['UI', 8], ['QA', 5], ['Docs', 3]] }]
            },
            html: '<chart [options]="lollipopOptions"></chart>'
        };
    }
    makePareto() {
        return {
            title: 'Pareto chart',
            description: 'Pareto line linked to a base column series.',
            options: {
                chart: { height: 320 },
                title: { text: 'Issue causes' },
                xAxis: { categories: ['Config', 'Data', 'Network', 'Auth', 'UI'] },
                yAxis: [{ title: { text: 'Count' } }, { title: { text: 'Cumulative %' }, opposite: true }],
                series: [
                    { type: 'column', id: 'issues', name: 'Issues', data: [45, 26, 17, 9, 6] },
                    { type: 'pareto', name: 'Pareto', linkedTo: 'issues', yAxis: 1, zIndex: 10 }
                ]
            },
            html: '<chart [options]="paretoOptions"></chart>'
        };
    }
    makeHistogramBellcurve() {
        return {
            title: 'Histogram and bell curve',
            description: 'Generated statistical series linked to source data.',
            options: {
                chart: { height: 340 },
                title: { text: 'Build duration distribution' },
                xAxis: [{ title: { text: 'Duration' } }, { title: { text: 'Histogram' }, opposite: true }],
                yAxis: [{ title: { text: 'Count' } }, { title: { text: 'Bell curve' }, opposite: true }],
                series: [
                    { type: 'scatter', id: 'duration', name: 'Samples', data: [8, 9, 9, 10, 11, 11, 12, 13, 14, 16, 18, 21], visible: false },
                    { type: 'histogram', name: 'Histogram', xAxis: 1, yAxis: 0, baseSeries: 'duration', zIndex: -1 },
                    { type: 'bellcurve', name: 'Bell curve', xAxis: 0, yAxis: 1, baseSeries: 'duration', zIndex: 1 }
                ]
            },
            html: '<chart [options]="histogramBellcurveOptions"></chart>'
        };
    }
    makeTilemap() {
        return {
            title: 'Tilemap',
            description: 'Tile heatmap using the tilemap module.',
            options: {
                chart: { type: 'tilemap', height: 320 },
                title: { text: 'Weekly load tiles' },
                xAxis: { categories: ['Mon', 'Tue', 'Wed', 'Thu'] },
                yAxis: { categories: ['AM', 'PM'], title: null },
                colorAxis: { min: 0, minColor: '#e8f4ff', maxColor: '#146c94' },
                series: [{
                        name: 'Load',
                        tileShape: 'hexagon',
                        data: [
                            { x: 0, y: 0, value: 4, name: 'Mon AM' },
                            { x: 1, y: 0, value: 7, name: 'Tue AM' },
                            { x: 2, y: 0, value: 5, name: 'Wed AM' },
                            { x: 3, y: 0, value: 8, name: 'Thu AM' },
                            { x: 0, y: 1, value: 6, name: 'Mon PM' },
                            { x: 1, y: 1, value: 3, name: 'Tue PM' },
                            { x: 2, y: 1, value: 9, name: 'Wed PM' },
                            { x: 3, y: 1, value: 5, name: 'Thu PM' }
                        ]
                    }]
            },
            html: '<chart [options]="tilemapOptions"></chart>'
        };
    }
    makeVenn() {
        return {
            title: 'Venn diagram',
            description: 'Set overlap visualization from the venn module.',
            options: {
                chart: { type: 'venn', height: 320 },
                title: { text: 'Audience overlap' },
                series: [{
                        data: [
                            { sets: ['Admins'], value: 12 },
                            { sets: ['Analysts'], value: 10 },
                            { sets: ['Operators'], value: 8 },
                            { sets: ['Admins', 'Analysts'], value: 4 },
                            { sets: ['Analysts', 'Operators'], value: 3 },
                            { sets: ['Admins', 'Operators'], value: 2 }
                        ]
                    }]
            },
            html: '<chart [options]="vennOptions"></chart>'
        };
    }
    makeArcDiagram() {
        return {
            title: 'Arc diagram',
            description: 'Relationship arcs from the arc-diagram module.',
            options: {
                chart: { type: 'arcdiagram', height: 320 },
                title: { text: 'Module calls' },
                series: [{
                        keys: ['from', 'to', 'weight'],
                        data: [
                            ['Core', 'Auth', 5],
                            ['Core', 'Billing', 4],
                            ['Auth', 'Profile', 3],
                            ['Billing', 'Ledger', 2],
                            ['Profile', 'Notifications', 2]
                        ]
                    }]
            },
            html: '<chart [options]="arcDiagramOptions"></chart>'
        };
    }
    makeOrganization() {
        return {
            title: 'Organization chart',
            description: 'Org relationship chart from organization/pathfinder modules.',
            options: {
                chart: { type: 'organization', height: 360 },
                title: { text: 'Delivery ownership' },
                series: [{
                        keys: ['from', 'to'],
                        data: [
                            ['Lead', 'Frontend'],
                            ['Lead', 'Backend'],
                            ['Lead', 'QA'],
                            ['Backend', 'Data']
                        ],
                        nodes: [
                            { id: 'Lead', title: 'Lead', name: 'Delivery' },
                            { id: 'Frontend', title: 'UI', name: 'Frontend' },
                            { id: 'Backend', title: 'API', name: 'Backend' },
                            { id: 'QA', title: 'QA', name: 'Quality' },
                            { id: 'Data', title: 'Data', name: 'Data' }
                        ],
                        colorByPoint: false
                    }]
            },
            html: '<chart [options]="organizationOptions"></chart>'
        };
    }
    makeCylinder() {
        return {
            title: 'Cylinder chart',
            description: '3D cylinder series from the cylinder module.',
            options: {
                chart: {
                    type: 'cylinder',
                    height: 340,
                    options3d: { enabled: true, alpha: 15, beta: 15, depth: 50, viewDistance: 25 }
                },
                title: { text: 'Capacity by region' },
                xAxis: { categories: ['North', 'South', 'East', 'West'] },
                yAxis: { title: { text: 'Units' } },
                plotOptions: { series: { depth: 40, colorByPoint: true } },
                series: [{ name: 'Capacity', data: [42, 35, 28, 50] }]
            },
            html: '<chart [options]="cylinderOptions"></chart>'
        };
    }
    makeFunnel3d() {
        return {
            title: 'Funnel 3D',
            description: '3D funnel series with depth and perspective.',
            options: {
                chart: {
                    type: 'funnel3d',
                    height: 360,
                    options3d: { enabled: true, alpha: 10, depth: 50, viewDistance: 50 }
                },
                title: { text: 'Signup funnel' },
                plotOptions: {
                    series: {
                        neckWidth: '30%',
                        neckHeight: '25%',
                        width: '70%',
                        height: '80%',
                        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.y}' }
                    }
                },
                series: [{
                        name: 'Users',
                        data: [
                            ['Visitors', 15654],
                            ['Trials', 4064],
                            ['Qualified', 1987],
                            ['Customers', 976]
                        ]
                    }]
            },
            html: '<chart [options]="funnel3dOptions"></chart>'
        };
    }
    makePyramid3d() {
        return {
            title: 'Pyramid 3D',
            description: '3D pyramid series for staged proportions.',
            options: {
                chart: {
                    type: 'pyramid3d',
                    height: 360,
                    options3d: { enabled: true, alpha: 10, depth: 50, viewDistance: 50 }
                },
                title: { text: 'Support priority pyramid' },
                plotOptions: {
                    series: {
                        width: '70%',
                        height: '80%',
                        dataLabels: { enabled: true, format: '<b>{point.name}</b>: {point.y}' }
                    }
                },
                series: [{
                        name: 'Tickets',
                        data: [
                            ['Critical', 9],
                            ['High', 24],
                            ['Medium', 58],
                            ['Low', 112]
                        ]
                    }]
            },
            html: '<chart [options]="pyramid3dOptions"></chart>'
        };
    }
    makeDotplot() {
        return {
            title: 'Dot plot',
            description: 'Dotplot module for compact ranked counts.',
            options: {
                chart: { type: 'dotplot', height: 320 },
                title: { text: 'Deployments per team' },
                xAxis: { categories: ['Core', 'Web', 'Mobile', 'Data', 'QA'] },
                yAxis: { title: { text: 'Deployments' }, allowDecimals: false },
                series: [{ name: 'Deployments', data: [8, 12, 6, 10, 4] }]
            },
            html: '<chart [options]="dotplotOptions"></chart>'
        };
    }
    makePackedBubble() {
        return {
            title: 'Packed bubble',
            description: 'Packed bubble from highcharts-more for grouped sizing.',
            options: {
                chart: { type: 'packedbubble', height: 360 },
                title: { text: 'Workload by domain' },
                tooltip: { pointFormat: '<b>{point.name}</b>: {point.value}' },
                plotOptions: {
                    packedbubble: {
                        minSize: '30%',
                        maxSize: '95%',
                        layoutAlgorithm: { splitSeries: false, gravitationalConstant: 0.04 }
                    }
                },
                series: [{
                        name: 'Product',
                        data: [{ name: 'Roadmap', value: 18 }, { name: 'Research', value: 11 }]
                    }, {
                        name: 'Engineering',
                        data: [{ name: 'API', value: 22 }, { name: 'Frontend', value: 19 }, { name: 'Platform', value: 15 }]
                    }, {
                        name: 'Support',
                        data: [{ name: 'Tickets', value: 13 }, { name: 'Docs', value: 9 }]
                    }]
            },
            html: '<chart [options]="packedBubbleOptions"></chart>'
        };
    }
    makeParallelCoordinates() {
        return {
            title: 'Parallel coordinates',
            description: 'Parallel coordinates module comparing rows across metrics.',
            options: {
                chart: { parallelCoordinates: true, type: 'line', height: 360 },
                title: { text: 'Release comparison' },
                xAxis: { categories: ['Velocity', 'Quality', 'Risk', 'Coverage', 'Adoption'] },
                yAxis: { title: { text: null } },
                series: [
                    { name: 'Release A', data: [8, 7, 3, 6, 8] },
                    { name: 'Release B', data: [6, 9, 2, 8, 7] },
                    { name: 'Release C', data: [9, 6, 5, 5, 9] }
                ]
            },
            html: '<chart [options]="parallelCoordinatesOptions"></chart>'
        };
    }
    makeHeikinAshi() {
        var data = [
            [Date.UTC(2026, 0, 1), 653, 665, 645, 660],
            [Date.UTC(2026, 0, 2), 660, 672, 651, 668],
            [Date.UTC(2026, 0, 3), 668, 676, 658, 662],
            [Date.UTC(2026, 0, 4), 662, 670, 648, 652],
            [Date.UTC(2026, 0, 5), 652, 661, 640, 657],
            [Date.UTC(2026, 0, 6), 657, 681, 654, 678]
        ];
        return {
            title: 'Heikin Ashi',
            description: 'StockChart Heikin Ashi candles from the heikinashi module.',
            constructorType: 'StockChart',
            options: {
                chart: { height: 340 },
                title: { text: 'Heikin Ashi sample' },
                rangeSelector: { enabled: false },
                navigator: { enabled: false },
                scrollbar: { enabled: false },
                series: [{ type: 'heikinashi', name: 'BNB sample', data: data }]
            },
            html: '<chart [type]="\'StockChart\'" [options]="heikinAshiOptions"></chart>'
        };
    }
    makeHollowCandlestick() {
        var data = [
            [Date.UTC(2026, 0, 1), 653, 665, 645, 660],
            [Date.UTC(2026, 0, 2), 660, 672, 651, 668],
            [Date.UTC(2026, 0, 3), 668, 676, 658, 662],
            [Date.UTC(2026, 0, 4), 662, 670, 648, 652],
            [Date.UTC(2026, 0, 5), 652, 661, 640, 657],
            [Date.UTC(2026, 0, 6), 657, 681, 654, 678]
        ];
        return {
            title: 'Hollow candlestick',
            description: 'StockChart hollow candle rendering from the hollowcandlestick module.',
            constructorType: 'StockChart',
            options: {
                chart: { height: 340 },
                title: { text: 'Hollow candlestick sample' },
                rangeSelector: { enabled: false },
                navigator: { enabled: false },
                scrollbar: { enabled: false },
                series: [{ type: 'hollowcandlestick', name: 'BNB sample', data: data }]
            },
            html: '<chart [type]="\'StockChart\'" [options]="hollowCandlestickOptions"></chart>'
        };
    }
    makeVector() {
        return {
            title: 'Vector field',
            description: 'Vector module showing magnitude and direction.',
            options: {
                chart: { type: 'vector', height: 340 },
                title: { text: 'Regional movement vectors' },
                xAxis: { min: 0, max: 5, gridLineWidth: 1 },
                yAxis: { min: 0, max: 5, title: { text: null } },
                tooltip: { pointFormat: 'Length: <b>{point.length}</b><br>Direction: <b>{point.direction} deg</b>' },
                series: [{
                        name: 'Movement',
                        data: [
                            [1, 1, 5, 45],
                            [2, 2, 7, 90],
                            [3, 1, 4, 135],
                            [4, 3, 6, 210],
                            [1, 4, 5, 300]
                        ]
                    }]
            },
            html: '<chart [options]="vectorOptions"></chart>'
        };
    }
    makeWindbarb() {
        return {
            title: 'Wind barb',
            description: 'Windbarb module for speed and direction markers.',
            options: {
                chart: { height: 320 },
                title: { text: 'Wind samples' },
                xAxis: { type: 'datetime' },
                yAxis: { title: { text: 'Speed' } },
                series: [{
                        type: 'windbarb',
                        name: 'Wind',
                        data: [
                            { x: Date.UTC(2026, 0, 1), value: 4, direction: 45 },
                            { x: Date.UTC(2026, 0, 2), value: 7, direction: 80 },
                            { x: Date.UTC(2026, 0, 3), value: 5, direction: 120 },
                            { x: Date.UTC(2026, 0, 4), value: 9, direction: 200 },
                            { x: Date.UTC(2026, 0, 5), value: 6, direction: 260 }
                        ],
                        showInLegend: true
                    }]
            },
            html: '<chart [options]="windbarbOptions"></chart>'
        };
    }
    makeTreegraph() {
        return {
            title: 'Treegraph',
            description: 'Treegraph module for hierarchical relationships.',
            options: {
                chart: { type: 'treegraph', height: 380 },
                title: { text: 'Product hierarchy' },
                series: [{
                        data: [
                            { id: 'Platform' },
                            { id: 'Core API', parent: 'Platform' },
                            { id: 'Dashboard', parent: 'Platform' },
                            { id: 'Billing', parent: 'Core API' },
                            { id: 'Reports', parent: 'Dashboard' },
                            { id: 'Exports', parent: 'Reports' }
                        ],
                        marker: { symbol: 'rect', width: 90 },
                        dataLabels: { style: { textOutline: 'none' } }
                    }]
            },
            html: '<chart [options]="treegraphOptions"></chart>'
        };
    }
    createDynamicOptions() {
        return {
            chart: { type: 'line', height: 340 },
            title: { text: 'Dynamic update' },
            subtitle: { text: 'Changing the options object re-initializes the wrapper' },
            xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
            yAxis: { title: { text: 'Requests' } },
            series: [{ name: 'Updated data', data: this.dynamicData }]
        };
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main>\n  <header>\n    <div class=\"header-copy\">\n      <span>Angular CLI 10.2.4 / Angular 10.2.5 runtime</span>\n      <h1>@stackline/angular-highcharts 10.0.0</h1>\n      <p>Project generated with the Angular 10 CLI blueprint and running the local Verdaccio Angular 10 package line.</p>\n    </div>\n  </header>\n\n  <div *ngIf=\"viewMode === 'dynamic'\">\n    <section\n      class=\"chart-card live-market-card\"\n      [class.market-light]=\"binanceTheme === 'light'\"\n      [class.market-dark]=\"binanceTheme === 'dark'\"\n    >\n      <div class=\"chart-head market-head\">\n        <div>\n          <h2>Live crypto candles</h2>\n          <p>REST candle history from Binance through the Mask API with realtime WebSocket candle updates.</p>\n        </div>\n        <span>StockChart</span>\n      </div>\n\n      <div class=\"market-toolbar\">\n        <div>\n          <strong>Theme</strong>\n          <button type=\"button\" [class.active]=\"binanceTheme === 'dark'\" (click)=\"selectBinanceTheme('dark')\">Dark</button>\n          <button type=\"button\" [class.active]=\"binanceTheme === 'light'\" (click)=\"selectBinanceTheme('light')\">Light</button>\n        </div>\n        <div>\n          <strong>Symbol</strong>\n          <button type=\"button\" *ngFor=\"let symbol of binanceSymbols\" [class.active]=\"symbol === binanceSymbol\" (click)=\"selectBinanceSymbol(symbol)\">{{ symbol }}</button>\n        </div>\n        <div>\n          <strong>Interval</strong>\n          <button type=\"button\" *ngFor=\"let interval of binanceIntervals\" [class.active]=\"interval === binanceInterval\" (click)=\"selectBinanceInterval(interval)\">{{ interval }}</button>\n        </div>\n        <button type=\"button\" class=\"reload-button\" (click)=\"reloadBinanceChart()\">Reload</button>\n      </div>\n\n      <div class=\"market-ticker\" *ngIf=\"binanceLastCandle\">\n        <span><em>Open</em> <strong>{{ formatPrice(binanceLastCandle.open) }}</strong></span>\n        <span><em>High</em> <strong>{{ formatPrice(binanceLastCandle.high) }}</strong></span>\n        <span><em>Low</em> <strong>{{ formatPrice(binanceLastCandle.low) }}</strong></span>\n        <span><em>Close</em> <strong>{{ formatPrice(binanceLastCandle.close) }}</strong></span>\n        <span [class.positive]=\"binanceLastCandle.changePercent >= 0\" [class.negative]=\"binanceLastCandle.changePercent < 0\"><em>Change</em> <strong>{{ formatPercent(binanceLastCandle.changePercent) }}</strong></span>\n      </div>\n\n      <div class=\"market-status\">\n        <span>{{ binanceStatus }}</span>\n        <span>{{ binanceSocketStatus }}</span>\n        <span>{{ binanceCandleCount }} candles</span>\n      </div>\n\n      <div class=\"chart-frame market-frame\">\n        <chart [type]=\"'StockChart'\" [options]=\"binanceOptions\" (create)=\"onBinanceChartCreate($event)\"></chart>\n      </div>\n\n      <div class=\"endpoint-grid\">\n        <div>\n          <strong>REST history</strong>\n          <code>{{ binanceRestUrl || 'Waiting for REST endpoint...' }}</code>\n        </div>\n        <div>\n          <strong>Realtime WebSocket</strong>\n          <code>{{ binanceWsUrl || 'Waiting for WebSocket endpoint...' }}</code>\n        </div>\n      </div>\n\n      <details class=\"tutorial-collapse\">\n        <summary>\n          <span>Open tutorial</span>\n          <small>HTML / TS / SCSS</small>\n        </summary>\n        <div class=\"code-layer-grid\">\n          <div>\n            <h4>HTML</h4>\n            <pre>{{ binanceTutorialHtml }}</pre>\n          </div>\n          <div>\n            <h4>TS</h4>\n            <pre>{{ binanceTutorialTs }}</pre>\n          </div>\n          <div>\n            <h4>SCSS</h4>\n            <pre>{{ binanceTutorialScss }}</pre>\n          </div>\n        </div>\n      </details>\n    </section>\n\n    <section class=\"examples-grid\">\n      <article class=\"chart-card\" *ngFor=\"let example of dynamicExamples\">\n        <div class=\"chart-head\">\n          <div>\n            <h3>{{ example.title }}</h3>\n            <p>{{ example.description }}</p>\n          </div>\n          <span>Live</span>\n        </div>\n\n        <div class=\"chart-frame\">\n          <chart [type]=\"example.constructorType || 'Chart'\" [options]=\"example.options\" (create)=\"onDynamicChartCreate(example, $event)\"></chart>\n        </div>\n\n        <details class=\"tutorial-collapse\">\n          <summary>\n            <span>Open tutorial</span>\n            <small>HTML / TS / SCSS</small>\n          </summary>\n          <div class=\"code-layer-grid\">\n            <div>\n              <h4>HTML</h4>\n              <pre>{{ example.tutorialHtml }}</pre>\n            </div>\n            <div>\n              <h4>TS</h4>\n              <pre>{{ example.tutorialTs }}</pre>\n            </div>\n            <div>\n              <h4>SCSS</h4>\n              <pre>{{ example.tutorialScss }}</pre>\n            </div>\n          </div>\n        </details>\n      </article>\n    </section>\n\n  </div>\n\n  <div *ngIf=\"viewMode === 'static'\">\n    <section class=\"panel intro-panel\">\n      <div>\n        <h2>Static examples</h2>\n        <p>Original one-row examples with fixed demo option objects.</p>\n      </div>\n      <div class=\"status-pill\">Secondary URL</div>\n    </section>\n\n    <section class=\"examples-grid\">\n      <article class=\"chart-card\" *ngFor=\"let example of examples\">\n        <div class=\"chart-head\">\n          <div>\n            <h3>{{ example.title }}</h3>\n            <p>{{ example.description }}</p>\n          </div>\n          <span>{{ example.constructorType || 'Chart' }}</span>\n        </div>\n\n        <div class=\"chart-frame\">\n          <chart [type]=\"example.constructorType || 'Chart'\" [options]=\"example.options\" (create)=\"onCreate(example.title, $event)\"></chart>\n        </div>\n\n        <details class=\"tutorial-collapse\">\n          <summary>\n            <span>Open tutorial</span>\n            <small>HTML / TS / SCSS</small>\n          </summary>\n          <div class=\"code-layer-grid\">\n            <div>\n              <h4>HTML</h4>\n              <pre>{{ example.tutorialHtml }}</pre>\n            </div>\n            <div>\n              <h4>TS</h4>\n              <pre>{{ example.tutorialTs }}</pre>\n            </div>\n            <div>\n              <h4>SCSS</h4>\n              <pre>{{ example.tutorialScss }}</pre>\n            </div>\n          </div>\n        </details>\n      </article>\n    </section>\n\n    <section class=\"panel feature-panel\">\n      <div class=\"chart-head\">\n        <div>\n          <h2>Dynamic update</h2>\n          <p>Replaces the options object to validate the Angular 10 input binding.</p>\n        </div>\n        <button type=\"button\" (click)=\"randomizeDynamicChart()\">Update data</button>\n      </div>\n\n      <div class=\"chart-frame large\">\n        <chart [options]=\"dynamicOptions\" (create)=\"onCreate('Dynamic update', $event)\"></chart>\n      </div>\n\n      <details class=\"tutorial-collapse\">\n        <summary>\n          <span>Open tutorial</span>\n          <small>HTML / TS / SCSS</small>\n        </summary>\n        <div class=\"code-layer-grid\">\n          <div>\n            <h4>HTML</h4>\n            <pre>{{ dynamicTutorialHtml }}</pre>\n          </div>\n          <div>\n            <h4>TS</h4>\n            <pre>{{ dynamicTutorialTs }}</pre>\n          </div>\n          <div>\n            <h4>SCSS</h4>\n            <pre>{{ dynamicTutorialScss }}</pre>\n          </div>\n        </div>\n      </details>\n    </section>\n\n    <section class=\"panel feature-panel\">\n      <div class=\"chart-head\">\n        <div>\n          <h2>Directive and event outputs</h2>\n          <p>Projected wrapper directives wire chart, series, point and axis events.</p>\n        </div>\n      </div>\n\n      <div class=\"chart-frame large\">\n        <chart [options]=\"directiveOptions\" (create)=\"onCreate('Directive chart', $event)\" (load)=\"record('chart load')\" (redraw)=\"record('chart redraw')\">\n          <series (click)=\"record('series click')\" (legendItemClick)=\"record('legend click')\">\n            <point (click)=\"record('point click')\" (mouseOver)=\"record('point hover')\"></point>\n          </series>\n          <xAxis (setExtremes)=\"record('xAxis extremes')\"></xAxis>\n          <yAxis (setExtremes)=\"record('yAxis extremes')\"></yAxis>\n        </chart>\n      </div>\n\n      <details class=\"tutorial-collapse\">\n        <summary>\n          <span>Open tutorial</span>\n          <small>HTML / TS / SCSS</small>\n        </summary>\n        <div class=\"code-layer-grid\">\n          <div>\n            <h4>HTML</h4>\n            <pre>{{ directiveTutorialHtml }}</pre>\n          </div>\n          <div>\n            <h4>TS</h4>\n            <pre>{{ directiveTutorialTs }}</pre>\n          </div>\n          <div>\n            <h4>SCSS</h4>\n            <pre>{{ directiveTutorialScss }}</pre>\n          </div>\n        </div>\n      </details>\n\n      <div class=\"event-log\">\n        <strong>Event log</strong>\n        <p *ngIf=\"!events.length\">Interact with the chart to collect events.</p>\n        <ul>\n          <li *ngFor=\"let event of events\">{{ event }}</li>\n        </ul>\n      </div>\n    </section>\n  </div>\n\n  <footer class=\"panel capabilities-footer\">\n    <h2>Wrapper capabilities</h2>\n    <div class=\"capability-grid\">\n      <div>\n        <strong>Options API</strong>\n        <span><code>&lt;chart [options]=\"options\"&gt;</code></span>\n      </div>\n      <div>\n        <strong>Constructor switch</strong>\n        <span><code>[type]=\"'StockChart'\"</code></span>\n      </div>\n      <div>\n        <strong>Directive events</strong>\n        <span><code>&lt;series&gt;</code>, <code>&lt;point&gt;</code>, <code>&lt;xAxis&gt;</code>, <code>&lt;yAxis&gt;</code></span>\n      </div>\n      <div>\n        <strong>Highcharts modules</strong>\n        <span>more, 3d, heatmap, treemap, funnel, solid-gauge, stock, map, drilldown, sankey, networkgraph, sunburst, wordcloud, xrange, timeline, variwide, item, streamgraph, bullet, dumbbell, lollipop, pareto, tilemap, venn, organization</span>\n      </div>\n    </div>\n  </footer>\n</main>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: highchartsFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highchartsFactory", function() { return highchartsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _stackline_angular_highcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @stackline/angular-highcharts */ "Okp7");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





const Highcharts = __webpack_require__(/*! highcharts */ "6n/F");
const HighchartsMore = __webpack_require__(/*! highcharts/highcharts-more */ "M8aS");
const Highcharts3d = __webpack_require__(/*! highcharts/highcharts-3d */ "Z9Wc");
const Heatmap = __webpack_require__(/*! highcharts/modules/heatmap */ "/d2E");
const Treemap = __webpack_require__(/*! highcharts/modules/treemap */ "/fEY");
const Funnel = __webpack_require__(/*! highcharts/modules/funnel */ "zF3M");
const SolidGauge = __webpack_require__(/*! highcharts/modules/solid-gauge */ "22jQ");
const Stock = __webpack_require__(/*! highcharts/modules/stock */ "N9ju");
const MapModule = __webpack_require__(/*! highcharts/modules/map */ "ttEY");
const Drilldown = __webpack_require__(/*! highcharts/modules/drilldown */ "RSNc");
const Sankey = __webpack_require__(/*! highcharts/modules/sankey */ "VuB0");
const DependencyWheel = __webpack_require__(/*! highcharts/modules/dependency-wheel */ "w6eQ");
const NetworkGraph = __webpack_require__(/*! highcharts/modules/networkgraph */ "KIgi");
const Sunburst = __webpack_require__(/*! highcharts/modules/sunburst */ "TmwG");
const Wordcloud = __webpack_require__(/*! highcharts/modules/wordcloud */ "l+Jo");
const XRange = __webpack_require__(/*! highcharts/modules/xrange */ "7kAy");
const Timeline = __webpack_require__(/*! highcharts/modules/timeline */ "o3Rf");
const Variwide = __webpack_require__(/*! highcharts/modules/variwide */ "6xQ/");
const VariablePie = __webpack_require__(/*! highcharts/modules/variable-pie */ "X4uv");
const ItemSeries = __webpack_require__(/*! highcharts/modules/item-series */ "RVh4");
const Streamgraph = __webpack_require__(/*! highcharts/modules/streamgraph */ "xnhV");
const Bullet = __webpack_require__(/*! highcharts/modules/bullet */ "taIq");
const Cylinder = __webpack_require__(/*! highcharts/modules/cylinder */ "y+rB");
const Dumbbell = __webpack_require__(/*! highcharts/modules/dumbbell */ "f+99");
const Dotplot = __webpack_require__(/*! highcharts/modules/dotplot */ "RVfB");
const Funnel3d = __webpack_require__(/*! highcharts/modules/funnel3d */ "kjyw");
const HeikinAshi = __webpack_require__(/*! highcharts/modules/heikinashi */ "/syv");
const HollowCandlestick = __webpack_require__(/*! highcharts/modules/hollowcandlestick */ "geO6");
const Lollipop = __webpack_require__(/*! highcharts/modules/lollipop */ "u4cD");
const ParallelCoordinates = __webpack_require__(/*! highcharts/modules/parallel-coordinates */ "pM7f");
const Pareto = __webpack_require__(/*! highcharts/modules/pareto */ "7GC1");
const HistogramBellcurve = __webpack_require__(/*! highcharts/modules/histogram-bellcurve */ "haik");
const Pyramid3d = __webpack_require__(/*! highcharts/modules/pyramid3d */ "pOuB");
const Tilemap = __webpack_require__(/*! highcharts/modules/tilemap */ "WhHL");
const Treegraph = __webpack_require__(/*! highcharts/modules/treegraph */ "Ykt1");
const Vector = __webpack_require__(/*! highcharts/modules/vector */ "u5CJ");
const Venn = __webpack_require__(/*! highcharts/modules/venn */ "QAO9");
const Windbarb = __webpack_require__(/*! highcharts/modules/windbarb */ "rwb7");
const ArcDiagram = __webpack_require__(/*! highcharts/modules/arc-diagram */ "DiLY");
const Organization = __webpack_require__(/*! highcharts/modules/organization */ "QEsz");
const NoData = __webpack_require__(/*! highcharts/modules/no-data-to-display */ "Tos5");
function highchartsFactory() {
    HighchartsMore(Highcharts);
    Highcharts3d(Highcharts);
    Heatmap(Highcharts);
    Treemap(Highcharts);
    Funnel(Highcharts);
    SolidGauge(Highcharts);
    Stock(Highcharts);
    MapModule(Highcharts);
    Drilldown(Highcharts);
    Sankey(Highcharts);
    DependencyWheel(Highcharts);
    NetworkGraph(Highcharts);
    Sunburst(Highcharts);
    Wordcloud(Highcharts);
    XRange(Highcharts);
    Timeline(Highcharts);
    Variwide(Highcharts);
    VariablePie(Highcharts);
    ItemSeries(Highcharts);
    Streamgraph(Highcharts);
    Bullet(Highcharts);
    Cylinder(Highcharts);
    Dumbbell(Highcharts);
    Dotplot(Highcharts);
    Funnel3d(Highcharts);
    HeikinAshi(Highcharts);
    HollowCandlestick(Highcharts);
    Lollipop(Highcharts);
    ParallelCoordinates(Highcharts);
    Pareto(Highcharts);
    HistogramBellcurve(Highcharts);
    Pyramid3d(Highcharts);
    Tilemap(Highcharts);
    Treegraph(Highcharts);
    Vector(Highcharts);
    Venn(Highcharts);
    Windbarb(Highcharts);
    ArcDiagram(Highcharts);
    Organization(Highcharts);
    NoData(Highcharts);
    return Highcharts;
}
let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _stackline_angular_highcharts__WEBPACK_IMPORTED_MODULE_3__["ChartModule"].forRoot(highchartsFactory())
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map