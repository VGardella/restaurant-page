/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! images/background1.jpg */ "./src/images/background1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/League_Gothic/LeagueGothic-Regular-VariableFont_wdth.ttf */ "./src/fonts/League_Gothic/LeagueGothic-Regular-VariableFont_wdth.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Holigate-Signature/Holligate Signature Demo.ttf */ "./src/fonts/Holigate-Signature/Holligate Signature Demo.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    margin: 0;\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'MyFont';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n\r\n@font-face {\r\n    font-family: 'MyFont2';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n\r\n#container{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: end;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n/* NAVEGATION BAR */\r\n\r\n.nav-menu{\r\n    height: 100px;\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    display: flex;\r\n    justify-content: end;\r\n}\r\n\r\n.nav-logo{\r\n    padding: 0 50px;\r\n    margin-right: auto;\r\n    height: 70px;\r\n    align-self: center;\r\n}\r\n\r\n.page-links{\r\n    text-decoration: none;\r\n    list-style-type: none;\r\n    display: flex;\r\n    color: white;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n    align-items: center;\r\n    padding-right: 70px;\r\n}\r\n\r\n.page-link{\r\n    padding: 50px;\r\n}\r\n\r\n/* BOARD */\r\n\r\n.board{\r\n    width: 60%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.board-title{\r\n    background: -webkit-radial-gradient(rgba(129,107,27,1), rgba(232,203,97,1));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-family: 'MyFont2';\r\n    font-size: 50px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n    margin: 20px;\r\n}\r\n\r\n/* BOARD - HOME */\r\n\r\n.logo-container{\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 400px;\r\n    padding: 50px 0;\r\n}\r\n\r\n.princ-logo{\r\n    width: 500px;\r\n}\r\n\r\n.subtext{\r\n    font-size: 40px;\r\n    color: white;\r\n    font-family: 'MyFont';\r\n    width: 50%;\r\n    padding-right: 20px;\r\n}\r\n\r\n/* BOARD - HOURS BOARD */\r\n\r\n\r\n.hours-cont{\r\n    margin: 10px 200px;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    border-width: 3px;\r\n    border-style: solid; \r\n    border-image: linear-gradient(90deg, rgba(129,107,27,1) 0%, rgba(232,203,97,1) 35%, rgba(129,107,27,1) 100%) 1;\r\n}\r\n\r\n.hours-title{\r\n    font-family: 'MyFont';\r\n    font-size: 30px;\r\n    color: white;\r\n    padding: 20px 30px 10px 30px;\r\n    text-align: center;\r\n}\r\n\r\n.hours-list{\r\n    padding: 0;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.hour{\r\n    text-decoration: none;\r\n    list-style-type: none;\r\n    text-align: center;\r\n    color: white;\r\n    font-family: 'MyFont';\r\n    font-size: 30px;\r\n}\r\n\r\n/* MENU */\r\n\r\n.dessert{\r\n    margin: 50px;\r\n    display: flex;\r\n    padding: 50px;\r\n    border-width: 3px;\r\n    border-style: solid; \r\n    border-image: linear-gradient(90deg, rgba(129,107,27,1) 0%, rgba(232,203,97,1) 35%, rgba(129,107,27,1) 100%) 1;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    gap: 40px;\r\n}\r\n\r\n.dessert-img{\r\n    height: 300px;\r\n    border-width: 3px;\r\n    border-style: solid; \r\n    border-image: linear-gradient(90deg, rgba(129,107,27,1) 0%, rgba(232,203,97,1) 35%, rgba(129,107,27,1) 100%) 1;\r\n}\r\n\r\n.dessert-info{\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: white;\r\n    font-family: 'MyFont';\r\n    font-size: 40px;\r\n    gap: 20px;\r\n}\r\n\r\n.dessert:nth-of-type(even){\r\n    flex-direction: row-reverse;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,yDAA+C;IAC/C,4BAA4B;IAC5B,2BAA2B;IAC3B,4BAA4B;IAC5B,sBAAsB;IACtB,YAAY;IACZ,WAAW;AACf;;;AAGA;IACI,qBAAqB;IACrB,4CAA4E;AAChF;;AAEA;IACI,sBAAsB;IACtB,4CAAqE;AACzE;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,SAAS;IACT,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA,mBAAmB;;AAEnB;IACI,aAAa;IACb,WAAW;IACX,oCAAoC;IACpC,aAAa;IACb,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,aAAa;IACb,YAAY;IACZ,yCAAyC;IACzC,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA,UAAU;;AAEV;IACI,UAAU;IACV,YAAY;IACZ,oCAAoC;IACpC,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,2EAA2E;IAC3E,6BAA6B;IAC7B,oCAAoC;IACpC,sBAAsB;IACtB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;AAChB;;AAEA,iBAAiB;;AAEjB;IACI,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,qBAAqB;IACrB,UAAU;IACV,mBAAmB;AACvB;;AAEA,wBAAwB;;;AAGxB;IACI,kBAAkB;IAClB,oCAAoC;IACpC,iBAAiB;IACjB,mBAAmB;IACnB,8GAA8G;AAClH;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,YAAY;IACZ,4BAA4B;IAC5B,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,eAAe;AACnB;;AAEA,SAAS;;AAET;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,8GAA8G;IAC9G,oCAAoC;IACpC,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,8GAA8G;AAClH;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,qBAAqB;IACrB,eAAe;IACf,SAAS;AACb;;AAEA;IACI,2BAA2B;AAC/B","sourcesContent":["body{\r\n    margin: 0;\r\n    background-image: url(\"images/background1.jpg\");\r\n    background-attachment: fixed;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n\r\n@font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./fonts/League_Gothic/LeagueGothic-Regular-VariableFont_wdth.ttf');\r\n}\r\n\r\n@font-face {\r\n    font-family: 'MyFont2';\r\n    src: url('./fonts/Holigate-Signature/Holligate\\ Signature\\ Demo.ttf');\r\n}\r\n\r\n#container{\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: end;\r\n    align-items: center;\r\n    overflow-y: scroll;\r\n}\r\n\r\n/* NAVEGATION BAR */\r\n\r\n.nav-menu{\r\n    height: 100px;\r\n    width: 100%;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    display: flex;\r\n    justify-content: end;\r\n}\r\n\r\n.nav-logo{\r\n    padding: 0 50px;\r\n    margin-right: auto;\r\n    height: 70px;\r\n    align-self: center;\r\n}\r\n\r\n.page-links{\r\n    text-decoration: none;\r\n    list-style-type: none;\r\n    display: flex;\r\n    color: white;\r\n    font-family: Helvetica, Arial, sans-serif;\r\n    align-items: center;\r\n    padding-right: 70px;\r\n}\r\n\r\n.page-link{\r\n    padding: 50px;\r\n}\r\n\r\n/* BOARD */\r\n\r\n.board{\r\n    width: 60%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.board-title{\r\n    background: -webkit-radial-gradient(rgba(129,107,27,1), rgba(232,203,97,1));\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-family: 'MyFont2';\r\n    font-size: 50px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    text-align: center;\r\n    margin: 20px;\r\n}\r\n\r\n/* BOARD - HOME */\r\n\r\n.logo-container{\r\n    display: flex;\r\n    align-items: center;\r\n    width: 100%;\r\n    height: 400px;\r\n    padding: 50px 0;\r\n}\r\n\r\n.princ-logo{\r\n    width: 500px;\r\n}\r\n\r\n.subtext{\r\n    font-size: 40px;\r\n    color: white;\r\n    font-family: 'MyFont';\r\n    width: 50%;\r\n    padding-right: 20px;\r\n}\r\n\r\n/* BOARD - HOURS BOARD */\r\n\r\n\r\n.hours-cont{\r\n    margin: 10px 200px;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    border-width: 3px;\r\n    border-style: solid; \r\n    border-image: linear-gradient(90deg, rgba(129,107,27,1) 0%, rgba(232,203,97,1) 35%, rgba(129,107,27,1) 100%) 1;\r\n}\r\n\r\n.hours-title{\r\n    font-family: 'MyFont';\r\n    font-size: 30px;\r\n    color: white;\r\n    padding: 20px 30px 10px 30px;\r\n    text-align: center;\r\n}\r\n\r\n.hours-list{\r\n    padding: 0;\r\n    margin-top: 0;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.hour{\r\n    text-decoration: none;\r\n    list-style-type: none;\r\n    text-align: center;\r\n    color: white;\r\n    font-family: 'MyFont';\r\n    font-size: 30px;\r\n}\r\n\r\n/* MENU */\r\n\r\n.dessert{\r\n    margin: 50px;\r\n    display: flex;\r\n    padding: 50px;\r\n    border-width: 3px;\r\n    border-style: solid; \r\n    border-image: linear-gradient(90deg, rgba(129,107,27,1) 0%, rgba(232,203,97,1) 35%, rgba(129,107,27,1) 100%) 1;\r\n    background-color: rgba(0, 0, 0, 0.6);\r\n    gap: 40px;\r\n}\r\n\r\n.dessert-img{\r\n    height: 300px;\r\n    border-width: 3px;\r\n    border-style: solid; \r\n    border-image: linear-gradient(90deg, rgba(129,107,27,1) 0%, rgba(232,203,97,1) 35%, rgba(129,107,27,1) 100%) 1;\r\n}\r\n\r\n.dessert-info{\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: white;\r\n    font-family: 'MyFont';\r\n    font-size: 40px;\r\n    gap: 20px;\r\n}\r\n\r\n.dessert:nth-of-type(even){\r\n    flex-direction: row-reverse;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hours": () => (/* binding */ Hours),
/* harmony export */   "insertLogo": () => (/* binding */ insertLogo)
/* harmony export */ });
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.png */ "./src/images/logo.png");


