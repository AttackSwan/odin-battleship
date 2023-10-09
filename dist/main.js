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
	align-items: center;
	border: 1px solid white;
	color: white;
	display: flex;
	font-size: 2rem;
	justify-content: center;
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

.cell_highlight {
	background-color: lightskyblue;
}

.cell_hit {
	background-color: red;
}

.cell_miss {
	background-color: white;
}

.shake {
	animation: shake 0.5s ease infinite;
	color: red;
}

@keyframes shake {
	0% {
		transform: translateX(0);
	}
	20% {
		transform: translateX(-5px);
	}
	40% {
		transform: translateX(5px);
	}
	60% {
		transform: translateX(-5px);
	}
	80% {
		transform: translateX(5px);
	}
	100% {
		transform: translateX(0);
	}
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n\t--color-darkBlue: #132843;\n\t--color-brightYellow: #fff000;\n\t--color-mutedYellow: #f4e603;\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100vw;\n\tmargin: 0;\n}\n\n.content {\n\theight: 100%;\n\twidth: 100%;\n\tbackground-image: linear-gradient(\n\t\tto right top,\n\t\t#132843,\n\t\t#1b4169,\n\t\t#205c93,\n\t\t#2078be,\n\t\t#1296eb\n\t);\n}\n\n.overlay,\n.splash_text,\n.splash_img,\n.splash_button {\n\talign-items: center;\n\tdisplay: flex;\n\tfont-family: \"Press Start 2P\", cursive;\n\theight: 100%;\n\tjustify-content: center;\n\twidth: 100%;\n}\n\n.overlay {\n\tbackground-color: rgba(0, 0, 0, 0.2);\n}\n\n.splash {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tpadding: 32px;\n}\n\n.splash_text {\n\tcolor: white;\n\tfont-size: 3rem;\n\tmargin-bottom: 48px;\n\ttext-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),\n\t\t0px -4px 10px rgba(255, 255, 255, 0.3);\n}\n\n.splash img {\n\twidth: 100%;\n}\n\n.yellowButton {\n\tbackground-color: var(--color-brightYellow);\n\tborder-radius: 4px;\n\tborder: 0;\n\tbox-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,\n\t\trgba(0, 44, 97, 0.1) 0 3px 6px 0;\n\tbox-sizing: border-box;\n\tcolor: #000;\n\tcursor: pointer;\n\tdisplay: inherit;\n\tfont-family: \"Press Start 2P\", cursive, -apple-system, system-ui, \"Segoe UI\",\n\t\tRoboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n\t\t\"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tline-height: 24px;\n\tmargin: 0;\n\tmargin-top: 32px;\n\tmin-height: 56px;\n\tmin-width: 120px;\n\tpadding: 16px 20px;\n\tposition: relative;\n\ttext-align: center;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\twidth: 195px;\n\ttouch-action: manipulation;\n\tvertical-align: baseline;\n\ttransition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n\n.yellowButton:hover {\n\tbackground-color: var(--color-mutedYellow);\n\ttransform: translateY(-5px);\n}\n\n.greenButton {\n\tbackground-color: green;\n\tborder-radius: 4px;\n\tborder: 0;\n\tbox-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,\n\t\trgba(0, 44, 97, 0.1) 0 3px 6px 0;\n\tbox-sizing: border-box;\n\tcolor: #000;\n\tcursor: pointer;\n\tdisplay: inherit;\n\tfont-family: \"Press Start 2P\", cursive, -apple-system, system-ui, \"Segoe UI\",\n\t\tRoboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n\t\t\"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tline-height: 24px;\n\tmargin: 0;\n\tmargin-top: 32px;\n\tmin-height: 56px;\n\tmin-width: 120px;\n\tpadding: 16px 20px;\n\tposition: relative;\n\ttext-align: center;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\twidth: 195px;\n\ttouch-action: manipulation;\n\tvertical-align: baseline;\n\ttransition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n\n.greenButton:hover {\n\tbackground-color: rgb(1, 100, 1);\n\ttransform: translateY(-5px);\n}\n\n@media (min-width: 768px) {\n\t.yellowButton {\n\t\tmin-width: 150px;\n\t\tpadding: 16px 44px;\n\t}\n}\n\n.placement {\n\talign-items: center;\n\tborder-radius: 25px;\n\tcolor: white;\n\tborder: 5px solid #1296eb;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 32px;\n\tbox-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n\t\trgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n\t\trgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.placement_image {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-bottom: 16px;\n}\n\n.placement img {\n\tmax-width: 200px;\n}\n\n.placement_text {\n\tmargin: 16px 0;\n}\n\n.placement_grid,\n.player_grid,\n.ai_grid {\n\tborder: 1px solid white;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tmargin-top: 16px;\n\tmax-width: 355px;\n}\n\n.placement .grid_cell,\n.grids .grid_cell {\n\tborder: 1px solid white;\n\theight: 35px;\n\twidth: 35px;\n}\n\n.valid_cell {\n\tbackground-color: greenyellow;\n}\n\n.invalid_cell {\n\tbackground-color: red;\n}\n\n.placed_cell {\n\tbackground-color: var(--color-brightYellow);\n}\n\n.playfield {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\twidth: 75%;\n}\n\n.upper_text,\n.player_text,\n.ai_text,\n.game_text {\n\talign-items: center;\n\tborder: 1px solid white;\n\tcolor: white;\n\tdisplay: flex;\n\tfont-size: 2rem;\n\tjustify-content: center;\n\tmin-height: 100px;\n\twidth: 100%;\n}\n\n.grids {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n}\n\n.game_icon {\n\talign-items: center;\n\tdisplay: flex;\n\twidth: 352px;\n\theight: 100%;\n\tjustify-content: center;\n}\n\n.game_icon img {\n\theight: 300px;\n\talign-items: center;\n}\n\n.player_zone,\n.ai_zone,\n.middle_zone {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\theight: 500px;\n\tjustify-content: space-between;\n}\n\n.cell_highlight {\n\tbackground-color: lightskyblue;\n}\n\n.cell_hit {\n\tbackground-color: red;\n}\n\n.cell_miss {\n\tbackground-color: white;\n}\n\n.shake {\n\tanimation: shake 0.5s ease infinite;\n\tcolor: red;\n}\n\n@keyframes shake {\n\t0% {\n\t\ttransform: translateX(0);\n\t}\n\t20% {\n\t\ttransform: translateX(-5px);\n\t}\n\t40% {\n\t\ttransform: translateX(5px);\n\t}\n\t60% {\n\t\ttransform: translateX(-5px);\n\t}\n\t80% {\n\t\ttransform: translateX(5px);\n\t}\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n}\n"],"sourceRoot":""}]);
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
	let isPlayerTurn = true;
	let isOver = false;

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

	function isPlayersTurn() {
		return isPlayerTurn;
	}

	function isGameOver() {
		return this.isOver;
	}

	function changePlayer() {
		isPlayerTurn = isPlayerTurn ? false : true;
	}

	function playerAttack(x, y) {
		if (!isPlayerTurn) {
			return false;
		}
		const result = aiBoard.receiveAttack(x, y);
		if (!result) {
			return false; // invalid attack
		}
		changePlayer();
		return result;
	}

	function aiAttack() {
		const targets = playerBoard.getAvailableCells();

		if (targets.length === 0) {
			return null;
		}

		// AI version 1: generate random attack
		const randomTargetIndex = Math.floor(Math.random() * targets.length);
		const targetCell = targets[randomTargetIndex];

		const result = playerBoard.receiveAttack(targetCell.x, targetCell.y);
		changePlayer();

		// return attack coordinates and results in an object
		return { x: targetCell.x, y: targetCell.y, result: result };
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

	populateBoards();

	return {
		addShip,
		playerAttack,
		checkFits,
		getCellContent,
		isPlayersTurn,
		getNextShip,
		isGameOver,
		removeCurrentShip,
		validXY,
		aiAttack,
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
		// this.player = null;
		this.availableCells = [];
		this.initializeBoard();
	}

	initializeBoard() {
		// Initialize the board as a 2D array of objects
		for (let x = 0; x < this.size; x++) {
			const col = [];

			for (let y = 0; y < this.size; y++) {
				col.push({ isEmpty: true, isAttacked: false, ship: null });
				this.availableCells.push({ x, y });
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

	getAvailableCells() {
		return this.availableCells;
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

		// Find attack index in availableCells and remove
		const cellIndex = this.availableCells.findIndex(
			(cell) => cell.x === x && cell.y === y
		);
		if (cellIndex !== -1) {
			this.availableCells.splice(cellIndex, 1);
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

	// addPlayer(name, isComputer) {
	// 	if (this.players.length === 0) {
	// 		const newPlayer = new Player(name, isComputer);
	// 		this.player = newPlayer;
	// 	}
	// }

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

		addGrid(playerGrid, gridSize, "game", true);
		addGrid(aiGrid, gridSize, "game", false);
		_utility_js__WEBPACK_IMPORTED_MODULE_2__.addImage(_img_splash_png__WEBPACK_IMPORTED_MODULE_3__, icon);

		playerZone.append(playerGrid, playerText);
		middleZone.append(icon, gameText);
		aiZone.append(aiGrid, aiText);

		grids.append(playerZone, middleZone, aiZone);
		playfield.append(upperText, grids);
		overlay.append(playfield);

		drawBoard(playerGrid, true);

		turnsLoop(); // Start main game loop.
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
		addGrid(placeGrid, gridSize, "placement");
	}

	function turnsLoop() {
		// while (!game.isGameOver()) {}
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

	function addGrid(container, size, type, isPlayer) {
		// Types are "placement" and "game" grids

		for (let i = 0; i < size; i++) {
			for (let j = 0; j < size; j++) {
				const x = j;
				const y = size - 1 - i;
				const cell = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("grid_cell");
				cell.setAttribute("Data-pos", `${x}-${y}`);

				// Placement Grid
				if (type === "placement") {
					cell.addEventListener("mouseover", () => {
						placementMouseOver(x, y);
					});
					cell.addEventListener("click", placeShip);
				}
				// ai grid
				else if ((type =  true && isPlayer === false)) {
					cell.addEventListener("mouseover", () => {
						highlightCell(cell);
					});
					cell.addEventListener("mouseout", clearHighlights);
					cell.addEventListener("click", () => {
						attackCell(cell, x, y);
					});
				}

				container.appendChild(cell);
			}
		}
	}

	function attackCell(cell, x, y) {
		const result = game.playerAttack(x, y);
		if (result === "hit") {
			cell.classList.add("cell_hit");
		} else if (result === "miss") {
			cell.classList.add("cell_miss");
		}

		if (result !== false) {
			updateGameText(result);
			// Make AI attack
			const aiAttack = game.aiAttack();
			updatePlayerBoard(aiAttack.x, aiAttack.y, aiAttack.result);
			console.log(
				`ai: attack at ${aiAttack.x},${aiAttack.y} is a ${aiAttack.result}`
			);
		}
	}

	function updateGameText(result) {
		const gameText = document.querySelector(".game_text");
		const updateText = result.charAt(0).toUpperCase() + result.slice(1);
		gameText.textContent = `${updateText}!`;

		// shake text box on hit
		if (result === "hit") {
			gameText.classList.add("shake");
			setTimeout(() => {
				gameText.classList.remove("shake");
			}, 1000);
		}
	}

	function updatePlayerBoard(x, y, result) {
		if (result === false) {
			return;
		}
		// Get player cell
		const playerGrid = document.querySelector(".player_grid");
		const cell = playerGrid.querySelector(`[data-pos="${x}-${y}"]`);
		// Update classList
		if (result === "hit") {
			cell.classList.add("cell_hit");
			// Shake player board
			playerGrid.classList.add("shake");
			setTimeout(() => {
				playerGrid.classList.remove("shake");
			}, 1000);
		} else if (result === "miss") {
			cell.classList.add("cell_miss");
		}
	}

	function highlightCell(cell) {
		if (game.isPlayersTurn()) {
			cell.classList.add("cell_highlight");
		}
	}

	// function placementMouseOver(e) {
	function placementMouseOver(x, y) {
		clearHighlights();
		const ship = game.getNextShip();
		if (!ship) {
			removePlacementListeners();
			return;
		}

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
			".valid_cell, .invalid_cell, .cell_highlight"
		);
		highlights.forEach((cell) => {
			cell.classList.remove("valid_cell");
			cell.classList.remove("invalid_cell");
			cell.classList.remove("cell_highlight");
		});
	}

	function removePlacementListeners() {
		const cells = document.querySelectorAll(".grid_cell");
		cells.forEach((cell) => {
			cell.removeEventListener("click", placeShip);
			cell.removeEventListener("mouseover", placementMouseOver);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFdBQVcsS0FBSyxNQUFNLFFBQVEsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsS0FBSyxPQUFPLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxPQUFPLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxL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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEtBQUssR0FBRyxLQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isa0RBQWlCO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hURDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2QyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUxvZ2ljLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcblx0LS1jb2xvci1kYXJrQmx1ZTogIzEzMjg0Mztcblx0LS1jb2xvci1icmlnaHRZZWxsb3c6ICNmZmYwMDA7XG5cdC0tY29sb3ItbXV0ZWRZZWxsb3c6ICNmNGU2MDM7XG59XG5cbioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMHZ3O1xuXHRtYXJnaW46IDA7XG59XG5cbi5jb250ZW50IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0IHRvcCxcblx0XHQjMTMyODQzLFxuXHRcdCMxYjQxNjksXG5cdFx0IzIwNWM5Myxcblx0XHQjMjA3OGJlLFxuXHRcdCMxMjk2ZWJcblx0KTtcbn1cblxuLm92ZXJsYXksXG4uc3BsYXNoX3RleHQsXG4uc3BsYXNoX2ltZyxcbi5zcGxhc2hfYnV0dG9uIHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0Zm9udC1mYW1pbHk6IFwiUHJlc3MgU3RhcnQgMlBcIiwgY3Vyc2l2ZTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5vdmVybGF5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc3BsYXNoIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWF4LXdpZHRoOiA1MDBweDtcblx0cGFkZGluZzogMzJweDtcbn1cblxuLnNwbGFzaF90ZXh0IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDNyZW07XG5cdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cdHRleHQtc2hhZG93OiAycHggN3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyksXG5cdFx0MHB4IC00cHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5zcGxhc2ggaW1nIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi55ZWxsb3dCdXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmlnaHRZZWxsb3cpO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdGJvcmRlcjogMDtcblx0Ym94LXNoYWRvdzogcmdiYSgxLCA2MCwgMTM2LCAwLjUpIDAgLTFweCAzcHggMCBpbnNldCxcblx0XHRyZ2JhKDAsIDQ0LCA5NywgMC4xKSAwIDNweCA2cHggMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0Y29sb3I6ICMwMDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0ZGlzcGxheTogaW5oZXJpdDtcblx0Zm9udC1mYW1pbHk6IFwiUHJlc3MgU3RhcnQgMlBcIiwgY3Vyc2l2ZSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsXG5cdFx0Um9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsXG5cdFx0XCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRtYXJnaW46IDA7XG5cdG1hcmdpbi10b3A6IDMycHg7XG5cdG1pbi1oZWlnaHQ6IDU2cHg7XG5cdG1pbi13aWR0aDogMTIwcHg7XG5cdHBhZGRpbmc6IDE2cHggMjBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHR3aWR0aDogMTk1cHg7XG5cdHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKTtcbn1cblxuLnllbGxvd0J1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW11dGVkWWVsbG93KTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG4uZ3JlZW5CdXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3JkZXI6IDA7XG5cdGJveC1zaGFkb3c6IHJnYmEoMSwgNjAsIDEzNiwgMC41KSAwIC0xcHggM3B4IDAgaW5zZXQsXG5cdFx0cmdiYSgwLCA0NCwgOTcsIDAuMSkgMCAzcHggNnB4IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGNvbG9yOiAjMDAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGluaGVyaXQ7XG5cdGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmUsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLFxuXHRcdFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxuXHRcdFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0bWFyZ2luOiAwO1xuXHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRtaW4taGVpZ2h0OiA1NnB4O1xuXHRtaW4td2lkdGg6IDEyMHB4O1xuXHRwYWRkaW5nOiAxNnB4IDIwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0d2lkdGg6IDE5NXB4O1xuXHR0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XG59XG5cbi5ncmVlbkJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAxMDAsIDEpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXHQueWVsbG93QnV0dG9uIHtcblx0XHRtaW4td2lkdGg6IDE1MHB4O1xuXHRcdHBhZGRpbmc6IDE2cHggNDRweDtcblx0fVxufVxuXG4ucGxhY2VtZW50IHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXI6IDVweCBzb2xpZCAjMTI5NmViO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAzMnB4O1xuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsXG5cdFx0cmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCxcblx0XHRyZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xufVxuXG4ucGxhY2VtZW50X2ltYWdlIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5wbGFjZW1lbnQgaW1nIHtcblx0bWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLnBsYWNlbWVudF90ZXh0IHtcblx0bWFyZ2luOiAxNnB4IDA7XG59XG5cbi5wbGFjZW1lbnRfZ3JpZCxcbi5wbGF5ZXJfZ3JpZCxcbi5haV9ncmlkIHtcblx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuXHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRtYXgtd2lkdGg6IDM1NXB4O1xufVxuXG4ucGxhY2VtZW50IC5ncmlkX2NlbGwsXG4uZ3JpZHMgLmdyaWRfY2VsbCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXHRoZWlnaHQ6IDM1cHg7XG5cdHdpZHRoOiAzNXB4O1xufVxuXG4udmFsaWRfY2VsbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4uaW52YWxpZF9jZWxsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ucGxhY2VkX2NlbGwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmlnaHRZZWxsb3cpO1xufVxuXG4ucGxheWZpZWxkIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzMnB4O1xuXHR3aWR0aDogNzUlO1xufVxuXG4udXBwZXJfdGV4dCxcbi5wbGF5ZXJfdGV4dCxcbi5haV90ZXh0LFxuLmdhbWVfdGV4dCB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXHRjb2xvcjogd2hpdGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1pbi1oZWlnaHQ6IDEwMHB4O1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmdyaWRzIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmdhbWVfaWNvbiB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdHdpZHRoOiAzNTJweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmdhbWVfaWNvbiBpbWcge1xuXHRoZWlnaHQ6IDMwMHB4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheWVyX3pvbmUsXG4uYWlfem9uZSxcbi5taWRkbGVfem9uZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMzJweDtcblx0aGVpZ2h0OiA1MDBweDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2VsbF9oaWdobGlnaHQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG59XG5cbi5jZWxsX2hpdCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmNlbGxfbWlzcyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2hha2Uge1xuXHRhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZSBpbmZpbml0ZTtcblx0Y29sb3I6IHJlZDtcbn1cblxuQGtleWZyYW1lcyBzaGFrZSB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdH1cblx0MjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XG5cdH1cblx0NDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcblx0fVxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcblx0fVxuXHQ4MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuXHR9XG5cdDEwMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0fVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MseUJBQXlCO0NBQ3pCLDZCQUE2QjtDQUM3Qiw0QkFBNEI7QUFDN0I7O0FBRUE7Q0FDQyxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixXQUFXO0NBQ1g7Ozs7Ozs7RUFPQztBQUNGOztBQUVBOzs7O0NBSUMsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixzQ0FBc0M7Q0FDdEMsWUFBWTtDQUNaLHVCQUF1QjtDQUN2QixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxvQ0FBb0M7QUFDckM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixhQUFhO0FBQ2Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLG1CQUFtQjtDQUNuQjt3Q0FDdUM7QUFDeEM7O0FBRUE7Q0FDQyxXQUFXO0FBQ1o7O0FBRUE7Q0FDQywyQ0FBMkM7Q0FDM0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVDtrQ0FDaUM7Q0FDakMsc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCOztxQ0FFb0M7Q0FDcEMsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsU0FBUztDQUNULGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLDBCQUEwQjtDQUMxQix3QkFBd0I7Q0FDeEIsc0RBQXNEO0FBQ3ZEOztBQUVBO0NBQ0MsMENBQTBDO0NBQzFDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLHVCQUF1QjtDQUN2QixrQkFBa0I7Q0FDbEIsU0FBUztDQUNUO2tDQUNpQztDQUNqQyxzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEI7O3FDQUVvQztDQUNwQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixTQUFTO0NBQ1QsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6QixZQUFZO0NBQ1osMEJBQTBCO0NBQzFCLHdCQUF3QjtDQUN4QixzREFBc0Q7QUFDdkQ7O0FBRUE7Q0FDQyxnQ0FBZ0M7Q0FDaEMsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0M7RUFDQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixhQUFhO0NBQ2I7O3FFQUVvRTtBQUNyRTs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBOzs7Q0FHQyx1QkFBdUI7Q0FDdkIsYUFBYTtDQUNiLHNDQUFzQztDQUN0QyxnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0FBQ2pCOztBQUVBOztDQUVDLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsMkNBQTJDO0FBQzVDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBOzs7O0NBSUMsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixZQUFZO0NBQ1osYUFBYTtDQUNiLGVBQWU7Q0FDZix1QkFBdUI7Q0FDdkIsaUJBQWlCO0NBQ2pCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsV0FBVztBQUNaOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZO0NBQ1osWUFBWTtDQUNaLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7OztDQUdDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsVUFBVTtBQUNYOztBQUVBO0NBQ0M7RUFDQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcblxcdC0tY29sb3ItZGFya0JsdWU6ICMxMzI4NDM7XFxuXFx0LS1jb2xvci1icmlnaHRZZWxsb3c6ICNmZmYwMDA7XFxuXFx0LS1jb2xvci1tdXRlZFllbGxvdzogI2Y0ZTYwMztcXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHR0byByaWdodCB0b3AsXFxuXFx0XFx0IzEzMjg0MyxcXG5cXHRcXHQjMWI0MTY5LFxcblxcdFxcdCMyMDVjOTMsXFxuXFx0XFx0IzIwNzhiZSxcXG5cXHRcXHQjMTI5NmViXFxuXFx0KTtcXG59XFxuXFxuLm92ZXJsYXksXFxuLnNwbGFzaF90ZXh0LFxcbi5zcGxhc2hfaW1nLFxcbi5zcGxhc2hfYnV0dG9uIHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uc3BsYXNoIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LXdpZHRoOiA1MDBweDtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG5cXG4uc3BsYXNoX3RleHQge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweDtcXG5cXHR0ZXh0LXNoYWRvdzogMnB4IDdweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxcblxcdFxcdDBweCAtNHB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4uc3BsYXNoIGltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi55ZWxsb3dCdXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyaWdodFllbGxvdyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdGJvcmRlcjogMDtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDEsIDYwLCAxMzYsIDAuNSkgMCAtMXB4IDNweCAwIGluc2V0LFxcblxcdFxcdHJnYmEoMCwgNDQsIDk3LCAwLjEpIDAgM3B4IDZweCAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGluaGVyaXQ7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmUsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIixcXG5cXHRcXHRSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuXFx0XFx0XFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDI0cHg7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1hcmdpbi10b3A6IDMycHg7XFxuXFx0bWluLWhlaWdodDogNTZweDtcXG5cXHRtaW4td2lkdGg6IDEyMHB4O1xcblxcdHBhZGRpbmc6IDE2cHggMjBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0d2lkdGg6IDE5NXB4O1xcblxcdHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XFxufVxcblxcbi55ZWxsb3dCdXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW11dGVkWWVsbG93KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5ncmVlbkJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdGJvcmRlcjogMDtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDEsIDYwLCAxMzYsIDAuNSkgMCAtMXB4IDNweCAwIGluc2V0LFxcblxcdFxcdHJnYmEoMCwgNDQsIDk3LCAwLjEpIDAgM3B4IDZweCAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGluaGVyaXQ7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmUsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIixcXG5cXHRcXHRSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuXFx0XFx0XFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDI0cHg7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1hcmdpbi10b3A6IDMycHg7XFxuXFx0bWluLWhlaWdodDogNTZweDtcXG5cXHRtaW4td2lkdGg6IDEyMHB4O1xcblxcdHBhZGRpbmc6IDE2cHggMjBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0d2lkdGg6IDE5NXB4O1xcblxcdHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XFxufVxcblxcbi5ncmVlbkJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDEwMCwgMSk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQueWVsbG93QnV0dG9uIHtcXG5cXHRcXHRtaW4td2lkdGg6IDE1MHB4O1xcblxcdFxcdHBhZGRpbmc6IDE2cHggNDRweDtcXG5cXHR9XFxufVxcblxcbi5wbGFjZW1lbnQge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyOiA1cHggc29saWQgIzEyOTZlYjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMzJweDtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCxcXG5cXHRcXHRyZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbn1cXG5cXG4ucGxhY2VtZW50X2ltYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5wbGFjZW1lbnQgaW1nIHtcXG5cXHRtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucGxhY2VtZW50X3RleHQge1xcblxcdG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4ucGxhY2VtZW50X2dyaWQsXFxuLnBsYXllcl9ncmlkLFxcbi5haV9ncmlkIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcblxcdG1hcmdpbi10b3A6IDE2cHg7XFxuXFx0bWF4LXdpZHRoOiAzNTVweDtcXG59XFxuXFxuLnBsYWNlbWVudCAuZ3JpZF9jZWxsLFxcbi5ncmlkcyAuZ3JpZF9jZWxsIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRoZWlnaHQ6IDM1cHg7XFxuXFx0d2lkdGg6IDM1cHg7XFxufVxcblxcbi52YWxpZF9jZWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLmludmFsaWRfY2VsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucGxhY2VkX2NlbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyaWdodFllbGxvdyk7XFxufVxcblxcbi5wbGF5ZmllbGQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDMycHg7XFxuXFx0d2lkdGg6IDc1JTtcXG59XFxuXFxuLnVwcGVyX3RleHQsXFxuLnBsYXllcl90ZXh0LFxcbi5haV90ZXh0LFxcbi5nYW1lX3RleHQge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ3JpZHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZ2FtZV9pY29uIHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0d2lkdGg6IDM1MnB4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWVfaWNvbiBpbWcge1xcblxcdGhlaWdodDogMzAwcHg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBsYXllcl96b25lLFxcbi5haV96b25lLFxcbi5taWRkbGVfem9uZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMzJweDtcXG5cXHRoZWlnaHQ6IDUwMHB4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmNlbGxfaGlnaGxpZ2h0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XFxufVxcblxcbi5jZWxsX2hpdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uY2VsbF9taXNzIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnNoYWtlIHtcXG5cXHRhbmltYXRpb246IHNoYWtlIDAuNXMgZWFzZSBpbmZpbml0ZTtcXG5cXHRjb2xvcjogcmVkO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG5cXHQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcblxcdH1cXG5cXHQyMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcXG5cXHR9XFxuXFx0NDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXG5cXHR9XFxuXFx0NjAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XFxuXFx0fVxcblxcdDgwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XFxuXFx0fVxcblxcdDEwMCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuY29uc3QgZ2FtZUxvZ2ljID0gKCkgPT4ge1xuXHQvLyBjcmVhdGUgcGxheWVyc1xuXHRjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKFwicGxheWVyXCIpO1xuXHRjb25zdCBhaSA9IG5ldyBQbGF5ZXIoXCJhaVwiLCB0cnVlKTtcblx0bGV0IGlzUGxheWVyVHVybiA9IHRydWU7XG5cdGxldCBpc092ZXIgPSBmYWxzZTtcblxuXHQvLyBjcmVhdGUgZ2FtZWJvYXJkc1xuXHRjb25zdCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblx0Y29uc3QgYWlCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuXHRmdW5jdGlvbiBjaGVja0ZpdHMoeCwgeSwgbGVuZ3RoLCBpc1ZlcnRpY2FsID0gdHJ1ZSkge1xuXHRcdHJldHVybiBwbGF5ZXJCb2FyZC5zaGlwRml0cyh4LCB5LCBsZW5ndGgsIGlzVmVydGljYWwpO1xuXHR9XG5cblx0ZnVuY3Rpb24gdmFsaWRYWSh4LCB5KSB7XG5cdFx0cmV0dXJuIHBsYXllckJvYXJkLmlzVmFsaWRYWSh4LCB5KSAmJiBwbGF5ZXJCb2FyZC5zcGFjZUlzRW1wdHkoeCwgeSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRDZWxsQ29udGVudCh4LCB5LCBpc1BsYXllcikge1xuXHRcdGxldCBjZWxsID0gbnVsbDtcblxuXHRcdGlmIChpc1BsYXllcikge1xuXHRcdFx0cmV0dXJuIHBsYXllckJvYXJkLmdldENlbGxDb250ZW50KHgsIHkpO1xuXHRcdH0gZWxzZSBpZiAoIWlzUGxheWVyKSB7XG5cdFx0XHRyZXR1cm4gYWlCb2FyZC5nZXRDZWxsQ29udGVudCh4LCB5KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldE5leHRTaGlwKCkge1xuXHRcdHJldHVybiBwbGF5ZXJCb2FyZC5nZXROZXh0U2hpcCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlQ3VycmVudFNoaXAoKSB7XG5cdFx0cGxheWVyQm9hcmQucmVtb3ZlQ3VycmVudFNoaXAoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFNoaXAoeCwgeSwgbGVuZ3RoLCBpc1ZlcnRpY2FsLCBuYW1lKSB7XG5cdFx0cGxheWVyQm9hcmQucGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCwgbmFtZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBpc1BsYXllcnNUdXJuKCkge1xuXHRcdHJldHVybiBpc1BsYXllclR1cm47XG5cdH1cblxuXHRmdW5jdGlvbiBpc0dhbWVPdmVyKCkge1xuXHRcdHJldHVybiB0aGlzLmlzT3Zlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIGNoYW5nZVBsYXllcigpIHtcblx0XHRpc1BsYXllclR1cm4gPSBpc1BsYXllclR1cm4gPyBmYWxzZSA6IHRydWU7XG5cdH1cblxuXHRmdW5jdGlvbiBwbGF5ZXJBdHRhY2soeCwgeSkge1xuXHRcdGlmICghaXNQbGF5ZXJUdXJuKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdGNvbnN0IHJlc3VsdCA9IGFpQm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcblx0XHRpZiAoIXJlc3VsdCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlOyAvLyBpbnZhbGlkIGF0dGFja1xuXHRcdH1cblx0XHRjaGFuZ2VQbGF5ZXIoKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWlBdHRhY2soKSB7XG5cdFx0Y29uc3QgdGFyZ2V0cyA9IHBsYXllckJvYXJkLmdldEF2YWlsYWJsZUNlbGxzKCk7XG5cblx0XHRpZiAodGFyZ2V0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdC8vIEFJIHZlcnNpb24gMTogZ2VuZXJhdGUgcmFuZG9tIGF0dGFja1xuXHRcdGNvbnN0IHJhbmRvbVRhcmdldEluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGFyZ2V0cy5sZW5ndGgpO1xuXHRcdGNvbnN0IHRhcmdldENlbGwgPSB0YXJnZXRzW3JhbmRvbVRhcmdldEluZGV4XTtcblxuXHRcdGNvbnN0IHJlc3VsdCA9IHBsYXllckJvYXJkLnJlY2VpdmVBdHRhY2sodGFyZ2V0Q2VsbC54LCB0YXJnZXRDZWxsLnkpO1xuXHRcdGNoYW5nZVBsYXllcigpO1xuXG5cdFx0Ly8gcmV0dXJuIGF0dGFjayBjb29yZGluYXRlcyBhbmQgcmVzdWx0cyBpbiBhbiBvYmplY3Rcblx0XHRyZXR1cm4geyB4OiB0YXJnZXRDZWxsLngsIHk6IHRhcmdldENlbGwueSwgcmVzdWx0OiByZXN1bHQgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHBvcHVsYXRlQm9hcmRzKCkge1xuXHRcdC8vIFBvcHVsYXRlIHBsYXllcidzIGJvYXJkXG5cdFx0cGxheWVyQm9hcmQucGxhY2VTaGlwKDAsIDAsIDUsIHRydWUsIFwiQ2FycmllclwiKTtcblx0XHRwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoMywgNCwgNCwgZmFsc2UsIFwiQmF0dGxlc2hpcFwiKTtcblx0XHRwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoNywgNiwgMywgdHJ1ZSwgXCJDcnVpc2VyXCIpO1xuXHRcdHBsYXllckJvYXJkLnBsYWNlU2hpcCg2LCAyLCAzLCBmYWxzZSwgXCJTdWJtYXJpbmVcIik7XG5cdFx0cGxheWVyQm9hcmQucGxhY2VTaGlwKDEsIDYsIDIsIGZhbHNlLCBcIkRlc3Ryb3llclwiKTtcblx0XHQvLyBQb3B1bGF0ZSBhaSdzIGJvYXJkXG5cdFx0YWlCb2FyZC5wbGFjZVNoaXAoMCwgMCwgNSwgdHJ1ZSwgXCJDYXJyaWVyXCIpO1xuXHRcdGFpQm9hcmQucGxhY2VTaGlwKDMsIDQsIDQsIGZhbHNlLCBcIkJhdHRsZXNoaXBcIik7XG5cdFx0YWlCb2FyZC5wbGFjZVNoaXAoNywgNiwgMywgdHJ1ZSwgXCJDcnVpc2VyXCIpO1xuXHRcdGFpQm9hcmQucGxhY2VTaGlwKDYsIDIsIDMsIGZhbHNlLCBcIlN1Ym1hcmluZVwiKTtcblx0XHRhaUJvYXJkLnBsYWNlU2hpcCgxLCA2LCAyLCBmYWxzZSwgXCJEZXN0cm95ZXJcIik7XG5cdH1cblxuXHRwb3B1bGF0ZUJvYXJkcygpO1xuXG5cdHJldHVybiB7XG5cdFx0YWRkU2hpcCxcblx0XHRwbGF5ZXJBdHRhY2ssXG5cdFx0Y2hlY2tGaXRzLFxuXHRcdGdldENlbGxDb250ZW50LFxuXHRcdGlzUGxheWVyc1R1cm4sXG5cdFx0Z2V0TmV4dFNoaXAsXG5cdFx0aXNHYW1lT3Zlcixcblx0XHRyZW1vdmVDdXJyZW50U2hpcCxcblx0XHR2YWxpZFhZLFxuXHRcdGFpQXR0YWNrLFxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZUxvZ2ljO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcC5qc1wiO1xuaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXIuanNcIjtcblxuY2xhc3MgR2FtZWJvYXJkIHtcblx0Y29uc3RydWN0b3Ioc2l6ZSA9IDEwKSB7XG5cdFx0dGhpcy5zaXplID0gc2l6ZTtcblx0XHR0aGlzLmJvYXJkID0gW107XG5cdFx0dGhpcy5zaGlwcyA9IFtdO1xuXHRcdC8vIHRoaXMucGxheWVyID0gbnVsbDtcblx0XHR0aGlzLmF2YWlsYWJsZUNlbGxzID0gW107XG5cdFx0dGhpcy5pbml0aWFsaXplQm9hcmQoKTtcblx0fVxuXG5cdGluaXRpYWxpemVCb2FyZCgpIHtcblx0XHQvLyBJbml0aWFsaXplIHRoZSBib2FyZCBhcyBhIDJEIGFycmF5IG9mIG9iamVjdHNcblx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2l6ZTsgeCsrKSB7XG5cdFx0XHRjb25zdCBjb2wgPSBbXTtcblxuXHRcdFx0Zm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnNpemU7IHkrKykge1xuXHRcdFx0XHRjb2wucHVzaCh7IGlzRW1wdHk6IHRydWUsIGlzQXR0YWNrZWQ6IGZhbHNlLCBzaGlwOiBudWxsIH0pO1xuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZUNlbGxzLnB1c2goeyB4LCB5IH0pO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5ib2FyZC5wdXNoKGNvbCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2FkU2hpcCg1LCBcImNhcnJpZXJcIik7XG5cdFx0dGhpcy5sb2FkU2hpcCg0LCBcImJhdHRsZXNoaXBcIik7XG5cdFx0dGhpcy5sb2FkU2hpcCgzLCBcImNydWlzZXJcIik7XG5cdFx0dGhpcy5sb2FkU2hpcCgzLCBcInN1Ym1hcmluZVwiKTtcblx0XHR0aGlzLmxvYWRTaGlwKDIsIFwicGF0cm9sIGJvYXRcIik7XG5cdH1cblxuXHRsb2FkU2hpcChsZW5ndGgsIG5hbWUpIHtcblx0XHRjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoLCBuYW1lKTtcblx0XHR0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG5cdH1cblxuXHRnZXROZXh0U2hpcCgpIHtcblx0XHRpZiAodGhpcy5zaGlwcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5zaGlwc1swXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRnZXRBdmFpbGFibGVDZWxscygpIHtcblx0XHRyZXR1cm4gdGhpcy5hdmFpbGFibGVDZWxscztcblx0fVxuXG5cdHJlbW92ZUN1cnJlbnRTaGlwKCkge1xuXHRcdGlmICh0aGlzLnNoaXBzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuc2hpcHMuc2hpZnQoKTtcblx0XHR9XG5cdH1cblxuXHRwbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBpc1ZlcnRpY2FsLCBuYW1lKSB7XG5cdFx0aWYgKCF0aGlzLnNoaXBGaXRzKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCkpIHtcblx0XHRcdC8vIFNoaXAgZG9lcyBub3QgZml0IGF0IGdpdmVuIGNvb3JkaW5hdGVzXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly9wbGFjZSBzaGlwXG5cdFx0Y29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBuZXdYID0geCArIChpc1ZlcnRpY2FsID8gMCA6IGkpO1xuXHRcdFx0Y29uc3QgbmV3WSA9IHkgKyAoaXNWZXJ0aWNhbCA/IGkgOiAwKTtcblxuXHRcdFx0Y29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbbmV3WF1bbmV3WV07XG5cdFx0XHRjZWxsLmlzRW1wdHkgPSBmYWxzZTtcblx0XHRcdGNlbGwuc2hpcCA9IG5ld1NoaXA7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0c2hpcEZpdHMoeCwgeSwgbGVuZ3RoLCBpc1ZlcnRpY2FsKSB7XG5cdFx0bGV0IHNoaXBGaXRzID0gdHJ1ZTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5ld1ggPSB4ICsgKGlzVmVydGljYWwgPyAwIDogaSk7XG5cdFx0XHRjb25zdCBuZXdZID0geSArIChpc1ZlcnRpY2FsID8gaSA6IDApO1xuXHRcdFx0aWYgKCF0aGlzLmlzVmFsaWRYWShuZXdYLCBuZXdZKSB8fCAhdGhpcy5zcGFjZUlzRW1wdHkobmV3WCwgbmV3WSkpIHtcblx0XHRcdFx0c2hpcEZpdHMgPSBmYWxzZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBzaGlwRml0cztcblx0fVxuXG5cdGlzVmFsaWRYWSh4LCB5KSB7XG5cdFx0cmV0dXJuIHggPj0gMCAmJiB5ID49IDAgJiYgeCA8IHRoaXMuc2l6ZSAmJiB5IDwgdGhpcy5zaXplO1xuXHR9XG5cblx0c3BhY2VJc0VtcHR5KHgsIHkpIHtcblx0XHRyZXR1cm4gdGhpcy5ib2FyZFt4XVt5XS5pc0VtcHR5O1xuXHR9XG5cblx0cmVjZWl2ZUF0dGFjayh4LCB5KSB7XG5cdFx0aWYgKCF0aGlzLmlzVmFsaWRBdHRhY2soeCwgeSkpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0Ly8gTWFrZSBhdHRhY2sgb24gc2hpcCBhdCB4LHlcblx0XHRsZXQgcmVzdWx0ID0gXCJtaXNzXCI7XG5cdFx0dGhpcy5ib2FyZFt4XVt5XS5pc0F0dGFja2VkID0gdHJ1ZTtcblxuXHRcdGlmICh0aGlzLmJvYXJkW3hdW3ldLnNoaXApIHtcblx0XHRcdGNvbnN0IHNoaXAgPSB0aGlzLmJvYXJkW3hdW3ldLnNoaXA7XG5cdFx0XHRzaGlwLmhpdCgpO1xuXHRcdFx0cmVzdWx0ID0gXCJoaXRcIjtcblx0XHR9XG5cblx0XHQvLyBGaW5kIGF0dGFjayBpbmRleCBpbiBhdmFpbGFibGVDZWxscyBhbmQgcmVtb3ZlXG5cdFx0Y29uc3QgY2VsbEluZGV4ID0gdGhpcy5hdmFpbGFibGVDZWxscy5maW5kSW5kZXgoXG5cdFx0XHQoY2VsbCkgPT4gY2VsbC54ID09PSB4ICYmIGNlbGwueSA9PT0geVxuXHRcdCk7XG5cdFx0aWYgKGNlbGxJbmRleCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuYXZhaWxhYmxlQ2VsbHMuc3BsaWNlKGNlbGxJbmRleCwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGlzVmFsaWRBdHRhY2soeCwgeSkge1xuXHRcdHJldHVybiB0aGlzLmlzVmFsaWRYWSh4LCB5KSAmJiAhdGhpcy5ib2FyZFt4XVt5XS5pc0F0dGFja2VkO1xuXHR9XG5cblx0ZGlzcGxheUJvYXJkKCkge1xuXHRcdGZvciAobGV0IHkgPSB0aGlzLnNpemUgLSAxOyB5ID49IDA7IHktLSkge1xuXHRcdFx0bGV0IG91dHB1dCA9IFwiXCI7XG5cdFx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2l6ZTsgeCsrKSB7XG5cdFx0XHRcdGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3hdW3ldO1xuXHRcdFx0XHRvdXRwdXQgKz0gY2VsbC5pc0VtcHR5ID8gXCJFIFwiIDogXCJTIFwiO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2cob3V0cHV0KTtcblx0XHR9XG5cdH1cblxuXHRnZXRTaGlwKHgsIHkpIHtcblx0XHRyZXR1cm4gdGhpcy5ib2FyZFt4XVt5XS5zaGlwO1xuXHR9XG5cblx0Z2V0U2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplO1xuXHR9XG5cblx0Ly8gYWRkUGxheWVyKG5hbWUsIGlzQ29tcHV0ZXIpIHtcblx0Ly8gXHRpZiAodGhpcy5wbGF5ZXJzLmxlbmd0aCA9PT0gMCkge1xuXHQvLyBcdFx0Y29uc3QgbmV3UGxheWVyID0gbmV3IFBsYXllcihuYW1lLCBpc0NvbXB1dGVyKTtcblx0Ly8gXHRcdHRoaXMucGxheWVyID0gbmV3UGxheWVyO1xuXHQvLyBcdH1cblx0Ly8gfVxuXG5cdGdldENlbGxDb250ZW50KHgsIHkpIHtcblx0XHRyZXR1cm4gdGhpcy5ib2FyZFt4XVt5XTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjbGFzcyBQbGF5ZXIge1xuXHRjb25zdHJ1Y3RvcihuYW1lID0gXCJwbGF5ZXJcIiwgaXNDb21wdXRlciA9IGZhbHNlKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmlzQ29tcHV0ZXIgPSBpc0NvbXB1dGVyO1xuXHRcdHRoaXMuc2hpcHMgPSBbXTtcblx0fVxuXG5cdGFkZFNoaXAoc2hpcCkge1xuXHRcdGlmIChzaGlwKSB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cdH1cblxuXHRjb21wdXRlckF0dGFjayhvcHBvbmVudEJvYXJkKSB7XG5cdFx0aWYgKCF0aGlzLmlzQ29tcHV0ZXIpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBHZW5lcmF0ZSBhdHRhY2sgb24gcGxheWVyIGJvYXJkXG5cdFx0Y29uc3Qgc2l6ZSA9IG9wcG9uZW50Qm9hcmQuZ2V0U2l6ZSgpO1xuXHRcdGxldCBhdHRhY2tYLCBhdHRhY2tZO1xuXG5cdFx0ZG8ge1xuXHRcdFx0Ly8gR2VuZXJhdGUgdW5pcXVlIHJhbmRvbSBhdHRhY2tcblx0XHRcdGF0dGFja1ggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcblx0XHRcdGF0dGFja1kgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcblx0XHR9IHdoaWxlICghb3Bwb25lbnRCb2FyZC5yZWNlaXZlQXR0YWNrKGF0dGFja1gsIGF0dGFja1kpKTtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuXHRjb25zdHJ1Y3RvcihsZW5ndGggPSAwLCBuYW1lID0gXCJcIikge1xuXHRcdGNvbnN0IG1pbkxlbmd0aCA9IDI7XG5cdFx0Y29uc3QgbWF4TGVuZ3RoID0gNTtcblx0XHRpZiAobGVuZ3RoIDwgbWluTGVuZ3RoIHx8IGxlbmd0aCA+IG1heExlbmd0aCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiU2hpcCBsZW5ndGggbXVzdCBiZSBiZXR3ZWVuIDIgYW5kIDUuXCIpO1xuXHRcdH1cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuXHRcdHRoaXMuaGl0cyA9IDA7XG5cdFx0dGhpcy5zdW5rID0gZmFsc2U7XG5cdH1cblxuXHRoaXQoKSB7XG5cdFx0aWYgKCF0aGlzLmlzU3VuaygpKSB7XG5cdFx0XHR0aGlzLmhpdHMrKztcblx0XHRcdHRoaXMuc3VuayA9IHRoaXMuaXNTdW5rKCk7XG5cdFx0fVxuXHR9XG5cblx0aXNTdW5rKCkge1xuXHRcdHJldHVybiB0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoO1xuXHR9XG5cblx0bnVtSGl0cygpIHtcblx0XHRyZXR1cm4gdGhpcy5oaXRzO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdhbWVMb2dpYyBmcm9tIFwiLi9nYW1lTG9naWMuanNcIjtcbmltcG9ydCAqIGFzIHV0aWxpdHkgZnJvbSBcIi4vdXRpbGl0eS5qc1wiO1xuaW1wb3J0IHNoaXBJbWcgZnJvbSBcIi4uL2ltZy9zcGxhc2gucG5nXCI7XG5cbmNvbnN0IHVpID0gKCgpID0+IHtcblx0Y29uc3QgZ2FtZSA9IGdhbWVMb2dpYygpO1xuXHRjb25zdCBncmlkU2l6ZSA9IDEwO1xuXHRsZXQgcGxhY2VtZW50Um90YXRpb24gPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIGxvYWRTcGxhc2goKSB7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblxuXHRcdGNvbnN0IHNwbGFzaCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwic3BsYXNoXCIpO1xuXHRcdGNvbnN0IHNwbGFzaFRleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInNwbGFzaF90ZXh0XCIpO1xuXHRcdGNvbnN0IHNwbGFzaEltZyA9IHV0aWxpdHkuY3JlYXRlRGl2KFwic3BsYXNoX2ltZ1wiKTtcblx0XHRjb25zdCBzcGxhc2hCdXR0b24gPSB1dGlsaXR5LmNyZWF0ZURpdihcInNwbGFzaF9idXR0b25cIik7XG5cblx0XHRzcGxhc2hUZXh0LnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG5cdFx0dXRpbGl0eS5hZGRJbWFnZShzaGlwSW1nLCBzcGxhc2hJbWcpO1xuXG5cdFx0Y29uc3Qgc3RhcnRCdXR0b24gPSB1dGlsaXR5LmNyZWF0ZUJ1dHRvbihcInllbGxvd0J1dHRvblwiLCBcIlNUQVJUIVwiKTtcblx0XHRzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZFBsYWNlbWVudFVJKTtcblx0XHRzcGxhc2hCdXR0b24uYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuXG5cdFx0c3BsYXNoLmFwcGVuZChzcGxhc2hUZXh0LCBzcGxhc2hJbWcsIHNwbGFzaEJ1dHRvbik7XG5cdFx0b3ZlcmxheS5hcHBlbmRDaGlsZChzcGxhc2gpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuXHRcdC8vIGNvbnN0IHBsYWNlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2VtZW50XCIpO1xuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cdFx0Ly8gcGxhY2VtZW50LnJlbW92ZSgpO1xuXG5cdFx0Y29uc3QgcGxheWZpZWxkID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGF5ZmllbGRcIik7XG5cblx0XHRjb25zdCB1cHBlclRleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInVwcGVyX3RleHRcIik7XG5cdFx0Y29uc3QgcGxheWVyWm9uZSA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxheWVyX3pvbmVcIik7XG5cdFx0Y29uc3QgbWlkZGxlWm9uZSA9IHV0aWxpdHkuY3JlYXRlRGl2KFwibWlkZGxlX3pvbmVcIik7XG5cdFx0Y29uc3QgYWlab25lID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJhaV96b25lXCIpO1xuXG5cdFx0Y29uc3QgcGxheWVyR3JpZCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxheWVyX2dyaWRcIik7XG5cdFx0Y29uc3QgcGxheWVyVGV4dCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxheWVyX3RleHRcIik7XG5cdFx0Y29uc3QgaWNvbiA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiZ2FtZV9pY29uXCIpO1xuXHRcdGNvbnN0IGdhbWVUZXh0ID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJnYW1lX3RleHRcIik7XG5cdFx0Y29uc3QgYWlHcmlkID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJhaV9ncmlkXCIpO1xuXHRcdGNvbnN0IGFpVGV4dCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiYWlfdGV4dFwiKTtcblx0XHRjb25zdCBncmlkcyA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiZ3JpZHNcIik7XG5cblx0XHRhZGRHcmlkKHBsYXllckdyaWQsIGdyaWRTaXplLCBcImdhbWVcIiwgdHJ1ZSk7XG5cdFx0YWRkR3JpZChhaUdyaWQsIGdyaWRTaXplLCBcImdhbWVcIiwgZmFsc2UpO1xuXHRcdHV0aWxpdHkuYWRkSW1hZ2Uoc2hpcEltZywgaWNvbik7XG5cblx0XHRwbGF5ZXJab25lLmFwcGVuZChwbGF5ZXJHcmlkLCBwbGF5ZXJUZXh0KTtcblx0XHRtaWRkbGVab25lLmFwcGVuZChpY29uLCBnYW1lVGV4dCk7XG5cdFx0YWlab25lLmFwcGVuZChhaUdyaWQsIGFpVGV4dCk7XG5cblx0XHRncmlkcy5hcHBlbmQocGxheWVyWm9uZSwgbWlkZGxlWm9uZSwgYWlab25lKTtcblx0XHRwbGF5ZmllbGQuYXBwZW5kKHVwcGVyVGV4dCwgZ3JpZHMpO1xuXHRcdG92ZXJsYXkuYXBwZW5kKHBsYXlmaWVsZCk7XG5cblx0XHRkcmF3Qm9hcmQocGxheWVyR3JpZCwgdHJ1ZSk7XG5cblx0XHR0dXJuc0xvb3AoKTsgLy8gU3RhcnQgbWFpbiBnYW1lIGxvb3AuXG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkUGxhY2VtZW50VUkoKSB7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblx0XHRjb25zdCBzcGxhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwbGFzaFwiKTtcblx0XHRzcGxhc2gucmVtb3ZlKCk7XG5cblx0XHRjb25zdCBwbGFjZW1lbnQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYWNlbWVudFwiKTtcblx0XHRjb25zdCBzaGlwID0gZ2FtZS5nZXROZXh0U2hpcCgpO1xuXG5cdFx0Y29uc3QgaWNvbiA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxhY2VtZW50X2ltYWdlXCIpO1xuXHRcdGNvbnN0IHRleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYWNlbWVudF90ZXh0XCIpO1xuXHRcdGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxhY2VtZW50X3JvdGF0ZVwiKTtcblx0XHRjb25zdCBwbGFjZUdyaWQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYWNlbWVudF9ncmlkXCIpO1xuXG5cdFx0dXRpbGl0eS5hZGRJbWFnZShzaGlwSW1nLCBpY29uKTtcblx0XHR0ZXh0LnRleHRDb250ZW50ID0gYFBsYWNlIHlvdXIgJHtzaGlwLm5hbWV9IWA7XG5cblx0XHQvLyBMaXN0ZW5lcnNcblx0XHRwbGFjZUdyaWQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGNsZWFySGlnaGxpZ2h0cyk7XG5cdFx0Y29uc3QgYnV0dG9uID0gdXRpbGl0eS5jcmVhdGVCdXR0b24oXCJ5ZWxsb3dCdXR0b25cIiwgXCJST1RBVEVcIik7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRwbGFjZW1lbnRSb3RhdGlvbiA9IHBsYWNlbWVudFJvdGF0aW9uID8gZmFsc2UgOiB0cnVlO1xuXHRcdH0pO1xuXG5cdFx0cm90YXRlQnV0dG9uLmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cblx0XHRwbGFjZW1lbnQuYXBwZW5kKGljb24sIHRleHQsIHJvdGF0ZUJ1dHRvbiwgcGxhY2VHcmlkKTtcblx0XHRvdmVybGF5LmFwcGVuZENoaWxkKHBsYWNlbWVudCk7XG5cdFx0YWRkR3JpZChwbGFjZUdyaWQsIGdyaWRTaXplLCBcInBsYWNlbWVudFwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHR1cm5zTG9vcCgpIHtcblx0XHQvLyB3aGlsZSAoIWdhbWUuaXNHYW1lT3ZlcigpKSB7fVxuXHR9XG5cblx0ZnVuY3Rpb24gZHJhd0JvYXJkKGdyaWQsIGlzUGxheWVyKSB7XG5cdFx0Ly8gQ29sb3IgZ3JpZCBjZWxscyBkZXBlbmRpbmcgb24gY29udGVudCBhbmQgYXR0YWNrc1xuXHRcdGNvbnN0IGNlbGxzID0gZ3JpZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRfY2VsbFwiKTtcblx0XHRjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG5cdFx0XHRjb25zdCBwb3NpdGlvbiA9IGNlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3NcIikuc3BsaXQoXCItXCIpO1xuXHRcdFx0Y29uc3QgeCA9IHBhcnNlSW50KHBvc2l0aW9uWzBdKTtcblx0XHRcdGNvbnN0IHkgPSBwYXJzZUludChwb3NpdGlvblsxXSk7XG5cblx0XHRcdGNvbnN0IGNlbGxDb250ZW50ID0gZ2FtZS5nZXRDZWxsQ29udGVudCh4LCB5LCBpc1BsYXllcik7XG5cblx0XHRcdGlmIChjZWxsQ29udGVudC5zaGlwICE9PSBudWxsKSB7XG5cdFx0XHRcdGlmIChpc1BsYXllcikge1xuXHRcdFx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcInBsYWNlZF9jZWxsXCIpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKGNlbGxDb250ZW50LmlzQXR0YWNrZWQpIHtcblx0XHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJoaXRfY2VsbFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChjZWxsQ29udGVudC5pc0VtcHR5ICYmIGNlbGxDb250ZW50LmlzQXR0YWNrZWQpIHtcblx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwibWlzc19jZWxsXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkR3JpZChjb250YWluZXIsIHNpemUsIHR5cGUsIGlzUGxheWVyKSB7XG5cdFx0Ly8gVHlwZXMgYXJlIFwicGxhY2VtZW50XCIgYW5kIFwiZ2FtZVwiIGdyaWRzXG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNpemU7IGkrKykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBzaXplOyBqKyspIHtcblx0XHRcdFx0Y29uc3QgeCA9IGo7XG5cdFx0XHRcdGNvbnN0IHkgPSBzaXplIC0gMSAtIGk7XG5cdFx0XHRcdGNvbnN0IGNlbGwgPSB1dGlsaXR5LmNyZWF0ZURpdihcImdyaWRfY2VsbFwiKTtcblx0XHRcdFx0Y2VsbC5zZXRBdHRyaWJ1dGUoXCJEYXRhLXBvc1wiLCBgJHt4fS0ke3l9YCk7XG5cblx0XHRcdFx0Ly8gUGxhY2VtZW50IEdyaWRcblx0XHRcdFx0aWYgKHR5cGUgPT09IFwicGxhY2VtZW50XCIpIHtcblx0XHRcdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0cGxhY2VtZW50TW91c2VPdmVyKHgsIHkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYWNlU2hpcCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gYWkgZ3JpZFxuXHRcdFx0XHRlbHNlIGlmICgodHlwZSA9IFwiZ2FtZVwiICYmIGlzUGxheWVyID09PSBmYWxzZSkpIHtcblx0XHRcdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuXHRcdFx0XHRcdFx0aGlnaGxpZ2h0Q2VsbChjZWxsKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBjbGVhckhpZ2hsaWdodHMpO1xuXHRcdFx0XHRcdGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdFx0XHRcdGF0dGFja0NlbGwoY2VsbCwgeCwgeSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQoY2VsbCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gYXR0YWNrQ2VsbChjZWxsLCB4LCB5KSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gZ2FtZS5wbGF5ZXJBdHRhY2soeCwgeSk7XG5cdFx0aWYgKHJlc3VsdCA9PT0gXCJoaXRcIikge1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbF9oaXRcIik7XG5cdFx0fSBlbHNlIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsX21pc3NcIik7XG5cdFx0fVxuXG5cdFx0aWYgKHJlc3VsdCAhPT0gZmFsc2UpIHtcblx0XHRcdHVwZGF0ZUdhbWVUZXh0KHJlc3VsdCk7XG5cdFx0XHQvLyBNYWtlIEFJIGF0dGFja1xuXHRcdFx0Y29uc3QgYWlBdHRhY2sgPSBnYW1lLmFpQXR0YWNrKCk7XG5cdFx0XHR1cGRhdGVQbGF5ZXJCb2FyZChhaUF0dGFjay54LCBhaUF0dGFjay55LCBhaUF0dGFjay5yZXN1bHQpO1xuXHRcdFx0Y29uc29sZS5sb2coXG5cdFx0XHRcdGBhaTogYXR0YWNrIGF0ICR7YWlBdHRhY2sueH0sJHthaUF0dGFjay55fSBpcyBhICR7YWlBdHRhY2sucmVzdWx0fWBcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gdXBkYXRlR2FtZVRleHQocmVzdWx0KSB7XG5cdFx0Y29uc3QgZ2FtZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVfdGV4dFwiKTtcblx0XHRjb25zdCB1cGRhdGVUZXh0ID0gcmVzdWx0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnNsaWNlKDEpO1xuXHRcdGdhbWVUZXh0LnRleHRDb250ZW50ID0gYCR7dXBkYXRlVGV4dH0hYDtcblxuXHRcdC8vIHNoYWtlIHRleHQgYm94IG9uIGhpdFxuXHRcdGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcblx0XHRcdGdhbWVUZXh0LmNsYXNzTGlzdC5hZGQoXCJzaGFrZVwiKTtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRnYW1lVGV4dC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VcIik7XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVQbGF5ZXJCb2FyZCh4LCB5LCByZXN1bHQpIHtcblx0XHRpZiAocmVzdWx0ID09PSBmYWxzZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHQvLyBHZXQgcGxheWVyIGNlbGxcblx0XHRjb25zdCBwbGF5ZXJHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfZ3JpZFwiKTtcblx0XHRjb25zdCBjZWxsID0gcGxheWVyR3JpZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3M9XCIke3h9LSR7eX1cIl1gKTtcblx0XHQvLyBVcGRhdGUgY2xhc3NMaXN0XG5cdFx0aWYgKHJlc3VsdCA9PT0gXCJoaXRcIikge1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbF9oaXRcIik7XG5cdFx0XHQvLyBTaGFrZSBwbGF5ZXIgYm9hcmRcblx0XHRcdHBsYXllckdyaWQuY2xhc3NMaXN0LmFkZChcInNoYWtlXCIpO1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHBsYXllckdyaWQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpO1xuXHRcdFx0fSwgMTAwMCk7XG5cdFx0fSBlbHNlIGlmIChyZXN1bHQgPT09IFwibWlzc1wiKSB7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsX21pc3NcIik7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gaGlnaGxpZ2h0Q2VsbChjZWxsKSB7XG5cdFx0aWYgKGdhbWUuaXNQbGF5ZXJzVHVybigpKSB7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsX2hpZ2hsaWdodFwiKTtcblx0XHR9XG5cdH1cblxuXHQvLyBmdW5jdGlvbiBwbGFjZW1lbnRNb3VzZU92ZXIoZSkge1xuXHRmdW5jdGlvbiBwbGFjZW1lbnRNb3VzZU92ZXIoeCwgeSkge1xuXHRcdGNsZWFySGlnaGxpZ2h0cygpO1xuXHRcdGNvbnN0IHNoaXAgPSBnYW1lLmdldE5leHRTaGlwKCk7XG5cdFx0aWYgKCFzaGlwKSB7XG5cdFx0XHRyZW1vdmVQbGFjZW1lbnRMaXN0ZW5lcnMoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCB2YWxpZCA9IGdhbWUuY2hlY2tGaXRzKHgsIHksIHNoaXAubGVuZ3RoLCBwbGFjZW1lbnRSb3RhdGlvbik7XG5cblx0XHQvLyBjb2xvciBjZWxscyBpZiBzaGlwIHBvc2l0aW9uIGlzIHZhbGlkXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBuZXdYID0geCArIChwbGFjZW1lbnRSb3RhdGlvbiA/IDAgOiBpKTtcblx0XHRcdGNvbnN0IG5ld1kgPSB5ICsgKHBsYWNlbWVudFJvdGF0aW9uID8gaSA6IDApO1xuXHRcdFx0Y29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcz1cIiR7bmV3WH0tJHtuZXdZfVwiXWApO1xuXG5cdFx0XHRpZiAodmFsaWQpIHtcblx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwidmFsaWRfY2VsbFwiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmIChnYW1lLnZhbGlkWFkobmV3WCwgbmV3WSkpIHtcblx0XHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJpbnZhbGlkX2NlbGxcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBwbGFjZVNoaXAoZSkge1xuXHRcdGNvbnN0IHNoaXAgPSBnYW1lLmdldE5leHRTaGlwKCk7XG5cdFx0aWYgKCFzaGlwKSB7XG5cdFx0XHQvLyBBbGwgc2hpcHMgcGxhY2VkXG5cdFx0XHRyZW1vdmVQbGFjZW1lbnRMaXN0ZW5lcnMoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBwb3NpdGlvbiA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtcG9zXCIpLnNwbGl0KFwiLVwiKTtcblx0XHRjb25zdCB4ID0gcGFyc2VJbnQocG9zaXRpb25bMF0pO1xuXHRcdGNvbnN0IHkgPSBwYXJzZUludChwb3NpdGlvblsxXSk7XG5cdFx0Y29uc3QgdmFsaWQgPSBnYW1lLmNoZWNrRml0cyh4LCB5LCBzaGlwLmxlbmd0aCwgcGxhY2VtZW50Um90YXRpb24pO1xuXG5cdFx0aWYgKHZhbGlkKSB7XG5cdFx0XHRnYW1lLmFkZFNoaXAoeCwgeSwgc2hpcC5sZW5ndGgsIHBsYWNlbWVudFJvdGF0aW9uLCBzaGlwLm5hbWUpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IG5ld1ggPSB4ICsgKHBsYWNlbWVudFJvdGF0aW9uID8gMCA6IGkpO1xuXHRcdFx0XHRjb25zdCBuZXdZID0geSArIChwbGFjZW1lbnRSb3RhdGlvbiA/IGkgOiAwKTtcblx0XHRcdFx0Y29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG5cdFx0XHRcdFx0YFtkYXRhLXBvcz1cIiR7bmV3WH0tJHtuZXdZfVwiXWBcblx0XHRcdFx0KTtcblx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkX2NlbGxcIik7XG5cdFx0XHR9XG5cdFx0XHRnYW1lLnJlbW92ZUN1cnJlbnRTaGlwKCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2xlYXJIaWdobGlnaHRzKCkge1xuXHRcdGNvbnN0IGhpZ2hsaWdodHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0XCIudmFsaWRfY2VsbCwgLmludmFsaWRfY2VsbCwgLmNlbGxfaGlnaGxpZ2h0XCJcblx0XHQpO1xuXHRcdGhpZ2hsaWdodHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwidmFsaWRfY2VsbFwiKTtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRfY2VsbFwiKTtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LnJlbW92ZShcImNlbGxfaGlnaGxpZ2h0XCIpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVtb3ZlUGxhY2VtZW50TGlzdGVuZXJzKCkge1xuXHRcdGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkX2NlbGxcIik7XG5cdFx0Y2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuXHRcdFx0Y2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxhY2VTaGlwKTtcblx0XHRcdGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBwbGFjZW1lbnRNb3VzZU92ZXIpO1xuXHRcdH0pO1xuXG5cdFx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55ZWxsb3dCdXR0b25cIik7XG5cdFx0YnV0dG9uLnRleHRDb250ZW50ID0gXCJTVEFSVCFcIjtcblx0XHRidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYWNlU2hpcCk7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xuXHRcdGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwieWVsbG93QnV0dG9uXCIpO1xuXHRcdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZ3JlZW5CdXR0b25cIik7XG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkQmFja2dyb3VuZCgpIHtcblx0XHRjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXHRcdGNvbnN0IG92ZXJsYXkgPSB1dGlsaXR5LmNyZWF0ZURpdihcIm92ZXJsYXlcIik7XG5cdFx0Y29udGVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcblx0fVxuXG5cdGxvYWRCYWNrZ3JvdW5kKCk7XG5cdC8vIGxvYWRTcGxhc2goKTtcblx0Ly8gbG9hZFBsYWNlbWVudFVJKCk7XG5cdHN0YXJ0R2FtZSgpO1xufSkoKTtcbiIsIi8vIEhlbHBlciBmdW5jdGlvbnMgSSB1c2Ugb2Z0ZW5cbmNvbnN0IGNyZWF0ZURpdiA9IChjbGFzc05hbWUpID0+IHtcblx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblx0ZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0cmV0dXJuIGRpdjtcbn07XG5cbmNvbnN0IGFkZEltYWdlID0gKHBhdGgsIGNvbnRhaW5lcikgPT4ge1xuXHRjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcblx0aW1nLnNyYyA9IHBhdGg7XG5cblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG59O1xuXG5jb25zdCBjcmVhdGVCdXR0b24gPSAoY2xhc3NOYW1lLCBidXR0b25UZXh0KSA9PiB7XG5cdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cdGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdGJ1dHRvbi50ZXh0Q29udGVudCA9IGJ1dHRvblRleHQ7XG5cdHJldHVybiBidXR0b247XG59O1xuXG5leHBvcnQgeyBjcmVhdGVEaXYsIGFkZEltYWdlLCBjcmVhdGVCdXR0b24gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==