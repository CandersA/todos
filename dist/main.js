/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  min-height: 100vh;\r\n}\r\n\r\n.disable {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 1;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.164);\r\n  display: none;\r\n}\r\n\r\n.disable.active {\r\n  display: block;\r\n}\r\n\r\n/* SIDEBAR */\r\n.sidebar {\r\n  background-color: rgb(235, 235, 235);\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 50px 20px;\r\n  position: relative;\r\n}\r\n\r\n.newproject {\r\n  border: none;\r\n  width: 100%;\r\n  height: 45px;\r\n  background-color: rgb(243, 243, 243);\r\n  font-size: 18px;\r\n  transition: all 100ms;\r\n  margin-left: -40px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.newproject:hover,\r\n.newproject:active {\r\n  cursor: pointer;\r\n  background-color: white;\r\n  width: 110%;\r\n}\r\n\r\n.projectinput {\r\n  border: 0;\r\n  width: 100%;\r\n  margin-left: -40px;\r\n  margin-top: 20px;\r\n  height: 45px;\r\n  padding: 0 40px;\r\n  font-size: 18px;\r\n  display: none;\r\n}\r\n\r\n.projectinput:focus {\r\n  outline: none;\r\n}\r\n\r\n.sb-btn {\r\n  border: none;\r\n  background-color: #ffffff00;\r\n  align-self: flex-start;\r\n  font-size: 16px;\r\n}\r\n\r\n.projects {\r\n  margin: 30px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  width: 100%;\r\n  gap: 15px;\r\n}\r\n\r\n.project {\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 20px;\r\n  transition: all 100ms;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  padding: 10px;\r\n  padding-right: 25px;\r\n}\r\n\r\n.project:hover,\r\n.project:active {\r\n  cursor: pointer;\r\n  background-color: rgb(243, 243, 243);\r\n}\r\n\r\n.project-remove {\r\n  font-size: 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/* END OF SIDEBAR */\r\n\r\n/* TODO LIST */\r\n.TodoList {\r\n  min-height: 85vh;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n  margin-top: 15vh;\r\n  gap: 20px;\r\n}\r\n\r\n.addicon {\r\n  height: 50px;\r\n  width: 50px;\r\n  position: absolute;\r\n  right: -80px;\r\n  bottom: 20px;\r\n  fill: white;\r\n  z-index: 2;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: grey;\r\n  border-radius: 50px;\r\n  color: white;\r\n  transition: all 150ms;\r\n}\r\n\r\n.addicon:hover,\r\n.addicon:active {\r\n  cursor: pointer;\r\n  filter: brightness(75%);\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  width: 60%;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: #f3f3f3;\r\n  padding: 20px;\r\n  box-shadow: 5px 5px 5px rgb(233, 233, 233);\r\n}\r\n\r\n.description {\r\n  height: 0;\r\n  display: none;\r\n  width: 100%;\r\n  padding: 0 42px;\r\n  color: grey;\r\n}\r\n\r\n.description.visable {\r\n  height: auto;\r\n  display: block;\r\n}\r\n\r\n.description p {\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.expand-desc {\r\n  height: 22px;\r\n  fill: grey;\r\n  transition: all 150ms;\r\n  padding-right: 20px;\r\n}\r\n\r\n.expand-desc:hover,\r\n.expand-desc:active {\r\n  cursor: pointer;\r\n  fill: black;\r\n}\r\n\r\n.task-container span {\r\n  flex: 1;\r\n}\r\n\r\n.task-container span:nth-child(3) {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.taskicons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  flex: 1;\r\n  gap: 10px;\r\n}\r\n\r\n.taskicons svg {\r\n  height: 20px;\r\n}\r\n\r\n.taskicons svg:hover,\r\n.taskicons svg:active {\r\n  cursor: pointer;\r\n  fill: rgb(114, 114, 114);\r\n}\r\n\r\n.project-head {\r\n  font-size: 26px;\r\n  font-weight: 600;\r\n  color: grey;\r\n  width: 60%;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n/* POPUP TO ADD TASK */\r\n.addpopup {\r\n  position: absolute;\r\n  display: none;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 600px;\r\n  background-color: rgb(233, 233, 233);\r\n  padding: 40px 50px 50px 50px;\r\n  border-radius: 50px;\r\n  z-index: 2;\r\n}\r\n\r\n.addpopup.active {\r\n  display: block;\r\n}\r\n\r\n.addpopup input,\r\n.addpopup select,\r\n.addpopup textarea {\r\n  padding: 7px 15px;\r\n  border: 0;\r\n  border-radius: 10px;\r\n}\r\n\r\n.addpopup input:focus,\r\n.addpopup select:focus,\r\n.addpopup textarea:focus {\r\n  outline: none;\r\n}\r\n\r\n.instruction {\r\n  font-size: 12px;\r\n  margin-bottom: 10px;\r\n  display: block;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.addpopup > form {\r\n  display: flex;\r\n  gap: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.main.column:first-child {\r\n  flex: 2;\r\n}\r\n\r\n.main.column:last-child {\r\n  flex: 1;\r\n}\r\n\r\n/* END OF POPUP */\r\n\r\n/* END OF TODO LIST */\r\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap\");\r\n\r\n*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody,\r\nhtml {\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  min-height: 100vh;\r\n}\r\n\r\n.disable {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  z-index: 1;\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.164);\r\n  display: none;\r\n}\r\n\r\n.disable.active {\r\n  display: block;\r\n}\r\n\r\n/* SIDEBAR */\r\n.sidebar {\r\n  background-color: rgb(235, 235, 235);\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 10px;\r\n  padding: 50px 20px;\r\n  position: relative;\r\n}\r\n\r\n.newproject {\r\n  border: none;\r\n  width: 100%;\r\n  height: 45px;\r\n  background-color: rgb(243, 243, 243);\r\n  font-size: 18px;\r\n  transition: all 100ms;\r\n  margin-left: -40px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.newproject:hover,\r\n.newproject:active {\r\n  cursor: pointer;\r\n  background-color: white;\r\n  width: 110%;\r\n}\r\n\r\n.projectinput {\r\n  border: 0;\r\n  width: 100%;\r\n  margin-left: -40px;\r\n  margin-top: 20px;\r\n  height: 45px;\r\n  padding: 0 40px;\r\n  font-size: 18px;\r\n  display: none;\r\n}\r\n\r\n.projectinput:focus {\r\n  outline: none;\r\n}\r\n\r\n.sb-btn {\r\n  border: none;\r\n  background-color: #ffffff00;\r\n  align-self: flex-start;\r\n  font-size: 16px;\r\n}\r\n\r\n.projects {\r\n  margin: 30px 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: flex-start;\r\n  width: 100%;\r\n  gap: 15px;\r\n}\r\n\r\n.project {\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 20px;\r\n  transition: all 100ms;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  padding: 10px;\r\n  padding-right: 25px;\r\n}\r\n\r\n.project:hover,\r\n.project:active {\r\n  cursor: pointer;\r\n  background-color: rgb(243, 243, 243);\r\n}\r\n\r\n.project-remove {\r\n  font-size: 20px;\r\n  height: 20px;\r\n  width: 20px;\r\n  font-weight: 600;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/* END OF SIDEBAR */\r\n\r\n/* TODO LIST */\r\n.TodoList {\r\n  min-height: 85vh;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  position: relative;\r\n  margin-top: 15vh;\r\n  gap: 20px;\r\n}\r\n\r\n.addicon {\r\n  height: 50px;\r\n  width: 50px;\r\n  position: absolute;\r\n  right: -80px;\r\n  bottom: 20px;\r\n  fill: white;\r\n  z-index: 2;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: grey;\r\n  border-radius: 50px;\r\n  color: white;\r\n  transition: all 150ms;\r\n}\r\n\r\n.addicon:hover,\r\n.addicon:active {\r\n  cursor: pointer;\r\n  filter: brightness(75%);\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  width: 60%;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  background-color: #f3f3f3;\r\n  padding: 20px;\r\n  box-shadow: 5px 5px 5px rgb(233, 233, 233);\r\n}\r\n\r\n.description {\r\n  height: 0;\r\n  display: none;\r\n  width: 100%;\r\n  padding: 0 42px;\r\n  color: grey;\r\n}\r\n\r\n.description.visable {\r\n  height: auto;\r\n  display: block;\r\n}\r\n\r\n.description p {\r\n  margin-top: 20px;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n}\r\n\r\n.task-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  width: 100%;\r\n}\r\n\r\n.expand-desc {\r\n  height: 22px;\r\n  fill: grey;\r\n  transition: all 150ms;\r\n  padding-right: 20px;\r\n}\r\n\r\n.expand-desc:hover,\r\n.expand-desc:active {\r\n  cursor: pointer;\r\n  fill: black;\r\n}\r\n\r\n.task-container span {\r\n  flex: 1;\r\n}\r\n\r\n.task-container span:nth-child(3) {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.taskicons {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  flex: 1;\r\n  gap: 10px;\r\n}\r\n\r\n.taskicons svg {\r\n  height: 20px;\r\n}\r\n\r\n.taskicons svg:hover,\r\n.taskicons svg:active {\r\n  cursor: pointer;\r\n  fill: rgb(114, 114, 114);\r\n}\r\n\r\n.project-head {\r\n  font-size: 26px;\r\n  font-weight: 600;\r\n  color: grey;\r\n  width: 60%;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n/* POPUP TO ADD TASK */\r\n.addpopup {\r\n  position: absolute;\r\n  display: none;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  width: 600px;\r\n  background-color: rgb(233, 233, 233);\r\n  padding: 40px 50px 50px 50px;\r\n  border-radius: 50px;\r\n  z-index: 2;\r\n}\r\n\r\n.addpopup.active {\r\n  display: block;\r\n}\r\n\r\n.addpopup input,\r\n.addpopup select,\r\n.addpopup textarea {\r\n  padding: 7px 15px;\r\n  border: 0;\r\n  border-radius: 10px;\r\n}\r\n\r\n.addpopup input:focus,\r\n.addpopup select:focus,\r\n.addpopup textarea:focus {\r\n  outline: none;\r\n}\r\n\r\n.instruction {\r\n  font-size: 12px;\r\n  margin-bottom: 10px;\r\n  display: block;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.addpopup > form {\r\n  display: flex;\r\n  gap: 30px;\r\n  width: 100%;\r\n}\r\n\r\n.column {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n}\r\n\r\n.main.column:first-child {\r\n  flex: 2;\r\n}\r\n\r\n.main.column:last-child {\r\n  flex: 1;\r\n}\r\n\r\n/* END OF POPUP */\r\n\r\n/* END OF TODO LIST */\r\n"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");


const Project = (name = "Default Title") => {
  const tasks = [];
  let projectName = name;

  const getName = () => projectName;
  const setName = (Name) => {
    projectName = Name;
  };

  const addTask = (task) => {
    tasks.push(task);
  };

  const getTasks = () => {
    const projectTasks = tasks;
    return projectTasks;
  };

  const getTask = (taskName) => {
    const selectTask = tasks.filter(
      (task) => task.getName() === taskName
    );
    return selectTask[0];
  };

  addTask((0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])("Default task"));

  return { setName, getName, getTasks, addTask, getTask };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/modules/Stroage.js":
/*!********************************!*\
  !*** ./src/modules/Stroage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ "./src/modules/TodoList.js");


const Storage = (() => {
  const changeProjectName = (project, newName) => {
    project.setName(newName);
  };

  const changeTaskName = (task, newName) => {
    task.setName(newName);
  };

  const changeTaskDate = (task, newDate) => {
    task.setDate(newDate);
  };

  const getProjects = () => {
    const ProjectNames = _TodoList__WEBPACK_IMPORTED_MODULE_0__["default"].projects.map((project) =>
      project.getName()
    );
    return ProjectNames;
  };

  const taskDisplay = (taskName, taskDate, taskDesc, id) => {
    const taskHTML = `<div class="task" id="task-${id}">
      <div class="task-container">
        <svg xmlns="http://www.w3.org/2000/svg" class="expand-desc" viewBox="0 0 24 24"><title>Details</title><path d="M6.38,6H17.63L12,16L6.38,6M3,4L12,20L21,4H3Z" /></svg>
        <span>${taskName}</span>
        <span>${taskDate}</span>
        <div class="taskicons">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Edit Task</title><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Change priority</title><path d="M14.4,6L14,4H5V21H7V14H12.6L13,16H20V6H14.4Z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Move to different project</title><path d="M14,18V15H10V11H14V8L19,13M20,6H12L10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6Z" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>
        </div>
      </div>
      <div class="description">
        <p>${taskDesc}</p>
      </div>
    </div>`;
    return taskHTML;
  };

  const projectRemoveIcon = () => {
    const icon =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Delete</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
    return icon;
  };

  return {
    changeProjectName,
    changeTaskDate,
    changeTaskName,
    getProjects,
    taskDisplay,
    projectRemoveIcon,
  };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Storage);


/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Task = (name, dueDate = "No date", Desc = "No description") => {
  let taskDesc = Desc;
  let taskName = name;
  let taskDueDate = dueDate;
  const getName = () => taskName;
  const getDate = () => taskDueDate;
  const setName = (newName) => {
    taskName = newName;
    return taskName;
  };
  const setDate = (newDate) => {
    taskDueDate = newDate;
    return taskDueDate;
  };
  const setDesc = (newDesc) => {
    taskDesc = newDesc;
    return taskDesc;
  };

  const getDesc = () => taskDesc;

  return {
    getName,
    getDate,
    setName,
    setDate,
    setDesc,
    getDesc,
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");


const TodoList = (() => {
  const projects = [];
  projects.push((0,_Project__WEBPACK_IMPORTED_MODULE_0__["default"])("Default Project"));

  const addProject = (projectName) => {
    projects.push((0,_Project__WEBPACK_IMPORTED_MODULE_0__["default"])(projectName));
  };

  const getProject = (index) => {
    const project = projects[index];
    return project;
  };

  const removeProject = (index) => {
    delete projects[index];
  }

  return { addProject, getProject, removeProject, projects };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);


/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList */ "./src/modules/TodoList.js");
/* harmony import */ var _Stroage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Stroage */ "./src/modules/Stroage.js");