// Homepage

function insertLogo() {
    const board = document.querySelector('.board');
    const logoContainer = document.createElement('div');
    const principalLogo = new Image();
    const text = document.createElement('div');
    const line1 = document.createElement('div');
    const line2 = document.createElement('div');

    line1.innerHTML = 'Serving the sweetest experiences since 2010.'
    line2.innerHTML = 'Come explore a world full of flavors with us.';

    principalLogo.src = _images_logo_png__WEBPACK_IMPORTED_MODULE_0__;

    logoContainer.classList.add('logo-container');
    principalLogo.classList.add('princ-logo');
    text.classList.add('subtext');

    board.appendChild(logoContainer);
    logoContainer.appendChild(principalLogo);
    logoContainer.appendChild(text);
    text.appendChild(line1);
    text.appendChild(line2);
}

function Hours() {
    const board = document.querySelector('.board');
    const hoursContainer = document.createElement('div');
    const hoursTitle = document.createElement('div');
    const hoursList = document.createElement('ul');
    const hours = ['Monday-Friday: 9:00 - 17:00',
                   'Saturday: 10:00 - 17:00',
                   'Sunday: 10:00 - 13:00']

    hoursContainer.classList.add('hours-cont');
    hoursTitle.classList.add('hours-title');
    hoursList.classList.add('hours-list');

    hoursTitle.innerHTML = 'Hours';

    for (let hour in hours) {
        let day = document.createElement('li');
        day.innerHTML = hours[hour];
        day.classList.add('hour');
        hoursList.appendChild(day);
    };

    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(hoursList);
    board.appendChild(hoursContainer);
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuPage": () => (/* binding */ menuPage)
/* harmony export */ });
/* harmony import */ var _images_rvc_truffles_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/rvc-truffles.jpg */ "./src/images/rvc-truffles.jpg");
/* harmony import */ var _images_Lemon_Raspberry_Macaron_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/Lemon-Raspberry-Macaron.jpg */ "./src/images/Lemon-Raspberry-Macaron.jpg");
/* harmony import */ var _images_choco_ball_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/choco-ball.jpg */ "./src/images/choco-ball.jpg");
/* harmony import */ var _images_lemon_shooters_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/lemon-shooters.jpg */ "./src/images/lemon-shooters.jpg");
/* harmony import */ var _images_Easy_Chocolate_Sponge_Cake_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/Easy+Chocolate+Sponge+Cake.jpg */ "./src/images/Easy+Chocolate+Sponge+Cake.jpg");






