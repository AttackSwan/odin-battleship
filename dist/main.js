"use strict";
(self["webpackChunkodin_battleship"] = self["webpackChunkodin_battleship"] || []).push([["main"],{

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
	--color-darkBlue: #132843;
	--color-brightYellow: #fff000;
	--color-mutedYellow: #f4e603;
}

* {
	box-sizing: border-box;
}

body {
	height: 100vh;
	width: 100vw;
	margin: 0;
}

.content {
	height: 100%;
	width: 100%;
	background-image: linear-gradient(
		to right top,
		#132843,
		#1b4169,
		#205c93,
		#2078be,
		#1296eb
	);
}

.overlay,
.splash_text,
.splash_img,
.splash_button {
	align-items: center;
	display: flex;
	font-family: "Press Start 2P", cursive;
	height: 100%;
	justify-content: center;
	width: 100%;
}

.overlay {
	background-color: rgba(0, 0, 0, 0.2);
}

.splash {
	display: flex;
	flex-direction: column;
	max-width: 500px;
	padding: 32px;
}

.splash_text {
	color: white;
	font-size: 3rem;
	margin-bottom: 48px;
	text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
		0px -4px 10px rgba(255, 255, 255, 0.3);
}

.splash img {
	width: 100%;
}

.yellowButton {
	background-color: var(--color-brightYellow);
	border-radius: 4px;
	border: 0;
	box-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,
		rgba(0, 44, 97, 0.1) 0 3px 6px 0;
	box-sizing: border-box;
	color: #000;
	cursor: pointer;
	display: inherit;
	font-family: "Press Start 2P", cursive, -apple-system, system-ui, "Segoe UI",
		Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol";
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	margin: 0;
	margin-top: 32px;
	min-height: 56px;
	min-width: 120px;
	padding: 16px 20px;
	position: relative;
	text-align: center;
	user-select: none;
	-webkit-user-select: none;
	width: 195px;
	touch-action: manipulation;
	vertical-align: baseline;
	transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.yellowButton:hover {
	background-color: var(--color-mutedYellow);
	transform: translateY(-5px);
}

.greenButton {
	background-color: green;
	border-radius: 4px;
	border: 0;
	box-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,
		rgba(0, 44, 97, 0.1) 0 3px 6px 0;
	box-sizing: border-box;
	color: #000;
	cursor: pointer;
	display: inherit;
	font-family: "Press Start 2P", cursive, -apple-system, system-ui, "Segoe UI",
		Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
		"Segoe UI Emoji", "Segoe UI Symbol";
	font-size: 18px;
	font-weight: 700;
	line-height: 24px;
	margin: 0;
	margin-top: 32px;
	min-height: 56px;
	min-width: 120px;
	padding: 16px 20px;
	position: relative;
	text-align: center;
	user-select: none;
	-webkit-user-select: none;
	width: 195px;
	touch-action: manipulation;
	vertical-align: baseline;
	transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
}

.greenButton:hover {
	background-color: rgb(1, 100, 1);
	transform: translateY(-5px);
}

@media (min-width: 768px) {
	.yellowButton {
		min-width: 150px;
		padding: 16px 44px;
	}
}

.placement {
	align-items: center;
	border-radius: 25px;
	color: white;
	border: 5px solid #1296eb;
	display: flex;
	flex-direction: column;
	padding: 32px;
	box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
		rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
		rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.placement_image {
	display: flex;
	justify-content: center;
	margin-bottom: 16px;
}

.placement img {
	max-width: 200px;
}

.placement_text {
	margin: 16px 0;
}

.placement_grid,
.player_grid,
.ai_grid {
	border: 1px solid white;
	display: grid;
	grid-template-columns: repeat(10, 1fr);
	margin-top: 16px;
	max-width: 355px;
}

.placement .grid_cell,
.grids .grid_cell {
	border: 1px solid white;
	height: 35px;
	width: 35px;
}

.valid_cell {
	background-color: greenyellow;
}

.invalid_cell {
	background-color: red;
}

.placed_cell {
	background-color: var(--color-brightYellow);
}

.playfield {
	display: flex;
	flex-direction: column;
	gap: 32px;
	width: 75%;
}

.upper_text,
.player_text,
.ai_text,
.game_text {
	border: 1px solid white;
	min-height: 100px;
	width: 100%;
}

.grids {
	display: flex;
	justify-content: space-between;
	width: 100%;
}

.game_icon {
	align-items: center;
	display: flex;
	width: 352px;
	height: 100%;
	justify-content: center;
}

.game_icon img {
	height: 300px;
	align-items: center;
}

.player_zone,
.ai_zone,
.middle_zone {
	display: flex;
	flex-direction: column;
	gap: 32px;
	height: 500px;
	justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,yBAAyB;CACzB,6BAA6B;CAC7B,4BAA4B;AAC7B;;AAEA;CACC,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,YAAY;CACZ,SAAS;AACV;;AAEA;CACC,YAAY;CACZ,WAAW;CACX;;;;;;;EAOC;AACF;;AAEA;;;;CAIC,mBAAmB;CACnB,aAAa;CACb,sCAAsC;CACtC,YAAY;CACZ,uBAAuB;CACvB,WAAW;AACZ;;AAEA;CACC,oCAAoC;AACrC;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,gBAAgB;CAChB,aAAa;AACd;;AAEA;CACC,YAAY;CACZ,eAAe;CACf,mBAAmB;CACnB;wCACuC;AACxC;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,2CAA2C;CAC3C,kBAAkB;CAClB,SAAS;CACT;kCACiC;CACjC,sBAAsB;CACtB,WAAW;CACX,eAAe;CACf,gBAAgB;CAChB;;qCAEoC;CACpC,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,SAAS;CACT,gBAAgB;CAChB,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;CAClB,kBAAkB;CAClB,iBAAiB;CACjB,yBAAyB;CACzB,YAAY;CACZ,0BAA0B;CAC1B,wBAAwB;CACxB,sDAAsD;AACvD;;AAEA;CACC,0CAA0C;CAC1C,2BAA2B;AAC5B;;AAEA;CACC,uBAAuB;CACvB,kBAAkB;CAClB,SAAS;CACT;kCACiC;CACjC,sBAAsB;CACtB,WAAW;CACX,eAAe;CACf,gBAAgB;CAChB;;qCAEoC;CACpC,eAAe;CACf,gBAAgB;CAChB,iBAAiB;CACjB,SAAS;CACT,gBAAgB;CAChB,gBAAgB;CAChB,gBAAgB;CAChB,kBAAkB;CAClB,kBAAkB;CAClB,kBAAkB;CAClB,iBAAiB;CACjB,yBAAyB;CACzB,YAAY;CACZ,0BAA0B;CAC1B,wBAAwB;CACxB,sDAAsD;AACvD;;AAEA;CACC,gCAAgC;CAChC,2BAA2B;AAC5B;;AAEA;CACC;EACC,gBAAgB;EAChB,kBAAkB;CACnB;AACD;;AAEA;CACC,mBAAmB;CACnB,mBAAmB;CACnB,YAAY;CACZ,yBAAyB;CACzB,aAAa;CACb,sBAAsB;CACtB,aAAa;CACb;;qEAEoE;AACrE;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;AACjB;;AAEA;CACC,cAAc;AACf;;AAEA;;;CAGC,uBAAuB;CACvB,aAAa;CACb,sCAAsC;CACtC,gBAAgB;CAChB,gBAAgB;AACjB;;AAEA;;CAEC,uBAAuB;CACvB,YAAY;CACZ,WAAW;AACZ;;AAEA;CACC,6BAA6B;AAC9B;;AAEA;CACC,qBAAqB;AACtB;;AAEA;CACC,2CAA2C;AAC5C;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,UAAU;AACX;;AAEA;;;;CAIC,uBAAuB;CACvB,iBAAiB;CACjB,WAAW;AACZ;;AAEA;CACC,aAAa;CACb,8BAA8B;CAC9B,WAAW;AACZ;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,YAAY;CACZ,YAAY;CACZ,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,mBAAmB;AACpB;;AAEA;;;CAGC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,aAAa;CACb,8BAA8B;AAC/B","sourcesContent":[":root {\n\t--color-darkBlue: #132843;\n\t--color-brightYellow: #fff000;\n\t--color-mutedYellow: #f4e603;\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100vw;\n\tmargin: 0;\n}\n\n.content {\n\theight: 100%;\n\twidth: 100%;\n\tbackground-image: linear-gradient(\n\t\tto right top,\n\t\t#132843,\n\t\t#1b4169,\n\t\t#205c93,\n\t\t#2078be,\n\t\t#1296eb\n\t);\n}\n\n.overlay,\n.splash_text,\n.splash_img,\n.splash_button {\n\talign-items: center;\n\tdisplay: flex;\n\tfont-family: \"Press Start 2P\", cursive;\n\theight: 100%;\n\tjustify-content: center;\n\twidth: 100%;\n}\n\n.overlay {\n\tbackground-color: rgba(0, 0, 0, 0.2);\n}\n\n.splash {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tpadding: 32px;\n}\n\n.splash_text {\n\tcolor: white;\n\tfont-size: 3rem;\n\tmargin-bottom: 48px;\n\ttext-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),\n\t\t0px -4px 10px rgba(255, 255, 255, 0.3);\n}\n\n.splash img {\n\twidth: 100%;\n}\n\n.yellowButton {\n\tbackground-color: var(--color-brightYellow);\n\tborder-radius: 4px;\n\tborder: 0;\n\tbox-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,\n\t\trgba(0, 44, 97, 0.1) 0 3px 6px 0;\n\tbox-sizing: border-box;\n\tcolor: #000;\n\tcursor: pointer;\n\tdisplay: inherit;\n\tfont-family: \"Press Start 2P\", cursive, -apple-system, system-ui, \"Segoe UI\",\n\t\tRoboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n\t\t\"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tline-height: 24px;\n\tmargin: 0;\n\tmargin-top: 32px;\n\tmin-height: 56px;\n\tmin-width: 120px;\n\tpadding: 16px 20px;\n\tposition: relative;\n\ttext-align: center;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\twidth: 195px;\n\ttouch-action: manipulation;\n\tvertical-align: baseline;\n\ttransition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n\n.yellowButton:hover {\n\tbackground-color: var(--color-mutedYellow);\n\ttransform: translateY(-5px);\n}\n\n.greenButton {\n\tbackground-color: green;\n\tborder-radius: 4px;\n\tborder: 0;\n\tbox-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,\n\t\trgba(0, 44, 97, 0.1) 0 3px 6px 0;\n\tbox-sizing: border-box;\n\tcolor: #000;\n\tcursor: pointer;\n\tdisplay: inherit;\n\tfont-family: \"Press Start 2P\", cursive, -apple-system, system-ui, \"Segoe UI\",\n\t\tRoboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n\t\t\"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tline-height: 24px;\n\tmargin: 0;\n\tmargin-top: 32px;\n\tmin-height: 56px;\n\tmin-width: 120px;\n\tpadding: 16px 20px;\n\tposition: relative;\n\ttext-align: center;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\twidth: 195px;\n\ttouch-action: manipulation;\n\tvertical-align: baseline;\n\ttransition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n\n.greenButton:hover {\n\tbackground-color: rgb(1, 100, 1);\n\ttransform: translateY(-5px);\n}\n\n@media (min-width: 768px) {\n\t.yellowButton {\n\t\tmin-width: 150px;\n\t\tpadding: 16px 44px;\n\t}\n}\n\n.placement {\n\talign-items: center;\n\tborder-radius: 25px;\n\tcolor: white;\n\tborder: 5px solid #1296eb;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 32px;\n\tbox-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n\t\trgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n\t\trgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.placement_image {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-bottom: 16px;\n}\n\n.placement img {\n\tmax-width: 200px;\n}\n\n.placement_text {\n\tmargin: 16px 0;\n}\n\n.placement_grid,\n.player_grid,\n.ai_grid {\n\tborder: 1px solid white;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tmargin-top: 16px;\n\tmax-width: 355px;\n}\n\n.placement .grid_cell,\n.grids .grid_cell {\n\tborder: 1px solid white;\n\theight: 35px;\n\twidth: 35px;\n}\n\n.valid_cell {\n\tbackground-color: greenyellow;\n}\n\n.invalid_cell {\n\tbackground-color: red;\n}\n\n.placed_cell {\n\tbackground-color: var(--color-brightYellow);\n}\n\n.playfield {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\twidth: 75%;\n}\n\n.upper_text,\n.player_text,\n.ai_text,\n.game_text {\n\tborder: 1px solid white;\n\tmin-height: 100px;\n\twidth: 100%;\n}\n\n.grids {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n}\n\n.game_icon {\n\talign-items: center;\n\tdisplay: flex;\n\twidth: 352px;\n\theight: 100%;\n\tjustify-content: center;\n}\n\n.game_icon img {\n\theight: 300px;\n\talign-items: center;\n}\n\n.player_zone,\n.ai_zone,\n.middle_zone {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\theight: 500px;\n\tjustify-content: space-between;\n}\n"],"sourceRoot":""}]);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/gameLogic.js":
/*!**************************!*\
  !*** ./src/gameLogic.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");



const gameLogic = () => {
	// create players
	const player = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("player");
	const ai = new _player__WEBPACK_IMPORTED_MODULE_0__["default"]("ai", true);
	let currentPlayer = "player";

	// create gameboards
	const playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
	const aiBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();

	function checkFits(x, y, length, isVertical = true) {
		return playerBoard.shipFits(x, y, length, isVertical);
	}

	function validXY(x, y) {
		return playerBoard.isValidXY(x, y) && playerBoard.spaceIsEmpty(x, y);
	}

	function getCellContent(x, y, isPlayer) {
		let cell = null;

		if (isPlayer) {
			return playerBoard.getCellContent(x, y);
		} else if (!isPlayer) {
			return aiBoard.getCellContent(x, y);
		} else {
			return false;
		}
	}

	function getNextShip() {
		return playerBoard.getNextShip();
	}

	function removeCurrentShip() {
		playerBoard.removeCurrentShip();
	}

	function addShip(x, y, length, isVertical, name) {
		playerBoard.placeShip(x, y, length, isVertical, name);
	}

	function populateBoards() {
		// Populate player's board
		playerBoard.placeShip(0, 0, 5, true, "Carrier");
		playerBoard.placeShip(3, 4, 4, false, "Battleship");
		playerBoard.placeShip(7, 6, 3, true, "Cruiser");
		playerBoard.placeShip(6, 2, 3, false, "Submarine");
		playerBoard.placeShip(1, 6, 2, false, "Destroyer");
		// Populate ai's board
		aiBoard.placeShip(0, 0, 5, true, "Carrier");
		aiBoard.placeShip(3, 4, 4, false, "Battleship");
		aiBoard.placeShip(7, 6, 3, true, "Cruiser");
		aiBoard.placeShip(6, 2, 3, false, "Submarine");
		aiBoard.placeShip(1, 6, 2, false, "Destroyer");
	}

	function mainLoop() {
		// step through main loop
	}

	function endGame() {
		// end game
	}

	// while (!gameOver) {
	// 	mainLoop();
	// }

	populateBoards();

	endGame();

	return {
		addShip,
		checkFits,
		getCellContent,
		getNextShip,
		removeCurrentShip,
		validXY,
	};
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameLogic);


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship.js */ "./src/ship.js");
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ "./src/player.js");



class Gameboard {
	constructor(size = 10) {
		this.size = size;
		this.board = [];
		this.ships = [];
		this.player = null;
		this.initializeBoard();
	}

	initializeBoard() {
		// Initialize the board as a 2D array of objects
		for (let x = 0; x < this.size; x++) {
			const col = [];

			for (let y = 0; y < this.size; y++) {
				col.push({ isEmpty: true, isAttacked: false, ship: null });
			}
			this.board.push(col);
		}

		this.loadShip(5, "carrier");
		this.loadShip(4, "battleship");
		this.loadShip(3, "cruiser");
		this.loadShip(3, "submarine");
		this.loadShip(2, "patrol boat");
	}

	loadShip(length, name) {
		const newShip = new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](length, name);
		this.ships.push(newShip);
	}

	getNextShip() {
		if (this.ships.length > 0) {
			return this.ships[0];
		}
		return null;
	}

	removeCurrentShip() {
		if (this.ships.length > 0) {
			this.ships.shift();
		}
	}

	placeShip(x, y, length, isVertical, name) {
		if (!this.shipFits(x, y, length, isVertical)) {
			// Ship does not fit at given coordinates
			return false;
		}

		//place ship
		const newShip = new _ship_js__WEBPACK_IMPORTED_MODULE_0__["default"](length);

		for (let i = 0; i < length; i++) {
			const newX = x + (isVertical ? 0 : i);
			const newY = y + (isVertical ? i : 0);

			const cell = this.board[newX][newY];
			cell.isEmpty = false;
			cell.ship = newShip;
		}
		return true;
	}

	shipFits(x, y, length, isVertical) {
		let shipFits = true;

		for (let i = 0; i < length; i++) {
			const newX = x + (isVertical ? 0 : i);
			const newY = y + (isVertical ? i : 0);
			if (!this.isValidXY(newX, newY) || !this.spaceIsEmpty(newX, newY)) {
				shipFits = false;
				break;
			}
		}
		return shipFits;
	}

	isValidXY(x, y) {
		return x >= 0 && y >= 0 && x < this.size && y < this.size;
	}

	spaceIsEmpty(x, y) {
		return this.board[x][y].isEmpty;
	}

	receiveAttack(x, y) {
		if (!this.isValidAttack(x, y)) {
			return false;
		}
		// Make attack on ship at x,y
		let result = "miss";
		this.board[x][y].isAttacked = true;

		if (this.board[x][y].ship) {
			const ship = this.board[x][y].ship;
			ship.hit();
			result = "hit";
		}
		return result;
	}

	isValidAttack(x, y) {
		return this.isValidXY(x, y) && !this.board[x][y].isAttacked;
	}

	displayBoard() {
		for (let y = this.size - 1; y >= 0; y--) {
			let output = "";
			for (let x = 0; x < this.size; x++) {
				const cell = this.board[x][y];
				output += cell.isEmpty ? "E " : "S ";
			}
			console.log(output);
		}
	}

	getShip(x, y) {
		return this.board[x][y].ship;
	}

	getSize() {
		return this.size;
	}

	addPlayer(name, isComputer) {
		if (this.players.length === 0) {
			const newPlayer = new _player_js__WEBPACK_IMPORTED_MODULE_1__["default"](name, isComputer);
			this.player = newPlayer;
		}
	}

	getCellContent(x, y) {
		return this.board[x][y];
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
	constructor(name = "player", isComputer = false) {
		this.name = name;
		this.isComputer = isComputer;
		this.ships = [];
	}

	addShip(ship) {
		if (ship) this.ships.push(ship);
	}

	computerAttack(opponentBoard) {
		if (!this.isComputer) {
			return false;
		}

		// Generate attack on player board
		const size = opponentBoard.getSize();
		let attackX, attackY;

		do {
			// Generate unique random attack
			attackX = Math.floor(Math.random() * size);
			attackY = Math.floor(Math.random() * size);
		} while (!opponentBoard.receiveAttack(attackX, attackY));

		return true;
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);


/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
	constructor(length = 0, name = "") {
		const minLength = 2;
		const maxLength = 5;
		if (length < minLength || length > maxLength) {
			throw new Error("Ship length must be between 2 and 5.");
		}
		this.name = name;
		this.length = length;
		this.hits = 0;
		this.sunk = false;
	}

	hit() {
		if (!this.isSunk()) {
			this.hits++;
			this.sunk = this.isSunk();
		}
	}

	isSunk() {
		return this.hits === this.length;
	}

	numHits() {
		return this.hits;
	}
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);


/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _gameLogic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameLogic.js */ "./src/gameLogic.js");
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
/* harmony import */ var _img_splash_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/splash.png */ "./img/splash.png");





const ui = (() => {
	const game = (0,_gameLogic_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
	const gridSize = 10;
	let placementRotation = true;

	function loadSplash() {
		const overlay = document.querySelector(".overlay");

		const splash = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("splash");
		const splashText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("splash_text");
		const splashImg = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("splash_img");
		const splashButton = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("splash_button");

		splashText.textContent = "BATTLESHIP";
		_utility_js__WEBPACK_IMPORTED_MODULE_2__.addImage(_img_splash_png__WEBPACK_IMPORTED_MODULE_3__, splashImg);

		const startButton = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createButton("yellowButton", "START!");
		startButton.addEventListener("click", loadPlacementUI);
		splashButton.appendChild(startButton);

		splash.append(splashText, splashImg, splashButton);
		overlay.appendChild(splash);
	}

	function startGame() {
		// const placement = document.querySelector(".placement");
		const overlay = document.querySelector(".overlay");
		// placement.remove();

		const playfield = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("playfield");

		const upperText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("upper_text");
		const playerZone = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("player_zone");
		const middleZone = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("middle_zone");
		const aiZone = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("ai_zone");

		const playerGrid = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("player_grid");
		const playerText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("player_text");
		const icon = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("game_icon");
		const gameText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("game_text");
		const aiGrid = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("ai_grid");
		const aiText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("ai_text");
		const grids = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("grids");

		addGameGrid(playerGrid, gridSize);
		addGameGrid(aiGrid, gridSize);
		_utility_js__WEBPACK_IMPORTED_MODULE_2__.addImage(_img_splash_png__WEBPACK_IMPORTED_MODULE_3__, icon);

		playerZone.append(playerGrid, playerText);
		middleZone.append(icon, gameText);
		aiZone.append(aiGrid, aiText);

		grids.append(playerZone, middleZone, aiZone);
		playfield.append(upperText, grids);
		overlay.append(playfield);

		drawBoard(playerGrid, true);
	}

	function drawBoard(grid, isPlayer) {
		// Color grid cells depending on content and attacks
		const cells = grid.querySelectorAll(".grid_cell");
		cells.forEach((cell) => {
			const position = cell.getAttribute("data-pos").split("-");
			const x = parseInt(position[0]);
			const y = parseInt(position[1]);

			const cellContent = game.getCellContent(x, y, isPlayer);

			if (cellContent.ship !== null) {
				if (isPlayer) {
					cell.classList.add("placed_cell");
				} else if (cellContent.isAttacked) {
					cell.classList.add("hit_cell");
				}
			} else if (cellContent.isEmpty && cellContent.isAttacked) {
				cell.classList.add("miss_cell");
			}
		});
	}

	function loadPlacementUI() {
		const overlay = document.querySelector(".overlay");
		const splash = document.querySelector(".splash");
		splash.remove();

		const placement = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("placement");
		const ship = game.getNextShip();

		const icon = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("placement_image");
		const text = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("placement_text");
		const rotateButton = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("placement_rotate");
		const placeGrid = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("placement_grid");

		_utility_js__WEBPACK_IMPORTED_MODULE_2__.addImage(_img_splash_png__WEBPACK_IMPORTED_MODULE_3__, icon);
		text.textContent = `Place your ${ship.name}!`;

		// Listeners
		placeGrid.addEventListener("mouseout", clearHighlights);
		const button = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createButton("yellowButton", "ROTATE");
		button.addEventListener("click", () => {
			placementRotation = placementRotation ? false : true;
		});

		rotateButton.appendChild(button);

		placement.append(icon, text, rotateButton, placeGrid);
		overlay.appendChild(placement);
		addPlacementGrid(placeGrid, gridSize);
	}

	function addPlacementGrid(container, size) {
		//create and append cells
		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				const cell = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("grid_cell");
				cell.setAttribute("Data-pos", `${j}-${size - 1 - i}`);

				//add listener
				cell.addEventListener("mouseover", mouseOver);
				cell.addEventListener("click", placeShip);

				container.appendChild(cell);
			}
		}
	}

	function addGameGrid(container, size) {
		//create and append cells
		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				const cell = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("grid_cell");
				cell.setAttribute("Data-pos", `${j}-${size - 1 - i}`);

				//add listener
				// cell.addEventListener("mouseover", mouseOver);
				// cell.addEventListener("click", placeShip);

				container.appendChild(cell);
			}
		}
	}

	function mouseOver(e) {
		clearHighlights();
		const ship = game.getNextShip();
		if (!ship) {
			removePlacementListeners();
			return;
		}

		// get cell co-ordinates
		const position = e.target.getAttribute("data-pos").split("-");
		const x = parseInt(position[0]);
		const y = parseInt(position[1]);
		const valid = game.checkFits(x, y, ship.length, placementRotation);

		// color cells if ship position is valid
		for (let i = 0; i < ship.length; i++) {
			const newX = x + (placementRotation ? 0 : i);
			const newY = y + (placementRotation ? i : 0);
			const cell = document.querySelector(`[data-pos="${newX}-${newY}"]`);

			if (valid) {
				cell.classList.add("valid_cell");
			} else {
				if (game.validXY(newX, newY)) {
					cell.classList.add("invalid_cell");
				}
			}
		}
	}

	function placeShip(e) {
		const ship = game.getNextShip();
		if (!ship) {
			// All ships placed
			removePlacementListeners();
			return;
		}

		const position = e.target.getAttribute("data-pos").split("-");
		const x = parseInt(position[0]);
		const y = parseInt(position[1]);
		const valid = game.checkFits(x, y, ship.length, placementRotation);

		if (valid) {
			game.addShip(x, y, ship.length, placementRotation, ship.name);
			for (let i = 0; i < ship.length; i++) {
				const newX = x + (placementRotation ? 0 : i);
				const newY = y + (placementRotation ? i : 0);
				const cell = document.querySelector(
					`[data-pos="${newX}-${newY}"]`
				);
				cell.classList.add("placed_cell");
			}
			game.removeCurrentShip();
		}
	}

	function clearHighlights() {
		const highlights = document.querySelectorAll(
			".valid_cell, .invalid_cell"
		);
		highlights.forEach((cell) => {
			cell.classList.remove("valid_cell");
			cell.classList.remove("invalid_cell");
		});
	}

	function removePlacementListeners() {
		const cells = document.querySelectorAll(".grid_cell");
		cells.forEach((cell) => {
			cell.removeEventListener("click", placeShip);
			cell.removeEventListener("mouseover", mouseOver);
		});

		const button = document.querySelector(".yellowButton");
		button.textContent = "START!";
		button.removeEventListener("click", placeShip);
		button.addEventListener("click", startGame);
		button.classList.remove("yellowButton");
		button.classList.add("greenButton");
	}

	function loadBackground() {
		const content = document.querySelector(".content");
		const overlay = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("overlay");
		content.appendChild(overlay);
	}

	loadBackground();
	// loadSplash();
	// loadPlacementUI();
	startGame();
})();