const UI = (() => {
  const initExpandDescListener = (id) => {
    const tasks = Array.from(document.getElementsByClassName("task"));
    const thisTask = tasks[id];

    const expandButton =
      thisTask.querySelector(".expand-desc");
    const description =
      thisTask.querySelector(".description");

    expandButton.addEventListener("click", () => {
      description.classList.toggle("visable");
    });
  };

  const displayTasks = (project) => {
    const taskDiv = document.querySelector(".TodoList");
    const tasksDOM = Array.from(
      taskDiv.getElementsByClassName("task")
    );
    tasksDOM.forEach((task) => {
      task.remove();
    });

    let projectID = 0;

    const projectTasks = project.getTasks();
    projectTasks.forEach((task) => {
      const taskName = task.getName();
      const taskDate = task.getDate();
      const taskDesc = task.getDesc();
      taskDiv.innerHTML += _Stroage__WEBPACK_IMPORTED_MODULE_2__["default"].taskDisplay(
        taskName,
        taskDate,
        taskDesc,
        projectID
      );
      initExpandDescListener(projectID);
      projectID += 1;
    });
  };

  const getProjectHeading = (project) => {
    const headingDiv =
      document.querySelector(".project-head");
    headingDiv.textContent = "";
    const projectHeading = project.getName();
    headingDiv.prepend(projectHeading);
  };

  const changeStateofButton = (newState) => {
    const addTodo = document.querySelector(".addicon");

    if (newState === "close") {
      addTodo.innerHTML = "Close";
      addTodo.style.width = "70px";
      addTodo.style.right = "-100px";
    } else if (newState === "open") {
      addTodo.innerHTML =
        "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' height='50px'><title>Add task</title><path d='M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' /></svg>";
      addTodo.style.width = "50px";
      addTodo.style.right = "-80px";
    }
  };

  const togglePopup = () => {
    const popUp = document.querySelector(".addpopup");
    const disableElements =
      document.querySelector(".disable");

    if (popUp.classList.contains("active")) {
      popUp.classList.remove("active");
      disableElements.classList.remove("active");
      changeStateofButton("open");
    } else {
      popUp.classList.add("active");
      disableElements.classList.add("active");
      changeStateofButton("close");
    }
  };

  const getInput = (popUp) => {
    const taskName = document.getElementById("tasktext");
    const taskDate = document.getElementById("taskdate");
    const taskDesc = document.getElementById("taskdesc");
    const taskProject =
      document.getElementById("assignproject");
    let selectedProject = "";

    popUp.addEventListener("keydown", (e) => {
      if (
        e.key === "Enter" &&
        popUp.classList.contains("active") &&
        selectedProject.value !== "default"
      ) {
        selectedProject = _TodoList__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(
          taskProject.value
        );
        if (taskDate.value === "") {
          selectedProject.addTask((0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskName.value));
        } else {
          selectedProject.addTask(
            (0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])(taskName.value, taskDate.value)
          );
        }
        if (taskDesc.value !== "") {
          const thisTask = selectedProject.getTask(
            taskName.value
          );
          thisTask.setDesc(taskDesc.value);
        }
        displayTasks(selectedProject);
        taskDesc.value = "";
        taskName.value = "";
        taskDate.value = "";
        taskProject.value = "default";
        togglePopup();
      }
    });
  };

  const handleKeyInput = (e) => {
    if (e.key === "Escape") {
      togglePopup();
    }
  };

  const addProjectToSelection = (id, projectName) => {
    const projectSelect =
      document.getElementById("assignproject");
    const newSelection = document.createElement("option");

    newSelection.setAttribute("value", id);
    newSelection.setAttribute("id", `selection-${id}`);
    newSelection.textContent = projectName;
    projectSelect.appendChild(newSelection);
  };

  const initRemoveButtonForProject = (
    addTo,
    project,
    id
  ) => {
    const previousButtons = Array.from(
      document.getElementsByClassName("project-remove")
    );
    previousButtons.forEach((button) => {
      button.remove();
    });

    const projectRemoveIcon = document.createElement("div");

    projectRemoveIcon.classList.add("project-remove");
    projectRemoveIcon.innerHTML =
      _Stroage__WEBPACK_IMPORTED_MODULE_2__["default"].projectRemoveIcon();

    addTo.prepend(projectRemoveIcon);

    projectRemoveIcon.addEventListener("click", () => {
      const appendToDiv =
        document.querySelector(".projects");
      const projectToRemoveFromDOM =
        document.getElementById(`project-${id}`);
      const projectSelect = document.getElementById(
        `selection-${id}`
      );

      appendToDiv.removeChild(projectToRemoveFromDOM);
      _TodoList__WEBPACK_IMPORTED_MODULE_1__["default"].removeProject(id);
      projectSelect.remove();

      const firstProject =
        document.querySelector(".project");
      if (firstProject === null) {
        document.querySelector(
          ".project-head"
        ).textContent = "There are no projects";
      } else {
        firstProject.click();
      }
    });
  };

  const displayProject = (project, id) => {
    const appendToDiv = document.querySelector(".projects");
    const projectName = project.getName();
    const projectDiv = document.createElement("div");
    const projectSpan = document.createElement("span");

    projectDiv.classList.add("project");
    projectDiv.setAttribute("id", `project-${id}`);
    projectSpan.textContent = projectName;

    projectDiv.appendChild(projectSpan);
    appendToDiv.appendChild(projectDiv);

    addProjectToSelection(id, projectName);

    projectDiv.addEventListener("click", () => {
      initRemoveButtonForProject(projectDiv, project, id);
      displayTasks(_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id));
      getProjectHeading(_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id));
    });
  };

  const switchProject = (projectName) => {
    const projects = Array.from(
      document.getElementsByClassName("project")
    );
    const projectToClick = projects.filter(
      (project) =>
        project.lastChild.textContent === projectName
    );
    projectToClick[0].click();
  };

  let id = 0;

  const initNewProject = () => {
    const addProjectButton =
      document.querySelector(".newproject");
    const inputProjectName =
      document.querySelector(".projectinput");

    addProjectButton.style.display = "none";
    inputProjectName.style.display = "block";
    inputProjectName.focus();
    inputProjectName.addEventListener("keydown", (e) => {
      if (
        e.key === "Enter" &&
        inputProjectName.value !== ""
      ) {
        const projectName = inputProjectName.value;
        _TodoList__WEBPACK_IMPORTED_MODULE_1__["default"].addProject(projectName);
        displayProject(_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(id), id);
        switchProject(projectName);
        addProjectButton.style.display = "block";
        inputProjectName.style.display = "none";
        inputProjectName.value = "";
        id += 1;
      }
    });
  };

  const initEventListeners = () => {
    const addProjectButton =
      document.querySelector(".newproject");
    const addTodo = document.querySelector(".addicon");
    const popUp = document.querySelector(".addpopup");

    addProjectButton.addEventListener(
      "click",
      initNewProject
    );
    addTodo.addEventListener("click", togglePopup);
    getInput(popUp);
  };

  const getDefaultProject = () => {
    const defaultProject = _TodoList__WEBPACK_IMPORTED_MODULE_1__["default"].getProject(0);

    displayProject(defaultProject, 0);
    displayTasks(defaultProject);
    getProjectHeading(defaultProject);
    id += 1;
  };

  const loadHomepage = () => {
    document.addEventListener("keydown", handleKeyInput);
    initEventListeners();
    getDefaultProject();
  };

  return { loadHomepage };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ "./src/modules/UI.js");