// Menu

function menuPage() {
    const board = document.querySelector('.board');
    const menu = [
        {title: 'Red Velvet Cake Truffles', desc: 'Made with rich Red Velvet Cake and covered in chocolate, these truffles are the ultimate Valentine\'s Day treat.', img: _images_rvc_truffles_jpg__WEBPACK_IMPORTED_MODULE_0__},
        {title: 'Lemon Raspberry Macarons', desc: 'Sweet lemon raspberry macarons filled with a tart lemon filling and dried raspberry powder.', img: _images_Lemon_Raspberry_Macaron_jpg__WEBPACK_IMPORTED_MODULE_1__},
        {title: 'Chocolate Ball', desc: 'A decadent dessert, hot caramel sause melts the chocolate ball to reveal a brownie and fresh raspberries.', img: _images_choco_ball_jpg__WEBPACK_IMPORTED_MODULE_2__},
        {title: 'Lemon Meringue Pie Shooters', desc: 'A combination of homemade lemon curd, toasted italian meringue topping and crushed vanilla wafer cookies.' , img: _images_lemon_shooters_jpg__WEBPACK_IMPORTED_MODULE_3__},
        {title: 'Chocolate Sponge Cake with Hibiscus Cream Filling', desc: 'A dense, extra soft sponge cake filled with hibiscus tea infused cream cheese filling.', img: _images_Easy_Chocolate_Sponge_Cake_jpg__WEBPACK_IMPORTED_MODULE_4__}
    ]

    for (let item in menu) {

        const dessert = document.createElement('div');
        const dessertImage = new Image();
        const dessertInfo = document.createElement('div');
        const dessertName = document.createElement('div');
        const dessertDesc = document.createElement('div');

        dessertImage.classList.add('dessert-img');
        dessertInfo.classList.add('dessert-info');
        dessert.classList.add('dessert');
        dessertName.classList.add('dessert-name');
        dessertDesc.classList.add('dessert-desc');

        dessertImage.src = menu[item]['img'];
        dessertName.innerHTML = menu[item]['title'];
        dessertDesc.innerHTML = menu[item]['desc'];

        board.appendChild(dessert);
        dessert.appendChild(dessertImage);
        dessert.appendChild(dessertInfo);
        dessertInfo.appendChild(dessertName);
        dessertInfo.appendChild(dessertDesc);
    }
}