/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addImage: () => (/* binding */ addImage),
/* harmony export */   createButton: () => (/* binding */ createButton),
/* harmony export */   createDiv: () => (/* binding */ createDiv)
/* harmony export */ });
// Helper functions I use often
const createDiv = (className) => {
	const div = document.createElement("div");
	div.classList.add(className);
	return div;
};

const addImage = (path, container) => {
	const img = new Image();
	img.src = path;

	container.appendChild(img);
};

const createButton = (className, buttonText) => {
	const button = document.createElement("button");
	button.classList.add(className);
	button.textContent = buttonText;
	return button;
};




/***/ }),

/***/ "./img/splash.png":
/*!************************!*\
  !*** ./img/splash.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/splash.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ui.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFFBQVEsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssS0FBSyxZ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QUFpQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoUEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFNkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVMb2dpYy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG5cdC0tY29sb3ItZGFya0JsdWU6ICMxMzI4NDM7XG5cdC0tY29sb3ItYnJpZ2h0WWVsbG93OiAjZmZmMDAwO1xuXHQtLWNvbG9yLW11dGVkWWVsbG93OiAjZjRlNjAzO1xufVxuXG4qIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDB2dztcblx0bWFyZ2luOiAwO1xufVxuXG4uY29udGVudCB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCB0b3AsXG5cdFx0IzEzMjg0Myxcblx0XHQjMWI0MTY5LFxuXHRcdCMyMDVjOTMsXG5cdFx0IzIwNzhiZSxcblx0XHQjMTI5NmViXG5cdCk7XG59XG5cbi5vdmVybGF5LFxuLnNwbGFzaF90ZXh0LFxuLnNwbGFzaF9pbWcsXG4uc3BsYXNoX2J1dHRvbiB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XG5cdGhlaWdodDogMTAwJTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ub3ZlcmxheSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnNwbGFzaCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1heC13aWR0aDogNTAwcHg7XG5cdHBhZGRpbmc6IDMycHg7XG59XG5cbi5zcGxhc2hfdGV4dCB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAzcmVtO1xuXHRtYXJnaW4tYm90dG9tOiA0OHB4O1xuXHR0ZXh0LXNoYWRvdzogMnB4IDdweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuXHRcdDBweCAtNHB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4uc3BsYXNoIGltZyB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ueWVsbG93QnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJpZ2h0WWVsbG93KTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3JkZXI6IDA7XG5cdGJveC1zaGFkb3c6IHJnYmEoMSwgNjAsIDEzNiwgMC41KSAwIC0xcHggM3B4IDAgaW5zZXQsXG5cdFx0cmdiYSgwLCA0NCwgOTcsIDAuMSkgMCAzcHggNnB4IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGNvbG9yOiAjMDAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGluaGVyaXQ7XG5cdGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmUsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLFxuXHRcdFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxuXHRcdFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0bWFyZ2luOiAwO1xuXHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRtaW4taGVpZ2h0OiA1NnB4O1xuXHRtaW4td2lkdGg6IDEyMHB4O1xuXHRwYWRkaW5nOiAxNnB4IDIwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0d2lkdGg6IDE5NXB4O1xuXHR0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XG59XG5cbi55ZWxsb3dCdXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tdXRlZFllbGxvdyk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cblxuLmdyZWVuQnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Ym9yZGVyOiAwO1xuXHRib3gtc2hhZG93OiByZ2JhKDEsIDYwLCAxMzYsIDAuNSkgMCAtMXB4IDNweCAwIGluc2V0LFxuXHRcdHJnYmEoMCwgNDQsIDk3LCAwLjEpIDAgM3B4IDZweCAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRjb2xvcjogIzAwMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRkaXNwbGF5OiBpbmhlcml0O1xuXHRmb250LWZhbWlseTogXCJQcmVzcyBTdGFydCAyUFwiLCBjdXJzaXZlLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIixcblx0XHRSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcblx0XHRcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdG1hcmdpbjogMDtcblx0bWFyZ2luLXRvcDogMzJweDtcblx0bWluLWhlaWdodDogNTZweDtcblx0bWluLXdpZHRoOiAxMjBweDtcblx0cGFkZGluZzogMTZweCAyMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHdpZHRoOiAxOTVweDtcblx0dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpO1xufVxuXG4uZ3JlZW5CdXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMTAwLCAxKTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0LnllbGxvd0J1dHRvbiB7XG5cdFx0bWluLXdpZHRoOiAxNTBweDtcblx0XHRwYWRkaW5nOiAxNnB4IDQ0cHg7XG5cdH1cbn1cblxuLnBsYWNlbWVudCB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyOiA1cHggc29saWQgIzEyOTZlYjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogMzJweDtcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LFxuXHRcdHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsXG5cdFx0cmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcbn1cblxuLnBsYWNlbWVudF9pbWFnZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ucGxhY2VtZW50IGltZyB7XG5cdG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5wbGFjZW1lbnRfdGV4dCB7XG5cdG1hcmdpbjogMTZweCAwO1xufVxuXG4ucGxhY2VtZW50X2dyaWQsXG4ucGxheWVyX2dyaWQsXG4uYWlfZ3JpZCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcblx0bWFyZ2luLXRvcDogMTZweDtcblx0bWF4LXdpZHRoOiAzNTVweDtcbn1cblxuLnBsYWNlbWVudCAuZ3JpZF9jZWxsLFxuLmdyaWRzIC5ncmlkX2NlbGwge1xuXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0aGVpZ2h0OiAzNXB4O1xuXHR3aWR0aDogMzVweDtcbn1cblxuLnZhbGlkX2NlbGwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLmludmFsaWRfY2VsbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnBsYWNlZF9jZWxsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJpZ2h0WWVsbG93KTtcbn1cblxuLnBsYXlmaWVsZCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMzJweDtcblx0d2lkdGg6IDc1JTtcbn1cblxuLnVwcGVyX3RleHQsXG4ucGxheWVyX3RleHQsXG4uYWlfdGV4dCxcbi5nYW1lX3RleHQge1xuXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0bWluLWhlaWdodDogMTAwcHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uZ3JpZHMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uZ2FtZV9pY29uIHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0d2lkdGg6IDM1MnB4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZ2FtZV9pY29uIGltZyB7XG5cdGhlaWdodDogMzAwcHg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wbGF5ZXJfem9uZSxcbi5haV96b25lLFxuLm1pZGRsZV96b25lIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzMnB4O1xuXHRoZWlnaHQ6IDUwMHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyx5QkFBeUI7Q0FDekIsNkJBQTZCO0NBQzdCLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixZQUFZO0NBQ1osU0FBUztBQUNWOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWDs7Ozs7OztFQU9DO0FBQ0Y7O0FBRUE7Ozs7Q0FJQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHNDQUFzQztDQUN0QyxZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLG9DQUFvQztBQUNyQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CO3dDQUN1QztBQUN4Qzs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLDJDQUEyQztDQUMzQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNUO2tDQUNpQztDQUNqQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEI7O3FDQUVvQztDQUNwQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLHdCQUF3QjtDQUN4QixzREFBc0Q7QUFDdkQ7O0FBRUE7Q0FDQywwQ0FBMEM7Q0FDMUMsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixTQUFTO0NBQ1Q7a0NBQ2lDO0NBQ2pDLHNCQUFzQjtDQUN0QixXQUFXO0NBQ1gsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQjs7cUNBRW9DO0NBQ3BDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLFNBQVM7Q0FDVCxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsd0JBQXdCO0NBQ3hCLHNEQUFzRDtBQUN2RDs7QUFFQTtDQUNDLGdDQUFnQztDQUNoQywyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQztFQUNDLGdCQUFnQjtFQUNoQixrQkFBa0I7Q0FDbkI7QUFDRDs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsWUFBWTtDQUNaLHlCQUF5QjtDQUN6QixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYjs7cUVBRW9FO0FBQ3JFOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7OztDQUdDLHVCQUF1QjtDQUN2QixhQUFhO0NBQ2Isc0NBQXNDO0NBQ3RDLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7O0NBRUMsdUJBQXVCO0NBQ3ZCLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQywyQ0FBMkM7QUFDNUM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFNBQVM7Q0FDVCxVQUFVO0FBQ1g7O0FBRUE7Ozs7Q0FJQyx1QkFBdUI7Q0FDdkIsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsV0FBVztBQUNaOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZO0NBQ1osWUFBWTtDQUNaLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7OztDQUdDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcblxcdC0tY29sb3ItZGFya0JsdWU6ICMxMzI4NDM7XFxuXFx0LS1jb2xvci1icmlnaHRZZWxsb3c6ICNmZmYwMDA7XFxuXFx0LS1jb2xvci1tdXRlZFllbGxvdzogI2Y0ZTYwMztcXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHR0byByaWdodCB0b3AsXFxuXFx0XFx0IzEzMjg0MyxcXG5cXHRcXHQjMWI0MTY5LFxcblxcdFxcdCMyMDVjOTMsXFxuXFx0XFx0IzIwNzhiZSxcXG5cXHRcXHQjMTI5NmViXFxuXFx0KTtcXG59XFxuXFxuLm92ZXJsYXksXFxuLnNwbGFzaF90ZXh0LFxcbi5zcGxhc2hfaW1nLFxcbi5zcGxhc2hfYnV0dG9uIHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uc3BsYXNoIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LXdpZHRoOiA1MDBweDtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG5cXG4uc3BsYXNoX3RleHQge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweDtcXG5cXHR0ZXh0LXNoYWRvdzogMnB4IDdweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxcblxcdFxcdDBweCAtNHB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4uc3BsYXNoIGltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi55ZWxsb3dCdXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyaWdodFllbGxvdyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdGJvcmRlcjogMDtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDEsIDYwLCAxMzYsIDAuNSkgMCAtMXB4IDNweCAwIGluc2V0LFxcblxcdFxcdHJnYmEoMCwgNDQsIDk3LCAwLjEpIDAgM3B4IDZweCAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGluaGVyaXQ7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmUsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIixcXG5cXHRcXHRSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuXFx0XFx0XFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDI0cHg7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1hcmdpbi10b3A6IDMycHg7XFxuXFx0bWluLWhlaWdodDogNTZweDtcXG5cXHRtaW4td2lkdGg6IDEyMHB4O1xcblxcdHBhZGRpbmc6IDE2cHggMjBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0d2lkdGg6IDE5NXB4O1xcblxcdHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XFxufVxcblxcbi55ZWxsb3dCdXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW11dGVkWWVsbG93KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5ncmVlbkJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdGJvcmRlcjogMDtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDEsIDYwLCAxMzYsIDAuNSkgMCAtMXB4IDNweCAwIGluc2V0LFxcblxcdFxcdHJnYmEoMCwgNDQsIDk3LCAwLjEpIDAgM3B4IDZweCAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGluaGVyaXQ7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmUsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIixcXG5cXHRcXHRSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuXFx0XFx0XFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDI0cHg7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1hcmdpbi10b3A6IDMycHg7XFxuXFx0bWluLWhlaWdodDogNTZweDtcXG5cXHRtaW4td2lkdGg6IDEyMHB4O1xcblxcdHBhZGRpbmc6IDE2cHggMjBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0d2lkdGg6IDE5NXB4O1xcblxcdHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XFxufVxcblxcbi5ncmVlbkJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDEwMCwgMSk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQueWVsbG93QnV0dG9uIHtcXG5cXHRcXHRtaW4td2lkdGg6IDE1MHB4O1xcblxcdFxcdHBhZGRpbmc6IDE2cHggNDRweDtcXG5cXHR9XFxufVxcblxcbi5wbGFjZW1lbnQge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyOiA1cHggc29saWQgIzEyOTZlYjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMzJweDtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCxcXG5cXHRcXHRyZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbn1cXG5cXG4ucGxhY2VtZW50X2ltYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5wbGFjZW1lbnQgaW1nIHtcXG5cXHRtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucGxhY2VtZW50X3RleHQge1xcblxcdG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4ucGxhY2VtZW50X2dyaWQsXFxuLnBsYXllcl9ncmlkLFxcbi5haV9ncmlkIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcblxcdG1hcmdpbi10b3A6IDE2cHg7XFxuXFx0bWF4LXdpZHRoOiAzNTVweDtcXG59XFxuXFxuLnBsYWNlbWVudCAuZ3JpZF9jZWxsLFxcbi5ncmlkcyAuZ3JpZF9jZWxsIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRoZWlnaHQ6IDM1cHg7XFxuXFx0d2lkdGg6IDM1cHg7XFxufVxcblxcbi52YWxpZF9jZWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLmludmFsaWRfY2VsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucGxhY2VkX2NlbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyaWdodFllbGxvdyk7XFxufVxcblxcbi5wbGF5ZmllbGQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDMycHg7XFxuXFx0d2lkdGg6IDc1JTtcXG59XFxuXFxuLnVwcGVyX3RleHQsXFxuLnBsYXllcl90ZXh0LFxcbi5haV90ZXh0LFxcbi5nYW1lX3RleHQge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ3JpZHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ2FtZV9pY29uIHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IDM1MnB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVfaWNvbiBpbWcge1xcblxcdGhlaWdodDogMzAwcHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllcl96b25lLFxcbi5haV96b25lLFxcbi5taWRkbGVfem9uZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMzJweDtcXG5cXHRoZWlnaHQ6IDUwMHB4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jb25zdCBnYW1lTG9naWMgPSAoKSA9PiB7XG5cdC8vIGNyZWF0ZSBwbGF5ZXJzXG5cdGNvbnN0IHBsYXllciA9IG5ldyBQbGF5ZXIoXCJwbGF5ZXJcIik7XG5cdGNvbnN0IGFpID0gbmV3IFBsYXllcihcImFpXCIsIHRydWUpO1xuXHRsZXQgY3VycmVudFBsYXllciA9IFwicGxheWVyXCI7XG5cblx0Ly8gY3JlYXRlIGdhbWVib2FyZHNcblx0Y29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cdGNvbnN0IGFpQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cblx0ZnVuY3Rpb24gY2hlY2tGaXRzKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCA9IHRydWUpIHtcblx0XHRyZXR1cm4gcGxheWVyQm9hcmQuc2hpcEZpdHMoeCwgeSwgbGVuZ3RoLCBpc1ZlcnRpY2FsKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHZhbGlkWFkoeCwgeSkge1xuXHRcdHJldHVybiBwbGF5ZXJCb2FyZC5pc1ZhbGlkWFkoeCwgeSkgJiYgcGxheWVyQm9hcmQuc3BhY2VJc0VtcHR5KHgsIHkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q2VsbENvbnRlbnQoeCwgeSwgaXNQbGF5ZXIpIHtcblx0XHRsZXQgY2VsbCA9IG51bGw7XG5cblx0XHRpZiAoaXNQbGF5ZXIpIHtcblx0XHRcdHJldHVybiBwbGF5ZXJCb2FyZC5nZXRDZWxsQ29udGVudCh4LCB5KTtcblx0XHR9IGVsc2UgaWYgKCFpc1BsYXllcikge1xuXHRcdFx0cmV0dXJuIGFpQm9hcmQuZ2V0Q2VsbENvbnRlbnQoeCwgeSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROZXh0U2hpcCgpIHtcblx0XHRyZXR1cm4gcGxheWVyQm9hcmQuZ2V0TmV4dFNoaXAoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUN1cnJlbnRTaGlwKCkge1xuXHRcdHBsYXllckJvYXJkLnJlbW92ZUN1cnJlbnRTaGlwKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRTaGlwKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCwgbmFtZSkge1xuXHRcdHBsYXllckJvYXJkLnBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGlzVmVydGljYWwsIG5hbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcG9wdWxhdGVCb2FyZHMoKSB7XG5cdFx0Ly8gUG9wdWxhdGUgcGxheWVyJ3MgYm9hcmRcblx0XHRwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMCwgMCwgNSwgdHJ1ZSwgXCJDYXJyaWVyXCIpO1xuXHRcdHBsYXllckJvYXJkLnBsYWNlU2hpcCgzLCA0LCA0LCBmYWxzZSwgXCJCYXR0bGVzaGlwXCIpO1xuXHRcdHBsYXllckJvYXJkLnBsYWNlU2hpcCg3LCA2LCAzLCB0cnVlLCBcIkNydWlzZXJcIik7XG5cdFx0cGxheWVyQm9hcmQucGxhY2VTaGlwKDYsIDIsIDMsIGZhbHNlLCBcIlN1Ym1hcmluZVwiKTtcblx0XHRwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMSwgNiwgMiwgZmFsc2UsIFwiRGVzdHJveWVyXCIpO1xuXHRcdC8vIFBvcHVsYXRlIGFpJ3MgYm9hcmRcblx0XHRhaUJvYXJkLnBsYWNlU2hpcCgwLCAwLCA1LCB0cnVlLCBcIkNhcnJpZXJcIik7XG5cdFx0YWlCb2FyZC5wbGFjZVNoaXAoMywgNCwgNCwgZmFsc2UsIFwiQmF0dGxlc2hpcFwiKTtcblx0XHRhaUJvYXJkLnBsYWNlU2hpcCg3LCA2LCAzLCB0cnVlLCBcIkNydWlzZXJcIik7XG5cdFx0YWlCb2FyZC5wbGFjZVNoaXAoNiwgMiwgMywgZmFsc2UsIFwiU3VibWFyaW5lXCIpO1xuXHRcdGFpQm9hcmQucGxhY2VTaGlwKDEsIDYsIDIsIGZhbHNlLCBcIkRlc3Ryb3llclwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1haW5Mb29wKCkge1xuXHRcdC8vIHN0ZXAgdGhyb3VnaCBtYWluIGxvb3Bcblx0fVxuXG5cdGZ1bmN0aW9uIGVuZEdhbWUoKSB7XG5cdFx0Ly8gZW5kIGdhbWVcblx0fVxuXG5cdC8vIHdoaWxlICghZ2FtZU92ZXIpIHtcblx0Ly8gXHRtYWluTG9vcCgpO1xuXHQvLyB9XG5cblx0cG9wdWxhdGVCb2FyZHMoKTtcblxuXHRlbmRHYW1lKCk7XG5cblx0cmV0dXJuIHtcblx0XHRhZGRTaGlwLFxuXHRcdGNoZWNrRml0cyxcblx0XHRnZXRDZWxsQ29udGVudCxcblx0XHRnZXROZXh0U2hpcCxcblx0XHRyZW1vdmVDdXJyZW50U2hpcCxcblx0XHR2YWxpZFhZLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUxvZ2ljO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcblx0Y29uc3RydWN0b3Ioc2l6ZSA9IDEwKSB7XG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcblx0XHR0aGlzLmJvYXJkID0gW107XG5cdFx0dGhpcy5zaGlwcyA9IFtdO1xuXHRcdHRoaXMucGxheWVyID0gbnVsbDtcblx0XHR0aGlzLmluaXRpYWxpemVCb2FyZCgpO1xuXHR9XG5cblx0aW5pdGlhbGl6ZUJvYXJkKCkge1xuXHRcdC8vIEluaXRpYWxpemUgdGhlIGJvYXJkIGFzIGEgMkQgYXJyYXkgb2Ygb2JqZWN0c1xuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zaXplOyB4KyspIHtcblx0XHRcdGNvbnN0IGNvbCA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuc2l6ZTsgeSsrKSB7XG5cdFx0XHRcdGNvbC5wdXNoKHsgaXNFbXB0eTogdHJ1ZSwgaXNBdHRhY2tlZDogZmFsc2UsIHNoaXA6IG51bGwgfSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmJvYXJkLnB1c2goY29sKTtcblx0XHR9XG5cblx0XHR0aGlzLmxvYWRTaGlwKDUsIFwiY2FycmllclwiKTtcblx0XHR0aGlzLmxvYWRTaGlwKDQsIFwiYmF0dGxlc2hpcFwiKTtcblx0XHR0aGlzLmxvYWRTaGlwKDMsIFwiY3J1aXNlclwiKTtcblx0XHR0aGlzLmxvYWRTaGlwKDMsIFwic3VibWFyaW5lXCIpO1xuXHRcdHRoaXMubG9hZFNoaXAoMiwgXCJwYXRyb2wgYm9hdFwiKTtcblx0fVxuXG5cdGxvYWRTaGlwKGxlbmd0aCwgbmFtZSkge1xuXHRcdGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChsZW5ndGgsIG5hbWUpO1xuXHRcdHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcblx0fVxuXG5cdGdldE5leHRTaGlwKCkge1xuXHRcdGlmICh0aGlzLnNoaXBzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiB0aGlzLnNoaXBzWzBdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJlbW92ZUN1cnJlbnRTaGlwKCkge1xuXHRcdGlmICh0aGlzLnNoaXBzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuc2hpcHMuc2hpZnQoKTtcblx0XHR9XG5cdH1cblxuXHRwbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBpc1ZlcnRpY2FsLCBuYW1lKSB7XG5cdFx0aWYgKCF0aGlzLnNoaXBGaXRzKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCkpIHtcblx0XHRcdC8vIFNoaXAgZG9lcyBub3QgZml0IGF0IGdpdmVuIGNvb3JkaW5hdGVzXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly9wbGFjZSBzaGlwXG5cdFx0Y29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBuZXdYID0geCArIChpc1ZlcnRpY2FsID8gMCA6IGkpO1xuXHRcdFx0Y29uc3QgbmV3WSA9IHkgKyAoaXNWZXJ0aWNhbCA/IGkgOiAwKTtcblxuXHRcdFx0Y29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbbmV3WF1bbmV3WV07XG5cdFx0XHRjZWxsLmlzRW1wdHkgPSBmYWxzZTtcblx0XHRcdGNlbGwuc2hpcCA9IG5ld1NoaXA7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0c2hpcEZpdHMoeCwgeSwgbGVuZ3RoLCBpc1ZlcnRpY2FsKSB7XG5cdFx0bGV0IHNoaXBGaXRzID0gdHJ1ZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5ld1ggPSB4ICsgKGlzVmVydGljYWwgPyAwIDogaSk7XG5cdFx0XHRjb25zdCBuZXdZID0geSArIChpc1ZlcnRpY2FsID8gaSA6IDApO1xuXHRcdFx0aWYgKCF0aGlzLmlzVmFsaWRYWShuZXdYLCBuZXdZKSB8fCAhdGhpcy5zcGFjZUlzRW1wdHkobmV3WCwgbmV3WSkpIHtcblx0XHRcdFx0c2hpcEZpdHMgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzaGlwRml0cztcblx0fVxuXG5cdGlzVmFsaWRYWSh4LCB5KSB7XG5cdFx0cmV0dXJuIHggPj0gMCAmJiB5ID49IDAgJiYgeCA8IHRoaXMuc2l6ZSAmJiB5IDwgdGhpcy5zaXplO1xuXHR9XG5cblx0c3BhY2VJc0VtcHR5KHgsIHkpIHtcblx0XHRyZXR1cm4gdGhpcy5ib2FyZFt4XVt5XS5pc0VtcHR5O1xuXHR9XG5cblx0cmVjZWl2ZUF0dGFjayh4LCB5KSB7XG5cdFx0aWYgKCF0aGlzLmlzVmFsaWRBdHRhY2soeCwgeSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gTWFrZSBhdHRhY2sgb24gc2hpcCBhdCB4LHlcblx0XHRsZXQgcmVzdWx0ID0gXCJtaXNzXCI7XG5cdFx0dGhpcy5ib2FyZFt4XVt5XS5pc0F0dGFja2VkID0gdHJ1ZTtcblxuXHRcdGlmICh0aGlzLmJvYXJkW3hdW3ldLnNoaXApIHtcblx0XHRcdGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW3hdW3ldLnNoaXA7XG5cdFx0XHRzaGlwLmhpdCgpO1xuXHRcdFx0cmVzdWx0ID0gXCJoaXRcIjtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGlzVmFsaWRBdHRhY2soeCwgeSkge1xuXHRcdHJldHVybiB0aGlzLmlzVmFsaWRYWSh4LCB5KSAmJiAhdGhpcy5ib2FyZFt4XVt5XS5pc0F0dGFja2VkO1xuXHR9XG5cblx0ZGlzcGxheUJvYXJkKCkge1xuXHRcdGZvciAobGV0IHkgPSB0aGlzLnNpemUgLSAxOyB5ID49IDA7IHktLSkge1xuXHRcdFx0bGV0IG91dHB1dCA9IFwiXCI7XG5cdFx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2l6ZTsgeCsrKSB7XG5cdFx0XHRcdGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3hdW3ldO1xuXHRcdFx0XHRvdXRwdXQgKz0gY2VsbC5pc0VtcHR5ID8gXCJFIFwiIDogXCJTIFwiO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2cob3V0cHV0KTtcblx0XHR9XG5cdH1cblxuXHRnZXRTaGlwKHgsIHkpIHtcblx0XHRyZXR1cm4gdGhpcy5ib2FyZFt4XVt5XS5zaGlwO1xuXHR9XG5cblx0Z2V0U2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplO1xuXHR9XG5cblx0YWRkUGxheWVyKG5hbWUsIGlzQ29tcHV0ZXIpIHtcblx0XHRpZiAodGhpcy5wbGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0Y29uc3QgbmV3UGxheWVyID0gbmV3IFBsYXllcihuYW1lLCBpc0NvbXB1dGVyKTtcblx0XHRcdHRoaXMucGxheWVyID0gbmV3UGxheWVyO1xuXHRcdH1cblx0fVxuXG5cdGdldENlbGxDb250ZW50KHgsIHkpIHtcblx0XHRyZXR1cm4gdGhpcy5ib2FyZFt4XVt5XTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjbGFzcyBQbGF5ZXIge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gXCJwbGF5ZXJcIiwgaXNDb21wdXRlciA9IGZhbHNlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmlzQ29tcHV0ZXIgPSBpc0NvbXB1dGVyO1xuXHRcdHRoaXMuc2hpcHMgPSBbXTtcblx0fVxuXG5cdGFkZFNoaXAoc2hpcCkge1xuXHRcdGlmIChzaGlwKSB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cdH1cblxuXHRjb21wdXRlckF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG5cdFx0aWYgKCF0aGlzLmlzQ29tcHV0ZXIpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBhdHRhY2sgb24gcGxheWVyIGJvYXJkXG5cdFx0Y29uc3Qgc2l6ZSA9IG9wcG9uZW50Qm9hcmQuZ2V0U2l6ZSgpO1xuXHRcdGxldCBhdHRhY2tYLCBhdHRhY2tZO1xuXG5cdFx0ZG8ge1xuXHRcdFx0Ly8gR2VuZXJhdGUgdW5pcXVlIHJhbmRvbSBhdHRhY2tcblx0XHRcdGF0dGFja1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcblx0XHRcdGF0dGFja1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcblx0XHR9IHdoaWxlICghb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja1gsIGF0dGFja1kpKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuXHRjb25zdHJ1Y3RvcihsZW5ndGggPSAwLCBuYW1lID0gXCJcIikge1xuXHRcdGNvbnN0IG1pbkxlbmd0aCA9IDI7XG5cdFx0Y29uc3QgbWF4TGVuZ3RoID0gNTtcblx0XHRpZiAobGVuZ3RoIDwgbWluTGVuZ3RoIHx8IGxlbmd0aCA+IG1heExlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiU2hpcCBsZW5ndGggbXVzdCBiZSBiZXR3ZWVuIDIgYW5kIDUuXCIpO1xuXHRcdH1cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuXHRcdHRoaXMuaGl0cyA9IDA7XG5cdFx0dGhpcy5zdW5rID0gZmFsc2U7XG5cdH1cblxuXHRoaXQoKSB7XG5cdFx0aWYgKCF0aGlzLmlzU3VuaygpKSB7XG5cdFx0XHR0aGlzLmhpdHMrKztcblx0XHRcdHRoaXMuc3VuayA9IHRoaXMuaXNTdW5rKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNTdW5rKCkge1xuXHRcdHJldHVybiB0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoO1xuXHR9XG5cblx0bnVtSGl0cygpIHtcblx0XHRyZXR1cm4gdGhpcy5oaXRzO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdhbWVMb2dpYyBmcm9tIFwiLi9nYW1lTG9naWMuanNcIjtcbmltcG9ydCAqIGFzIHV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eS5qc1wiO1xuaW1wb3J0IHNoaXBJbWcgZnJvbSBcIi4uL2ltZy9zcGxhc2gucG5nXCI7XG5cbmNvbnN0IHVpID0gKCgpID0+IHtcblx0Y29uc3QgZ2FtZSA9IGdhbWVMb2dpYygpO1xuXHRjb25zdCBncmlkU2l6ZSA9IDEwO1xuXHRsZXQgcGxhY2VtZW50Um90YXRpb24gPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIGxvYWRTcGxhc2goKSB7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblxuXHRcdGNvbnN0IHNwbGFzaCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwic3BsYXNoXCIpO1xuXHRcdGNvbnN0IHNwbGFzaFRleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInNwbGFzaF90ZXh0XCIpO1xuXHRcdGNvbnN0IHNwbGFzaEltZyA9IHV0aWxpdHkuY3JlYXRlRGl2KFwic3BsYXNoX2ltZ1wiKTtcblx0XHRjb25zdCBzcGxhc2hCdXR0b24gPSB1dGlsaXR5LmNyZWF0ZURpdihcInNwbGFzaF9idXR0b25cIik7XG5cblx0XHRzcGxhc2hUZXh0LnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG5cdFx0dXRpbGl0eS5hZGRJbWFnZShzaGlwSW1nLCBzcGxhc2hJbWcpO1xuXG5cdFx0Y29uc3Qgc3RhcnRCdXR0b24gPSB1dGlsaXR5LmNyZWF0ZUJ1dHRvbihcInllbGxvd0J1dHRvblwiLCBcIlNUQVJUIVwiKTtcblx0XHRzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZFBsYWNlbWVudFVJKTtcblx0XHRzcGxhc2hCdXR0b24uYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuXG5cdFx0c3BsYXNoLmFwcGVuZChzcGxhc2hUZXh0LCBzcGxhc2hJbWcsIHNwbGFzaEJ1dHRvbik7XG5cdFx0b3ZlcmxheS5hcHBlbmRDaGlsZChzcGxhc2gpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuXHRcdC8vIGNvbnN0IHBsYWNlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2VtZW50XCIpO1xuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cdFx0Ly8gcGxhY2VtZW50LnJlbW92ZSgpO1xuXG5cdFx0Y29uc3QgcGxheWZpZWxkID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGF5ZmllbGRcIik7XG5cblx0XHRjb25zdCB1cHBlclRleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInVwcGVyX3RleHRcIik7XG5cdFx0Y29uc3QgcGxheWVyWm9uZSA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxheWVyX3pvbmVcIik7XG5cdFx0Y29uc3QgbWlkZGxlWm9uZSA9IHV0aWxpdHkuY3JlYXRlRGl2KFwibWlkZGxlX3pvbmVcIik7XG5cdFx0Y29uc3QgYWlab25lID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJhaV96b25lXCIpO1xuXG5cdFx0Y29uc3QgcGxheWVyR3JpZCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxheWVyX2dyaWRcIik7XG5cdFx0Y29uc3QgcGxheWVyVGV4dCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxheWVyX3RleHRcIik7XG5cdFx0Y29uc3QgaWNvbiA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiZ2FtZV9pY29uXCIpO1xuXHRcdGNvbnN0IGdhbWVUZXh0ID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJnYW1lX3RleHRcIik7XG5cdFx0Y29uc3QgYWlHcmlkID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJhaV9ncmlkXCIpO1xuXHRcdGNvbnN0IGFpVGV4dCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiYWlfdGV4dFwiKTtcblx0XHRjb25zdCBncmlkcyA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiZ3JpZHNcIik7XG5cblx0XHRhZGRHYW1lR3JpZChwbGF5ZXJHcmlkLCBncmlkU2l6ZSk7XG5cdFx0YWRkR2FtZUdyaWQoYWlHcmlkLCBncmlkU2l6ZSk7XG5cdFx0dXRpbGl0eS5hZGRJbWFnZShzaGlwSW1nLCBpY29uKTtcblxuXHRcdHBsYXllclpvbmUuYXBwZW5kKHBsYXllckdyaWQsIHBsYXllclRleHQpO1xuXHRcdG1pZGRsZVpvbmUuYXBwZW5kKGljb24sIGdhbWVUZXh0KTtcblx0XHRhaVpvbmUuYXBwZW5kKGFpR3JpZCwgYWlUZXh0KTtcblxuXHRcdGdyaWRzLmFwcGVuZChwbGF5ZXJab25lLCBtaWRkbGVab25lLCBhaVpvbmUpO1xuXHRcdHBsYXlmaWVsZC5hcHBlbmQodXBwZXJUZXh0LCBncmlkcyk7XG5cdFx0b3ZlcmxheS5hcHBlbmQocGxheWZpZWxkKTtcblxuXHRcdGRyYXdCb2FyZChwbGF5ZXJHcmlkLCB0cnVlKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdCb2FyZChncmlkLCBpc1BsYXllcikge1xuXHRcdC8vIENvbG9yIGdyaWQgY2VsbHMgZGVwZW5kaW5nIG9uIGNvbnRlbnQgYW5kIGF0dGFja3Ncblx0XHRjb25zdCBjZWxscyA9IGdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkX2NlbGxcIik7XG5cdFx0Y2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtcG9zXCIpLnNwbGl0KFwiLVwiKTtcblx0XHRcdGNvbnN0IHggPSBwYXJzZUludChwb3NpdGlvblswXSk7XG5cdFx0XHRjb25zdCB5ID0gcGFyc2VJbnQocG9zaXRpb25bMV0pO1xuXG5cdFx0XHRjb25zdCBjZWxsQ29udGVudCA9IGdhbWUuZ2V0Q2VsbENvbnRlbnQoeCwgeSwgaXNQbGF5ZXIpO1xuXG5cdFx0XHRpZiAoY2VsbENvbnRlbnQuc2hpcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoaXNQbGF5ZXIpIHtcblx0XHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWRfY2VsbFwiKTtcblx0XHRcdFx0fSBlbHNlIGlmIChjZWxsQ29udGVudC5pc0F0dGFja2VkKSB7XG5cdFx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0X2NlbGxcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY2VsbENvbnRlbnQuaXNFbXB0eSAmJiBjZWxsQ29udGVudC5pc0F0dGFja2VkKSB7XG5cdFx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NfY2VsbFwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxvYWRQbGFjZW1lbnRVSSgpIHtcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXHRcdGNvbnN0IHNwbGFzaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3BsYXNoXCIpO1xuXHRcdHNwbGFzaC5yZW1vdmUoKTtcblxuXHRcdGNvbnN0IHBsYWNlbWVudCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxhY2VtZW50XCIpO1xuXHRcdGNvbnN0IHNoaXAgPSBnYW1lLmdldE5leHRTaGlwKCk7XG5cblx0XHRjb25zdCBpY29uID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGFjZW1lbnRfaW1hZ2VcIik7XG5cdFx0Y29uc3QgdGV4dCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxhY2VtZW50X3RleHRcIik7XG5cdFx0Y29uc3Qgcm90YXRlQnV0dG9uID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGFjZW1lbnRfcm90YXRlXCIpO1xuXHRcdGNvbnN0IHBsYWNlR3JpZCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxhY2VtZW50X2dyaWRcIik7XG5cblx0XHR1dGlsaXR5LmFkZEltYWdlKHNoaXBJbWcsIGljb24pO1xuXHRcdHRleHQudGV4dENvbnRlbnQgPSBgUGxhY2UgeW91ciAke3NoaXAubmFtZX0hYDtcblxuXHRcdC8vIExpc3RlbmVyc1xuXHRcdHBsYWNlR3JpZC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgY2xlYXJIaWdobGlnaHRzKTtcblx0XHRjb25zdCBidXR0b24gPSB1dGlsaXR5LmNyZWF0ZUJ1dHRvbihcInllbGxvd0J1dHRvblwiLCBcIlJPVEFURVwiKTtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHBsYWNlbWVudFJvdGF0aW9uID0gcGxhY2VtZW50Um90YXRpb24gPyBmYWxzZSA6IHRydWU7XG5cdFx0fSk7XG5cblx0XHRyb3RhdGVCdXR0b24uYXBwZW5kQ2hpbGQoYnV0dG9uKTtcblxuXHRcdHBsYWNlbWVudC5hcHBlbmQoaWNvbiwgdGV4dCwgcm90YXRlQnV0dG9uLCBwbGFjZUdyaWQpO1xuXHRcdG92ZXJsYXkuYXBwZW5kQ2hpbGQocGxhY2VtZW50KTtcblx0XHRhZGRQbGFjZW1lbnRHcmlkKHBsYWNlR3JpZCwgZ3JpZFNpemUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkUGxhY2VtZW50R3JpZChjb250YWluZXIsIHNpemUpIHtcblx0XHQvL2NyZWF0ZSBhbmQgYXBwZW5kIGNlbGxzXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IGNlbGwgPSB1dGlsaXR5LmNyZWF0ZURpdihcImdyaWRfY2VsbFwiKTtcblx0XHRcdFx0Y2VsbC5zZXRBdHRyaWJ1dGUoXCJEYXRhLXBvc1wiLCBgJHtqfS0ke3NpemUgLSAxIC0gaX1gKTtcblxuXHRcdFx0XHQvL2FkZCBsaXN0ZW5lclxuXHRcdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgbW91c2VPdmVyKTtcblx0XHRcdFx0Y2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxhY2VTaGlwKTtcblxuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYWRkR2FtZUdyaWQoY29udGFpbmVyLCBzaXplKSB7XG5cdFx0Ly9jcmVhdGUgYW5kIGFwcGVuZCBjZWxsc1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IHNpemU7IGorKykge1xuXHRcdFx0XHRjb25zdCBjZWxsID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJncmlkX2NlbGxcIik7XG5cdFx0XHRcdGNlbGwuc2V0QXR0cmlidXRlKFwiRGF0YS1wb3NcIiwgYCR7an0tJHtzaXplIC0gMSAtIGl9YCk7XG5cblx0XHRcdFx0Ly9hZGQgbGlzdGVuZXJcblx0XHRcdFx0Ly8gY2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG1vdXNlT3Zlcik7XG5cdFx0XHRcdC8vIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYWNlU2hpcCk7XG5cblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIG1vdXNlT3ZlcihlKSB7XG5cdFx0Y2xlYXJIaWdobGlnaHRzKCk7XG5cdFx0Y29uc3Qgc2hpcCA9IGdhbWUuZ2V0TmV4dFNoaXAoKTtcblx0XHRpZiAoIXNoaXApIHtcblx0XHRcdHJlbW92ZVBsYWNlbWVudExpc3RlbmVycygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGdldCBjZWxsIGNvLW9yZGluYXRlc1xuXHRcdGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3NcIikuc3BsaXQoXCItXCIpO1xuXHRcdGNvbnN0IHggPSBwYXJzZUludChwb3NpdGlvblswXSk7XG5cdFx0Y29uc3QgeSA9IHBhcnNlSW50KHBvc2l0aW9uWzFdKTtcblx0XHRjb25zdCB2YWxpZCA9IGdhbWUuY2hlY2tGaXRzKHgsIHksIHNoaXAubGVuZ3RoLCBwbGFjZW1lbnRSb3RhdGlvbik7XG5cblx0XHQvLyBjb2xvciBjZWxscyBpZiBzaGlwIHBvc2l0aW9uIGlzIHZhbGlkXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBuZXdYID0geCArIChwbGFjZW1lbnRSb3RhdGlvbiA/IDAgOiBpKTtcblx0XHRcdGNvbnN0IG5ld1kgPSB5ICsgKHBsYWNlbWVudFJvdGF0aW9uID8gaSA6IDApO1xuXHRcdFx0Y29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcz1cIiR7bmV3WH0tJHtuZXdZfVwiXWApO1xuXG5cdFx0XHRpZiAodmFsaWQpIHtcblx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwidmFsaWRfY2VsbFwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChnYW1lLnZhbGlkWFkobmV3WCwgbmV3WSkpIHtcblx0XHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkX2NlbGxcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBwbGFjZVNoaXAoZSkge1xuXHRcdGNvbnN0IHNoaXAgPSBnYW1lLmdldE5leHRTaGlwKCk7XG5cdFx0aWYgKCFzaGlwKSB7XG5cdFx0XHQvLyBBbGwgc2hpcHMgcGxhY2VkXG5cdFx0XHRyZW1vdmVQbGFjZW1lbnRMaXN0ZW5lcnMoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcG9zXCIpLnNwbGl0KFwiLVwiKTtcblx0XHRjb25zdCB4ID0gcGFyc2VJbnQocG9zaXRpb25bMF0pO1xuXHRcdGNvbnN0IHkgPSBwYXJzZUludChwb3NpdGlvblsxXSk7XG5cdFx0Y29uc3QgdmFsaWQgPSBnYW1lLmNoZWNrRml0cyh4LCB5LCBzaGlwLmxlbmd0aCwgcGxhY2VtZW50Um90YXRpb24pO1xuXG5cdFx0aWYgKHZhbGlkKSB7XG5cdFx0XHRnYW1lLmFkZFNoaXAoeCwgeSwgc2hpcC5sZW5ndGgsIHBsYWNlbWVudFJvdGF0aW9uLCBzaGlwLm5hbWUpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG5ld1ggPSB4ICsgKHBsYWNlbWVudFJvdGF0aW9uID8gMCA6IGkpO1xuXHRcdFx0XHRjb25zdCBuZXdZID0geSArIChwbGFjZW1lbnRSb3RhdGlvbiA/IGkgOiAwKTtcblx0XHRcdFx0Y29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFx0YFtkYXRhLXBvcz1cIiR7bmV3WH0tJHtuZXdZfVwiXWBcblx0XHRcdFx0KTtcblx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkX2NlbGxcIik7XG5cdFx0XHR9XG5cdFx0XHRnYW1lLnJlbW92ZUN1cnJlbnRTaGlwKCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2xlYXJIaWdobGlnaHRzKCkge1xuXHRcdGNvbnN0IGhpZ2hsaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XCIudmFsaWRfY2VsbCwgLmludmFsaWRfY2VsbFwiXG5cdFx0KTtcblx0XHRoaWdobGlnaHRzLmZvckVhY2goKGNlbGwpID0+IHtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcInZhbGlkX2NlbGxcIik7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkX2NlbGxcIik7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVQbGFjZW1lbnRMaXN0ZW5lcnMoKSB7XG5cdFx0Y29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRfY2VsbFwiKTtcblx0XHRjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG5cdFx0XHRjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGFjZVNoaXApO1xuXHRcdFx0Y2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG1vdXNlT3Zlcik7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnllbGxvd0J1dHRvblwiKTtcblx0XHRidXR0b24udGV4dENvbnRlbnQgPSBcIlNUQVJUIVwiO1xuXHRcdGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxhY2VTaGlwKTtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJ5ZWxsb3dCdXR0b25cIik7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJncmVlbkJ1dHRvblwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxvYWRCYWNrZ3JvdW5kKCkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IHV0aWxpdHkuY3JlYXRlRGl2KFwib3ZlcmxheVwiKTtcblx0XHRjb250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXHR9XG5cblx0bG9hZEJhY2tncm91bmQoKTtcblx0Ly8gbG9hZFNwbGFzaCgpO1xuXHQvLyBsb2FkUGxhY2VtZW50VUkoKTtcblx0c3RhcnRHYW1lKCk7XG59KSgpO1xuIiwiLy8gSGVscGVyIGZ1bmN0aW9ucyBJIHVzZSBvZnRlblxuY29uc3QgY3JlYXRlRGl2ID0gKGNsYXNzTmFtZSkgPT4ge1xuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRyZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkSW1hZ2UgPSAocGF0aCwgY29udGFpbmVyKSA9PiB7XG5cdGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXHRpbWcuc3JjID0gcGF0aDtcblxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChjbGFzc05hbWUsIGJ1dHRvblRleHQpID0+IHtcblx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0YnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcblx0cmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZURpdiwgYWRkSW1hZ2UsIGNyZWF0ZUJ1dHRvbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9