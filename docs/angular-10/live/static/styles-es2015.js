(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /storage/data/github/tests/angular-highcharts/angular-10/src/styles.css */"OmL/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "OmL/":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "W9N5");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "W9N5":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html, body {\n  margin: 0;\n  min-height: 100%;\n  background:\n    radial-gradient(circle at top right, rgba(254, 228, 179, 0.5), transparent 32%),\n    radial-gradient(circle at left 18%, rgba(170, 219, 255, 0.4), transparent 28%),\n    linear-gradient(180deg, #fff9f0 0%, #f5fbff 55%, #eef4fb 100%);\n}\n\nbody {\n  color: #102033;\n  font-family: \"Avenir Next\", \"Trebuchet MS\", \"Segoe UI\", sans-serif;\n}\n\n/* stackline-docs-refresh-2026 */\n\nhtml,\nbody {\n  background:\n    radial-gradient(circle at top right, rgba(63, 81, 181, 0.14), transparent 28%),\n    linear-gradient(180deg, #f8f9fc 0%, #f5f7fb 44%, #eef2f8 100%);\n  color: #212121;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n/* stackline-docs-mobile-layout-fix-2026 */\n\n.hero-main h1,\n.hero-main h2,\n.hero-card h1,\n.hero-card h2,\n.hero h1,\n.hero h2,\n.page-header h1,\n.page-header h2,\n.docs-hero h1,\n.docs-hero h2,\narticle h1:first-child,\narticle h2:first-child {\n  max-width: 100%;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n}\n\n.layout,\n.docs-layout,\n.hero,\n.hero-grid,\n.content-grid,\n.playground-shell,\n.playground__grid,\n.example-shell,\n.example-explorer,\n.quickstart-grid,\n.workbench-grid,\n.release-links,\n.cta-row,\n.controls,\n.hero-actions,\n.inline-actions,\n.playground-actions,\n.playground-preview-tabs,\n.field,\n.field.two-up,\n.sidebar,\n.sidebar-card,\n.panel,\n.demo-card,\n.playground-card,\n.playground-controls,\n.playground-preview,\n.result-card,\n.controls-card,\n.release-card,\n.api-card,\n.preview-card,\n.example-stage,\n.demo-stage,\n.docs-panel,\n.docs-card,\n.table-shell,\n.surface-card,\n.copy-card,\n.install-card,\n.card-shell,\n.hero-copy,\n.hero-setup {\n  min-width: 0;\n}\n\n.badge,\n.hero-badge,\n.version-pill,\n.release-pill,\n.meta-pill,\n.release-link {\n  max-width: 100%;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\n\npre,\n.code,\n.code-block,\n.code-preview,\n.snippet pre,\n.code-card pre {\n  max-width: 100%;\n}\n\n@media (max-width: 760px) {\n  .release-links,\n  .cta-row,\n  .controls,\n  .hero-actions,\n  .inline-actions,\n  .playground-actions,\n  .toolbar,\n  .example-stage-header,\n  .playground-preview-tabs {\n    display: grid !important;\n    grid-template-columns: 1fr !important;\n    align-items: stretch;\n  }\n\n  .release-link,\n  .btn,\n  .button,\n  .ghost-button,\n  button,\n  .copy-button,\n  .clear-btn {\n    width: 100%;\n  }\n\n  .playground-shell,\n  .playground__grid,\n  .example-shell,\n  .example-explorer,\n  .quickstart-grid,\n  .workbench-grid,\n  .demo-grid,\n  .api-grid,\n  .feature-grid,\n  .results-grid,\n  .control-grid,\n  .toggle-grid,\n  .meta-grid,\n  .page-grid,\n  .surface-card-grid,\n  .hero-grid,\n  .content-grid,\n  .layout,\n  .docs-layout,\n  .hero {\n    grid-template-columns: 1fr !important;\n  }\n\n  .field.two-up,\n  .playground-table-head,\n  .playground-table-row,\n  .table-head,\n  .table-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n  }\n}\n\n@media (max-width: 640px) {\n  .hero-main h1,\n  .hero-main h2,\n  .hero-card h1,\n  .hero-card h2,\n  .hero h1,\n  .hero h2,\n  .page-header h1,\n  .page-header h2,\n  .docs-hero h1,\n  .docs-hero h2,\n  article h1:first-child,\n  article h2:first-child {\n    font-size: clamp(1.55rem, 7vw, 2.35rem) !important;\n    line-height: 1.03 !important;\n    letter-spacing: -0.03em !important;\n  }\n\n  .app-shell,\n  .shell,\n  .docs-page,\n  .page-shell,\n  #app,\n  .docs-shell {\n    padding-left: 14px !important;\n    padding-right: 14px !important;\n  }\n\n  .hero-card,\n  .panel,\n  .log-panel,\n  .sidebar-card,\n  .demo-card,\n  .ref-card,\n  .release-card,\n  .demo-stage,\n  .example-stage,\n  .playground-controls,\n  .playground-preview,\n  .api-card,\n  .preview-card,\n  .surface-card,\n  .table-shell,\n  .docs-card,\n  .docs-panel {\n    padding: 18px !important;\n    border-radius: 22px;\n  }\n\n  .badge,\n  .hero-badge,\n  .version-pill,\n  .release-pill,\n  .meta-pill,\n  .release-link {\n    width: 100%;\n    justify-content: center;\n  }\n\n  pre,\n  .code,\n  .code-block,\n  .code-preview {\n    font-size: 12px;\n  }\n}\n", "",{"version":3,"sources":["webpack://src/styles.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,gBAAgB;EAChB;;;kEAGgE;AAClE;;AAEA;EACE,cAAc;EACd,kEAAkE;AACpE;;AAGA,gCAAgC;;AAChC;;EAEE;;kEAEgE;EAChE,cAAc;EACd,iDAAiD;AACnD;;AAGA,0CAA0C;;AAC1C;;;;;;;;;;;;EAYE,eAAe;EACf,uBAAuB;EACvB,sBAAsB;AACxB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EA2CE,YAAY;AACd;;AAEA;;;;;;EAME,eAAe;EACf,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;;;;;;EAME,eAAe;AACjB;;AAEA;EACE;;;;;;;;;IASE,wBAAwB;IACxB,qCAAqC;IACrC,oBAAoB;EACtB;;EAEA;;;;;;;IAOE,WAAW;EACb;;EAEA;;;;;;;;;;;;;;;;;;;;IAoBE,qCAAqC;EACvC;;EAEA;;;;;IAKE,2DAA2D;EAC7D;AACF;;AAEA;EACE;;;;;;;;;;;;IAYE,kDAAkD;IAClD,4BAA4B;IAC5B,kCAAkC;EACpC;;EAEA;;;;;;IAME,6BAA6B;IAC7B,8BAA8B;EAChC;;EAEA;;;;;;;;;;;;;;;;;IAiBE,wBAAwB;IACxB,mBAAmB;EACrB;;EAEA;;;;;;IAME,WAAW;IACX,uBAAuB;EACzB;;EAEA;;;;IAIE,eAAe;EACjB;AACF","sourcesContent":["html, body {\n  margin: 0;\n  min-height: 100%;\n  background:\n    radial-gradient(circle at top right, rgba(254, 228, 179, 0.5), transparent 32%),\n    radial-gradient(circle at left 18%, rgba(170, 219, 255, 0.4), transparent 28%),\n    linear-gradient(180deg, #fff9f0 0%, #f5fbff 55%, #eef4fb 100%);\n}\n\nbody {\n  color: #102033;\n  font-family: \"Avenir Next\", \"Trebuchet MS\", \"Segoe UI\", sans-serif;\n}\n\n\n/* stackline-docs-refresh-2026 */\nhtml,\nbody {\n  background:\n    radial-gradient(circle at top right, rgba(63, 81, 181, 0.14), transparent 28%),\n    linear-gradient(180deg, #f8f9fc 0%, #f5f7fb 44%, #eef2f8 100%);\n  color: #212121;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n\n\n/* stackline-docs-mobile-layout-fix-2026 */\n.hero-main h1,\n.hero-main h2,\n.hero-card h1,\n.hero-card h2,\n.hero h1,\n.hero h2,\n.page-header h1,\n.page-header h2,\n.docs-hero h1,\n.docs-hero h2,\narticle h1:first-child,\narticle h2:first-child {\n  max-width: 100%;\n  overflow-wrap: anywhere;\n  word-break: break-word;\n}\n\n.layout,\n.docs-layout,\n.hero,\n.hero-grid,\n.content-grid,\n.playground-shell,\n.playground__grid,\n.example-shell,\n.example-explorer,\n.quickstart-grid,\n.workbench-grid,\n.release-links,\n.cta-row,\n.controls,\n.hero-actions,\n.inline-actions,\n.playground-actions,\n.playground-preview-tabs,\n.field,\n.field.two-up,\n.sidebar,\n.sidebar-card,\n.panel,\n.demo-card,\n.playground-card,\n.playground-controls,\n.playground-preview,\n.result-card,\n.controls-card,\n.release-card,\n.api-card,\n.preview-card,\n.example-stage,\n.demo-stage,\n.docs-panel,\n.docs-card,\n.table-shell,\n.surface-card,\n.copy-card,\n.install-card,\n.card-shell,\n.hero-copy,\n.hero-setup {\n  min-width: 0;\n}\n\n.badge,\n.hero-badge,\n.version-pill,\n.release-pill,\n.meta-pill,\n.release-link {\n  max-width: 100%;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\n\npre,\n.code,\n.code-block,\n.code-preview,\n.snippet pre,\n.code-card pre {\n  max-width: 100%;\n}\n\n@media (max-width: 760px) {\n  .release-links,\n  .cta-row,\n  .controls,\n  .hero-actions,\n  .inline-actions,\n  .playground-actions,\n  .toolbar,\n  .example-stage-header,\n  .playground-preview-tabs {\n    display: grid !important;\n    grid-template-columns: 1fr !important;\n    align-items: stretch;\n  }\n\n  .release-link,\n  .btn,\n  .button,\n  .ghost-button,\n  button,\n  .copy-button,\n  .clear-btn {\n    width: 100%;\n  }\n\n  .playground-shell,\n  .playground__grid,\n  .example-shell,\n  .example-explorer,\n  .quickstart-grid,\n  .workbench-grid,\n  .demo-grid,\n  .api-grid,\n  .feature-grid,\n  .results-grid,\n  .control-grid,\n  .toggle-grid,\n  .meta-grid,\n  .page-grid,\n  .surface-card-grid,\n  .hero-grid,\n  .content-grid,\n  .layout,\n  .docs-layout,\n  .hero {\n    grid-template-columns: 1fr !important;\n  }\n\n  .field.two-up,\n  .playground-table-head,\n  .playground-table-row,\n  .table-head,\n  .table-row {\n    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n  }\n}\n\n@media (max-width: 640px) {\n  .hero-main h1,\n  .hero-main h2,\n  .hero-card h1,\n  .hero-card h2,\n  .hero h1,\n  .hero h2,\n  .page-header h1,\n  .page-header h2,\n  .docs-hero h1,\n  .docs-hero h2,\n  article h1:first-child,\n  article h2:first-child {\n    font-size: clamp(1.55rem, 7vw, 2.35rem) !important;\n    line-height: 1.03 !important;\n    letter-spacing: -0.03em !important;\n  }\n\n  .app-shell,\n  .shell,\n  .docs-page,\n  .page-shell,\n  #app,\n  .docs-shell {\n    padding-left: 14px !important;\n    padding-right: 14px !important;\n  }\n\n  .hero-card,\n  .panel,\n  .log-panel,\n  .sidebar-card,\n  .demo-card,\n  .ref-card,\n  .release-card,\n  .demo-stage,\n  .example-stage,\n  .playground-controls,\n  .playground-preview,\n  .api-card,\n  .preview-card,\n  .surface-card,\n  .table-shell,\n  .docs-card,\n  .docs-panel {\n    padding: 18px !important;\n    border-radius: 22px;\n  }\n\n  .badge,\n  .hero-badge,\n  .version-pill,\n  .release-pill,\n  .meta-pill,\n  .release-link {\n    width: 100%;\n    justify-content: center;\n  }\n\n  pre,\n  .code,\n  .code-block,\n  .code-preview {\n    font-size: 12px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map