/***/ }),

/***/ "./src/webpage.js":
/*!************************!*\
  !*** ./src/webpage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "titleBar": () => (/* binding */ titleBar)
/* harmony export */ });
/* harmony import */ var _images_logo2_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo2.png */ "./src/images/logo2.png");


// Homepage

function createNav() {
    const body = document.getElementById('container');
    const navMenu = document.createElement('nav');
    const pages = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    const logo = new Image();

    navMenu.classList.add('nav-menu');
    pages.classList.add('page-links');
    logo.classList.add('nav-logo');

    home.innerHTML = 'Home';
    menu.innerHTML = 'Menu';
    contact.innerHTML = 'Contact';
    logo.src = _images_logo2_png__WEBPACK_IMPORTED_MODULE_0__;

    body.appendChild(navMenu);
    navMenu.appendChild(logo);
    navMenu.appendChild(pages);
    pages.appendChild(home);
    pages.appendChild(menu);
    pages.appendChild(contact);

    const links = document.querySelectorAll('li');
    links.forEach((link) => link.classList.add('page-link'));
}

function createBoard() {
    const body = document.getElementById('container');
    const board = document.createElement('div');

    board.classList.add('board');

    body.appendChild(board);
}

function titleBar(title) {
    const board = document.querySelector('.board');
    const titleContainer = document.createElement('div');

    titleContainer.innerHTML = title;

    titleContainer.classList.add('board-title');

    board.appendChild(titleContainer);
}



/***/ }),

/***/ "./src/fonts/Holigate-Signature/Holligate Signature Demo.ttf":
/*!*******************************************************************!*\
  !*** ./src/fonts/Holigate-Signature/Holligate Signature Demo.ttf ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bbef5232ad848532920d.ttf";

/***/ }),

/***/ "./src/fonts/League_Gothic/LeagueGothic-Regular-VariableFont_wdth.ttf":
/*!****************************************************************************!*\
  !*** ./src/fonts/League_Gothic/LeagueGothic-Regular-VariableFont_wdth.ttf ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9a4891b5da85dfd0fe76.ttf";

/***/ }),

/***/ "./src/images/Easy+Chocolate+Sponge+Cake.jpg":
/*!***************************************************!*\
  !*** ./src/images/Easy+Chocolate+Sponge+Cake.jpg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a70c281ed27690a71634.jpg";

/***/ }),

/***/ "./src/images/Lemon-Raspberry-Macaron.jpg":
/*!************************************************!*\
  !*** ./src/images/Lemon-Raspberry-Macaron.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "424dda7e6d4566432f15.jpg";

/***/ }),

/***/ "./src/images/background1.jpg":
/*!************************************!*\
  !*** ./src/images/background1.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6d6f52b4a80dc42fb123.jpg";

/***/ }),

/***/ "./src/images/choco-ball.jpg":
/*!***********************************!*\
  !*** ./src/images/choco-ball.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b4775930523d95c1904.jpg";

/***/ }),

/***/ "./src/images/lemon-shooters.jpg":
/*!***************************************!*\
  !*** ./src/images/lemon-shooters.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1e3e8b6c2a60e38938a4.jpg";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4dd91797952c82afc9a8.png";

/***/ }),

/***/ "./src/images/logo2.png":
/*!******************************!*\
  !*** ./src/images/logo2.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b56b55a56f83b46d560.png";

/***/ }),

/***/ "./src/images/rvc-truffles.jpg":
/*!*************************************!*\
  !*** ./src/images/rvc-truffles.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75b577c7154ceef0d8ca.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _webpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webpage */ "./src/webpage.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");