document.addEventListener('DOMContentLoaded', _modules_UI__WEBPACK_IMPORTED_MODULE_1__["default"].loadHomepage)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLGFBQWEsV0FBVyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVB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QUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0REFBbUI7QUFDM0IsdUJBQXVCLDREQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiw0REFBbUI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsQ0FBQzs7QUFFRCxpRUFBZSxFQUFFLEVBQUM7Ozs7Ozs7VUN4UmxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXNCO0FBQ087QUFDN0I7QUFDQSw4Q0FBOEMsZ0VBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG9zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9tb2R1bGVzL1N0cm9hZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvZG9zLy4vc3JjL21vZHVsZXMvVG9kb0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kb3MvLi9zcmMvbW9kdWxlcy9VSS5qcyIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb3Mvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2Rvcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2Rvcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEAzMDA7NDAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSxcXHJcXG5odG1sIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlIHtcXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjE2NCk7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzYWJsZS5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi8qIFNJREVCQVIgKi9cXHJcXG4uc2lkZWJhciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyMzUsIDIzNSk7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuICBwYWRkaW5nOiA1MHB4IDIwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5uZXdwcm9qZWN0IHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zO1xcclxcbiAgbWFyZ2luLWxlZnQ6IC00MHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3Byb2plY3Q6aG92ZXIsXFxyXFxuLm5ld3Byb2plY3Q6YWN0aXZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgd2lkdGg6IDExMCU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0aW5wdXQge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXJnaW4tbGVmdDogLTQwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiA0NXB4O1xcclxcbiAgcGFkZGluZzogMCA0MHB4O1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RpbnB1dDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2ItYnRuIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYwMDtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cyB7XFxyXFxuICBtYXJnaW46IDMwcHggMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGdhcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDEwMG1zO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgcGFkZGluZy1yaWdodDogMjVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3Q6aG92ZXIsXFxyXFxuLnByb2plY3Q6YWN0aXZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDMsIDI0MywgMjQzKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtcmVtb3ZlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gIGhlaWdodDogMjBweDtcXHJcXG4gIHdpZHRoOiAyMHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFTkQgT0YgU0lERUJBUiAqL1xcclxcblxcclxcbi8qIFRPRE8gTElTVCAqL1xcclxcbi5Ub2RvTGlzdCB7XFxyXFxuICBtaW4taGVpZ2h0OiA4NXZoO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXZoO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkaWNvbiB7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICB3aWR0aDogNTBweDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAtODBweDtcXHJcXG4gIGJvdHRvbTogMjBweDtcXHJcXG4gIGZpbGw6IHdoaXRlO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZGljb246aG92ZXIsXFxyXFxuLmFkZGljb246YWN0aXZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg3NSUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxuICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2IoMjMzLCAyMzMsIDIzMyk7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDA7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBwYWRkaW5nOiAwIDQycHg7XFxyXFxuICBjb2xvcjogZ3JleTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uLnZpc2FibGUge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiBwIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZXhwYW5kLWRlc2Mge1xcclxcbiAgaGVpZ2h0OiAyMnB4O1xcclxcbiAgZmlsbDogZ3JleTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAxNTBtcztcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtZGVzYzpob3ZlcixcXHJcXG4uZXhwYW5kLWRlc2M6YWN0aXZlIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGZpbGw6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIgc3BhbiB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1jb250YWluZXIgc3BhbjpudGgtY2hpbGQoMykge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza2ljb25zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tpY29ucyBzdmcge1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza2ljb25zIHN2Zzpob3ZlcixcXHJcXG4udGFza2ljb25zIHN2ZzphY3RpdmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmlsbDogcmdiKDExNCwgMTE0LCAxMTQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1oZWFkIHtcXHJcXG4gIGZvbnQtc2l6ZTogMjZweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogZ3JleTtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQT1BVUCBUTyBBREQgVEFTSyAqL1xcclxcbi5hZGRwb3B1cCB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIHdpZHRoOiA2MDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzMsIDIzMywgMjMzKTtcXHJcXG4gIHBhZGRpbmc6IDQwcHggNTBweCA1MHB4IDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgei1pbmRleDogMjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHBvcHVwLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHBvcHVwIGlucHV0LFxcclxcbi5hZGRwb3B1cCBzZWxlY3QsXFxyXFxuLmFkZHBvcHVwIHRleHRhcmVhIHtcXHJcXG4gIHBhZGRpbmc6IDdweCAxNXB4O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHBvcHVwIGlucHV0OmZvY3VzLFxcclxcbi5hZGRwb3B1cCBzZWxlY3Q6Zm9jdXMsXFxyXFxuLmFkZHBvcHVwIHRleHRhcmVhOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pbnN0cnVjdGlvbiB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZHBvcHVwID4gZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiAzMHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5jb2x1bW4ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYWluLmNvbHVtbjpmaXJzdC1jaGlsZCB7XFxyXFxuICBmbGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi5jb2x1bW46bGFzdC1jaGlsZCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBFTkQgT0YgUE9QVVAgKi9cXHJcXG5cXHJcXG4vKiBFTkQgT0YgVE9ETyBMSVNUICovXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7OztFQUdFLHNCQUFzQjtFQUN0QixrQ0FBa0M7QUFDcEM7O0FBRUE7O0VBRUUsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQ0FBc0M7RUFDdEMsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FB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Oi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NjAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LFxcclxcbmh0bWwge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2FibGUge1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTY0KTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5kaXNhYmxlLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLyogU0lERUJBUiAqL1xcclxcbi5zaWRlYmFyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDIzNSwgMjM1KTtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG4gIHBhZGRpbmc6IDUwcHggMjBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ld3Byb2plY3Qge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQzLCAyNDMsIDI0Myk7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXM7XFxyXFxuICBtYXJnaW4tbGVmdDogLTQwcHg7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3cHJvamVjdDpob3ZlcixcXHJcXG4ubmV3cHJvamVjdDphY3RpdmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICB3aWR0aDogMTEwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RpbnB1dCB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICBoZWlnaHQ6IDQ1cHg7XFxyXFxuICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdGlucHV0OmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zYi1idG4ge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjAwO1xcclxcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzIHtcXHJcXG4gIG1hcmdpbjogMzBweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXM7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdDpob3ZlcixcXHJcXG4ucHJvamVjdDphY3RpdmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MywgMjQzLCAyNDMpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1yZW1vdmUge1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgd2lkdGg6IDIwcHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi8qIEVORCBPRiBTSURFQkFSICovXFxyXFxuXFxyXFxuLyogVE9ETyBMSVNUICovXFxyXFxuLlRvZG9MaXN0IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDg1dmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDE1dmg7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGRpY29uIHtcXHJcXG4gIGhlaWdodDogNTBweDtcXHJcXG4gIHdpZHRoOiA1MHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IC04MHB4O1xcclxcbiAgYm90dG9tOiAyMHB4O1xcclxcbiAgZmlsbDogd2hpdGU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkaWNvbjpob3ZlcixcXHJcXG4uYWRkaWNvbjphY3RpdmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDc1JSk7XFxyXFxufVxcclxcblxcclxcbi50YXNrIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYigyMzMsIDIzMywgMjMzKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gIGhlaWdodDogMDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDAgNDJweDtcXHJcXG4gIGNvbG9yOiBncmV5O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24udmlzYWJsZSB7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHAge1xcclxcbiAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5leHBhbmQtZGVzYyB7XFxyXFxuICBoZWlnaHQ6IDIycHg7XFxyXFxuICBmaWxsOiBncmV5O1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDE1MG1zO1xcclxcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmV4cGFuZC1kZXNjOmhvdmVyLFxcclxcbi5leHBhbmQtZGVzYzphY3RpdmUge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZmlsbDogYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciBzcGFuIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWNvbnRhaW5lciBzcGFuOm50aC1jaGlsZCgzKSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50YXNraWNvbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFza2ljb25zIHN2ZyB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi50YXNraWNvbnMgc3ZnOmhvdmVyLFxcclxcbi50YXNraWNvbnMgc3ZnOmFjdGl2ZSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmaWxsOiByZ2IoMTE0LCAxMTQsIDExNCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWhlYWQge1xcclxcbiAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiBncmV5O1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIFBPUFVQIFRPIEFERCBUQVNLICovXFxyXFxuLmFkZHBvcHVwIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgd2lkdGg6IDYwMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgMjMzLCAyMzMpO1xcclxcbiAgcGFkZGluZzogNDBweCA1MHB4IDUwcHggNTBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcG9wdXAuYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcG9wdXAgaW5wdXQsXFxyXFxuLmFkZHBvcHVwIHNlbGVjdCxcXHJcXG4uYWRkcG9wdXAgdGV4dGFyZWEge1xcclxcbiAgcGFkZGluZzogN3B4IDE1cHg7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcG9wdXAgaW5wdXQ6Zm9jdXMsXFxyXFxuLmFkZHBvcHVwIHNlbGVjdDpmb2N1cyxcXHJcXG4uYWRkcG9wdXAgdGV4dGFyZWE6Zm9jdXMge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluc3RydWN0aW9uIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkcG9wdXAgPiBmb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbHVtbiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4uY29sdW1uOmZpcnN0LWNoaWxkIHtcXHJcXG4gIGZsZXg6IDI7XFxyXFxufVxcclxcblxcclxcbi5tYWluLmNvbHVtbjpsYXN0LWNoaWxkIHtcXHJcXG4gIGZsZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIEVORCBPRiBQT1BVUCAqL1xcclxcblxcclxcbi8qIEVORCBPRiBUT0RPIExJU1QgKi9cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcclxuXHJcbmNvbnN0IFByb2plY3QgPSAobmFtZSA9IFwiRGVmYXVsdCBUaXRsZVwiKSA9PiB7XHJcbiAgY29uc3QgdGFza3MgPSBbXTtcclxuICBsZXQgcHJvamVjdE5hbWUgPSBuYW1lO1xyXG5cclxuICBjb25zdCBnZXROYW1lID0gKCkgPT4gcHJvamVjdE5hbWU7XHJcbiAgY29uc3Qgc2V0TmFtZSA9IChOYW1lKSA9PiB7XHJcbiAgICBwcm9qZWN0TmFtZSA9IE5hbWU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRhc2tzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gdGFza3M7XHJcbiAgICByZXR1cm4gcHJvamVjdFRhc2tzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRhc2sgPSAodGFza05hbWUpID0+IHtcclxuICAgIGNvbnN0IHNlbGVjdFRhc2sgPSB0YXNrcy5maWx0ZXIoXHJcbiAgICAgICh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSA9PT0gdGFza05hbWVcclxuICAgICk7XHJcbiAgICByZXR1cm4gc2VsZWN0VGFza1swXTtcclxuICB9O1xyXG5cclxuICBhZGRUYXNrKFRhc2soXCJEZWZhdWx0IHRhc2tcIikpO1xyXG5cclxuICByZXR1cm4geyBzZXROYW1lLCBnZXROYW1lLCBnZXRUYXNrcywgYWRkVGFzaywgZ2V0VGFzayB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcclxuIiwiaW1wb3J0IFRvZG9MaXN0IGZyb20gXCIuL1RvZG9MaXN0XCI7XHJcblxyXG5jb25zdCBTdG9yYWdlID0gKCgpID0+IHtcclxuICBjb25zdCBjaGFuZ2VQcm9qZWN0TmFtZSA9IChwcm9qZWN0LCBuZXdOYW1lKSA9PiB7XHJcbiAgICBwcm9qZWN0LnNldE5hbWUobmV3TmFtZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlVGFza05hbWUgPSAodGFzaywgbmV3TmFtZSkgPT4ge1xyXG4gICAgdGFzay5zZXROYW1lKG5ld05hbWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNoYW5nZVRhc2tEYXRlID0gKHRhc2ssIG5ld0RhdGUpID0+IHtcclxuICAgIHRhc2suc2V0RGF0ZShuZXdEYXRlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRQcm9qZWN0cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFByb2plY3ROYW1lcyA9IFRvZG9MaXN0LnByb2plY3RzLm1hcCgocHJvamVjdCkgPT5cclxuICAgICAgcHJvamVjdC5nZXROYW1lKClcclxuICAgICk7XHJcbiAgICByZXR1cm4gUHJvamVjdE5hbWVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHRhc2tEaXNwbGF5ID0gKHRhc2tOYW1lLCB0YXNrRGF0ZSwgdGFza0Rlc2MsIGlkKSA9PiB7XHJcbiAgICBjb25zdCB0YXNrSFRNTCA9IGA8ZGl2IGNsYXNzPVwidGFza1wiIGlkPVwidGFzay0ke2lkfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1jb250YWluZXJcIj5cclxuICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImV4cGFuZC1kZXNjXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5EZXRhaWxzPC90aXRsZT48cGF0aCBkPVwiTTYuMzgsNkgxNy42M0wxMiwxNkw2LjM4LDZNMyw0TDEyLDIwTDIxLDRIM1pcIiAvPjwvc3ZnPlxyXG4gICAgICAgIDxzcGFuPiR7dGFza05hbWV9PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPiR7dGFza0RhdGV9PC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNraWNvbnNcIj5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+RWRpdCBUYXNrPC90aXRsZT48cGF0aCBkPVwiTTIwLjcxLDcuMDRDMjEuMSw2LjY1IDIxLjEsNiAyMC43MSw1LjYzTDE4LjM3LDMuMjlDMTgsMi45IDE3LjM1LDIuOSAxNi45NiwzLjI5TDE1LjEyLDUuMTJMMTguODcsOC44N00zLDE3LjI1VjIxSDYuNzVMMTcuODEsOS45M0wxNC4wNiw2LjE4TDMsMTcuMjVaXCIgLz48L3N2Zz5cclxuICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Q2hhbmdlIHByaW9yaXR5PC90aXRsZT48cGF0aCBkPVwiTTE0LjQsNkwxNCw0SDVWMjFIN1YxNEgxMi42TDEzLDE2SDIwVjZIMTQuNFpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5Nb3ZlIHRvIGRpZmZlcmVudCBwcm9qZWN0PC90aXRsZT48cGF0aCBkPVwiTTE0LDE4VjE1SDEwVjExSDE0VjhMMTksMTNNMjAsNkgxMkwxMCw0SDRDMi44OSw0IDIsNC44OSAyLDZWMThBMiwyIDAgMCwwIDQsMjBIMjBBMiwyIDAgMCwwIDIyLDE4VjhDMjIsNi44OSAyMS4xLDYgMjAsNlpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5EZWxldGU8L3RpdGxlPjxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNNyw2SDE3VjE5SDdWNk05LDhWMTdIMTFWOEg5TTEzLDhWMTdIMTVWOEgxM1pcIiAvPjwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgPHA+JHt0YXNrRGVzY308L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+YDtcclxuICAgIHJldHVybiB0YXNrSFRNTDtcclxuICB9O1xyXG5cclxuICBjb25zdCBwcm9qZWN0UmVtb3ZlSWNvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IGljb24gPVxyXG4gICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5EZWxldGU8L3RpdGxlPjxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNNyw2SDE3VjE5SDdWNk05LDhWMTdIMTFWOEg5TTEzLDhWMTdIMTVWOEgxM1pcIiAvPjwvc3ZnPic7XHJcbiAgICByZXR1cm4gaWNvbjtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgY2hhbmdlUHJvamVjdE5hbWUsXHJcbiAgICBjaGFuZ2VUYXNrRGF0ZSxcclxuICAgIGNoYW5nZVRhc2tOYW1lLFxyXG4gICAgZ2V0UHJvamVjdHMsXHJcbiAgICB0YXNrRGlzcGxheSxcclxuICAgIHByb2plY3RSZW1vdmVJY29uLFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yYWdlO1xyXG4iLCJjb25zdCBUYXNrID0gKG5hbWUsIGR1ZURhdGUgPSBcIk5vIGRhdGVcIiwgRGVzYyA9IFwiTm8gZGVzY3JpcHRpb25cIikgPT4ge1xyXG4gIGxldCB0YXNrRGVzYyA9IERlc2M7XHJcbiAgbGV0IHRhc2tOYW1lID0gbmFtZTtcclxuICBsZXQgdGFza0R1ZURhdGUgPSBkdWVEYXRlO1xyXG4gIGNvbnN0IGdldE5hbWUgPSAoKSA9PiB0YXNrTmFtZTtcclxuICBjb25zdCBnZXREYXRlID0gKCkgPT4gdGFza0R1ZURhdGU7XHJcbiAgY29uc3Qgc2V0TmFtZSA9IChuZXdOYW1lKSA9PiB7XHJcbiAgICB0YXNrTmFtZSA9IG5ld05hbWU7XHJcbiAgICByZXR1cm4gdGFza05hbWU7XHJcbiAgfTtcclxuICBjb25zdCBzZXREYXRlID0gKG5ld0RhdGUpID0+IHtcclxuICAgIHRhc2tEdWVEYXRlID0gbmV3RGF0ZTtcclxuICAgIHJldHVybiB0YXNrRHVlRGF0ZTtcclxuICB9O1xyXG4gIGNvbnN0IHNldERlc2MgPSAobmV3RGVzYykgPT4ge1xyXG4gICAgdGFza0Rlc2MgPSBuZXdEZXNjO1xyXG4gICAgcmV0dXJuIHRhc2tEZXNjO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldERlc2MgPSAoKSA9PiB0YXNrRGVzYztcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGdldE5hbWUsXHJcbiAgICBnZXREYXRlLFxyXG4gICAgc2V0TmFtZSxcclxuICAgIHNldERhdGUsXHJcbiAgICBzZXREZXNjLFxyXG4gICAgZ2V0RGVzYyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFzaztcclxuIiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5cclxuY29uc3QgVG9kb0xpc3QgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IHByb2plY3RzID0gW107XHJcbiAgcHJvamVjdHMucHVzaChQcm9qZWN0KFwiRGVmYXVsdCBQcm9qZWN0XCIpKTtcclxuXHJcbiAgY29uc3QgYWRkUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG4gICAgcHJvamVjdHMucHVzaChQcm9qZWN0KHByb2plY3ROYW1lKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0UHJvamVjdCA9IChpbmRleCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzW2luZGV4XTtcclxuICAgIHJldHVybiBwcm9qZWN0O1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHJlbW92ZVByb2plY3QgPSAoaW5kZXgpID0+IHtcclxuICAgIGRlbGV0ZSBwcm9qZWN0c1tpbmRleF07XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBhZGRQcm9qZWN0LCBnZXRQcm9qZWN0LCByZW1vdmVQcm9qZWN0LCBwcm9qZWN0cyB9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XHJcbiIsImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiLi9Ub2RvTGlzdFwiO1xuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4vU3Ryb2FnZVwiO1xuXG5jb25zdCBVSSA9ICgoKSA9PiB7XG4gIGNvbnN0IGluaXRFeHBhbmREZXNjTGlzdGVuZXIgPSAoaWQpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInRhc2tcIikpO1xuICAgIGNvbnN0IHRoaXNUYXNrID0gdGFza3NbaWRdO1xuXG4gICAgY29uc3QgZXhwYW5kQnV0dG9uID1cbiAgICAgIHRoaXNUYXNrLnF1ZXJ5U2VsZWN0b3IoXCIuZXhwYW5kLWRlc2NcIik7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPVxuICAgICAgdGhpc1Rhc2sucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcblxuICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcInZpc2FibGVcIik7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheVRhc2tzID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5Ub2RvTGlzdFwiKTtcbiAgICBjb25zdCB0YXNrc0RPTSA9IEFycmF5LmZyb20oXG4gICAgICB0YXNrRGl2LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrXCIpXG4gICAgKTtcbiAgICB0YXNrc0RPTS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICB0YXNrLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgbGV0IHByb2plY3RJRCA9IDA7XG5cbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSBwcm9qZWN0LmdldFRhc2tzKCk7XG4gICAgcHJvamVjdFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHRhc2tOYW1lID0gdGFzay5nZXROYW1lKCk7XG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2suZ2V0RGF0ZSgpO1xuICAgICAgY29uc3QgdGFza0Rlc2MgPSB0YXNrLmdldERlc2MoKTtcbiAgICAgIHRhc2tEaXYuaW5uZXJIVE1MICs9IFN0b3JhZ2UudGFza0Rpc3BsYXkoXG4gICAgICAgIHRhc2tOYW1lLFxuICAgICAgICB0YXNrRGF0ZSxcbiAgICAgICAgdGFza0Rlc2MsXG4gICAgICAgIHByb2plY3RJRFxuICAgICAgKTtcbiAgICAgIGluaXRFeHBhbmREZXNjTGlzdGVuZXIocHJvamVjdElEKTtcbiAgICAgIHByb2plY3RJRCArPSAxO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGdldFByb2plY3RIZWFkaW5nID0gKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBoZWFkaW5nRGl2ID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1oZWFkXCIpO1xuICAgIGhlYWRpbmdEaXYudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbnN0IHByb2plY3RIZWFkaW5nID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgaGVhZGluZ0Rpdi5wcmVwZW5kKHByb2plY3RIZWFkaW5nKTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VTdGF0ZW9mQnV0dG9uID0gKG5ld1N0YXRlKSA9PiB7XG4gICAgY29uc3QgYWRkVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkaWNvblwiKTtcblxuICAgIGlmIChuZXdTdGF0ZSA9PT0gXCJjbG9zZVwiKSB7XG4gICAgICBhZGRUb2RvLmlubmVySFRNTCA9IFwiQ2xvc2VcIjtcbiAgICAgIGFkZFRvZG8uc3R5bGUud2lkdGggPSBcIjcwcHhcIjtcbiAgICAgIGFkZFRvZG8uc3R5bGUucmlnaHQgPSBcIi0xMDBweFwiO1xuICAgIH0gZWxzZSBpZiAobmV3U3RhdGUgPT09IFwib3BlblwiKSB7XG4gICAgICBhZGRUb2RvLmlubmVySFRNTCA9XG4gICAgICAgIFwiPHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCAyNCAyNCcgaGVpZ2h0PSc1MHB4Jz48dGl0bGU+QWRkIHRhc2s8L3RpdGxlPjxwYXRoIGQ9J00xNywxM0gxM1YxN0gxMVYxM0g3VjExSDExVjdIMTNWMTFIMTdNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCwwIDIyLDEyQTEwLDEwIDAgMCwwIDEyLDJaJyAvPjwvc3ZnPlwiO1xuICAgICAgYWRkVG9kby5zdHlsZS53aWR0aCA9IFwiNTBweFwiO1xuICAgICAgYWRkVG9kby5zdHlsZS5yaWdodCA9IFwiLTgwcHhcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlUG9wdXAgPSAoKSA9PiB7XG4gICAgY29uc3QgcG9wVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHBvcHVwXCIpO1xuICAgIGNvbnN0IGRpc2FibGVFbGVtZW50cyA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc2FibGVcIik7XG5cbiAgICBpZiAocG9wVXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBwb3BVcC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgZGlzYWJsZUVsZW1lbnRzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBjaGFuZ2VTdGF0ZW9mQnV0dG9uKFwib3BlblwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wVXAuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIGRpc2FibGVFbGVtZW50cy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgY2hhbmdlU3RhdGVvZkJ1dHRvbihcImNsb3NlXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBnZXRJbnB1dCA9IChwb3BVcCkgPT4ge1xuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrdGV4dFwiKTtcbiAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza2RhdGVcIik7XG4gICAgY29uc3QgdGFza0Rlc2MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tkZXNjXCIpO1xuICAgIGNvbnN0IHRhc2tQcm9qZWN0ID1cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXNzaWducHJvamVjdFwiKTtcbiAgICBsZXQgc2VsZWN0ZWRQcm9qZWN0ID0gXCJcIjtcblxuICAgIHBvcFVwLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGUua2V5ID09PSBcIkVudGVyXCIgJiZcbiAgICAgICAgcG9wVXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmXG4gICAgICAgIHNlbGVjdGVkUHJvamVjdC52YWx1ZSAhPT0gXCJkZWZhdWx0XCJcbiAgICAgICkge1xuICAgICAgICBzZWxlY3RlZFByb2plY3QgPSBUb2RvTGlzdC5nZXRQcm9qZWN0KFxuICAgICAgICAgIHRhc2tQcm9qZWN0LnZhbHVlXG4gICAgICAgICk7XG4gICAgICAgIGlmICh0YXNrRGF0ZS52YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgIHNlbGVjdGVkUHJvamVjdC5hZGRUYXNrKFRhc2sodGFza05hbWUudmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RlZFByb2plY3QuYWRkVGFzayhcbiAgICAgICAgICAgIFRhc2sodGFza05hbWUudmFsdWUsIHRhc2tEYXRlLnZhbHVlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRhc2tEZXNjLnZhbHVlICE9PSBcIlwiKSB7XG4gICAgICAgICAgY29uc3QgdGhpc1Rhc2sgPSBzZWxlY3RlZFByb2plY3QuZ2V0VGFzayhcbiAgICAgICAgICAgIHRhc2tOYW1lLnZhbHVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICB0aGlzVGFzay5zZXREZXNjKHRhc2tEZXNjLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBkaXNwbGF5VGFza3Moc2VsZWN0ZWRQcm9qZWN0KTtcbiAgICAgICAgdGFza0Rlc2MudmFsdWUgPSBcIlwiO1xuICAgICAgICB0YXNrTmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICAgIHRhc2tEYXRlLnZhbHVlID0gXCJcIjtcbiAgICAgICAgdGFza1Byb2plY3QudmFsdWUgPSBcImRlZmF1bHRcIjtcbiAgICAgICAgdG9nZ2xlUG9wdXAoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVLZXlJbnB1dCA9IChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0b2dnbGVQb3B1cCgpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhZGRQcm9qZWN0VG9TZWxlY3Rpb24gPSAoaWQsIHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdFNlbGVjdCA9XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFzc2lnbnByb2plY3RcIik7XG4gICAgY29uc3QgbmV3U2VsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcblxuICAgIG5ld1NlbGVjdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBpZCk7XG4gICAgbmV3U2VsZWN0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIGBzZWxlY3Rpb24tJHtpZH1gKTtcbiAgICBuZXdTZWxlY3Rpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKG5ld1NlbGVjdGlvbik7XG4gIH07XG5cbiAgY29uc3QgaW5pdFJlbW92ZUJ1dHRvbkZvclByb2plY3QgPSAoXG4gICAgYWRkVG8sXG4gICAgcHJvamVjdCxcbiAgICBpZFxuICApID0+IHtcbiAgICBjb25zdCBwcmV2aW91c0J1dHRvbnMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3QtcmVtb3ZlXCIpXG4gICAgKTtcbiAgICBwcmV2aW91c0J1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwcm9qZWN0UmVtb3ZlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBwcm9qZWN0UmVtb3ZlSWNvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1yZW1vdmVcIik7XG4gICAgcHJvamVjdFJlbW92ZUljb24uaW5uZXJIVE1MID1cbiAgICAgIFN0b3JhZ2UucHJvamVjdFJlbW92ZUljb24oKTtcblxuICAgIGFkZFRvLnByZXBlbmQocHJvamVjdFJlbW92ZUljb24pO1xuXG4gICAgcHJvamVjdFJlbW92ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGFwcGVuZFRvRGl2ID1cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKTtcbiAgICAgIGNvbnN0IHByb2plY3RUb1JlbW92ZUZyb21ET00gPVxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke2lkfWApO1xuICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgICBgc2VsZWN0aW9uLSR7aWR9YFxuICAgICAgKTtcblxuICAgICAgYXBwZW5kVG9EaXYucmVtb3ZlQ2hpbGQocHJvamVjdFRvUmVtb3ZlRnJvbURPTSk7XG4gICAgICBUb2RvTGlzdC5yZW1vdmVQcm9qZWN0KGlkKTtcbiAgICAgIHByb2plY3RTZWxlY3QucmVtb3ZlKCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0UHJvamVjdCA9XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdFwiKTtcbiAgICAgIGlmIChmaXJzdFByb2plY3QgPT09IG51bGwpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5wcm9qZWN0LWhlYWRcIlxuICAgICAgICApLnRleHRDb250ZW50ID0gXCJUaGVyZSBhcmUgbm8gcHJvamVjdHNcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpcnN0UHJvamVjdC5jbGljaygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlQcm9qZWN0ID0gKHByb2plY3QsIGlkKSA9PiB7XG4gICAgY29uc3QgYXBwZW5kVG9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgY29uc3QgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcHJvamVjdFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgcHJvamVjdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgcHJvamVjdC0ke2lkfWApO1xuICAgIHByb2plY3RTcGFuLnRleHRDb250ZW50ID0gcHJvamVjdE5hbWU7XG5cbiAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RTcGFuKTtcbiAgICBhcHBlbmRUb0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KTtcblxuICAgIGFkZFByb2plY3RUb1NlbGVjdGlvbihpZCwgcHJvamVjdE5hbWUpO1xuXG4gICAgcHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaW5pdFJlbW92ZUJ1dHRvbkZvclByb2plY3QocHJvamVjdERpdiwgcHJvamVjdCwgaWQpO1xuICAgICAgZGlzcGxheVRhc2tzKFRvZG9MaXN0LmdldFByb2plY3QoaWQpKTtcbiAgICAgIGdldFByb2plY3RIZWFkaW5nKFRvZG9MaXN0LmdldFByb2plY3QoaWQpKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzd2l0Y2hQcm9qZWN0ID0gKHByb2plY3ROYW1lKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RcIilcbiAgICApO1xuICAgIGNvbnN0IHByb2plY3RUb0NsaWNrID0gcHJvamVjdHMuZmlsdGVyKFxuICAgICAgKHByb2plY3QpID0+XG4gICAgICAgIHByb2plY3QubGFzdENoaWxkLnRleHRDb250ZW50ID09PSBwcm9qZWN0TmFtZVxuICAgICk7XG4gICAgcHJvamVjdFRvQ2xpY2tbMF0uY2xpY2soKTtcbiAgfTtcblxuICBsZXQgaWQgPSAwO1xuXG4gIGNvbnN0IGluaXROZXdQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdwcm9qZWN0XCIpO1xuICAgIGNvbnN0IGlucHV0UHJvamVjdE5hbWUgPVxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0aW5wdXRcIik7XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBpbnB1dFByb2plY3ROYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgaW5wdXRQcm9qZWN0TmFtZS5mb2N1cygpO1xuICAgIGlucHV0UHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZS5rZXkgPT09IFwiRW50ZXJcIiAmJlxuICAgICAgICBpbnB1dFByb2plY3ROYW1lLnZhbHVlICE9PSBcIlwiXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBpbnB1dFByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICBUb2RvTGlzdC5hZGRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgZGlzcGxheVByb2plY3QoVG9kb0xpc3QuZ2V0UHJvamVjdChpZCksIGlkKTtcbiAgICAgICAgc3dpdGNoUHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgaW5wdXRQcm9qZWN0TmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGlucHV0UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgICBpZCArPSAxO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGluaXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID1cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3cHJvamVjdFwiKTtcbiAgICBjb25zdCBhZGRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRpY29uXCIpO1xuICAgIGNvbnN0IHBvcFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRwb3B1cFwiKTtcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIGluaXROZXdQcm9qZWN0XG4gICAgKTtcbiAgICBhZGRUb2RvLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVQb3B1cCk7XG4gICAgZ2V0SW5wdXQocG9wVXApO1xuICB9O1xuXG4gIGNvbnN0IGdldERlZmF1bHRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gVG9kb0xpc3QuZ2V0UHJvamVjdCgwKTtcblxuICAgIGRpc3BsYXlQcm9qZWN0KGRlZmF1bHRQcm9qZWN0LCAwKTtcbiAgICBkaXNwbGF5VGFza3MoZGVmYXVsdFByb2plY3QpO1xuICAgIGdldFByb2plY3RIZWFkaW5nKGRlZmF1bHRQcm9qZWN0KTtcbiAgICBpZCArPSAxO1xuICB9O1xuXG4gIGNvbnN0IGxvYWRIb21lcGFnZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBoYW5kbGVLZXlJbnB1dCk7XG4gICAgaW5pdEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgZ2V0RGVmYXVsdFByb2plY3QoKTtcbiAgfTtcblxuICByZXR1cm4geyBsb2FkSG9tZXBhZ2UgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IFVJO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XHJcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvVUknXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkubG9hZEhvbWVwYWdlKVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=