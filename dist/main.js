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
	flex-direction: column;
	justify-content: center;
	min-height: 100px;
	width: 100%;
}

.game_text {
	font-size: 2rem;
}

.player_ships_label,
.ai_ships_label {
	font-size: 1.3rem;
	margin-bottom: 16px;
}

.grids {
	display: flex;
	justify-content: space-between;
	width: 100%;
}

.game_icon {
	align-items: center;
	display: flex;
	height: 100%;
	justify-content: center;
	width: 352px;
}

.game_icon img {
	height: 300px;
	align-items: center;
}

.player_graphic,
.ai_graphic {
	display: none;
	left: 0;
	position: absolute;
	top: 5%;
}

.player_grid_container,
.ai_grid_container {
	position: relative;
}

.player_graphic img,
.ai_graphic img {
	height: 100%;
	max-width: 350px;
	width: 100%;
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
	background-color: darkblue;
}

.cell_hit,
.cell_miss {
	display: flex;
	align-items: center;
	justify-content: center;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n\t--color-darkBlue: #132843;\n\t--color-brightYellow: #fff000;\n\t--color-mutedYellow: #f4e603;\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100vw;\n\tmargin: 0;\n}\n\n.content {\n\theight: 100%;\n\twidth: 100%;\n\tbackground-image: linear-gradient(\n\t\tto right top,\n\t\t#132843,\n\t\t#1b4169,\n\t\t#205c93,\n\t\t#2078be,\n\t\t#1296eb\n\t);\n}\n\n.overlay,\n.splash_text,\n.splash_img,\n.splash_button {\n\talign-items: center;\n\tdisplay: flex;\n\tfont-family: \"Press Start 2P\", cursive;\n\theight: 100%;\n\tjustify-content: center;\n\twidth: 100%;\n}\n\n.overlay {\n\tbackground-color: rgba(0, 0, 0, 0.2);\n}\n\n.splash {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tpadding: 32px;\n}\n\n.splash_text {\n\tcolor: white;\n\tfont-size: 3rem;\n\tmargin-bottom: 48px;\n\ttext-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),\n\t\t0px -4px 10px rgba(255, 255, 255, 0.3);\n}\n\n.splash img {\n\twidth: 100%;\n}\n\n.yellowButton {\n\tbackground-color: var(--color-brightYellow);\n\tborder-radius: 4px;\n\tborder: 0;\n\tbox-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,\n\t\trgba(0, 44, 97, 0.1) 0 3px 6px 0;\n\tbox-sizing: border-box;\n\tcolor: #000;\n\tcursor: pointer;\n\tdisplay: inherit;\n\tfont-family: \"Press Start 2P\", cursive, -apple-system, system-ui, \"Segoe UI\",\n\t\tRoboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n\t\t\"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tline-height: 24px;\n\tmargin: 0;\n\tmargin-top: 32px;\n\tmin-height: 56px;\n\tmin-width: 120px;\n\tpadding: 16px 20px;\n\tposition: relative;\n\ttext-align: center;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\twidth: 195px;\n\ttouch-action: manipulation;\n\tvertical-align: baseline;\n\ttransition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n\n.yellowButton:hover {\n\tbackground-color: var(--color-mutedYellow);\n\ttransform: translateY(-5px);\n}\n\n.greenButton {\n\tbackground-color: green;\n\tborder-radius: 4px;\n\tborder: 0;\n\tbox-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,\n\t\trgba(0, 44, 97, 0.1) 0 3px 6px 0;\n\tbox-sizing: border-box;\n\tcolor: #000;\n\tcursor: pointer;\n\tdisplay: inherit;\n\tfont-family: \"Press Start 2P\", cursive, -apple-system, system-ui, \"Segoe UI\",\n\t\tRoboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n\t\t\"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tline-height: 24px;\n\tmargin: 0;\n\tmargin-top: 32px;\n\tmin-height: 56px;\n\tmin-width: 120px;\n\tpadding: 16px 20px;\n\tposition: relative;\n\ttext-align: center;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\twidth: 195px;\n\ttouch-action: manipulation;\n\tvertical-align: baseline;\n\ttransition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n\n.greenButton:hover {\n\tbackground-color: rgb(1, 100, 1);\n\ttransform: translateY(-5px);\n}\n\n@media (min-width: 768px) {\n\t.yellowButton {\n\t\tmin-width: 150px;\n\t\tpadding: 16px 44px;\n\t}\n}\n\n.placement {\n\talign-items: center;\n\tborder-radius: 25px;\n\tcolor: white;\n\tborder: 5px solid #1296eb;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 32px;\n\tbox-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n\t\trgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n\t\trgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.placement_image {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-bottom: 16px;\n}\n\n.placement img {\n\tmax-width: 200px;\n}\n\n.placement_text {\n\tmargin: 16px 0;\n}\n\n.placement_grid,\n.player_grid,\n.ai_grid {\n\tborder: 1px solid white;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tmargin-top: 16px;\n\tmax-width: 355px;\n}\n\n.placement .grid_cell,\n.grids .grid_cell {\n\tborder: 1px solid white;\n\theight: 35px;\n\twidth: 35px;\n}\n\n.valid_cell {\n\tbackground-color: greenyellow;\n}\n\n.invalid_cell {\n\tbackground-color: red;\n}\n\n.placed_cell {\n\tbackground-color: var(--color-brightYellow);\n}\n\n.playfield {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\twidth: 75%;\n}\n\n.upper_text,\n.player_text,\n.ai_text,\n.game_text {\n\talign-items: center;\n\tborder: 1px solid white;\n\tcolor: white;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmin-height: 100px;\n\twidth: 100%;\n}\n\n.game_text {\n\tfont-size: 2rem;\n}\n\n.player_ships_label,\n.ai_ships_label {\n\tfont-size: 1.3rem;\n\tmargin-bottom: 16px;\n}\n\n.grids {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n}\n\n.game_icon {\n\talign-items: center;\n\tdisplay: flex;\n\theight: 100%;\n\tjustify-content: center;\n\twidth: 352px;\n}\n\n.game_icon img {\n\theight: 300px;\n\talign-items: center;\n}\n\n.player_graphic,\n.ai_graphic {\n\tdisplay: none;\n\tleft: 0;\n\tposition: absolute;\n\ttop: 5%;\n}\n\n.player_grid_container,\n.ai_grid_container {\n\tposition: relative;\n}\n\n.player_graphic img,\n.ai_graphic img {\n\theight: 100%;\n\tmax-width: 350px;\n\twidth: 100%;\n}\n\n.player_zone,\n.ai_zone,\n.middle_zone {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\theight: 500px;\n\tjustify-content: space-between;\n}\n\n.cell_highlight {\n\tbackground-color: lightskyblue;\n}\n\n.cell_hit {\n\tbackground-color: red;\n}\n\n.cell_miss {\n\tbackground-color: darkblue;\n}\n\n.cell_hit,\n.cell_miss {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.shake {\n\tanimation: shake 0.5s ease infinite;\n\tcolor: red;\n}\n\n@keyframes shake {\n\t0% {\n\t\ttransform: translateX(0);\n\t}\n\t20% {\n\t\ttransform: translateX(-5px);\n\t}\n\t40% {\n\t\ttransform: translateX(5px);\n\t}\n\t60% {\n\t\ttransform: translateX(-5px);\n\t}\n\t80% {\n\t\ttransform: translateX(5px);\n\t}\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n}\n"],"sourceRoot":""}]);
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

	function getShipsRemaining(isPlayer) {
		if (isPlayer) {
			return playerBoard.shipsRemaining();
		}
		return aiBoard.shipsRemaining();
	}

	populateBoards();

	return {
		addShip,
		playerAttack,
		checkFits,
		getCellContent,
		getShipsRemaining,
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

		// hit
		if (this.board[x][y].ship) {
			const ship = this.board[x][y].ship;
			ship.hit();

			if (ship.isSunk()) {
				// Remove the sunk ship from the array
				const sunkIndex = this.ships.findIndex(
					(shipInArray) => shipInArray.length === ship.length
				);
				if (sunkIndex !== -1) {
					this.ships.splice(sunkIndex, 1);
				}
			}
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

	getCellContent(x, y) {
		return this.board[x][y];
	}

	shipsRemaining() {
		return this.ships.length;
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
/* harmony import */ var _img_gameOver_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/gameOver.png */ "./img/gameOver.png");






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
		const shipsLabel = "Ships remaining";

		// const placement = document.querySelector(".placement");
		const overlay = document.querySelector(".overlay");
		// placement.remove();

		const playfield = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("playfield");

		const upperText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("upper_text");
		const playerZone = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("player_zone");
		const middleZone = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("middle_zone");
		const aiZone = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("ai_zone");

		// Player
		const playerGridContainer = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("player_grid_container");
		const playerGrid = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("player_grid");
		const playerGraphic = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("player_graphic");
		playerGridContainer.append(playerGrid, playerGraphic);

		const playerText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("player_text");
		const playerShipsLabel = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("player_ships_label");
		playerShipsLabel.textContent = shipsLabel;
		const playerShipsText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("player_ships_text");
		playerShipsText.textContent = game.getShipsRemaining(true); // isPlayer = true
		playerText.append(playerShipsLabel, playerShipsText);

		// Center
		const icon = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("game_icon");
		const gameText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("game_text");
		gameText.textContent = "Begin!";

		// AI
		const aiGridContainer = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("ai_grid_container");
		const aiGrid = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("ai_grid");
		const aiGraphic = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("ai_graphic");
		aiGridContainer.append(aiGrid, aiGraphic);

		const aiText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("ai_text");
		const aiShipsLabel = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("ai_ships_label");
		aiShipsLabel.textContent = shipsLabel;
		const aiShipsText = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("ai_ships_text");
		aiShipsText.textContent = game.getShipsRemaining(false); // isPlayer = false
		aiText.append(aiShipsLabel, aiShipsText);

		const grids = _utility_js__WEBPACK_IMPORTED_MODULE_2__.createDiv("grids");
		addGrid(playerGrid, gridSize, "game", true);
		addGrid(aiGrid, gridSize, "game", false);

		// Images
		_utility_js__WEBPACK_IMPORTED_MODULE_2__.addImage(_img_splash_png__WEBPACK_IMPORTED_MODULE_3__, icon);
		_utility_js__WEBPACK_IMPORTED_MODULE_2__.addImage(_img_gameOver_png__WEBPACK_IMPORTED_MODULE_4__, playerGraphic);
		_utility_js__WEBPACK_IMPORTED_MODULE_2__.addImage(_img_gameOver_png__WEBPACK_IMPORTED_MODULE_4__, aiGraphic);

		playerZone.append(playerGridContainer, playerText);
		middleZone.append(icon, gameText);
		aiZone.append(aiGridContainer, aiText);

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
			cell.textContent = "X";
		} else if (result === "miss") {
			cell.classList.add("cell_miss");
		}

		if (result !== false) {
			// Make AI attack
			const aiAttack = game.aiAttack();
			updatePlayerBoard(aiAttack.x, aiAttack.y, aiAttack.result);
			updateGameText(result);
		}
	}

	function updateGameText(result) {
		const gameText = document.querySelector(".game_text");
		const updateText = result.charAt(0).toUpperCase() + result.slice(1);
		const playerShipsText = document.querySelector(".player_ships_text");
		const aiShipsText = document.querySelector(".ai_ships_text");

		gameText.textContent = `${updateText}!`;
		// shake text box on hit
		if (result === "hit") {
			gameText.classList.add("shake");
			setTimeout(() => {
				gameText.classList.remove("shake");
			}, 1000);
		}

		const playerShipsRemaining = game.getShipsRemaining(true);
		const aiShipsRemaining = game.getShipsRemaining(false);

		playerShipsText.textContent = playerShipsRemaining;
		aiShipsText.textContent = aiShipsRemaining;

		if (playerShipsRemaining === 0) {
			endGame(false); // playerWins = true
		} else if (aiShipsRemaining === 0) {
			endGame(true);
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

	function endGame(playerWins) {
		const aiGrid = document.querySelector(".ai_grid");
		const playerGraphic = document.querySelector(".player_graphic");
		const aiGraphic = document.querySelector(".ai_graphic");
		const gameText = document.querySelector(".game_text");

		if (playerWins) {
			aiGraphic.style.display = "block";
			gameText.textContent = "You win!";
		} else if (!playerWins) {
			playerGraphic.style.display = "block";
			gameText.textContent = "You lose!";
		}
		aiGrid.style.pointerEvents = "none";
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

/***/ "./img/gameOver.png":
/*!**************************!*\
  !*** ./img/gameOver.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/gameOver.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLE1BQU0sUUFBUSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxLQUFLLE9BQU8sYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sT0FBTyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxRQUFRLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVks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OztBQUVBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixLQUFLLEdBQUcsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFpQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNXRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2QyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUxvZ2ljLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdWkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3V0aWxpdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcblx0LS1jb2xvci1kYXJrQmx1ZTogIzEzMjg0Mztcblx0LS1jb2xvci1icmlnaHRZZWxsb3c6ICNmZmYwMDA7XG5cdC0tY29sb3ItbXV0ZWRZZWxsb3c6ICNmNGU2MDM7XG59XG5cbioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcblx0aGVpZ2h0OiAxMDB2aDtcblx0d2lkdGg6IDEwMHZ3O1xuXHRtYXJnaW46IDA7XG59XG5cbi5jb250ZW50IHtcblx0aGVpZ2h0OiAxMDAlO1xuXHR3aWR0aDogMTAwJTtcblx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuXHRcdHRvIHJpZ2h0IHRvcCxcblx0XHQjMTMyODQzLFxuXHRcdCMxYjQxNjksXG5cdFx0IzIwNWM5Myxcblx0XHQjMjA3OGJlLFxuXHRcdCMxMjk2ZWJcblx0KTtcbn1cblxuLm92ZXJsYXksXG4uc3BsYXNoX3RleHQsXG4uc3BsYXNoX2ltZyxcbi5zcGxhc2hfYnV0dG9uIHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ZGlzcGxheTogZmxleDtcblx0Zm9udC1mYW1pbHk6IFwiUHJlc3MgU3RhcnQgMlBcIiwgY3Vyc2l2ZTtcblx0aGVpZ2h0OiAxMDAlO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5vdmVybGF5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uc3BsYXNoIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWF4LXdpZHRoOiA1MDBweDtcblx0cGFkZGluZzogMzJweDtcbn1cblxuLnNwbGFzaF90ZXh0IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDNyZW07XG5cdG1hcmdpbi1ib3R0b206IDQ4cHg7XG5cdHRleHQtc2hhZG93OiAycHggN3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyksXG5cdFx0MHB4IC00cHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbi5zcGxhc2ggaW1nIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi55ZWxsb3dCdXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmlnaHRZZWxsb3cpO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdGJvcmRlcjogMDtcblx0Ym94LXNoYWRvdzogcmdiYSgxLCA2MCwgMTM2LCAwLjUpIDAgLTFweCAzcHggMCBpbnNldCxcblx0XHRyZ2JhKDAsIDQ0LCA5NywgMC4xKSAwIDNweCA2cHggMDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0Y29sb3I6ICMwMDA7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0ZGlzcGxheTogaW5oZXJpdDtcblx0Zm9udC1mYW1pbHk6IFwiUHJlc3MgU3RhcnQgMlBcIiwgY3Vyc2l2ZSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcIlNlZ29lIFVJXCIsXG5cdFx0Um9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsXG5cdFx0XCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xuXHRtYXJnaW46IDA7XG5cdG1hcmdpbi10b3A6IDMycHg7XG5cdG1pbi1oZWlnaHQ6IDU2cHg7XG5cdG1pbi13aWR0aDogMTIwcHg7XG5cdHBhZGRpbmc6IDE2cHggMjBweDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHVzZXItc2VsZWN0OiBub25lO1xuXHQtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuXHR3aWR0aDogMTk1cHg7XG5cdHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKTtcbn1cblxuLnllbGxvd0J1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW11dGVkWWVsbG93KTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG4uZ3JlZW5CdXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3JkZXI6IDA7XG5cdGJveC1zaGFkb3c6IHJnYmEoMSwgNjAsIDEzNiwgMC41KSAwIC0xcHggM3B4IDAgaW5zZXQsXG5cdFx0cmdiYSgwLCA0NCwgOTcsIDAuMSkgMCAzcHggNnB4IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGNvbG9yOiAjMDAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGluaGVyaXQ7XG5cdGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmUsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLFxuXHRcdFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxuXHRcdFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0bWFyZ2luOiAwO1xuXHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRtaW4taGVpZ2h0OiA1NnB4O1xuXHRtaW4td2lkdGg6IDEyMHB4O1xuXHRwYWRkaW5nOiAxNnB4IDIwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0d2lkdGg6IDE5NXB4O1xuXHR0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XG59XG5cbi5ncmVlbkJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigxLCAxMDAsIDEpO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuXHQueWVsbG93QnV0dG9uIHtcblx0XHRtaW4td2lkdGg6IDE1MHB4O1xuXHRcdHBhZGRpbmc6IDE2cHggNDRweDtcblx0fVxufVxuXG4ucGxhY2VtZW50IHtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXI6IDVweCBzb2xpZCAjMTI5NmViO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwYWRkaW5nOiAzMnB4O1xuXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsXG5cdFx0cmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCxcblx0XHRyZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xufVxuXG4ucGxhY2VtZW50X2ltYWdlIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5wbGFjZW1lbnQgaW1nIHtcblx0bWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLnBsYWNlbWVudF90ZXh0IHtcblx0bWFyZ2luOiAxNnB4IDA7XG59XG5cbi5wbGFjZW1lbnRfZ3JpZCxcbi5wbGF5ZXJfZ3JpZCxcbi5haV9ncmlkIHtcblx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuXHRtYXJnaW4tdG9wOiAxNnB4O1xuXHRtYXgtd2lkdGg6IDM1NXB4O1xufVxuXG4ucGxhY2VtZW50IC5ncmlkX2NlbGwsXG4uZ3JpZHMgLmdyaWRfY2VsbCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXHRoZWlnaHQ6IDM1cHg7XG5cdHdpZHRoOiAzNXB4O1xufVxuXG4udmFsaWRfY2VsbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xufVxuXG4uaW52YWxpZF9jZWxsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4ucGxhY2VkX2NlbGwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1icmlnaHRZZWxsb3cpO1xufVxuXG4ucGxheWZpZWxkIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzMnB4O1xuXHR3aWR0aDogNzUlO1xufVxuXG4udXBwZXJfdGV4dCxcbi5wbGF5ZXJfdGV4dCxcbi5haV90ZXh0LFxuLmdhbWVfdGV4dCB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXHRjb2xvcjogd2hpdGU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtaW4taGVpZ2h0OiAxMDBweDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5nYW1lX3RleHQge1xuXHRmb250LXNpemU6IDJyZW07XG59XG5cbi5wbGF5ZXJfc2hpcHNfbGFiZWwsXG4uYWlfc2hpcHNfbGFiZWwge1xuXHRmb250LXNpemU6IDEuM3JlbTtcblx0bWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmdyaWRzIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmdhbWVfaWNvbiB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGhlaWdodDogMTAwJTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHdpZHRoOiAzNTJweDtcbn1cblxuLmdhbWVfaWNvbiBpbWcge1xuXHRoZWlnaHQ6IDMwMHB4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGxheWVyX2dyYXBoaWMsXG4uYWlfZ3JhcGhpYyB7XG5cdGRpc3BsYXk6IG5vbmU7XG5cdGxlZnQ6IDA7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA1JTtcbn1cblxuLnBsYXllcl9ncmlkX2NvbnRhaW5lcixcbi5haV9ncmlkX2NvbnRhaW5lciB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBsYXllcl9ncmFwaGljIGltZyxcbi5haV9ncmFwaGljIGltZyB7XG5cdGhlaWdodDogMTAwJTtcblx0bWF4LXdpZHRoOiAzNTBweDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5wbGF5ZXJfem9uZSxcbi5haV96b25lLFxuLm1pZGRsZV96b25lIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAzMnB4O1xuXHRoZWlnaHQ6IDUwMHB4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5jZWxsX2hpZ2hsaWdodCB7XG5cdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcbn1cblxuLmNlbGxfaGl0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uY2VsbF9taXNzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XG59XG5cbi5jZWxsX2hpdCxcbi5jZWxsX21pc3Mge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNoYWtlIHtcblx0YW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2UgaW5maW5pdGU7XG5cdGNvbG9yOiByZWQ7XG59XG5cbkBrZXlmcmFtZXMgc2hha2Uge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHR9XG5cdDIwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xuXHR9XG5cdDQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG5cdH1cblx0NjAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XG5cdH1cblx0ODAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG5cdH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLHlCQUF5QjtDQUN6Qiw2QkFBNkI7Q0FDN0IsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0Msc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYOzs7Ozs7O0VBT0M7QUFDRjs7QUFFQTs7OztDQUlDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isc0NBQXND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RUE7O0NBRUMsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBRUE7OztDQUdDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsU0FBUztDQUNULGFBQWE7Q0FDYiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQywwQkFBMEI7QUFDM0I7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxtQ0FBbUM7Q0FDbkMsVUFBVTtBQUNYOztBQUVBO0NBQ0M7RUFDQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQywyQkFBMkI7Q0FDNUI7Q0FDQTtFQUNDLDBCQUEwQjtDQUMzQjtDQUNBO0VBQ0Msd0JBQXdCO0NBQ3pCO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcblxcdC0tY29sb3ItZGFya0JsdWU6ICMxMzI4NDM7XFxuXFx0LS1jb2xvci1icmlnaHRZZWxsb3c6ICNmZmYwMDA7XFxuXFx0LS1jb2xvci1tdXRlZFllbGxvdzogI2Y0ZTYwMztcXG59XFxuXFxuKiB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHR3aWR0aDogMTAwdnc7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGVudCB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcXG5cXHRcXHR0byByaWdodCB0b3AsXFxuXFx0XFx0IzEzMjg0MyxcXG5cXHRcXHQjMWI0MTY5LFxcblxcdFxcdCMyMDVjOTMsXFxuXFx0XFx0IzIwNzhiZSxcXG5cXHRcXHQjMTI5NmViXFxuXFx0KTtcXG59XFxuXFxuLm92ZXJsYXksXFxuLnNwbGFzaF90ZXh0LFxcbi5zcGxhc2hfaW1nLFxcbi5zcGxhc2hfYnV0dG9uIHtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG5cXG4uc3BsYXNoIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWF4LXdpZHRoOiA1MDBweDtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcbn1cXG5cXG4uc3BsYXNoX3RleHQge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDNyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogNDhweDtcXG5cXHR0ZXh0LXNoYWRvdzogMnB4IDdweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxcblxcdFxcdDBweCAtNHB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xcbn1cXG5cXG4uc3BsYXNoIGltZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi55ZWxsb3dCdXR0b24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyaWdodFllbGxvdyk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdGJvcmRlcjogMDtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDEsIDYwLCAxMzYsIDAuNSkgMCAtMXB4IDNweCAwIGluc2V0LFxcblxcdFxcdHJnYmEoMCwgNDQsIDk3LCAwLjEpIDAgM3B4IDZweCAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGluaGVyaXQ7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmUsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIixcXG5cXHRcXHRSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuXFx0XFx0XFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDI0cHg7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1hcmdpbi10b3A6IDMycHg7XFxuXFx0bWluLWhlaWdodDogNTZweDtcXG5cXHRtaW4td2lkdGg6IDEyMHB4O1xcblxcdHBhZGRpbmc6IDE2cHggMjBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0d2lkdGg6IDE5NXB4O1xcblxcdHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XFxufVxcblxcbi55ZWxsb3dCdXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW11dGVkWWVsbG93KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbi5ncmVlbkJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuXFx0Ym9yZGVyLXJhZGl1czogNHB4O1xcblxcdGJvcmRlcjogMDtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDEsIDYwLCAxMzYsIDAuNSkgMCAtMXB4IDNweCAwIGluc2V0LFxcblxcdFxcdHJnYmEoMCwgNDQsIDk3LCAwLjEpIDAgM3B4IDZweCAwO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0Y29sb3I6ICMwMDA7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGRpc3BsYXk6IGluaGVyaXQ7XFxuXFx0Zm9udC1mYW1pbHk6IFxcXCJQcmVzcyBTdGFydCAyUFxcXCIsIGN1cnNpdmUsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXFxcIlNlZ29lIFVJXFxcIixcXG5cXHRcXHRSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsXFxuXFx0XFx0XFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCI7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0bGluZS1oZWlnaHQ6IDI0cHg7XFxuXFx0bWFyZ2luOiAwO1xcblxcdG1hcmdpbi10b3A6IDMycHg7XFxuXFx0bWluLWhlaWdodDogNTZweDtcXG5cXHRtaW4td2lkdGg6IDEyMHB4O1xcblxcdHBhZGRpbmc6IDE2cHggMjBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0d2lkdGg6IDE5NXB4O1xcblxcdHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XFxufVxcblxcbi5ncmVlbkJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDEsIDEwMCwgMSk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXHQueWVsbG93QnV0dG9uIHtcXG5cXHRcXHRtaW4td2lkdGg6IDE1MHB4O1xcblxcdFxcdHBhZGRpbmc6IDE2cHggNDRweDtcXG5cXHR9XFxufVxcblxcbi5wbGFjZW1lbnQge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogMjVweDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Ym9yZGVyOiA1cHggc29saWQgIzEyOTZlYjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0cGFkZGluZzogMzJweDtcXG5cXHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsXFxuXFx0XFx0cmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCxcXG5cXHRcXHRyZ2JhKDAsIDAsIDAsIDAuMTcpIDBweCAxMnB4IDEzcHgsIHJnYmEoMCwgMCwgMCwgMC4wOSkgMHB4IC0zcHggNXB4O1xcbn1cXG5cXG4ucGxhY2VtZW50X2ltYWdlIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5wbGFjZW1lbnQgaW1nIHtcXG5cXHRtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucGxhY2VtZW50X3RleHQge1xcblxcdG1hcmdpbjogMTZweCAwO1xcbn1cXG5cXG4ucGxhY2VtZW50X2dyaWQsXFxuLnBsYXllcl9ncmlkLFxcbi5haV9ncmlkIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcblxcdG1hcmdpbi10b3A6IDE2cHg7XFxuXFx0bWF4LXdpZHRoOiAzNTVweDtcXG59XFxuXFxuLnBsYWNlbWVudCAuZ3JpZF9jZWxsLFxcbi5ncmlkcyAuZ3JpZF9jZWxsIHtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRoZWlnaHQ6IDM1cHg7XFxuXFx0d2lkdGg6IDM1cHg7XFxufVxcblxcbi52YWxpZF9jZWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcXG59XFxuXFxuLmludmFsaWRfY2VsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ucGxhY2VkX2NlbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJyaWdodFllbGxvdyk7XFxufVxcblxcbi5wbGF5ZmllbGQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDMycHg7XFxuXFx0d2lkdGg6IDc1JTtcXG59XFxuXFxuLnVwcGVyX3RleHQsXFxuLnBsYXllcl90ZXh0LFxcbi5haV90ZXh0LFxcbi5nYW1lX3RleHQge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRtaW4taGVpZ2h0OiAxMDBweDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdhbWVfdGV4dCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4ucGxheWVyX3NoaXBzX2xhYmVsLFxcbi5haV9zaGlwc19sYWJlbCB7XFxuXFx0Zm9udC1zaXplOiAxLjNyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLmdyaWRzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmdhbWVfaWNvbiB7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHR3aWR0aDogMzUycHg7XFxufVxcblxcbi5nYW1lX2ljb24gaW1nIHtcXG5cXHRoZWlnaHQ6IDMwMHB4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJfZ3JhcGhpYyxcXG4uYWlfZ3JhcGhpYyB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG5cXHRsZWZ0OiAwO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDUlO1xcbn1cXG5cXG4ucGxheWVyX2dyaWRfY29udGFpbmVyLFxcbi5haV9ncmlkX2NvbnRhaW5lciB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyX2dyYXBoaWMgaW1nLFxcbi5haV9ncmFwaGljIGltZyB7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcblxcdG1heC13aWR0aDogMzUwcHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5wbGF5ZXJfem9uZSxcXG4uYWlfem9uZSxcXG4ubWlkZGxlX3pvbmUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDMycHg7XFxuXFx0aGVpZ2h0OiA1MDBweDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5jZWxsX2hpZ2hsaWdodCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogbGlnaHRza3libHVlO1xcbn1cXG5cXG4uY2VsbF9oaXQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNlbGxfbWlzcyB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogZGFya2JsdWU7XFxufVxcblxcbi5jZWxsX2hpdCxcXG4uY2VsbF9taXNzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGFrZSB7XFxuXFx0YW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2UgaW5maW5pdGU7XFxuXFx0Y29sb3I6IHJlZDtcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuXFx0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcXG5cXHR9XFxuXFx0MjAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XFxuXFx0fVxcblxcdDQwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XFxuXFx0fVxcblxcdDYwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xcblxcdH1cXG5cXHQ4MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcblxcdH1cXG5cXHQxMDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IFBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IGdhbWVMb2dpYyA9ICgpID0+IHtcblx0Ly8gY3JlYXRlIHBsYXllcnNcblx0Y29uc3QgcGxheWVyID0gbmV3IFBsYXllcihcInBsYXllclwiKTtcblx0Y29uc3QgYWkgPSBuZXcgUGxheWVyKFwiYWlcIiwgdHJ1ZSk7XG5cdGxldCBpc1BsYXllclR1cm4gPSB0cnVlO1xuXHRsZXQgaXNPdmVyID0gZmFsc2U7XG5cblx0Ly8gY3JlYXRlIGdhbWVib2FyZHNcblx0Y29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cdGNvbnN0IGFpQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cblx0ZnVuY3Rpb24gY2hlY2tGaXRzKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCA9IHRydWUpIHtcblx0XHRyZXR1cm4gcGxheWVyQm9hcmQuc2hpcEZpdHMoeCwgeSwgbGVuZ3RoLCBpc1ZlcnRpY2FsKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHZhbGlkWFkoeCwgeSkge1xuXHRcdHJldHVybiBwbGF5ZXJCb2FyZC5pc1ZhbGlkWFkoeCwgeSkgJiYgcGxheWVyQm9hcmQuc3BhY2VJc0VtcHR5KHgsIHkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q2VsbENvbnRlbnQoeCwgeSwgaXNQbGF5ZXIpIHtcblx0XHRsZXQgY2VsbCA9IG51bGw7XG5cblx0XHRpZiAoaXNQbGF5ZXIpIHtcblx0XHRcdHJldHVybiBwbGF5ZXJCb2FyZC5nZXRDZWxsQ29udGVudCh4LCB5KTtcblx0XHR9IGVsc2UgaWYgKCFpc1BsYXllcikge1xuXHRcdFx0cmV0dXJuIGFpQm9hcmQuZ2V0Q2VsbENvbnRlbnQoeCwgeSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROZXh0U2hpcCgpIHtcblx0XHRyZXR1cm4gcGxheWVyQm9hcmQuZ2V0TmV4dFNoaXAoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUN1cnJlbnRTaGlwKCkge1xuXHRcdHBsYXllckJvYXJkLnJlbW92ZUN1cnJlbnRTaGlwKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRTaGlwKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCwgbmFtZSkge1xuXHRcdHBsYXllckJvYXJkLnBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGlzVmVydGljYWwsIG5hbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNQbGF5ZXJzVHVybigpIHtcblx0XHRyZXR1cm4gaXNQbGF5ZXJUdXJuO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5pc092ZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBjaGFuZ2VQbGF5ZXIoKSB7XG5cdFx0aXNQbGF5ZXJUdXJuID0gaXNQbGF5ZXJUdXJuID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGxheWVyQXR0YWNrKHgsIHkpIHtcblx0XHRpZiAoIWlzUGxheWVyVHVybikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCByZXN1bHQgPSBhaUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdHJldHVybiBmYWxzZTsgLy8gaW52YWxpZCBhdHRhY2tcblx0XHR9XG5cdFx0Y2hhbmdlUGxheWVyKCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGFpQXR0YWNrKCkge1xuXHRcdGNvbnN0IHRhcmdldHMgPSBwbGF5ZXJCb2FyZC5nZXRBdmFpbGFibGVDZWxscygpO1xuXG5cdFx0aWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBBSSB2ZXJzaW9uIDE6IGdlbmVyYXRlIHJhbmRvbSBhdHRhY2tcblx0XHRjb25zdCByYW5kb21UYXJnZXRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRhcmdldHMubGVuZ3RoKTtcblx0XHRjb25zdCB0YXJnZXRDZWxsID0gdGFyZ2V0c1tyYW5kb21UYXJnZXRJbmRleF07XG5cblx0XHRjb25zdCByZXN1bHQgPSBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHRhcmdldENlbGwueCwgdGFyZ2V0Q2VsbC55KTtcblx0XHRjaGFuZ2VQbGF5ZXIoKTtcblxuXHRcdC8vIHJldHVybiBhdHRhY2sgY29vcmRpbmF0ZXMgYW5kIHJlc3VsdHMgaW4gYW4gb2JqZWN0XG5cdFx0cmV0dXJuIHsgeDogdGFyZ2V0Q2VsbC54LCB5OiB0YXJnZXRDZWxsLnksIHJlc3VsdDogcmVzdWx0IH07XG5cdH1cblxuXHRmdW5jdGlvbiBwb3B1bGF0ZUJvYXJkcygpIHtcblx0XHQvLyBQb3B1bGF0ZSBwbGF5ZXIncyBib2FyZFxuXHRcdHBsYXllckJvYXJkLnBsYWNlU2hpcCgwLCAwLCA1LCB0cnVlLCBcIkNhcnJpZXJcIik7XG5cdFx0cGxheWVyQm9hcmQucGxhY2VTaGlwKDMsIDQsIDQsIGZhbHNlLCBcIkJhdHRsZXNoaXBcIik7XG5cdFx0cGxheWVyQm9hcmQucGxhY2VTaGlwKDcsIDYsIDMsIHRydWUsIFwiQ3J1aXNlclwiKTtcblx0XHRwbGF5ZXJCb2FyZC5wbGFjZVNoaXAoNiwgMiwgMywgZmFsc2UsIFwiU3VibWFyaW5lXCIpO1xuXHRcdHBsYXllckJvYXJkLnBsYWNlU2hpcCgxLCA2LCAyLCBmYWxzZSwgXCJEZXN0cm95ZXJcIik7XG5cdFx0Ly8gUG9wdWxhdGUgYWkncyBib2FyZFxuXHRcdGFpQm9hcmQucGxhY2VTaGlwKDAsIDAsIDUsIHRydWUsIFwiQ2FycmllclwiKTtcblx0XHRhaUJvYXJkLnBsYWNlU2hpcCgzLCA0LCA0LCBmYWxzZSwgXCJCYXR0bGVzaGlwXCIpO1xuXHRcdGFpQm9hcmQucGxhY2VTaGlwKDcsIDYsIDMsIHRydWUsIFwiQ3J1aXNlclwiKTtcblx0XHRhaUJvYXJkLnBsYWNlU2hpcCg2LCAyLCAzLCBmYWxzZSwgXCJTdWJtYXJpbmVcIik7XG5cdFx0YWlCb2FyZC5wbGFjZVNoaXAoMSwgNiwgMiwgZmFsc2UsIFwiRGVzdHJveWVyXCIpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U2hpcHNSZW1haW5pbmcoaXNQbGF5ZXIpIHtcblx0XHRpZiAoaXNQbGF5ZXIpIHtcblx0XHRcdHJldHVybiBwbGF5ZXJCb2FyZC5zaGlwc1JlbWFpbmluZygpO1xuXHRcdH1cblx0XHRyZXR1cm4gYWlCb2FyZC5zaGlwc1JlbWFpbmluZygpO1xuXHR9XG5cblx0cG9wdWxhdGVCb2FyZHMoKTtcblxuXHRyZXR1cm4ge1xuXHRcdGFkZFNoaXAsXG5cdFx0cGxheWVyQXR0YWNrLFxuXHRcdGNoZWNrRml0cyxcblx0XHRnZXRDZWxsQ29udGVudCxcblx0XHRnZXRTaGlwc1JlbWFpbmluZyxcblx0XHRpc1BsYXllcnNUdXJuLFxuXHRcdGdldE5leHRTaGlwLFxuXHRcdGlzR2FtZU92ZXIsXG5cdFx0cmVtb3ZlQ3VycmVudFNoaXAsXG5cdFx0dmFsaWRYWSxcblx0XHRhaUF0dGFjayxcblx0fTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVMb2dpYztcbiIsImltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXAuanNcIjtcbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyLmpzXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG5cdGNvbnN0cnVjdG9yKHNpemUgPSAxMCkge1xuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XG5cdFx0dGhpcy5ib2FyZCA9IFtdO1xuXHRcdHRoaXMuc2hpcHMgPSBbXTtcblx0XHQvLyB0aGlzLnBsYXllciA9IG51bGw7XG5cdFx0dGhpcy5hdmFpbGFibGVDZWxscyA9IFtdO1xuXHRcdHRoaXMuaW5pdGlhbGl6ZUJvYXJkKCk7XG5cdH1cblxuXHRpbml0aWFsaXplQm9hcmQoKSB7XG5cdFx0Ly8gSW5pdGlhbGl6ZSB0aGUgYm9hcmQgYXMgYSAyRCBhcnJheSBvZiBvYmplY3RzXG5cdFx0Zm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNpemU7IHgrKykge1xuXHRcdFx0Y29uc3QgY29sID0gW107XG5cblx0XHRcdGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5zaXplOyB5KyspIHtcblx0XHRcdFx0Y29sLnB1c2goeyBpc0VtcHR5OiB0cnVlLCBpc0F0dGFja2VkOiBmYWxzZSwgc2hpcDogbnVsbCB9KTtcblx0XHRcdFx0dGhpcy5hdmFpbGFibGVDZWxscy5wdXNoKHsgeCwgeSB9KTtcblx0XHRcdH1cblx0XHRcdHRoaXMuYm9hcmQucHVzaChjb2wpO1xuXHRcdH1cblxuXHRcdHRoaXMubG9hZFNoaXAoNSwgXCJjYXJyaWVyXCIpO1xuXHRcdHRoaXMubG9hZFNoaXAoNCwgXCJiYXR0bGVzaGlwXCIpO1xuXHRcdHRoaXMubG9hZFNoaXAoMywgXCJjcnVpc2VyXCIpO1xuXHRcdHRoaXMubG9hZFNoaXAoMywgXCJzdWJtYXJpbmVcIik7XG5cdFx0dGhpcy5sb2FkU2hpcCgyLCBcInBhdHJvbCBib2F0XCIpO1xuXHR9XG5cblx0bG9hZFNoaXAobGVuZ3RoLCBuYW1lKSB7XG5cdFx0Y29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgbmFtZSk7XG5cdFx0dGhpcy5zaGlwcy5wdXNoKG5ld1NoaXApO1xuXHR9XG5cblx0Z2V0TmV4dFNoaXAoKSB7XG5cdFx0aWYgKHRoaXMuc2hpcHMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIHRoaXMuc2hpcHNbMF07XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Z2V0QXZhaWxhYmxlQ2VsbHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuYXZhaWxhYmxlQ2VsbHM7XG5cdH1cblxuXHRyZW1vdmVDdXJyZW50U2hpcCgpIHtcblx0XHRpZiAodGhpcy5zaGlwcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnNoaXBzLnNoaWZ0KCk7XG5cdFx0fVxuXHR9XG5cblx0cGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCwgbmFtZSkge1xuXHRcdGlmICghdGhpcy5zaGlwRml0cyh4LCB5LCBsZW5ndGgsIGlzVmVydGljYWwpKSB7XG5cdFx0XHQvLyBTaGlwIGRvZXMgbm90IGZpdCBhdCBnaXZlbiBjb29yZGluYXRlc1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vcGxhY2Ugc2hpcFxuXHRcdGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChsZW5ndGgpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgbmV3WCA9IHggKyAoaXNWZXJ0aWNhbCA/IDAgOiBpKTtcblx0XHRcdGNvbnN0IG5ld1kgPSB5ICsgKGlzVmVydGljYWwgPyBpIDogMCk7XG5cblx0XHRcdGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW25ld1hdW25ld1ldO1xuXHRcdFx0Y2VsbC5pc0VtcHR5ID0gZmFsc2U7XG5cdFx0XHRjZWxsLnNoaXAgPSBuZXdTaGlwO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHNoaXBGaXRzKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCkge1xuXHRcdGxldCBzaGlwRml0cyA9IHRydWU7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBuZXdYID0geCArIChpc1ZlcnRpY2FsID8gMCA6IGkpO1xuXHRcdFx0Y29uc3QgbmV3WSA9IHkgKyAoaXNWZXJ0aWNhbCA/IGkgOiAwKTtcblx0XHRcdGlmICghdGhpcy5pc1ZhbGlkWFkobmV3WCwgbmV3WSkgfHwgIXRoaXMuc3BhY2VJc0VtcHR5KG5ld1gsIG5ld1kpKSB7XG5cdFx0XHRcdHNoaXBGaXRzID0gZmFsc2U7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gc2hpcEZpdHM7XG5cdH1cblxuXHRpc1ZhbGlkWFkoeCwgeSkge1xuXHRcdHJldHVybiB4ID49IDAgJiYgeSA+PSAwICYmIHggPCB0aGlzLnNpemUgJiYgeSA8IHRoaXMuc2l6ZTtcblx0fVxuXG5cdHNwYWNlSXNFbXB0eSh4LCB5KSB7XG5cdFx0cmV0dXJuIHRoaXMuYm9hcmRbeF1beV0uaXNFbXB0eTtcblx0fVxuXG5cdHJlY2VpdmVBdHRhY2soeCwgeSkge1xuXHRcdGlmICghdGhpcy5pc1ZhbGlkQXR0YWNrKHgsIHkpKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdC8vIE1ha2UgYXR0YWNrIG9uIHNoaXAgYXQgeCx5XG5cdFx0bGV0IHJlc3VsdCA9IFwibWlzc1wiO1xuXHRcdHRoaXMuYm9hcmRbeF1beV0uaXNBdHRhY2tlZCA9IHRydWU7XG5cblx0XHQvLyBoaXRcblx0XHRpZiAodGhpcy5ib2FyZFt4XVt5XS5zaGlwKSB7XG5cdFx0XHRjb25zdCBzaGlwID0gdGhpcy5ib2FyZFt4XVt5XS5zaGlwO1xuXHRcdFx0c2hpcC5oaXQoKTtcblxuXHRcdFx0aWYgKHNoaXAuaXNTdW5rKCkpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBzdW5rIHNoaXAgZnJvbSB0aGUgYXJyYXlcblx0XHRcdFx0Y29uc3Qgc3Vua0luZGV4ID0gdGhpcy5zaGlwcy5maW5kSW5kZXgoXG5cdFx0XHRcdFx0KHNoaXBJbkFycmF5KSA9PiBzaGlwSW5BcnJheS5sZW5ndGggPT09IHNoaXAubGVuZ3RoXG5cdFx0XHRcdCk7XG5cdFx0XHRcdGlmIChzdW5rSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0dGhpcy5zaGlwcy5zcGxpY2Uoc3Vua0luZGV4LCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmVzdWx0ID0gXCJoaXRcIjtcblx0XHR9XG5cblx0XHQvLyBGaW5kIGF0dGFjayBpbmRleCBpbiBhdmFpbGFibGVDZWxscyBhbmQgcmVtb3ZlXG5cdFx0Y29uc3QgY2VsbEluZGV4ID0gdGhpcy5hdmFpbGFibGVDZWxscy5maW5kSW5kZXgoXG5cdFx0XHQoY2VsbCkgPT4gY2VsbC54ID09PSB4ICYmIGNlbGwueSA9PT0geVxuXHRcdCk7XG5cdFx0aWYgKGNlbGxJbmRleCAhPT0gLTEpIHtcblx0XHRcdHRoaXMuYXZhaWxhYmxlQ2VsbHMuc3BsaWNlKGNlbGxJbmRleCwgMSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGlzVmFsaWRBdHRhY2soeCwgeSkge1xuXHRcdHJldHVybiB0aGlzLmlzVmFsaWRYWSh4LCB5KSAmJiAhdGhpcy5ib2FyZFt4XVt5XS5pc0F0dGFja2VkO1xuXHR9XG5cblx0ZGlzcGxheUJvYXJkKCkge1xuXHRcdGZvciAobGV0IHkgPSB0aGlzLnNpemUgLSAxOyB5ID49IDA7IHktLSkge1xuXHRcdFx0bGV0IG91dHB1dCA9IFwiXCI7XG5cdFx0XHRmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuc2l6ZTsgeCsrKSB7XG5cdFx0XHRcdGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3hdW3ldO1xuXHRcdFx0XHRvdXRwdXQgKz0gY2VsbC5pc0VtcHR5ID8gXCJFIFwiIDogXCJTIFwiO1xuXHRcdFx0fVxuXHRcdFx0Y29uc29sZS5sb2cob3V0cHV0KTtcblx0XHR9XG5cdH1cblxuXHRnZXRTaGlwKHgsIHkpIHtcblx0XHRyZXR1cm4gdGhpcy5ib2FyZFt4XVt5XS5zaGlwO1xuXHR9XG5cblx0Z2V0U2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5zaXplO1xuXHR9XG5cblx0Z2V0Q2VsbENvbnRlbnQoeCwgeSkge1xuXHRcdHJldHVybiB0aGlzLmJvYXJkW3hdW3ldO1xuXHR9XG5cblx0c2hpcHNSZW1haW5pbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2hpcHMubGVuZ3RoO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKG5hbWUgPSBcInBsYXllclwiLCBpc0NvbXB1dGVyID0gZmFsc2UpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuaXNDb21wdXRlciA9IGlzQ29tcHV0ZXI7XG5cdFx0dGhpcy5zaGlwcyA9IFtdO1xuXHR9XG5cblx0YWRkU2hpcChzaGlwKSB7XG5cdFx0aWYgKHNoaXApIHRoaXMuc2hpcHMucHVzaChzaGlwKTtcblx0fVxuXG5cdGNvbXB1dGVyQXR0YWNrKG9wcG9uZW50Qm9hcmQpIHtcblx0XHRpZiAoIXRoaXMuaXNDb21wdXRlcikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIEdlbmVyYXRlIGF0dGFjayBvbiBwbGF5ZXIgYm9hcmRcblx0XHRjb25zdCBzaXplID0gb3Bwb25lbnRCb2FyZC5nZXRTaXplKCk7XG5cdFx0bGV0IGF0dGFja1gsIGF0dGFja1k7XG5cblx0XHRkbyB7XG5cdFx0XHQvLyBHZW5lcmF0ZSB1bmlxdWUgcmFuZG9tIGF0dGFja1xuXHRcdFx0YXR0YWNrWCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpO1xuXHRcdFx0YXR0YWNrWSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpO1xuXHRcdH0gd2hpbGUgKCFvcHBvbmVudEJvYXJkLnJlY2VpdmVBdHRhY2soYXR0YWNrWCwgYXR0YWNrWSkpO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG5cdGNvbnN0cnVjdG9yKGxlbmd0aCA9IDAsIG5hbWUgPSBcIlwiKSB7XG5cdFx0Y29uc3QgbWluTGVuZ3RoID0gMjtcblx0XHRjb25zdCBtYXhMZW5ndGggPSA1O1xuXHRcdGlmIChsZW5ndGggPCBtaW5MZW5ndGggfHwgbGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJTaGlwIGxlbmd0aCBtdXN0IGJlIGJldHdlZW4gMiBhbmQgNS5cIik7XG5cdFx0fVxuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5sZW5ndGggPSBsZW5ndGg7XG5cdFx0dGhpcy5oaXRzID0gMDtcblx0XHR0aGlzLnN1bmsgPSBmYWxzZTtcblx0fVxuXG5cdGhpdCgpIHtcblx0XHRpZiAoIXRoaXMuaXNTdW5rKCkpIHtcblx0XHRcdHRoaXMuaGl0cysrO1xuXHRcdFx0dGhpcy5zdW5rID0gdGhpcy5pc1N1bmsoKTtcblx0XHR9XG5cdH1cblxuXHRpc1N1bmsoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGg7XG5cdH1cblxuXHRudW1IaXRzKCkge1xuXHRcdHJldHVybiB0aGlzLmhpdHM7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZ2FtZUxvZ2ljIGZyb20gXCIuL2dhbWVMb2dpYy5qc1wiO1xuaW1wb3J0ICogYXMgdXRpbGl0eSBmcm9tIFwiLi91dGlsaXR5LmpzXCI7XG5pbXBvcnQgc2hpcEltZyBmcm9tIFwiLi4vaW1nL3NwbGFzaC5wbmdcIjtcbmltcG9ydCBlbmRHcmFwaGljIGZyb20gXCIuLi9pbWcvZ2FtZU92ZXIucG5nXCI7XG5cbmNvbnN0IHVpID0gKCgpID0+IHtcblx0Y29uc3QgZ2FtZSA9IGdhbWVMb2dpYygpO1xuXHRjb25zdCBncmlkU2l6ZSA9IDEwO1xuXHRsZXQgcGxhY2VtZW50Um90YXRpb24gPSB0cnVlO1xuXG5cdGZ1bmN0aW9uIGxvYWRTcGxhc2goKSB7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblxuXHRcdGNvbnN0IHNwbGFzaCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwic3BsYXNoXCIpO1xuXHRcdGNvbnN0IHNwbGFzaFRleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInNwbGFzaF90ZXh0XCIpO1xuXHRcdGNvbnN0IHNwbGFzaEltZyA9IHV0aWxpdHkuY3JlYXRlRGl2KFwic3BsYXNoX2ltZ1wiKTtcblx0XHRjb25zdCBzcGxhc2hCdXR0b24gPSB1dGlsaXR5LmNyZWF0ZURpdihcInNwbGFzaF9idXR0b25cIik7XG5cblx0XHRzcGxhc2hUZXh0LnRleHRDb250ZW50ID0gXCJCQVRUTEVTSElQXCI7XG5cdFx0dXRpbGl0eS5hZGRJbWFnZShzaGlwSW1nLCBzcGxhc2hJbWcpO1xuXG5cdFx0Y29uc3Qgc3RhcnRCdXR0b24gPSB1dGlsaXR5LmNyZWF0ZUJ1dHRvbihcInllbGxvd0J1dHRvblwiLCBcIlNUQVJUIVwiKTtcblx0XHRzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9hZFBsYWNlbWVudFVJKTtcblx0XHRzcGxhc2hCdXR0b24uYXBwZW5kQ2hpbGQoc3RhcnRCdXR0b24pO1xuXG5cdFx0c3BsYXNoLmFwcGVuZChzcGxhc2hUZXh0LCBzcGxhc2hJbWcsIHNwbGFzaEJ1dHRvbik7XG5cdFx0b3ZlcmxheS5hcHBlbmRDaGlsZChzcGxhc2gpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuXHRcdGNvbnN0IHNoaXBzTGFiZWwgPSBcIlNoaXBzIHJlbWFpbmluZ1wiO1xuXG5cdFx0Ly8gY29uc3QgcGxhY2VtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGFjZW1lbnRcIik7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblx0XHQvLyBwbGFjZW1lbnQucmVtb3ZlKCk7XG5cblx0XHRjb25zdCBwbGF5ZmllbGQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYXlmaWVsZFwiKTtcblxuXHRcdGNvbnN0IHVwcGVyVGV4dCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwidXBwZXJfdGV4dFwiKTtcblx0XHRjb25zdCBwbGF5ZXJab25lID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGF5ZXJfem9uZVwiKTtcblx0XHRjb25zdCBtaWRkbGVab25lID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJtaWRkbGVfem9uZVwiKTtcblx0XHRjb25zdCBhaVpvbmUgPSB1dGlsaXR5LmNyZWF0ZURpdihcImFpX3pvbmVcIik7XG5cblx0XHQvLyBQbGF5ZXJcblx0XHRjb25zdCBwbGF5ZXJHcmlkQ29udGFpbmVyID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGF5ZXJfZ3JpZF9jb250YWluZXJcIik7XG5cdFx0Y29uc3QgcGxheWVyR3JpZCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxheWVyX2dyaWRcIik7XG5cdFx0Y29uc3QgcGxheWVyR3JhcGhpYyA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxheWVyX2dyYXBoaWNcIik7XG5cdFx0cGxheWVyR3JpZENvbnRhaW5lci5hcHBlbmQocGxheWVyR3JpZCwgcGxheWVyR3JhcGhpYyk7XG5cblx0XHRjb25zdCBwbGF5ZXJUZXh0ID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGF5ZXJfdGV4dFwiKTtcblx0XHRjb25zdCBwbGF5ZXJTaGlwc0xhYmVsID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGF5ZXJfc2hpcHNfbGFiZWxcIik7XG5cdFx0cGxheWVyU2hpcHNMYWJlbC50ZXh0Q29udGVudCA9IHNoaXBzTGFiZWw7XG5cdFx0Y29uc3QgcGxheWVyU2hpcHNUZXh0ID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGF5ZXJfc2hpcHNfdGV4dFwiKTtcblx0XHRwbGF5ZXJTaGlwc1RleHQudGV4dENvbnRlbnQgPSBnYW1lLmdldFNoaXBzUmVtYWluaW5nKHRydWUpOyAvLyBpc1BsYXllciA9IHRydWVcblx0XHRwbGF5ZXJUZXh0LmFwcGVuZChwbGF5ZXJTaGlwc0xhYmVsLCBwbGF5ZXJTaGlwc1RleHQpO1xuXG5cdFx0Ly8gQ2VudGVyXG5cdFx0Y29uc3QgaWNvbiA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiZ2FtZV9pY29uXCIpO1xuXHRcdGNvbnN0IGdhbWVUZXh0ID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJnYW1lX3RleHRcIik7XG5cdFx0Z2FtZVRleHQudGV4dENvbnRlbnQgPSBcIkJlZ2luIVwiO1xuXG5cdFx0Ly8gQUlcblx0XHRjb25zdCBhaUdyaWRDb250YWluZXIgPSB1dGlsaXR5LmNyZWF0ZURpdihcImFpX2dyaWRfY29udGFpbmVyXCIpO1xuXHRcdGNvbnN0IGFpR3JpZCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiYWlfZ3JpZFwiKTtcblx0XHRjb25zdCBhaUdyYXBoaWMgPSB1dGlsaXR5LmNyZWF0ZURpdihcImFpX2dyYXBoaWNcIik7XG5cdFx0YWlHcmlkQ29udGFpbmVyLmFwcGVuZChhaUdyaWQsIGFpR3JhcGhpYyk7XG5cblx0XHRjb25zdCBhaVRleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcImFpX3RleHRcIik7XG5cdFx0Y29uc3QgYWlTaGlwc0xhYmVsID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJhaV9zaGlwc19sYWJlbFwiKTtcblx0XHRhaVNoaXBzTGFiZWwudGV4dENvbnRlbnQgPSBzaGlwc0xhYmVsO1xuXHRcdGNvbnN0IGFpU2hpcHNUZXh0ID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJhaV9zaGlwc190ZXh0XCIpO1xuXHRcdGFpU2hpcHNUZXh0LnRleHRDb250ZW50ID0gZ2FtZS5nZXRTaGlwc1JlbWFpbmluZyhmYWxzZSk7IC8vIGlzUGxheWVyID0gZmFsc2Vcblx0XHRhaVRleHQuYXBwZW5kKGFpU2hpcHNMYWJlbCwgYWlTaGlwc1RleHQpO1xuXG5cdFx0Y29uc3QgZ3JpZHMgPSB1dGlsaXR5LmNyZWF0ZURpdihcImdyaWRzXCIpO1xuXHRcdGFkZEdyaWQocGxheWVyR3JpZCwgZ3JpZFNpemUsIFwiZ2FtZVwiLCB0cnVlKTtcblx0XHRhZGRHcmlkKGFpR3JpZCwgZ3JpZFNpemUsIFwiZ2FtZVwiLCBmYWxzZSk7XG5cblx0XHQvLyBJbWFnZXNcblx0XHR1dGlsaXR5LmFkZEltYWdlKHNoaXBJbWcsIGljb24pO1xuXHRcdHV0aWxpdHkuYWRkSW1hZ2UoZW5kR3JhcGhpYywgcGxheWVyR3JhcGhpYyk7XG5cdFx0dXRpbGl0eS5hZGRJbWFnZShlbmRHcmFwaGljLCBhaUdyYXBoaWMpO1xuXG5cdFx0cGxheWVyWm9uZS5hcHBlbmQocGxheWVyR3JpZENvbnRhaW5lciwgcGxheWVyVGV4dCk7XG5cdFx0bWlkZGxlWm9uZS5hcHBlbmQoaWNvbiwgZ2FtZVRleHQpO1xuXHRcdGFpWm9uZS5hcHBlbmQoYWlHcmlkQ29udGFpbmVyLCBhaVRleHQpO1xuXG5cdFx0Z3JpZHMuYXBwZW5kKHBsYXllclpvbmUsIG1pZGRsZVpvbmUsIGFpWm9uZSk7XG5cdFx0cGxheWZpZWxkLmFwcGVuZCh1cHBlclRleHQsIGdyaWRzKTtcblx0XHRvdmVybGF5LmFwcGVuZChwbGF5ZmllbGQpO1xuXG5cdFx0ZHJhd0JvYXJkKHBsYXllckdyaWQsIHRydWUpO1xuXG5cdFx0dHVybnNMb29wKCk7IC8vIFN0YXJ0IG1haW4gZ2FtZSBsb29wLlxuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZFBsYWNlbWVudFVJKCkge1xuXHRcdGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIik7XG5cdFx0Y29uc3Qgc3BsYXNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGxhc2hcIik7XG5cdFx0c3BsYXNoLnJlbW92ZSgpO1xuXG5cdFx0Y29uc3QgcGxhY2VtZW50ID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGFjZW1lbnRcIik7XG5cdFx0Y29uc3Qgc2hpcCA9IGdhbWUuZ2V0TmV4dFNoaXAoKTtcblxuXHRcdGNvbnN0IGljb24gPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYWNlbWVudF9pbWFnZVwiKTtcblx0XHRjb25zdCB0ZXh0ID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGFjZW1lbnRfdGV4dFwiKTtcblx0XHRjb25zdCByb3RhdGVCdXR0b24gPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYWNlbWVudF9yb3RhdGVcIik7XG5cdFx0Y29uc3QgcGxhY2VHcmlkID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGFjZW1lbnRfZ3JpZFwiKTtcblxuXHRcdHV0aWxpdHkuYWRkSW1hZ2Uoc2hpcEltZywgaWNvbik7XG5cdFx0dGV4dC50ZXh0Q29udGVudCA9IGBQbGFjZSB5b3VyICR7c2hpcC5uYW1lfSFgO1xuXG5cdFx0Ly8gTGlzdGVuZXJzXG5cdFx0cGxhY2VHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBjbGVhckhpZ2hsaWdodHMpO1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHV0aWxpdHkuY3JlYXRlQnV0dG9uKFwieWVsbG93QnV0dG9uXCIsIFwiUk9UQVRFXCIpO1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0cGxhY2VtZW50Um90YXRpb24gPSBwbGFjZW1lbnRSb3RhdGlvbiA/IGZhbHNlIDogdHJ1ZTtcblx0XHR9KTtcblxuXHRcdHJvdGF0ZUJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cdFx0cGxhY2VtZW50LmFwcGVuZChpY29uLCB0ZXh0LCByb3RhdGVCdXR0b24sIHBsYWNlR3JpZCk7XG5cdFx0b3ZlcmxheS5hcHBlbmRDaGlsZChwbGFjZW1lbnQpO1xuXHRcdGFkZEdyaWQocGxhY2VHcmlkLCBncmlkU2l6ZSwgXCJwbGFjZW1lbnRcIik7XG5cdH1cblxuXHRmdW5jdGlvbiB0dXJuc0xvb3AoKSB7XG5cdFx0Ly8gd2hpbGUgKCFnYW1lLmlzR2FtZU92ZXIoKSkge31cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdCb2FyZChncmlkLCBpc1BsYXllcikge1xuXHRcdC8vIENvbG9yIGdyaWQgY2VsbHMgZGVwZW5kaW5nIG9uIGNvbnRlbnQgYW5kIGF0dGFja3Ncblx0XHRjb25zdCBjZWxscyA9IGdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkX2NlbGxcIik7XG5cdFx0Y2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtcG9zXCIpLnNwbGl0KFwiLVwiKTtcblx0XHRcdGNvbnN0IHggPSBwYXJzZUludChwb3NpdGlvblswXSk7XG5cdFx0XHRjb25zdCB5ID0gcGFyc2VJbnQocG9zaXRpb25bMV0pO1xuXG5cdFx0XHRjb25zdCBjZWxsQ29udGVudCA9IGdhbWUuZ2V0Q2VsbENvbnRlbnQoeCwgeSwgaXNQbGF5ZXIpO1xuXG5cdFx0XHRpZiAoY2VsbENvbnRlbnQuc2hpcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoaXNQbGF5ZXIpIHtcblx0XHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWRfY2VsbFwiKTtcblx0XHRcdFx0fSBlbHNlIGlmIChjZWxsQ29udGVudC5pc0F0dGFja2VkKSB7XG5cdFx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0X2NlbGxcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY2VsbENvbnRlbnQuaXNFbXB0eSAmJiBjZWxsQ29udGVudC5pc0F0dGFja2VkKSB7XG5cdFx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NfY2VsbFwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEdyaWQoY29udGFpbmVyLCBzaXplLCB0eXBlLCBpc1BsYXllcikge1xuXHRcdC8vIFR5cGVzIGFyZSBcInBsYWNlbWVudFwiIGFuZCBcImdhbWVcIiBncmlkc1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBqO1xuXHRcdFx0XHRjb25zdCB5ID0gc2l6ZSAtIDEgLSBpO1xuXHRcdFx0XHRjb25zdCBjZWxsID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJncmlkX2NlbGxcIik7XG5cdFx0XHRcdGNlbGwuc2V0QXR0cmlidXRlKFwiRGF0YS1wb3NcIiwgYCR7eH0tJHt5fWApO1xuXG5cdFx0XHRcdC8vIFBsYWNlbWVudCBHcmlkXG5cdFx0XHRcdGlmICh0eXBlID09PSBcInBsYWNlbWVudFwiKSB7XG5cdFx0XHRcdFx0Y2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0XHRcdFx0XHRcdHBsYWNlbWVudE1vdXNlT3Zlcih4LCB5KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGFjZVNoaXApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGFpIGdyaWRcblx0XHRcdFx0ZWxzZSBpZiAoKHR5cGUgPSBcImdhbWVcIiAmJiBpc1BsYXllciA9PT0gZmFsc2UpKSB7XG5cdFx0XHRcdFx0Y2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0XHRcdFx0XHRcdGhpZ2hsaWdodENlbGwoY2VsbCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgY2xlYXJIaWdobGlnaHRzKTtcblx0XHRcdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRhdHRhY2tDZWxsKGNlbGwsIHgsIHkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGF0dGFja0NlbGwoY2VsbCwgeCwgeSkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IGdhbWUucGxheWVyQXR0YWNrKHgsIHkpO1xuXHRcdGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxfaGl0XCIpO1xuXHRcdFx0Y2VsbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuXHRcdH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikge1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbF9taXNzXCIpO1xuXHRcdH1cblxuXHRcdGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG5cdFx0XHQvLyBNYWtlIEFJIGF0dGFja1xuXHRcdFx0Y29uc3QgYWlBdHRhY2sgPSBnYW1lLmFpQXR0YWNrKCk7XG5cdFx0XHR1cGRhdGVQbGF5ZXJCb2FyZChhaUF0dGFjay54LCBhaUF0dGFjay55LCBhaUF0dGFjay5yZXN1bHQpO1xuXHRcdFx0dXBkYXRlR2FtZVRleHQocmVzdWx0KTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVHYW1lVGV4dChyZXN1bHQpIHtcblx0XHRjb25zdCBnYW1lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZV90ZXh0XCIpO1xuXHRcdGNvbnN0IHVwZGF0ZVRleHQgPSByZXN1bHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXN1bHQuc2xpY2UoMSk7XG5cdFx0Y29uc3QgcGxheWVyU2hpcHNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfc2hpcHNfdGV4dFwiKTtcblx0XHRjb25zdCBhaVNoaXBzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWlfc2hpcHNfdGV4dFwiKTtcblxuXHRcdGdhbWVUZXh0LnRleHRDb250ZW50ID0gYCR7dXBkYXRlVGV4dH0hYDtcblx0XHQvLyBzaGFrZSB0ZXh0IGJveCBvbiBoaXRcblx0XHRpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG5cdFx0XHRnYW1lVGV4dC5jbGFzc0xpc3QuYWRkKFwic2hha2VcIik7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Z2FtZVRleHQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpO1xuXHRcdFx0fSwgMTAwMCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGxheWVyU2hpcHNSZW1haW5pbmcgPSBnYW1lLmdldFNoaXBzUmVtYWluaW5nKHRydWUpO1xuXHRcdGNvbnN0IGFpU2hpcHNSZW1haW5pbmcgPSBnYW1lLmdldFNoaXBzUmVtYWluaW5nKGZhbHNlKTtcblxuXHRcdHBsYXllclNoaXBzVGV4dC50ZXh0Q29udGVudCA9IHBsYXllclNoaXBzUmVtYWluaW5nO1xuXHRcdGFpU2hpcHNUZXh0LnRleHRDb250ZW50ID0gYWlTaGlwc1JlbWFpbmluZztcblxuXHRcdGlmIChwbGF5ZXJTaGlwc1JlbWFpbmluZyA9PT0gMCkge1xuXHRcdFx0ZW5kR2FtZShmYWxzZSk7IC8vIHBsYXllcldpbnMgPSB0cnVlXG5cdFx0fSBlbHNlIGlmIChhaVNoaXBzUmVtYWluaW5nID09PSAwKSB7XG5cdFx0XHRlbmRHYW1lKHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVBsYXllckJvYXJkKHgsIHksIHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIEdldCBwbGF5ZXIgY2VsbFxuXHRcdGNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9ncmlkXCIpO1xuXHRcdGNvbnN0IGNlbGwgPSBwbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcz1cIiR7eH0tJHt5fVwiXWApO1xuXHRcdC8vIFVwZGF0ZSBjbGFzc0xpc3Rcblx0XHRpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsX2hpdFwiKTtcblx0XHRcdC8vIFNoYWtlIHBsYXllciBib2FyZFxuXHRcdFx0cGxheWVyR3JpZC5jbGFzc0xpc3QuYWRkKFwic2hha2VcIik7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0cGxheWVyR3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VcIik7XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxfbWlzc1wiKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoaWdobGlnaHRDZWxsKGNlbGwpIHtcblx0XHRpZiAoZ2FtZS5pc1BsYXllcnNUdXJuKCkpIHtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxfaGlnaGxpZ2h0XCIpO1xuXHRcdH1cblx0fVxuXG5cdC8vIGZ1bmN0aW9uIHBsYWNlbWVudE1vdXNlT3ZlcihlKSB7XG5cdGZ1bmN0aW9uIHBsYWNlbWVudE1vdXNlT3Zlcih4LCB5KSB7XG5cdFx0Y2xlYXJIaWdobGlnaHRzKCk7XG5cdFx0Y29uc3Qgc2hpcCA9IGdhbWUuZ2V0TmV4dFNoaXAoKTtcblx0XHRpZiAoIXNoaXApIHtcblx0XHRcdHJlbW92ZVBsYWNlbWVudExpc3RlbmVycygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhbGlkID0gZ2FtZS5jaGVja0ZpdHMoeCwgeSwgc2hpcC5sZW5ndGgsIHBsYWNlbWVudFJvdGF0aW9uKTtcblxuXHRcdC8vIGNvbG9yIGNlbGxzIGlmIHNoaXAgcG9zaXRpb24gaXMgdmFsaWRcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5ld1ggPSB4ICsgKHBsYWNlbWVudFJvdGF0aW9uID8gMCA6IGkpO1xuXHRcdFx0Y29uc3QgbmV3WSA9IHkgKyAocGxhY2VtZW50Um90YXRpb24gPyBpIDogMCk7XG5cdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zPVwiJHtuZXdYfS0ke25ld1l9XCJdYCk7XG5cblx0XHRcdGlmICh2YWxpZCkge1xuXHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZF9jZWxsXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGdhbWUudmFsaWRYWShuZXdYLCBuZXdZKSkge1xuXHRcdFx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcImludmFsaWRfY2VsbFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHBsYWNlU2hpcChlKSB7XG5cdFx0Y29uc3Qgc2hpcCA9IGdhbWUuZ2V0TmV4dFNoaXAoKTtcblx0XHRpZiAoIXNoaXApIHtcblx0XHRcdC8vIEFsbCBzaGlwcyBwbGFjZWRcblx0XHRcdHJlbW92ZVBsYWNlbWVudExpc3RlbmVycygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3NcIikuc3BsaXQoXCItXCIpO1xuXHRcdGNvbnN0IHggPSBwYXJzZUludChwb3NpdGlvblswXSk7XG5cdFx0Y29uc3QgeSA9IHBhcnNlSW50KHBvc2l0aW9uWzFdKTtcblx0XHRjb25zdCB2YWxpZCA9IGdhbWUuY2hlY2tGaXRzKHgsIHksIHNoaXAubGVuZ3RoLCBwbGFjZW1lbnRSb3RhdGlvbik7XG5cblx0XHRpZiAodmFsaWQpIHtcblx0XHRcdGdhbWUuYWRkU2hpcCh4LCB5LCBzaGlwLmxlbmd0aCwgcGxhY2VtZW50Um90YXRpb24sIHNoaXAubmFtZSk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgbmV3WCA9IHggKyAocGxhY2VtZW50Um90YXRpb24gPyAwIDogaSk7XG5cdFx0XHRcdGNvbnN0IG5ld1kgPSB5ICsgKHBsYWNlbWVudFJvdGF0aW9uID8gaSA6IDApO1xuXHRcdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XHRgW2RhdGEtcG9zPVwiJHtuZXdYfS0ke25ld1l9XCJdYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWRfY2VsbFwiKTtcblx0XHRcdH1cblx0XHRcdGdhbWUucmVtb3ZlQ3VycmVudFNoaXAoKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhckhpZ2hsaWdodHMoKSB7XG5cdFx0Y29uc3QgaGlnaGxpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcIi52YWxpZF9jZWxsLCAuaW52YWxpZF9jZWxsLCAuY2VsbF9oaWdobGlnaHRcIlxuXHRcdCk7XG5cdFx0aGlnaGxpZ2h0cy5mb3JFYWNoKChjZWxsKSA9PiB7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZF9jZWxsXCIpO1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZF9jZWxsXCIpO1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbF9oaWdobGlnaHRcIik7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVQbGFjZW1lbnRMaXN0ZW5lcnMoKSB7XG5cdFx0Y29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdyaWRfY2VsbFwiKTtcblx0XHRjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG5cdFx0XHRjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGFjZVNoaXApO1xuXHRcdFx0Y2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIHBsYWNlbWVudE1vdXNlT3Zlcik7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnllbGxvd0J1dHRvblwiKTtcblx0XHRidXR0b24udGV4dENvbnRlbnQgPSBcIlNUQVJUIVwiO1xuXHRcdGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxhY2VTaGlwKTtcblx0XHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0YXJ0R2FtZSk7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJ5ZWxsb3dCdXR0b25cIik7XG5cdFx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJncmVlbkJ1dHRvblwiKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxvYWRCYWNrZ3JvdW5kKCkge1xuXHRcdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IHV0aWxpdHkuY3JlYXRlRGl2KFwib3ZlcmxheVwiKTtcblx0XHRjb250ZW50LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZW5kR2FtZShwbGF5ZXJXaW5zKSB7XG5cdFx0Y29uc3QgYWlHcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5haV9ncmlkXCIpO1xuXHRcdGNvbnN0IHBsYXllckdyYXBoaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9ncmFwaGljXCIpO1xuXHRcdGNvbnN0IGFpR3JhcGhpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWlfZ3JhcGhpY1wiKTtcblx0XHRjb25zdCBnYW1lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZV90ZXh0XCIpO1xuXG5cdFx0aWYgKHBsYXllcldpbnMpIHtcblx0XHRcdGFpR3JhcGhpYy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0Z2FtZVRleHQudGV4dENvbnRlbnQgPSBcIllvdSB3aW4hXCI7XG5cdFx0fSBlbHNlIGlmICghcGxheWVyV2lucykge1xuXHRcdFx0cGxheWVyR3JhcGhpYy5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdFx0Z2FtZVRleHQudGV4dENvbnRlbnQgPSBcIllvdSBsb3NlIVwiO1xuXHRcdH1cblx0XHRhaUdyaWQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuXHR9XG5cblx0bG9hZEJhY2tncm91bmQoKTtcblx0Ly8gbG9hZFNwbGFzaCgpO1xuXHQvLyBsb2FkUGxhY2VtZW50VUkoKTtcblx0c3RhcnRHYW1lKCk7XG59KSgpO1xuIiwiLy8gSGVscGVyIGZ1bmN0aW9ucyBJIHVzZSBvZnRlblxuY29uc3QgY3JlYXRlRGl2ID0gKGNsYXNzTmFtZSkgPT4ge1xuXHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXHRkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRyZXR1cm4gZGl2O1xufTtcblxuY29uc3QgYWRkSW1hZ2UgPSAocGF0aCwgY29udGFpbmVyKSA9PiB7XG5cdGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuXHRpbWcuc3JjID0gcGF0aDtcblxuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvbiA9IChjbGFzc05hbWUsIGJ1dHRvblRleHQpID0+IHtcblx0Y29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblx0YnV0dG9uLnRleHRDb250ZW50ID0gYnV0dG9uVGV4dDtcblx0cmV0dXJuIGJ1dHRvbjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZURpdiwgYWRkSW1hZ2UsIGNyZWF0ZUJ1dHRvbiB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9