(0,_webpage__WEBPACK_IMPORTED_MODULE_2__.createNav)();
(0,_webpage__WEBPACK_IMPORTED_MODULE_2__.createBoard)();
(0,_webpage__WEBPACK_IMPORTED_MODULE_2__.titleBar)('Menu');
(0,_menu__WEBPACK_IMPORTED_MODULE_0__.menuPage)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDYjtBQUNyQjtBQUNnRDtBQUNSO0FBQ0c7QUFDM0M7QUFDQSxtREFBUztBQUNULHFEQUFXO0FBQ1gsa0RBQVE7QUFDUiwrQ0FBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvYmFja2dyb3VuZDEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250cy9MZWFndWVfR290aGljL0xlYWd1ZUdvdGhpYy1SZWd1bGFyLVZhcmlhYmxlRm9udF93ZHRoLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZm9udHMvSG9saWdhdGUtU2lnbmF0dXJlL0hvbGxpZ2F0ZSBTaWduYXR1cmUgRGVtby50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udDInO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxyXFxufVxcclxcblxcclxcbiNjb250YWluZXJ7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTkFWRUdBVElPTiBCQVIgKi9cXHJcXG5cXHJcXG4ubmF2LW1lbnV7XFxyXFxuICAgIGhlaWdodDogMTAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxvZ297XFxyXFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBoZWlnaHQ6IDcwcHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtbGlua3N7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucGFnZS1saW5re1xcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCT0FSRCAqL1xcclxcblxcclxcbi5ib2FyZHtcXHJcXG4gICAgd2lkdGg6IDYwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5ib2FyZC10aXRsZXtcXHJcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQocmdiYSgxMjksMTA3LDI3LDEpLCByZ2JhKDIzMiwyMDMsOTcsMSkpO1xcclxcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcXHJcXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udDInO1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEJPQVJEIC0gSE9NRSAqL1xcclxcblxcclxcbi5sb2dvLWNvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogNDAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDUwcHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByaW5jLWxvZ297XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRleHR7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIEJPQVJEIC0gSE9VUlMgQk9BUkQgKi9cXHJcXG5cXHJcXG5cXHJcXG4uaG91cnMtY29udHtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDIwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGJvcmRlci13aWR0aDogM3B4O1xcclxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkOyBcXHJcXG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTI5LDEwNywyNywxKSAwJSwgcmdiYSgyMzIsMjAzLDk3LDEpIDM1JSwgcmdiYSgxMjksMTA3LDI3LDEpIDEwMCUpIDE7XFxyXFxufVxcclxcblxcclxcbi5ob3Vycy10aXRsZXtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgcGFkZGluZzogMjBweCAzMHB4IDEwcHggMzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cnMtbGlzdHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJ7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1FTlUgKi9cXHJcXG5cXHJcXG4uZGVzc2VydHtcXHJcXG4gICAgbWFyZ2luOiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nOiA1MHB4O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgXFxyXFxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEyOSwxMDcsMjcsMSkgMCUsIHJnYmEoMjMyLDIwMyw5NywxKSAzNSUsIHJnYmEoMTI5LDEwNywyNywxKSAxMDAlKSAxO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxyXFxuICAgIGdhcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc3NlcnQtaW1ne1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgXFxyXFxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEyOSwxMDcsMjcsMSkgMCUsIHJnYmEoMjMyLDIwMyw5NywxKSAzNSUsIHJnYmEoMTI5LDEwNywyNywxKSAxMDAlKSAxO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzc2VydC1pbmZve1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNzZXJ0Om50aC1vZi10eXBlKGV2ZW4pe1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QseURBQStDO0lBQy9DLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztBQUNmOzs7QUFHQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBNEU7QUFDaEY7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsNENBQXFFO0FBQ3pFOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxTQUFTO0lBQ1QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQSxtQkFBbUI7O0FBRW5CO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUEsVUFBVTs7QUFFVjtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSwyRUFBMkU7SUFDM0UsNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUEsd0JBQXdCOzs7QUFHeEI7SUFDSSxrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsOEdBQThHO0FBQ2xIOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBLFNBQVM7O0FBRVQ7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLDhHQUE4RztJQUM5RyxvQ0FBb0M7SUFDcEMsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsOEdBQThHO0FBQ2xIOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixTQUFTO0FBQ2I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImltYWdlcy9iYWNrZ3JvdW5kMS5qcGdcXFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICBzcmM6IHVybCgnLi9mb250cy9MZWFndWVfR290aGljL0xlYWd1ZUdvdGhpYy1SZWd1bGFyLVZhcmlhYmxlRm9udF93ZHRoLnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQyJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvSG9saWdhdGUtU2lnbmF0dXJlL0hvbGxpZ2F0ZVxcXFwgU2lnbmF0dXJlXFxcXCBEZW1vLnR0ZicpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGFpbmVye1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbi8qIE5BVkVHQVRJT04gQkFSICovXFxyXFxuXFxyXFxuLm5hdi1tZW51e1xcclxcbiAgICBoZWlnaHQ6IDEwMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1sb2dve1xcclxcbiAgICBwYWRkaW5nOiAwIDUwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wYWdlLWxpbmtze1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhZ2UtbGlua3tcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogQk9BUkQgKi9cXHJcXG5cXHJcXG4uYm9hcmR7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uYm9hcmQtdGl0bGV7XFxyXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KHJnYmEoMTI5LDEwNywyNywxKSwgcmdiYSgyMzIsMjAzLDk3LDEpKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQyJztcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCT0FSRCAtIEhPTUUgKi9cXHJcXG5cXHJcXG4ubG9nby1jb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1MHB4IDA7XFxyXFxufVxcclxcblxcclxcbi5wcmluYy1sb2dve1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJ0ZXh0e1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbiAgICB3aWR0aDogNTAlO1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBCT0FSRCAtIEhPVVJTIEJPQVJEICovXFxyXFxuXFxyXFxuXFxyXFxuLmhvdXJzLWNvbnR7XFxyXFxuICAgIG1hcmdpbjogMTBweCAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBib3JkZXItd2lkdGg6IDNweDtcXHJcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgXFxyXFxuICAgIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEyOSwxMDcsMjcsMSkgMCUsIHJnYmEoMjMyLDIwMyw5NywxKSAzNSUsIHJnYmEoMTI5LDEwNywyNywxKSAxMDAlKSAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cnMtdGl0bGV7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAxMHB4IDMwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhvdXJzLWxpc3R7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5ob3Vye1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VICovXFxyXFxuXFxyXFxuLmRlc3NlcnR7XFxyXFxuICAgIG1hcmdpbjogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogNTBweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7IFxcclxcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMjksMTA3LDI3LDEpIDAlLCByZ2JhKDIzMiwyMDMsOTcsMSkgMzUlLCByZ2JhKDEyOSwxMDcsMjcsMSkgMTAwJSkgMTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcclxcbiAgICBnYXA6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5kZXNzZXJ0LWltZ3tcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgYm9yZGVyLXdpZHRoOiAzcHg7XFxyXFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7IFxcclxcbiAgICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgxMjksMTA3LDI3LDEpIDAlLCByZ2JhKDIzMiwyMDMsOTcsMSkgMzUlLCByZ2JhKDEyOSwxMDcsMjcsMSkgMTAwJSkgMTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc3NlcnQtaW5mb3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzc2VydDpudGgtb2YtdHlwZShldmVuKXtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IExvZ28gZnJvbSAnLi9pbWFnZXMvbG9nby5wbmcnXHJcblxyXG4vLyBIb21lcGFnZVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0TG9nbygpIHtcclxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XHJcbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBwcmluY2lwYWxMb2dvID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBsaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgbGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsaW5lMS5pbm5lckhUTUwgPSAnU2VydmluZyB0aGUgc3dlZXRlc3QgZXhwZXJpZW5jZXMgc2luY2UgMjAxMC4nXHJcbiAgICBsaW5lMi5pbm5lckhUTUwgPSAnQ29tZSBleHBsb3JlIGEgd29ybGQgZnVsbCBvZiBmbGF2b3JzIHdpdGggdXMuJztcclxuXHJcbiAgICBwcmluY2lwYWxMb2dvLnNyYyA9IExvZ287XHJcblxyXG4gICAgbG9nb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsb2dvLWNvbnRhaW5lcicpO1xyXG4gICAgcHJpbmNpcGFsTG9nby5jbGFzc0xpc3QuYWRkKCdwcmluYy1sb2dvJyk7XHJcbiAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3N1YnRleHQnKTtcclxuXHJcbiAgICBib2FyZC5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKTtcclxuICAgIGxvZ29Db250YWluZXIuYXBwZW5kQ2hpbGQocHJpbmNpcGFsTG9nbyk7XHJcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgdGV4dC5hcHBlbmRDaGlsZChsaW5lMSk7XHJcbiAgICB0ZXh0LmFwcGVuZENoaWxkKGxpbmUyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSG91cnMoKSB7XHJcbiAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZCcpO1xyXG4gICAgY29uc3QgaG91cnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGhvdXJzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICBjb25zdCBob3VycyA9IFsnTW9uZGF5LUZyaWRheTogOTowMCAtIDE3OjAwJyxcclxuICAgICAgICAgICAgICAgICAgICdTYXR1cmRheTogMTA6MDAgLSAxNzowMCcsXHJcbiAgICAgICAgICAgICAgICAgICAnU3VuZGF5OiAxMDowMCAtIDEzOjAwJ11cclxuXHJcbiAgICBob3Vyc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdob3Vycy1jb250Jyk7XHJcbiAgICBob3Vyc1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2hvdXJzLXRpdGxlJyk7XHJcbiAgICBob3Vyc0xpc3QuY2xhc3NMaXN0LmFkZCgnaG91cnMtbGlzdCcpO1xyXG5cclxuICAgIGhvdXJzVGl0bGUuaW5uZXJIVE1MID0gJ0hvdXJzJztcclxuXHJcbiAgICBmb3IgKGxldCBob3VyIGluIGhvdXJzKSB7XHJcbiAgICAgICAgbGV0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgZGF5LmlubmVySFRNTCA9IGhvdXJzW2hvdXJdO1xyXG4gICAgICAgIGRheS5jbGFzc0xpc3QuYWRkKCdob3VyJyk7XHJcbiAgICAgICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGRheSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGhvdXJzQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xyXG4gICAgaG91cnNDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cnNMaXN0KTtcclxuICAgIGJvYXJkLmFwcGVuZENoaWxkKGhvdXJzQ29udGFpbmVyKTtcclxufVxyXG5cclxuZXhwb3J0IHtpbnNlcnRMb2dvLCBIb3Vyc307XHJcbiIsImltcG9ydCBUcnVmZmxlcyBmcm9tICcuL2ltYWdlcy9ydmMtdHJ1ZmZsZXMuanBnJztcclxuaW1wb3J0IE1hY2Fyb25zIGZyb20gJy4vaW1hZ2VzL0xlbW9uLVJhc3BiZXJyeS1NYWNhcm9uLmpwZyc7XHJcbmltcG9ydCBDaG9jb0JhbGwgZnJvbSAnLi9pbWFnZXMvY2hvY28tYmFsbC5qcGcnO1xyXG5pbXBvcnQgTGVtb25TaG9vdGVycyBmcm9tICcuL2ltYWdlcy9sZW1vbi1zaG9vdGVycy5qcGcnO1xyXG5pbXBvcnQgU3BvbmdlQ2FrZSBmcm9tICcuL2ltYWdlcy9FYXN5K0Nob2NvbGF0ZStTcG9uZ2UrQ2FrZS5qcGcnXHJcblxyXG4vLyBNZW51XHJcblxyXG5mdW5jdGlvbiBtZW51UGFnZSgpIHtcclxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XHJcbiAgICBjb25zdCBtZW51ID0gW1xyXG4gICAgICAgIHt0aXRsZTogJ1JlZCBWZWx2ZXQgQ2FrZSBUcnVmZmxlcycsIGRlc2M6ICdNYWRlIHdpdGggcmljaCBSZWQgVmVsdmV0IENha2UgYW5kIGNvdmVyZWQgaW4gY2hvY29sYXRlLCB0aGVzZSB0cnVmZmxlcyBhcmUgdGhlIHVsdGltYXRlIFZhbGVudGluZVxcJ3MgRGF5IHRyZWF0LicsIGltZzogVHJ1ZmZsZXN9LFxyXG4gICAgICAgIHt0aXRsZTogJ0xlbW9uIFJhc3BiZXJyeSBNYWNhcm9ucycsIGRlc2M6ICdTd2VldCBsZW1vbiByYXNwYmVycnkgbWFjYXJvbnMgZmlsbGVkIHdpdGggYSB0YXJ0IGxlbW9uIGZpbGxpbmcgYW5kIGRyaWVkIHJhc3BiZXJyeSBwb3dkZXIuJywgaW1nOiBNYWNhcm9uc30sXHJcbiAgICAgICAge3RpdGxlOiAnQ2hvY29sYXRlIEJhbGwnLCBkZXNjOiAnQSBkZWNhZGVudCBkZXNzZXJ0LCBob3QgY2FyYW1lbCBzYXVzZSBtZWx0cyB0aGUgY2hvY29sYXRlIGJhbGwgdG8gcmV2ZWFsIGEgYnJvd25pZSBhbmQgZnJlc2ggcmFzcGJlcnJpZXMuJywgaW1nOiBDaG9jb0JhbGx9LFxyXG4gICAgICAgIHt0aXRsZTogJ0xlbW9uIE1lcmluZ3VlIFBpZSBTaG9vdGVycycsIGRlc2M6ICdBIGNvbWJpbmF0aW9uIG9mIGhvbWVtYWRlIGxlbW9uIGN1cmQsIHRvYXN0ZWQgaXRhbGlhbiBtZXJpbmd1ZSB0b3BwaW5nIGFuZCBjcnVzaGVkIHZhbmlsbGEgd2FmZXIgY29va2llcy4nICwgaW1nOiBMZW1vblNob290ZXJzfSxcclxuICAgICAgICB7dGl0bGU6ICdDaG9jb2xhdGUgU3BvbmdlIENha2Ugd2l0aCBIaWJpc2N1cyBDcmVhbSBGaWxsaW5nJywgZGVzYzogJ0EgZGVuc2UsIGV4dHJhIHNvZnQgc3BvbmdlIGNha2UgZmlsbGVkIHdpdGggaGliaXNjdXMgdGVhIGluZnVzZWQgY3JlYW0gY2hlZXNlIGZpbGxpbmcuJywgaW1nOiBTcG9uZ2VDYWtlfVxyXG4gICAgXVxyXG5cclxuICAgIGZvciAobGV0IGl0ZW0gaW4gbWVudSkge1xyXG5cclxuICAgICAgICBjb25zdCBkZXNzZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY29uc3QgZGVzc2VydEltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgY29uc3QgZGVzc2VydEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb25zdCBkZXNzZXJ0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnN0IGRlc3NlcnREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICAgIGRlc3NlcnRJbWFnZS5jbGFzc0xpc3QuYWRkKCdkZXNzZXJ0LWltZycpO1xyXG4gICAgICAgIGRlc3NlcnRJbmZvLmNsYXNzTGlzdC5hZGQoJ2Rlc3NlcnQtaW5mbycpO1xyXG4gICAgICAgIGRlc3NlcnQuY2xhc3NMaXN0LmFkZCgnZGVzc2VydCcpO1xyXG4gICAgICAgIGRlc3NlcnROYW1lLmNsYXNzTGlzdC5hZGQoJ2Rlc3NlcnQtbmFtZScpO1xyXG4gICAgICAgIGRlc3NlcnREZXNjLmNsYXNzTGlzdC5hZGQoJ2Rlc3NlcnQtZGVzYycpO1xyXG5cclxuICAgICAgICBkZXNzZXJ0SW1hZ2Uuc3JjID0gbWVudVtpdGVtXVsnaW1nJ107XHJcbiAgICAgICAgZGVzc2VydE5hbWUuaW5uZXJIVE1MID0gbWVudVtpdGVtXVsndGl0bGUnXTtcclxuICAgICAgICBkZXNzZXJ0RGVzYy5pbm5lckhUTUwgPSBtZW51W2l0ZW1dWydkZXNjJ107XHJcblxyXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKGRlc3NlcnQpO1xyXG4gICAgICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoZGVzc2VydEltYWdlKTtcclxuICAgICAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKGRlc3NlcnRJbmZvKTtcclxuICAgICAgICBkZXNzZXJ0SW5mby5hcHBlbmRDaGlsZChkZXNzZXJ0TmFtZSk7XHJcbiAgICAgICAgZGVzc2VydEluZm8uYXBwZW5kQ2hpbGQoZGVzc2VydERlc2MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge21lbnVQYWdlfTsiLCJpbXBvcnQgTG9nbyBmcm9tICcuL2ltYWdlcy9sb2dvMi5wbmcnXHJcblxyXG4vLyBIb21lcGFnZVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcclxuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBuYXZNZW51LmNsYXNzTGlzdC5hZGQoJ25hdi1tZW51Jyk7XHJcbiAgICBwYWdlcy5jbGFzc0xpc3QuYWRkKCdwYWdlLWxpbmtzJyk7XHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ25hdi1sb2dvJyk7XHJcblxyXG4gICAgaG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XHJcbiAgICBtZW51LmlubmVySFRNTCA9ICdNZW51JztcclxuICAgIGNvbnRhY3QuaW5uZXJIVE1MID0gJ0NvbnRhY3QnO1xyXG4gICAgbG9nby5zcmMgPSBMb2dvO1xyXG5cclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2TWVudSk7XHJcbiAgICBuYXZNZW51LmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gICAgbmF2TWVudS5hcHBlbmRDaGlsZChwYWdlcyk7XHJcbiAgICBwYWdlcy5hcHBlbmRDaGlsZChob21lKTtcclxuICAgIHBhZ2VzLmFwcGVuZENoaWxkKG1lbnUpO1xyXG4gICAgcGFnZXMuYXBwZW5kQ2hpbGQoY29udGFjdCk7XHJcblxyXG4gICAgY29uc3QgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xyXG4gICAgbGlua3MuZm9yRWFjaCgobGluaykgPT4gbGluay5jbGFzc0xpc3QuYWRkKCdwYWdlLWxpbmsnKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKCkge1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWluZXInKTtcclxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgYm9hcmQuY2xhc3NMaXN0LmFkZCgnYm9hcmQnKTtcclxuXHJcbiAgICBib2R5LmFwcGVuZENoaWxkKGJvYXJkKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdGl0bGVCYXIodGl0bGUpIHtcclxuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XHJcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHRpdGxlQ29udGFpbmVyLmlubmVySFRNTCA9IHRpdGxlO1xyXG5cclxuICAgIHRpdGxlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2JvYXJkLXRpdGxlJyk7XHJcblxyXG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZU5hdiwgY3JlYXRlQm9hcmQsIHRpdGxlQmFyfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgbWVudVBhZ2UgfSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmltcG9ydCB7IGNyZWF0ZU5hdiwgdGl0bGVCYXIgfSBmcm9tICcuL3dlYnBhZ2UnO1xyXG5pbXBvcnQgeyBjcmVhdGVCb2FyZCB9IGZyb20gJy4vd2VicGFnZSc7XHJcbmltcG9ydCB7IEhvdXJzLCBpbnNlcnRMb2dvIH0gZnJvbSAnLi9ob21lJztcclxuXHJcbmNyZWF0ZU5hdigpO1xyXG5jcmVhdGVCb2FyZCgpO1xyXG50aXRsZUJhcignTWVudScpO1xyXG5tZW51UGFnZSgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=