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

.upper_text {
	font-size: 2rem;
	border-radius: 30px 30px 0 0;
}

.game_text {
	font-size: 2rem;
}

.player_text {
	border-radius: 0 0 0 30px;
}

.ai_text {
	border-radius: 0 0 30px 0;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n\t--color-darkBlue: #132843;\n\t--color-brightYellow: #fff000;\n\t--color-mutedYellow: #f4e603;\n}\n\n* {\n\tbox-sizing: border-box;\n}\n\nbody {\n\theight: 100vh;\n\twidth: 100vw;\n\tmargin: 0;\n}\n\n.content {\n\theight: 100%;\n\twidth: 100%;\n\tbackground-image: linear-gradient(\n\t\tto right top,\n\t\t#132843,\n\t\t#1b4169,\n\t\t#205c93,\n\t\t#2078be,\n\t\t#1296eb\n\t);\n}\n\n.overlay,\n.splash_text,\n.splash_img,\n.splash_button {\n\talign-items: center;\n\tdisplay: flex;\n\tfont-family: \"Press Start 2P\", cursive;\n\theight: 100%;\n\tjustify-content: center;\n\twidth: 100%;\n}\n\n.overlay {\n\tbackground-color: rgba(0, 0, 0, 0.2);\n}\n\n.splash {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmax-width: 500px;\n\tpadding: 32px;\n}\n\n.splash_text {\n\tcolor: white;\n\tfont-size: 3rem;\n\tmargin-bottom: 48px;\n\ttext-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),\n\t\t0px -4px 10px rgba(255, 255, 255, 0.3);\n}\n\n.splash img {\n\twidth: 100%;\n}\n\n.yellowButton {\n\tbackground-color: var(--color-brightYellow);\n\tborder-radius: 4px;\n\tborder: 0;\n\tbox-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,\n\t\trgba(0, 44, 97, 0.1) 0 3px 6px 0;\n\tbox-sizing: border-box;\n\tcolor: #000;\n\tcursor: pointer;\n\tdisplay: inherit;\n\tfont-family: \"Press Start 2P\", cursive, -apple-system, system-ui, \"Segoe UI\",\n\t\tRoboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n\t\t\"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tline-height: 24px;\n\tmargin: 0;\n\tmargin-top: 32px;\n\tmin-height: 56px;\n\tmin-width: 120px;\n\tpadding: 16px 20px;\n\tposition: relative;\n\ttext-align: center;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\twidth: 195px;\n\ttouch-action: manipulation;\n\tvertical-align: baseline;\n\ttransition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n\n.yellowButton:hover {\n\tbackground-color: var(--color-mutedYellow);\n\ttransform: translateY(-5px);\n}\n\n.greenButton {\n\tbackground-color: green;\n\tborder-radius: 4px;\n\tborder: 0;\n\tbox-shadow: rgba(1, 60, 136, 0.5) 0 -1px 3px 0 inset,\n\t\trgba(0, 44, 97, 0.1) 0 3px 6px 0;\n\tbox-sizing: border-box;\n\tcolor: #000;\n\tcursor: pointer;\n\tdisplay: inherit;\n\tfont-family: \"Press Start 2P\", cursive, -apple-system, system-ui, \"Segoe UI\",\n\t\tRoboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\",\n\t\t\"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tline-height: 24px;\n\tmargin: 0;\n\tmargin-top: 32px;\n\tmin-height: 56px;\n\tmin-width: 120px;\n\tpadding: 16px 20px;\n\tposition: relative;\n\ttext-align: center;\n\tuser-select: none;\n\t-webkit-user-select: none;\n\twidth: 195px;\n\ttouch-action: manipulation;\n\tvertical-align: baseline;\n\ttransition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);\n}\n\n.greenButton:hover {\n\tbackground-color: rgb(1, 100, 1);\n\ttransform: translateY(-5px);\n}\n\n@media (min-width: 768px) {\n\t.yellowButton {\n\t\tmin-width: 150px;\n\t\tpadding: 16px 44px;\n\t}\n}\n\n.placement {\n\talign-items: center;\n\tborder-radius: 25px;\n\tcolor: white;\n\tborder: 5px solid #1296eb;\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 32px;\n\tbox-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,\n\t\trgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,\n\t\trgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.placement_image {\n\tdisplay: flex;\n\tjustify-content: center;\n\tmargin-bottom: 16px;\n}\n\n.placement img {\n\tmax-width: 200px;\n}\n\n.placement_text {\n\tmargin: 16px 0;\n}\n\n.placement_grid,\n.player_grid,\n.ai_grid {\n\tborder: 1px solid white;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(10, 1fr);\n\tmargin-top: 16px;\n\tmax-width: 355px;\n}\n\n.placement .grid_cell,\n.grids .grid_cell {\n\tborder: 1px solid white;\n\theight: 35px;\n\twidth: 35px;\n}\n\n.valid_cell {\n\tbackground-color: greenyellow;\n}\n\n.invalid_cell {\n\tbackground-color: red;\n}\n\n.placed_cell {\n\tbackground-color: var(--color-brightYellow);\n}\n\n.playfield {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\twidth: 75%;\n}\n\n.upper_text,\n.player_text,\n.ai_text,\n.game_text {\n\talign-items: center;\n\tborder: 1px solid white;\n\tcolor: white;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\tmin-height: 100px;\n\twidth: 100%;\n}\n\n.upper_text {\n\tfont-size: 2rem;\n\tborder-radius: 30px 30px 0 0;\n}\n\n.game_text {\n\tfont-size: 2rem;\n}\n\n.player_text {\n\tborder-radius: 0 0 0 30px;\n}\n\n.ai_text {\n\tborder-radius: 0 0 30px 0;\n}\n\n.player_ships_label,\n.ai_ships_label {\n\tfont-size: 1.3rem;\n\tmargin-bottom: 16px;\n}\n\n.grids {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 100%;\n}\n\n.game_icon {\n\talign-items: center;\n\tdisplay: flex;\n\theight: 100%;\n\tjustify-content: center;\n\twidth: 352px;\n}\n\n.game_icon img {\n\theight: 300px;\n\talign-items: center;\n}\n\n.player_graphic,\n.ai_graphic {\n\tdisplay: none;\n\tleft: 0;\n\tposition: absolute;\n\ttop: 5%;\n}\n\n.player_grid_container,\n.ai_grid_container {\n\tposition: relative;\n}\n\n.player_graphic img,\n.ai_graphic img {\n\theight: 100%;\n\tmax-width: 350px;\n\twidth: 100%;\n}\n\n.player_zone,\n.ai_zone,\n.middle_zone {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 32px;\n\theight: 500px;\n\tjustify-content: space-between;\n}\n\n.cell_highlight {\n\tbackground-color: lightskyblue;\n}\n\n.cell_hit {\n\tbackground-color: red;\n}\n\n.cell_miss {\n\tbackground-color: darkblue;\n}\n\n.cell_hit,\n.cell_miss {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.shake {\n\tanimation: shake 0.5s ease infinite;\n\tcolor: red;\n}\n\n@keyframes shake {\n\t0% {\n\t\ttransform: translateX(0);\n\t}\n\t20% {\n\t\ttransform: translateX(-5px);\n\t}\n\t40% {\n\t\ttransform: translateX(5px);\n\t}\n\t60% {\n\t\ttransform: translateX(-5px);\n\t}\n\t80% {\n\t\ttransform: translateX(5px);\n\t}\n\t100% {\n\t\ttransform: translateX(0);\n\t}\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


const gameLogic = () => {
	let isPlayerTurn = true;

	// create gameboards
	const playerBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();
	const aiBoard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"]();

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

	function populateAiBoard() {
		const shipData = [
			{ name: "Carrier", length: 5 },
			{ name: "Battleship", length: 4 },
			{ name: "Cruiser", length: 3 },
			{ name: "Submarine", length: 3 },
			{ name: "Destroyer", length: 2 },
		];

		for (const shipInfo of shipData) {
			const { name, length } = shipInfo;
			let placed = false;

			while (!placed) {
				const vertical = Math.random() < 0.5; // Randomly choose vertical or horizontal placement
				const x = vertical
					? Math.floor(Math.random() * aiBoard.size)
					: Math.floor(Math.random() * (aiBoard.size - length + 1));
				const y = vertical
					? Math.floor(Math.random() * (aiBoard.size - length + 1))
					: Math.floor(Math.random() * aiBoard.size);

				// Check if the ship can be placed at the random position
				if (aiBoard.shipFits(x, y, length, vertical)) {
					aiBoard.placeShip(x, y, length, vertical, name);
					placed = true;
				}
			}
		}
	}

	function getShipsRemaining(isPlayer) {
		if (isPlayer) {
			return playerBoard.shipsRemaining();
		}
		return aiBoard.shipsRemaining();
	}

	populateAiBoard();

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


class Gameboard {
	constructor(size = 10) {
		this.size = size;
		this.board = [];
		this.ships = [];
		this.placementShips = [];
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
		this.placementShips.push(newShip);
	}

	getNextShip() {
		if (this.placementShips.length > 0) {
			return this.placementShips[0];
		}
		return null;
	}

	getAvailableCells() {
		return this.availableCells;
	}

	removeCurrentShip() {
		if (this.placementShips.length > 0) {
			this.placementShips.shift();
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

		this.ships.push(newShip);
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

		const placement = document.querySelector(".placement");
		const overlay = document.querySelector(".overlay");
		placement.remove();

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
		text.textContent = "Place your ships!";

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
		const grid = document.querySelector(".placement_grid");
		grid.style.pointerEvents = "none";

		const button = document.querySelector(".yellowButton");
		button.classList.remove("yellowButton");
		button.classList.add("greenButton");

		button.textContent = "START!";
		button.removeEventListener("click", placeShip);
		button.addEventListener("click", startGame);
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
		const infoText = document.querySelector(".upper_text");
		const gameText = document.querySelector(".game_text");

		if (playerWins) {
			aiGraphic.style.display = "block";
			gameText.textContent = "You win!";
			infoText.textContent = "All computer ships destroyed!";
		} else if (!playerWins) {
			playerGraphic.style.display = "block";
			gameText.textContent = "You lose!";
			infoText.textContent = "Your ships have been destroyed!";
		}
		aiGrid.style.pointerEvents = "none";
	}

	loadBackground();
	loadSplash();
	// loadPlacementUI();
	// startGame();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLEtBQUssTUFBTSxRQUFRLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssT0FBTyxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLEtBQUssT0FBTyxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sT0FBTyxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxPQUFPLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLE9BQU8sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLFFBQVEsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsS0FBSyxHQUFHLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFpQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNXRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU2QyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZUxvZ2ljLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG5cdC0tY29sb3ItZGFya0JsdWU6ICMxMzI4NDM7XG5cdC0tY29sb3ItYnJpZ2h0WWVsbG93OiAjZmZmMDAwO1xuXHQtLWNvbG9yLW11dGVkWWVsbG93OiAjZjRlNjAzO1xufVxuXG4qIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG5cdGhlaWdodDogMTAwdmg7XG5cdHdpZHRoOiAxMDB2dztcblx0bWFyZ2luOiAwO1xufVxuXG4uY29udGVudCB7XG5cdGhlaWdodDogMTAwJTtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcblx0XHR0byByaWdodCB0b3AsXG5cdFx0IzEzMjg0Myxcblx0XHQjMWI0MTY5LFxuXHRcdCMyMDVjOTMsXG5cdFx0IzIwNzhiZSxcblx0XHQjMTI5NmViXG5cdCk7XG59XG5cbi5vdmVybGF5LFxuLnNwbGFzaF90ZXh0LFxuLnNwbGFzaF9pbWcsXG4uc3BsYXNoX2J1dHRvbiB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmU7XG5cdGhlaWdodDogMTAwJTtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ub3ZlcmxheSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnNwbGFzaCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdG1heC13aWR0aDogNTAwcHg7XG5cdHBhZGRpbmc6IDMycHg7XG59XG5cbi5zcGxhc2hfdGV4dCB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAzcmVtO1xuXHRtYXJnaW4tYm90dG9tOiA0OHB4O1xuXHR0ZXh0LXNoYWRvdzogMnB4IDdweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpLFxuXHRcdDBweCAtNHB4IDEwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4uc3BsYXNoIGltZyB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ueWVsbG93QnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJpZ2h0WWVsbG93KTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRib3JkZXI6IDA7XG5cdGJveC1zaGFkb3c6IHJnYmEoMSwgNjAsIDEzNiwgMC41KSAwIC0xcHggM3B4IDAgaW5zZXQsXG5cdFx0cmdiYSgwLCA0NCwgOTcsIDAuMSkgMCAzcHggNnB4IDA7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGNvbG9yOiAjMDAwO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGRpc3BsYXk6IGluaGVyaXQ7XG5cdGZvbnQtZmFtaWx5OiBcIlByZXNzIFN0YXJ0IDJQXCIsIGN1cnNpdmUsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgXCJTZWdvZSBVSVwiLFxuXHRcdFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLFxuXHRcdFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIjtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRmb250LXdlaWdodDogNzAwO1xuXHRsaW5lLWhlaWdodDogMjRweDtcblx0bWFyZ2luOiAwO1xuXHRtYXJnaW4tdG9wOiAzMnB4O1xuXHRtaW4taGVpZ2h0OiA1NnB4O1xuXHRtaW4td2lkdGg6IDEyMHB4O1xuXHRwYWRkaW5nOiAxNnB4IDIwcHg7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR1c2VyLXNlbGVjdDogbm9uZTtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0d2lkdGg6IDE5NXB4O1xuXHR0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuXHR0cmFuc2l0aW9uOiBhbGwgMC4ycyBjdWJpYy1iZXppZXIoMC4yMiwgMC42MSwgMC4zNiwgMSk7XG59XG5cbi55ZWxsb3dCdXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tdXRlZFllbGxvdyk7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbn1cblxuLmdyZWVuQnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Ym9yZGVyOiAwO1xuXHRib3gtc2hhZG93OiByZ2JhKDEsIDYwLCAxMzYsIDAuNSkgMCAtMXB4IDNweCAwIGluc2V0LFxuXHRcdHJnYmEoMCwgNDQsIDk3LCAwLjEpIDAgM3B4IDZweCAwO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRjb2xvcjogIzAwMDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRkaXNwbGF5OiBpbmhlcml0O1xuXHRmb250LWZhbWlseTogXCJQcmVzcyBTdGFydCAyUFwiLCBjdXJzaXZlLCAtYXBwbGUtc3lzdGVtLCBzeXN0ZW0tdWksIFwiU2Vnb2UgVUlcIixcblx0XHRSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIixcblx0XHRcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0bGluZS1oZWlnaHQ6IDI0cHg7XG5cdG1hcmdpbjogMDtcblx0bWFyZ2luLXRvcDogMzJweDtcblx0bWluLWhlaWdodDogNTZweDtcblx0bWluLXdpZHRoOiAxMjBweDtcblx0cGFkZGluZzogMTZweCAyMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG5cdC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG5cdHdpZHRoOiAxOTVweDtcblx0dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcblx0dHJhbnNpdGlvbjogYWxsIDAuMnMgY3ViaWMtYmV6aWVyKDAuMjIsIDAuNjEsIDAuMzYsIDEpO1xufVxuXG4uZ3JlZW5CdXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMTAwLCAxKTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcblx0LnllbGxvd0J1dHRvbiB7XG5cdFx0bWluLXdpZHRoOiAxNTBweDtcblx0XHRwYWRkaW5nOiAxNnB4IDQ0cHg7XG5cdH1cbn1cblxuLnBsYWNlbWVudCB7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyOiA1cHggc29saWQgIzEyOTZlYjtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0cGFkZGluZzogMzJweDtcblx0Ym94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjI1KSAwcHggNTRweCA1NXB4LFxuXHRcdHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsXG5cdFx0cmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcbn1cblxuLnBsYWNlbWVudF9pbWFnZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4ucGxhY2VtZW50IGltZyB7XG5cdG1heC13aWR0aDogMjAwcHg7XG59XG5cbi5wbGFjZW1lbnRfdGV4dCB7XG5cdG1hcmdpbjogMTZweCAwO1xufVxuXG4ucGxhY2VtZW50X2dyaWQsXG4ucGxheWVyX2dyaWQsXG4uYWlfZ3JpZCB7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcblx0bWFyZ2luLXRvcDogMTZweDtcblx0bWF4LXdpZHRoOiAzNTVweDtcbn1cblxuLnBsYWNlbWVudCAuZ3JpZF9jZWxsLFxuLmdyaWRzIC5ncmlkX2NlbGwge1xuXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0aGVpZ2h0OiAzNXB4O1xuXHR3aWR0aDogMzVweDtcbn1cblxuLnZhbGlkX2NlbGwge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbnllbGxvdztcbn1cblxuLmludmFsaWRfY2VsbCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLnBsYWNlZF9jZWxsIHtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJpZ2h0WWVsbG93KTtcbn1cblxuLnBsYXlmaWVsZCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMzJweDtcblx0d2lkdGg6IDc1JTtcbn1cblxuLnVwcGVyX3RleHQsXG4ucGxheWVyX3RleHQsXG4uYWlfdGV4dCxcbi5nYW1lX3RleHQge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcblx0Y29sb3I6IHdoaXRlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0bWluLWhlaWdodDogMTAwcHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4udXBwZXJfdGV4dCB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Ym9yZGVyLXJhZGl1czogMzBweCAzMHB4IDAgMDtcbn1cblxuLmdhbWVfdGV4dCB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLnBsYXllcl90ZXh0IHtcblx0Ym9yZGVyLXJhZGl1czogMCAwIDAgMzBweDtcbn1cblxuLmFpX3RleHQge1xuXHRib3JkZXItcmFkaXVzOiAwIDAgMzBweCAwO1xufVxuXG4ucGxheWVyX3NoaXBzX2xhYmVsLFxuLmFpX3NoaXBzX2xhYmVsIHtcblx0Zm9udC1zaXplOiAxLjNyZW07XG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5ncmlkcyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5nYW1lX2ljb24ge1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRoZWlnaHQ6IDEwMCU7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHR3aWR0aDogMzUycHg7XG59XG5cbi5nYW1lX2ljb24gaW1nIHtcblx0aGVpZ2h0OiAzMDBweDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBsYXllcl9ncmFwaGljLFxuLmFpX2dyYXBoaWMge1xuXHRkaXNwbGF5OiBub25lO1xuXHRsZWZ0OiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNSU7XG59XG5cbi5wbGF5ZXJfZ3JpZF9jb250YWluZXIsXG4uYWlfZ3JpZF9jb250YWluZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wbGF5ZXJfZ3JhcGhpYyBpbWcsXG4uYWlfZ3JhcGhpYyBpbWcge1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG1heC13aWR0aDogMzUwcHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ucGxheWVyX3pvbmUsXG4uYWlfem9uZSxcbi5taWRkbGVfem9uZSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMzJweDtcblx0aGVpZ2h0OiA1MDBweDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2VsbF9oaWdobGlnaHQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHNreWJsdWU7XG59XG5cbi5jZWxsX2hpdCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmNlbGxfbWlzcyB7XG5cdGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xufVxuXG4uY2VsbF9oaXQsXG4uY2VsbF9taXNzIHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zaGFrZSB7XG5cdGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlIGluZmluaXRlO1xuXHRjb2xvcjogcmVkO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcblx0fVxuXHQyMCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcblx0fVxuXHQ0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xuXHR9XG5cdDYwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xuXHR9XG5cdDgwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuXHR9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpc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RUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7O0NBRUMsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsV0FBVztBQUNaOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7O0NBRUMsYUFBYTtDQUNiLE9BQU87Q0FDUCxrQkFBa0I7Q0FDbEIsT0FBTztBQUNSOztBQUVBOztDQUVDLGtCQUFrQjtBQUNuQjs7QUFFQTs7Q0FFQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjs7QUFFQTs7O0NBR0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsYUFBYTtDQUNiLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTs7Q0FFQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLG1DQUFtQztDQUNuQyxVQUFVO0FBQ1g7O0FBRUE7Q0FDQztFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsMkJBQTJCO0NBQzVCO0NBQ0E7RUFDQywwQkFBMEI7Q0FDM0I7Q0FDQTtFQUNDLDJCQUEyQjtDQUM1QjtDQUNBO0VBQ0MsMEJBQTBCO0NBQzNCO0NBQ0E7RUFDQyx3QkFBd0I7Q0FDekI7QUFDRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuXFx0LS1jb2xvci1kYXJrQmx1ZTogIzEzMjg0MztcXG5cXHQtLWNvbG9yLWJyaWdodFllbGxvdzogI2ZmZjAwMDtcXG5cXHQtLWNvbG9yLW11dGVkWWVsbG93OiAjZjRlNjAzO1xcbn1cXG5cXG4qIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi5jb250ZW50IHtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0YmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxcblxcdFxcdHRvIHJpZ2h0IHRvcCxcXG5cXHRcXHQjMTMyODQzLFxcblxcdFxcdCMxYjQxNjksXFxuXFx0XFx0IzIwNWM5MyxcXG5cXHRcXHQjMjA3OGJlLFxcblxcdFxcdCMxMjk2ZWJcXG5cXHQpO1xcbn1cXG5cXG4ub3ZlcmxheSxcXG4uc3BsYXNoX3RleHQsXFxuLnNwbGFzaF9pbWcsXFxuLnNwbGFzaF9idXR0b24ge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5vdmVybGF5IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcblxcbi5zcGxhc2gge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXgtd2lkdGg6IDUwMHB4O1xcblxcdHBhZGRpbmc6IDMycHg7XFxufVxcblxcbi5zcGxhc2hfdGV4dCB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogM3JlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiA0OHB4O1xcblxcdHRleHQtc2hhZG93OiAycHggN3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyksXFxuXFx0XFx0MHB4IC00cHggMTBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XFxufVxcblxcbi5zcGxhc2ggaW1nIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLnllbGxvd0J1dHRvbiB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJpZ2h0WWVsbG93KTtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGJveC1zaGFkb3c6IHJnYmEoMSwgNjAsIDEzNiwgMC41KSAwIC0xcHggM3B4IDAgaW5zZXQsXFxuXFx0XFx0cmdiYSgwLCA0NCwgOTcsIDAuMSkgMCAzcHggNnB4IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRjb2xvcjogIzAwMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogaW5oZXJpdDtcXG5cXHRmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLFxcblxcdFxcdFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG5cXHRcXHRcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRsaW5lLWhlaWdodDogMjRweDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bWFyZ2luLXRvcDogMzJweDtcXG5cXHRtaW4taGVpZ2h0OiA1NnB4O1xcblxcdG1pbi13aWR0aDogMTIwcHg7XFxuXFx0cGFkZGluZzogMTZweCAyMHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR3aWR0aDogMTk1cHg7XFxuXFx0dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKTtcXG59XFxuXFxuLnllbGxvd0J1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbXV0ZWRZZWxsb3cpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG59XFxuXFxuLmdyZWVuQnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG5cXHRib3JkZXItcmFkaXVzOiA0cHg7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGJveC1zaGFkb3c6IHJnYmEoMSwgNjAsIDEzNiwgMC41KSAwIC0xcHggM3B4IDAgaW5zZXQsXFxuXFx0XFx0cmdiYSgwLCA0NCwgOTcsIDAuMSkgMCAzcHggNnB4IDA7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXHRjb2xvcjogIzAwMDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZGlzcGxheTogaW5oZXJpdDtcXG5cXHRmb250LWZhbWlseTogXFxcIlByZXNzIFN0YXJ0IDJQXFxcIiwgY3Vyc2l2ZSwgLWFwcGxlLXN5c3RlbSwgc3lzdGVtLXVpLCBcXFwiU2Vnb2UgVUlcXFwiLFxcblxcdFxcdFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIixcXG5cXHRcXHRcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIjtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRsaW5lLWhlaWdodDogMjRweDtcXG5cXHRtYXJnaW46IDA7XFxuXFx0bWFyZ2luLXRvcDogMzJweDtcXG5cXHRtaW4taGVpZ2h0OiA1NnB4O1xcblxcdG1pbi13aWR0aDogMTIwcHg7XFxuXFx0cGFkZGluZzogMTZweCAyMHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG5cXHR3aWR0aDogMTk1cHg7XFxuXFx0dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcblxcdHRyYW5zaXRpb246IGFsbCAwLjJzIGN1YmljLWJlemllcigwLjIyLCAwLjYxLCAwLjM2LCAxKTtcXG59XFxuXFxuLmdyZWVuQnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMSwgMTAwLCAxKTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcdC55ZWxsb3dCdXR0b24ge1xcblxcdFxcdG1pbi13aWR0aDogMTUwcHg7XFxuXFx0XFx0cGFkZGluZzogMTZweCA0NHB4O1xcblxcdH1cXG59XFxuXFxuLnBsYWNlbWVudCB7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiAyNXB4O1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRib3JkZXI6IDVweCBzb2xpZCAjMTI5NmViO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRwYWRkaW5nOiAzMnB4O1xcblxcdGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCxcXG5cXHRcXHRyZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAtMTJweCAzMHB4LCByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCA0cHggNnB4LFxcblxcdFxcdHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxufVxcblxcbi5wbGFjZW1lbnRfaW1hZ2Uge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0bWFyZ2luLWJvdHRvbTogMTZweDtcXG59XFxuXFxuLnBsYWNlbWVudCBpbWcge1xcblxcdG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcbi5wbGFjZW1lbnRfdGV4dCB7XFxuXFx0bWFyZ2luOiAxNnB4IDA7XFxufVxcblxcbi5wbGFjZW1lbnRfZ3JpZCxcXG4ucGxheWVyX2dyaWQsXFxuLmFpX2dyaWQge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuXFx0bWFyZ2luLXRvcDogMTZweDtcXG5cXHRtYXgtd2lkdGg6IDM1NXB4O1xcbn1cXG5cXG4ucGxhY2VtZW50IC5ncmlkX2NlbGwsXFxuLmdyaWRzIC5ncmlkX2NlbGwge1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcblxcdGhlaWdodDogMzVweDtcXG5cXHR3aWR0aDogMzVweDtcXG59XFxuXFxuLnZhbGlkX2NlbGwge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGdyZWVueWVsbG93O1xcbn1cXG5cXG4uaW52YWxpZF9jZWxsIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5wbGFjZWRfY2VsbCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnJpZ2h0WWVsbG93KTtcXG59XFxuXFxuLnBsYXlmaWVsZCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMzJweDtcXG5cXHR3aWR0aDogNzUlO1xcbn1cXG5cXG4udXBwZXJfdGV4dCxcXG4ucGxheWVyX3RleHQsXFxuLmFpX3RleHQsXFxuLmdhbWVfdGV4dCB7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udXBwZXJfdGV4dCB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGJvcmRlci1yYWRpdXM6IDMwcHggMzBweCAwIDA7XFxufVxcblxcbi5nYW1lX3RleHQge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLnBsYXllcl90ZXh0IHtcXG5cXHRib3JkZXItcmFkaXVzOiAwIDAgMCAzMHB4O1xcbn1cXG5cXG4uYWlfdGV4dCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogMCAwIDMwcHggMDtcXG59XFxuXFxuLnBsYXllcl9zaGlwc19sYWJlbCxcXG4uYWlfc2hpcHNfbGFiZWwge1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDE2cHg7XFxufVxcblxcbi5ncmlkcyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5nYW1lX2ljb24ge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0d2lkdGg6IDM1MnB4O1xcbn1cXG5cXG4uZ2FtZV9pY29uIGltZyB7XFxuXFx0aGVpZ2h0OiAzMDBweDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucGxheWVyX2dyYXBoaWMsXFxuLmFpX2dyYXBoaWMge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0bGVmdDogMDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiA1JTtcXG59XFxuXFxuLnBsYXllcl9ncmlkX2NvbnRhaW5lcixcXG4uYWlfZ3JpZF9jb250YWluZXIge1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXllcl9ncmFwaGljIGltZyxcXG4uYWlfZ3JhcGhpYyBpbWcge1xcblxcdGhlaWdodDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDM1MHB4O1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucGxheWVyX3pvbmUsXFxuLmFpX3pvbmUsXFxuLm1pZGRsZV96b25lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAzMnB4O1xcblxcdGhlaWdodDogNTAwcHg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uY2VsbF9oaWdobGlnaHQge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2t5Ymx1ZTtcXG59XFxuXFxuLmNlbGxfaGl0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jZWxsX21pc3Mge1xcblxcdGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xcbn1cXG5cXG4uY2VsbF9oaXQsXFxuLmNlbGxfbWlzcyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hha2Uge1xcblxcdGFuaW1hdGlvbjogc2hha2UgMC41cyBlYXNlIGluZmluaXRlO1xcblxcdGNvbG9yOiByZWQ7XFxufVxcblxcbkBrZXlmcmFtZXMgc2hha2Uge1xcblxcdDAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuXFx0fVxcblxcdDIwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xcblxcdH1cXG5cXHQ0MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpO1xcblxcdH1cXG5cXHQ2MCUge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcXG5cXHR9XFxuXFx0ODAlIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KTtcXG5cXHR9XFxuXFx0MTAwJSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IGdhbWVMb2dpYyA9ICgpID0+IHtcblx0bGV0IGlzUGxheWVyVHVybiA9IHRydWU7XG5cblx0Ly8gY3JlYXRlIGdhbWVib2FyZHNcblx0Y29uc3QgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cdGNvbnN0IGFpQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cblx0ZnVuY3Rpb24gY2hlY2tGaXRzKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCA9IHRydWUpIHtcblx0XHRyZXR1cm4gcGxheWVyQm9hcmQuc2hpcEZpdHMoeCwgeSwgbGVuZ3RoLCBpc1ZlcnRpY2FsKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHZhbGlkWFkoeCwgeSkge1xuXHRcdHJldHVybiBwbGF5ZXJCb2FyZC5pc1ZhbGlkWFkoeCwgeSkgJiYgcGxheWVyQm9hcmQuc3BhY2VJc0VtcHR5KHgsIHkpO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q2VsbENvbnRlbnQoeCwgeSwgaXNQbGF5ZXIpIHtcblx0XHRsZXQgY2VsbCA9IG51bGw7XG5cblx0XHRpZiAoaXNQbGF5ZXIpIHtcblx0XHRcdHJldHVybiBwbGF5ZXJCb2FyZC5nZXRDZWxsQ29udGVudCh4LCB5KTtcblx0XHR9IGVsc2UgaWYgKCFpc1BsYXllcikge1xuXHRcdFx0cmV0dXJuIGFpQm9hcmQuZ2V0Q2VsbENvbnRlbnQoeCwgeSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROZXh0U2hpcCgpIHtcblx0XHRyZXR1cm4gcGxheWVyQm9hcmQuZ2V0TmV4dFNoaXAoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbW92ZUN1cnJlbnRTaGlwKCkge1xuXHRcdHBsYXllckJvYXJkLnJlbW92ZUN1cnJlbnRTaGlwKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRTaGlwKHgsIHksIGxlbmd0aCwgaXNWZXJ0aWNhbCwgbmFtZSkge1xuXHRcdHBsYXllckJvYXJkLnBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGlzVmVydGljYWwsIG5hbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNQbGF5ZXJzVHVybigpIHtcblx0XHRyZXR1cm4gaXNQbGF5ZXJUdXJuO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNHYW1lT3ZlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5pc092ZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBjaGFuZ2VQbGF5ZXIoKSB7XG5cdFx0aXNQbGF5ZXJUdXJuID0gaXNQbGF5ZXJUdXJuID8gZmFsc2UgOiB0cnVlO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGxheWVyQXR0YWNrKHgsIHkpIHtcblx0XHRpZiAoIWlzUGxheWVyVHVybikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zdCByZXN1bHQgPSBhaUJvYXJkLnJlY2VpdmVBdHRhY2soeCwgeSk7XG5cdFx0aWYgKCFyZXN1bHQpIHtcblx0XHRcdHJldHVybiBmYWxzZTsgLy8gaW52YWxpZCBhdHRhY2tcblx0XHR9XG5cdFx0Y2hhbmdlUGxheWVyKCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdGZ1bmN0aW9uIGFpQXR0YWNrKCkge1xuXHRcdGNvbnN0IHRhcmdldHMgPSBwbGF5ZXJCb2FyZC5nZXRBdmFpbGFibGVDZWxscygpO1xuXG5cdFx0aWYgKHRhcmdldHMubGVuZ3RoID09PSAwKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBBSSB2ZXJzaW9uIDE6IGdlbmVyYXRlIHJhbmRvbSBhdHRhY2tcblx0XHRjb25zdCByYW5kb21UYXJnZXRJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRhcmdldHMubGVuZ3RoKTtcblx0XHRjb25zdCB0YXJnZXRDZWxsID0gdGFyZ2V0c1tyYW5kb21UYXJnZXRJbmRleF07XG5cblx0XHRjb25zdCByZXN1bHQgPSBwbGF5ZXJCb2FyZC5yZWNlaXZlQXR0YWNrKHRhcmdldENlbGwueCwgdGFyZ2V0Q2VsbC55KTtcblx0XHRjaGFuZ2VQbGF5ZXIoKTtcblxuXHRcdC8vIHJldHVybiBhdHRhY2sgY29vcmRpbmF0ZXMgYW5kIHJlc3VsdHMgaW4gYW4gb2JqZWN0XG5cdFx0cmV0dXJuIHsgeDogdGFyZ2V0Q2VsbC54LCB5OiB0YXJnZXRDZWxsLnksIHJlc3VsdDogcmVzdWx0IH07XG5cdH1cblxuXHRmdW5jdGlvbiBwb3B1bGF0ZUFpQm9hcmQoKSB7XG5cdFx0Y29uc3Qgc2hpcERhdGEgPSBbXG5cdFx0XHR7IG5hbWU6IFwiQ2FycmllclwiLCBsZW5ndGg6IDUgfSxcblx0XHRcdHsgbmFtZTogXCJCYXR0bGVzaGlwXCIsIGxlbmd0aDogNCB9LFxuXHRcdFx0eyBuYW1lOiBcIkNydWlzZXJcIiwgbGVuZ3RoOiAzIH0sXG5cdFx0XHR7IG5hbWU6IFwiU3VibWFyaW5lXCIsIGxlbmd0aDogMyB9LFxuXHRcdFx0eyBuYW1lOiBcIkRlc3Ryb3llclwiLCBsZW5ndGg6IDIgfSxcblx0XHRdO1xuXG5cdFx0Zm9yIChjb25zdCBzaGlwSW5mbyBvZiBzaGlwRGF0YSkge1xuXHRcdFx0Y29uc3QgeyBuYW1lLCBsZW5ndGggfSA9IHNoaXBJbmZvO1xuXHRcdFx0bGV0IHBsYWNlZCA9IGZhbHNlO1xuXG5cdFx0XHR3aGlsZSAoIXBsYWNlZCkge1xuXHRcdFx0XHRjb25zdCB2ZXJ0aWNhbCA9IE1hdGgucmFuZG9tKCkgPCAwLjU7IC8vIFJhbmRvbWx5IGNob29zZSB2ZXJ0aWNhbCBvciBob3Jpem9udGFsIHBsYWNlbWVudFxuXHRcdFx0XHRjb25zdCB4ID0gdmVydGljYWxcblx0XHRcdFx0XHQ/IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFpQm9hcmQuc2l6ZSlcblx0XHRcdFx0XHQ6IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChhaUJvYXJkLnNpemUgLSBsZW5ndGggKyAxKSk7XG5cdFx0XHRcdGNvbnN0IHkgPSB2ZXJ0aWNhbFxuXHRcdFx0XHRcdD8gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGFpQm9hcmQuc2l6ZSAtIGxlbmd0aCArIDEpKVxuXHRcdFx0XHRcdDogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYWlCb2FyZC5zaXplKTtcblxuXHRcdFx0XHQvLyBDaGVjayBpZiB0aGUgc2hpcCBjYW4gYmUgcGxhY2VkIGF0IHRoZSByYW5kb20gcG9zaXRpb25cblx0XHRcdFx0aWYgKGFpQm9hcmQuc2hpcEZpdHMoeCwgeSwgbGVuZ3RoLCB2ZXJ0aWNhbCkpIHtcblx0XHRcdFx0XHRhaUJvYXJkLnBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIHZlcnRpY2FsLCBuYW1lKTtcblx0XHRcdFx0XHRwbGFjZWQgPSB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0U2hpcHNSZW1haW5pbmcoaXNQbGF5ZXIpIHtcblx0XHRpZiAoaXNQbGF5ZXIpIHtcblx0XHRcdHJldHVybiBwbGF5ZXJCb2FyZC5zaGlwc1JlbWFpbmluZygpO1xuXHRcdH1cblx0XHRyZXR1cm4gYWlCb2FyZC5zaGlwc1JlbWFpbmluZygpO1xuXHR9XG5cblx0cG9wdWxhdGVBaUJvYXJkKCk7XG5cblx0cmV0dXJuIHtcblx0XHRhZGRTaGlwLFxuXHRcdHBsYXllckF0dGFjayxcblx0XHRjaGVja0ZpdHMsXG5cdFx0Z2V0Q2VsbENvbnRlbnQsXG5cdFx0Z2V0U2hpcHNSZW1haW5pbmcsXG5cdFx0aXNQbGF5ZXJzVHVybixcblx0XHRnZXROZXh0U2hpcCxcblx0XHRpc0dhbWVPdmVyLFxuXHRcdHJlbW92ZUN1cnJlbnRTaGlwLFxuXHRcdHZhbGlkWFksXG5cdFx0YWlBdHRhY2ssXG5cdH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lTG9naWM7XG4iLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwLmpzXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG5cdGNvbnN0cnVjdG9yKHNpemUgPSAxMCkge1xuXHRcdHRoaXMuc2l6ZSA9IHNpemU7XG5cdFx0dGhpcy5ib2FyZCA9IFtdO1xuXHRcdHRoaXMuc2hpcHMgPSBbXTtcblx0XHR0aGlzLnBsYWNlbWVudFNoaXBzID0gW107XG5cdFx0Ly8gdGhpcy5wbGF5ZXIgPSBudWxsO1xuXHRcdHRoaXMuYXZhaWxhYmxlQ2VsbHMgPSBbXTtcblx0XHR0aGlzLmluaXRpYWxpemVCb2FyZCgpO1xuXHR9XG5cblx0aW5pdGlhbGl6ZUJvYXJkKCkge1xuXHRcdC8vIEluaXRpYWxpemUgdGhlIGJvYXJkIGFzIGEgMkQgYXJyYXkgb2Ygb2JqZWN0c1xuXHRcdGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5zaXplOyB4KyspIHtcblx0XHRcdGNvbnN0IGNvbCA9IFtdO1xuXG5cdFx0XHRmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMuc2l6ZTsgeSsrKSB7XG5cdFx0XHRcdGNvbC5wdXNoKHsgaXNFbXB0eTogdHJ1ZSwgaXNBdHRhY2tlZDogZmFsc2UsIHNoaXA6IG51bGwgfSk7XG5cdFx0XHRcdHRoaXMuYXZhaWxhYmxlQ2VsbHMucHVzaCh7IHgsIHkgfSk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmJvYXJkLnB1c2goY29sKTtcblx0XHR9XG5cblx0XHR0aGlzLmxvYWRTaGlwKDUsIFwiY2FycmllclwiKTtcblx0XHR0aGlzLmxvYWRTaGlwKDQsIFwiYmF0dGxlc2hpcFwiKTtcblx0XHR0aGlzLmxvYWRTaGlwKDMsIFwiY3J1aXNlclwiKTtcblx0XHR0aGlzLmxvYWRTaGlwKDMsIFwic3VibWFyaW5lXCIpO1xuXHRcdHRoaXMubG9hZFNoaXAoMiwgXCJwYXRyb2wgYm9hdFwiKTtcblx0fVxuXG5cdGxvYWRTaGlwKGxlbmd0aCwgbmFtZSkge1xuXHRcdGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChsZW5ndGgsIG5hbWUpO1xuXHRcdHRoaXMucGxhY2VtZW50U2hpcHMucHVzaChuZXdTaGlwKTtcblx0fVxuXG5cdGdldE5leHRTaGlwKCkge1xuXHRcdGlmICh0aGlzLnBsYWNlbWVudFNoaXBzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiB0aGlzLnBsYWNlbWVudFNoaXBzWzBdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdGdldEF2YWlsYWJsZUNlbGxzKCkge1xuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZUNlbGxzO1xuXHR9XG5cblx0cmVtb3ZlQ3VycmVudFNoaXAoKSB7XG5cdFx0aWYgKHRoaXMucGxhY2VtZW50U2hpcHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5wbGFjZW1lbnRTaGlwcy5zaGlmdCgpO1xuXHRcdH1cblx0fVxuXG5cdHBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGlzVmVydGljYWwsIG5hbWUpIHtcblx0XHRpZiAoIXRoaXMuc2hpcEZpdHMoeCwgeSwgbGVuZ3RoLCBpc1ZlcnRpY2FsKSkge1xuXHRcdFx0Ly8gU2hpcCBkb2VzIG5vdCBmaXQgYXQgZ2l2ZW4gY29vcmRpbmF0ZXNcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvL3BsYWNlIHNoaXBcblx0XHRjb25zdCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5ld1ggPSB4ICsgKGlzVmVydGljYWwgPyAwIDogaSk7XG5cdFx0XHRjb25zdCBuZXdZID0geSArIChpc1ZlcnRpY2FsID8gaSA6IDApO1xuXG5cdFx0XHRjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtuZXdYXVtuZXdZXTtcblx0XHRcdGNlbGwuaXNFbXB0eSA9IGZhbHNlO1xuXHRcdFx0Y2VsbC5zaGlwID0gbmV3U2hpcDtcblx0XHR9XG5cblx0XHR0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRzaGlwRml0cyh4LCB5LCBsZW5ndGgsIGlzVmVydGljYWwpIHtcblx0XHRsZXQgc2hpcEZpdHMgPSB0cnVlO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgbmV3WCA9IHggKyAoaXNWZXJ0aWNhbCA/IDAgOiBpKTtcblx0XHRcdGNvbnN0IG5ld1kgPSB5ICsgKGlzVmVydGljYWwgPyBpIDogMCk7XG5cdFx0XHRpZiAoIXRoaXMuaXNWYWxpZFhZKG5ld1gsIG5ld1kpIHx8ICF0aGlzLnNwYWNlSXNFbXB0eShuZXdYLCBuZXdZKSkge1xuXHRcdFx0XHRzaGlwRml0cyA9IGZhbHNlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHNoaXBGaXRzO1xuXHR9XG5cblx0aXNWYWxpZFhZKHgsIHkpIHtcblx0XHRyZXR1cm4geCA+PSAwICYmIHkgPj0gMCAmJiB4IDwgdGhpcy5zaXplICYmIHkgPCB0aGlzLnNpemU7XG5cdH1cblxuXHRzcGFjZUlzRW1wdHkoeCwgeSkge1xuXHRcdHJldHVybiB0aGlzLmJvYXJkW3hdW3ldLmlzRW1wdHk7XG5cdH1cblxuXHRyZWNlaXZlQXR0YWNrKHgsIHkpIHtcblx0XHRpZiAoIXRoaXMuaXNWYWxpZEF0dGFjayh4LCB5KSkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHQvLyBNYWtlIGF0dGFjayBvbiBzaGlwIGF0IHgseVxuXHRcdGxldCByZXN1bHQgPSBcIm1pc3NcIjtcblx0XHR0aGlzLmJvYXJkW3hdW3ldLmlzQXR0YWNrZWQgPSB0cnVlO1xuXG5cdFx0Ly8gaGl0XG5cdFx0aWYgKHRoaXMuYm9hcmRbeF1beV0uc2hpcCkge1xuXHRcdFx0Y29uc3Qgc2hpcCA9IHRoaXMuYm9hcmRbeF1beV0uc2hpcDtcblx0XHRcdHNoaXAuaGl0KCk7XG5cblx0XHRcdGlmIChzaGlwLmlzU3VuaygpKSB7XG5cdFx0XHRcdC8vIFJlbW92ZSB0aGUgc3VuayBzaGlwIGZyb20gdGhlIGFycmF5XG5cdFx0XHRcdGNvbnN0IHN1bmtJbmRleCA9IHRoaXMuc2hpcHMuZmluZEluZGV4KFxuXHRcdFx0XHRcdChzaGlwSW5BcnJheSkgPT4gc2hpcEluQXJyYXkubGVuZ3RoID09PSBzaGlwLmxlbmd0aFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRpZiAoc3Vua0luZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdHRoaXMuc2hpcHMuc3BsaWNlKHN1bmtJbmRleCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IFwiaGl0XCI7XG5cdFx0fVxuXG5cdFx0Ly8gRmluZCBhdHRhY2sgaW5kZXggaW4gYXZhaWxhYmxlQ2VsbHMgYW5kIHJlbW92ZVxuXHRcdGNvbnN0IGNlbGxJbmRleCA9IHRoaXMuYXZhaWxhYmxlQ2VsbHMuZmluZEluZGV4KFxuXHRcdFx0KGNlbGwpID0+IGNlbGwueCA9PT0geCAmJiBjZWxsLnkgPT09IHlcblx0XHQpO1xuXHRcdGlmIChjZWxsSW5kZXggIT09IC0xKSB7XG5cdFx0XHR0aGlzLmF2YWlsYWJsZUNlbGxzLnNwbGljZShjZWxsSW5kZXgsIDEpO1xuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblxuXHRpc1ZhbGlkQXR0YWNrKHgsIHkpIHtcblx0XHRyZXR1cm4gdGhpcy5pc1ZhbGlkWFkoeCwgeSkgJiYgIXRoaXMuYm9hcmRbeF1beV0uaXNBdHRhY2tlZDtcblx0fVxuXG5cdGRpc3BsYXlCb2FyZCgpIHtcblx0XHRmb3IgKGxldCB5ID0gdGhpcy5zaXplIC0gMTsgeSA+PSAwOyB5LS0pIHtcblx0XHRcdGxldCBvdXRwdXQgPSBcIlwiO1xuXHRcdFx0Zm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNpemU7IHgrKykge1xuXHRcdFx0XHRjb25zdCBjZWxsID0gdGhpcy5ib2FyZFt4XVt5XTtcblx0XHRcdFx0b3V0cHV0ICs9IGNlbGwuaXNFbXB0eSA/IFwiRSBcIiA6IFwiUyBcIjtcblx0XHRcdH1cblx0XHRcdGNvbnNvbGUubG9nKG91dHB1dCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0U2hpcCh4LCB5KSB7XG5cdFx0cmV0dXJuIHRoaXMuYm9hcmRbeF1beV0uc2hpcDtcblx0fVxuXG5cdGdldFNpemUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc2l6ZTtcblx0fVxuXG5cdGdldENlbGxDb250ZW50KHgsIHkpIHtcblx0XHRyZXR1cm4gdGhpcy5ib2FyZFt4XVt5XTtcblx0fVxuXG5cdHNoaXBzUmVtYWluaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnNoaXBzLmxlbmd0aDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCJjbGFzcyBTaGlwIHtcblx0Y29uc3RydWN0b3IobGVuZ3RoID0gMCwgbmFtZSA9IFwiXCIpIHtcblx0XHRjb25zdCBtaW5MZW5ndGggPSAyO1xuXHRcdGNvbnN0IG1heExlbmd0aCA9IDU7XG5cdFx0aWYgKGxlbmd0aCA8IG1pbkxlbmd0aCB8fCBsZW5ndGggPiBtYXhMZW5ndGgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlNoaXAgbGVuZ3RoIG11c3QgYmUgYmV0d2VlbiAyIGFuZCA1LlwiKTtcblx0XHR9XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmxlbmd0aCA9IGxlbmd0aDtcblx0XHR0aGlzLmhpdHMgPSAwO1xuXHRcdHRoaXMuc3VuayA9IGZhbHNlO1xuXHR9XG5cblx0aGl0KCkge1xuXHRcdGlmICghdGhpcy5pc1N1bmsoKSkge1xuXHRcdFx0dGhpcy5oaXRzKys7XG5cdFx0XHR0aGlzLnN1bmsgPSB0aGlzLmlzU3VuaygpO1xuXHRcdH1cblx0fVxuXG5cdGlzU3VuaygpIHtcblx0XHRyZXR1cm4gdGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aDtcblx0fVxuXG5cdG51bUhpdHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGl0cztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCBnYW1lTG9naWMgZnJvbSBcIi4vZ2FtZUxvZ2ljLmpzXCI7XG5pbXBvcnQgKiBhcyB1dGlsaXR5IGZyb20gXCIuL3V0aWxpdHkuanNcIjtcbmltcG9ydCBzaGlwSW1nIGZyb20gXCIuLi9pbWcvc3BsYXNoLnBuZ1wiO1xuaW1wb3J0IGVuZEdyYXBoaWMgZnJvbSBcIi4uL2ltZy9nYW1lT3Zlci5wbmdcIjtcblxuY29uc3QgdWkgPSAoKCkgPT4ge1xuXHRjb25zdCBnYW1lID0gZ2FtZUxvZ2ljKCk7XG5cdGNvbnN0IGdyaWRTaXplID0gMTA7XG5cdGxldCBwbGFjZW1lbnRSb3RhdGlvbiA9IHRydWU7XG5cblx0ZnVuY3Rpb24gbG9hZFNwbGFzaCgpIHtcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXG5cdFx0Y29uc3Qgc3BsYXNoID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJzcGxhc2hcIik7XG5cdFx0Y29uc3Qgc3BsYXNoVGV4dCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwic3BsYXNoX3RleHRcIik7XG5cdFx0Y29uc3Qgc3BsYXNoSW1nID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJzcGxhc2hfaW1nXCIpO1xuXHRcdGNvbnN0IHNwbGFzaEJ1dHRvbiA9IHV0aWxpdHkuY3JlYXRlRGl2KFwic3BsYXNoX2J1dHRvblwiKTtcblxuXHRcdHNwbGFzaFRleHQudGV4dENvbnRlbnQgPSBcIkJBVFRMRVNISVBcIjtcblx0XHR1dGlsaXR5LmFkZEltYWdlKHNoaXBJbWcsIHNwbGFzaEltZyk7XG5cblx0XHRjb25zdCBzdGFydEJ1dHRvbiA9IHV0aWxpdHkuY3JlYXRlQnV0dG9uKFwieWVsbG93QnV0dG9uXCIsIFwiU1RBUlQhXCIpO1xuXHRcdHN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2FkUGxhY2VtZW50VUkpO1xuXHRcdHNwbGFzaEJ1dHRvbi5hcHBlbmRDaGlsZChzdGFydEJ1dHRvbik7XG5cblx0XHRzcGxhc2guYXBwZW5kKHNwbGFzaFRleHQsIHNwbGFzaEltZywgc3BsYXNoQnV0dG9uKTtcblx0XHRvdmVybGF5LmFwcGVuZENoaWxkKHNwbGFzaCk7XG5cdH1cblxuXHRmdW5jdGlvbiBzdGFydEdhbWUoKSB7XG5cdFx0Y29uc3Qgc2hpcHNMYWJlbCA9IFwiU2hpcHMgcmVtYWluaW5nXCI7XG5cblx0XHRjb25zdCBwbGFjZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlbWVudFwiKTtcblx0XHRjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xuXHRcdHBsYWNlbWVudC5yZW1vdmUoKTtcblxuXHRcdGNvbnN0IHBsYXlmaWVsZCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxheWZpZWxkXCIpO1xuXG5cdFx0Y29uc3QgdXBwZXJUZXh0ID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJ1cHBlcl90ZXh0XCIpO1xuXHRcdGNvbnN0IHBsYXllclpvbmUgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYXllcl96b25lXCIpO1xuXHRcdGNvbnN0IG1pZGRsZVpvbmUgPSB1dGlsaXR5LmNyZWF0ZURpdihcIm1pZGRsZV96b25lXCIpO1xuXHRcdGNvbnN0IGFpWm9uZSA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiYWlfem9uZVwiKTtcblxuXHRcdC8vIFBsYXllclxuXHRcdGNvbnN0IHBsYXllckdyaWRDb250YWluZXIgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYXllcl9ncmlkX2NvbnRhaW5lclwiKTtcblx0XHRjb25zdCBwbGF5ZXJHcmlkID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGF5ZXJfZ3JpZFwiKTtcblx0XHRjb25zdCBwbGF5ZXJHcmFwaGljID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJwbGF5ZXJfZ3JhcGhpY1wiKTtcblx0XHRwbGF5ZXJHcmlkQ29udGFpbmVyLmFwcGVuZChwbGF5ZXJHcmlkLCBwbGF5ZXJHcmFwaGljKTtcblxuXHRcdGNvbnN0IHBsYXllclRleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYXllcl90ZXh0XCIpO1xuXHRcdGNvbnN0IHBsYXllclNoaXBzTGFiZWwgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYXllcl9zaGlwc19sYWJlbFwiKTtcblx0XHRwbGF5ZXJTaGlwc0xhYmVsLnRleHRDb250ZW50ID0gc2hpcHNMYWJlbDtcblx0XHRjb25zdCBwbGF5ZXJTaGlwc1RleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYXllcl9zaGlwc190ZXh0XCIpO1xuXHRcdHBsYXllclNoaXBzVGV4dC50ZXh0Q29udGVudCA9IGdhbWUuZ2V0U2hpcHNSZW1haW5pbmcodHJ1ZSk7IC8vIGlzUGxheWVyID0gdHJ1ZVxuXHRcdHBsYXllclRleHQuYXBwZW5kKHBsYXllclNoaXBzTGFiZWwsIHBsYXllclNoaXBzVGV4dCk7XG5cblx0XHQvLyBDZW50ZXJcblx0XHRjb25zdCBpY29uID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJnYW1lX2ljb25cIik7XG5cdFx0Y29uc3QgZ2FtZVRleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcImdhbWVfdGV4dFwiKTtcblx0XHRnYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiQmVnaW4hXCI7XG5cblx0XHQvLyBBSVxuXHRcdGNvbnN0IGFpR3JpZENvbnRhaW5lciA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiYWlfZ3JpZF9jb250YWluZXJcIik7XG5cdFx0Y29uc3QgYWlHcmlkID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJhaV9ncmlkXCIpO1xuXHRcdGNvbnN0IGFpR3JhcGhpYyA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiYWlfZ3JhcGhpY1wiKTtcblx0XHRhaUdyaWRDb250YWluZXIuYXBwZW5kKGFpR3JpZCwgYWlHcmFwaGljKTtcblxuXHRcdGNvbnN0IGFpVGV4dCA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiYWlfdGV4dFwiKTtcblx0XHRjb25zdCBhaVNoaXBzTGFiZWwgPSB1dGlsaXR5LmNyZWF0ZURpdihcImFpX3NoaXBzX2xhYmVsXCIpO1xuXHRcdGFpU2hpcHNMYWJlbC50ZXh0Q29udGVudCA9IHNoaXBzTGFiZWw7XG5cdFx0Y29uc3QgYWlTaGlwc1RleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcImFpX3NoaXBzX3RleHRcIik7XG5cdFx0YWlTaGlwc1RleHQudGV4dENvbnRlbnQgPSBnYW1lLmdldFNoaXBzUmVtYWluaW5nKGZhbHNlKTsgLy8gaXNQbGF5ZXIgPSBmYWxzZVxuXHRcdGFpVGV4dC5hcHBlbmQoYWlTaGlwc0xhYmVsLCBhaVNoaXBzVGV4dCk7XG5cblx0XHRjb25zdCBncmlkcyA9IHV0aWxpdHkuY3JlYXRlRGl2KFwiZ3JpZHNcIik7XG5cdFx0YWRkR3JpZChwbGF5ZXJHcmlkLCBncmlkU2l6ZSwgXCJnYW1lXCIsIHRydWUpO1xuXHRcdGFkZEdyaWQoYWlHcmlkLCBncmlkU2l6ZSwgXCJnYW1lXCIsIGZhbHNlKTtcblxuXHRcdC8vIEltYWdlc1xuXHRcdHV0aWxpdHkuYWRkSW1hZ2Uoc2hpcEltZywgaWNvbik7XG5cdFx0dXRpbGl0eS5hZGRJbWFnZShlbmRHcmFwaGljLCBwbGF5ZXJHcmFwaGljKTtcblx0XHR1dGlsaXR5LmFkZEltYWdlKGVuZEdyYXBoaWMsIGFpR3JhcGhpYyk7XG5cblx0XHRwbGF5ZXJab25lLmFwcGVuZChwbGF5ZXJHcmlkQ29udGFpbmVyLCBwbGF5ZXJUZXh0KTtcblx0XHRtaWRkbGVab25lLmFwcGVuZChpY29uLCBnYW1lVGV4dCk7XG5cdFx0YWlab25lLmFwcGVuZChhaUdyaWRDb250YWluZXIsIGFpVGV4dCk7XG5cblx0XHRncmlkcy5hcHBlbmQocGxheWVyWm9uZSwgbWlkZGxlWm9uZSwgYWlab25lKTtcblx0XHRwbGF5ZmllbGQuYXBwZW5kKHVwcGVyVGV4dCwgZ3JpZHMpO1xuXHRcdG92ZXJsYXkuYXBwZW5kKHBsYXlmaWVsZCk7XG5cblx0XHRkcmF3Qm9hcmQocGxheWVyR3JpZCwgdHJ1ZSk7XG5cblx0XHR0dXJuc0xvb3AoKTsgLy8gU3RhcnQgbWFpbiBnYW1lIGxvb3AuXG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkUGxhY2VtZW50VUkoKSB7XG5cdFx0Y29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcblx0XHRjb25zdCBzcGxhc2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwbGFzaFwiKTtcblx0XHRzcGxhc2gucmVtb3ZlKCk7XG5cblx0XHRjb25zdCBwbGFjZW1lbnQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYWNlbWVudFwiKTtcblx0XHRjb25zdCBzaGlwID0gZ2FtZS5nZXROZXh0U2hpcCgpO1xuXG5cdFx0Y29uc3QgaWNvbiA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxhY2VtZW50X2ltYWdlXCIpO1xuXHRcdGNvbnN0IHRleHQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYWNlbWVudF90ZXh0XCIpO1xuXHRcdGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IHV0aWxpdHkuY3JlYXRlRGl2KFwicGxhY2VtZW50X3JvdGF0ZVwiKTtcblx0XHRjb25zdCBwbGFjZUdyaWQgPSB1dGlsaXR5LmNyZWF0ZURpdihcInBsYWNlbWVudF9ncmlkXCIpO1xuXG5cdFx0dXRpbGl0eS5hZGRJbWFnZShzaGlwSW1nLCBpY29uKTtcblx0XHR0ZXh0LnRleHRDb250ZW50ID0gXCJQbGFjZSB5b3VyIHNoaXBzIVwiO1xuXG5cdFx0Ly8gTGlzdGVuZXJzXG5cdFx0cGxhY2VHcmlkLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBjbGVhckhpZ2hsaWdodHMpO1xuXHRcdGNvbnN0IGJ1dHRvbiA9IHV0aWxpdHkuY3JlYXRlQnV0dG9uKFwieWVsbG93QnV0dG9uXCIsIFwiUk9UQVRFXCIpO1xuXHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0cGxhY2VtZW50Um90YXRpb24gPSBwbGFjZW1lbnRSb3RhdGlvbiA/IGZhbHNlIDogdHJ1ZTtcblx0XHR9KTtcblxuXHRcdHJvdGF0ZUJ1dHRvbi5hcHBlbmRDaGlsZChidXR0b24pO1xuXG5cdFx0cGxhY2VtZW50LmFwcGVuZChpY29uLCB0ZXh0LCByb3RhdGVCdXR0b24sIHBsYWNlR3JpZCk7XG5cdFx0b3ZlcmxheS5hcHBlbmRDaGlsZChwbGFjZW1lbnQpO1xuXHRcdGFkZEdyaWQocGxhY2VHcmlkLCBncmlkU2l6ZSwgXCJwbGFjZW1lbnRcIik7XG5cdH1cblxuXHRmdW5jdGlvbiB0dXJuc0xvb3AoKSB7XG5cdFx0Ly8gd2hpbGUgKCFnYW1lLmlzR2FtZU92ZXIoKSkge31cblx0fVxuXG5cdGZ1bmN0aW9uIGRyYXdCb2FyZChncmlkLCBpc1BsYXllcikge1xuXHRcdC8vIENvbG9yIGdyaWQgY2VsbHMgZGVwZW5kaW5nIG9uIGNvbnRlbnQgYW5kIGF0dGFja3Ncblx0XHRjb25zdCBjZWxscyA9IGdyaWQucXVlcnlTZWxlY3RvckFsbChcIi5ncmlkX2NlbGxcIik7XG5cdFx0Y2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuXHRcdFx0Y29uc3QgcG9zaXRpb24gPSBjZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtcG9zXCIpLnNwbGl0KFwiLVwiKTtcblx0XHRcdGNvbnN0IHggPSBwYXJzZUludChwb3NpdGlvblswXSk7XG5cdFx0XHRjb25zdCB5ID0gcGFyc2VJbnQocG9zaXRpb25bMV0pO1xuXG5cdFx0XHRjb25zdCBjZWxsQ29udGVudCA9IGdhbWUuZ2V0Q2VsbENvbnRlbnQoeCwgeSwgaXNQbGF5ZXIpO1xuXG5cdFx0XHRpZiAoY2VsbENvbnRlbnQuc2hpcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoaXNQbGF5ZXIpIHtcblx0XHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWRfY2VsbFwiKTtcblx0XHRcdFx0fSBlbHNlIGlmIChjZWxsQ29udGVudC5pc0F0dGFja2VkKSB7XG5cdFx0XHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiaGl0X2NlbGxcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoY2VsbENvbnRlbnQuaXNFbXB0eSAmJiBjZWxsQ29udGVudC5pc0F0dGFja2VkKSB7XG5cdFx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcIm1pc3NfY2VsbFwiKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZEdyaWQoY29udGFpbmVyLCBzaXplLCB0eXBlLCBpc1BsYXllcikge1xuXHRcdC8vIFR5cGVzIGFyZSBcInBsYWNlbWVudFwiIGFuZCBcImdhbWVcIiBncmlkc1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyBpKyspIHtcblx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgaisrKSB7XG5cdFx0XHRcdGNvbnN0IHggPSBqO1xuXHRcdFx0XHRjb25zdCB5ID0gc2l6ZSAtIDEgLSBpO1xuXHRcdFx0XHRjb25zdCBjZWxsID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJncmlkX2NlbGxcIik7XG5cdFx0XHRcdGNlbGwuc2V0QXR0cmlidXRlKFwiRGF0YS1wb3NcIiwgYCR7eH0tJHt5fWApO1xuXG5cdFx0XHRcdC8vIFBsYWNlbWVudCBHcmlkXG5cdFx0XHRcdGlmICh0eXBlID09PSBcInBsYWNlbWVudFwiKSB7XG5cdFx0XHRcdFx0Y2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0XHRcdFx0XHRcdHBsYWNlbWVudE1vdXNlT3Zlcih4LCB5KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGFjZVNoaXApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIGFpIGdyaWRcblx0XHRcdFx0ZWxzZSBpZiAoKHR5cGUgPSBcImdhbWVcIiAmJiBpc1BsYXllciA9PT0gZmFsc2UpKSB7XG5cdFx0XHRcdFx0Y2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsICgpID0+IHtcblx0XHRcdFx0XHRcdGhpZ2hsaWdodENlbGwoY2VsbCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y2VsbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgY2xlYXJIaWdobGlnaHRzKTtcblx0XHRcdFx0XHRjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRhdHRhY2tDZWxsKGNlbGwsIHgsIHkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKGNlbGwpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGF0dGFja0NlbGwoY2VsbCwgeCwgeSkge1xuXHRcdGNvbnN0IHJlc3VsdCA9IGdhbWUucGxheWVyQXR0YWNrKHgsIHkpO1xuXHRcdGlmIChyZXN1bHQgPT09IFwiaGl0XCIpIHtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxfaGl0XCIpO1xuXHRcdFx0Y2VsbC50ZXh0Q29udGVudCA9IFwiWFwiO1xuXHRcdH0gZWxzZSBpZiAocmVzdWx0ID09PSBcIm1pc3NcIikge1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbF9taXNzXCIpO1xuXHRcdH1cblxuXHRcdGlmIChyZXN1bHQgIT09IGZhbHNlKSB7XG5cdFx0XHQvLyBNYWtlIEFJIGF0dGFja1xuXHRcdFx0Y29uc3QgYWlBdHRhY2sgPSBnYW1lLmFpQXR0YWNrKCk7XG5cdFx0XHR1cGRhdGVQbGF5ZXJCb2FyZChhaUF0dGFjay54LCBhaUF0dGFjay55LCBhaUF0dGFjay5yZXN1bHQpO1xuXHRcdFx0dXBkYXRlR2FtZVRleHQocmVzdWx0KTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB1cGRhdGVHYW1lVGV4dChyZXN1bHQpIHtcblx0XHRjb25zdCBnYW1lVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZV90ZXh0XCIpO1xuXHRcdGNvbnN0IHVwZGF0ZVRleHQgPSByZXN1bHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXN1bHQuc2xpY2UoMSk7XG5cdFx0Y29uc3QgcGxheWVyU2hpcHNUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfc2hpcHNfdGV4dFwiKTtcblx0XHRjb25zdCBhaVNoaXBzVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWlfc2hpcHNfdGV4dFwiKTtcblxuXHRcdGdhbWVUZXh0LnRleHRDb250ZW50ID0gYCR7dXBkYXRlVGV4dH0hYDtcblx0XHQvLyBzaGFrZSB0ZXh0IGJveCBvbiBoaXRcblx0XHRpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG5cdFx0XHRnYW1lVGV4dC5jbGFzc0xpc3QuYWRkKFwic2hha2VcIik7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0Z2FtZVRleHQuY2xhc3NMaXN0LnJlbW92ZShcInNoYWtlXCIpO1xuXHRcdFx0fSwgMTAwMCk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGxheWVyU2hpcHNSZW1haW5pbmcgPSBnYW1lLmdldFNoaXBzUmVtYWluaW5nKHRydWUpO1xuXHRcdGNvbnN0IGFpU2hpcHNSZW1haW5pbmcgPSBnYW1lLmdldFNoaXBzUmVtYWluaW5nKGZhbHNlKTtcblxuXHRcdHBsYXllclNoaXBzVGV4dC50ZXh0Q29udGVudCA9IHBsYXllclNoaXBzUmVtYWluaW5nO1xuXHRcdGFpU2hpcHNUZXh0LnRleHRDb250ZW50ID0gYWlTaGlwc1JlbWFpbmluZztcblxuXHRcdGlmIChwbGF5ZXJTaGlwc1JlbWFpbmluZyA9PT0gMCkge1xuXHRcdFx0ZW5kR2FtZShmYWxzZSk7IC8vIHBsYXllcldpbnMgPSB0cnVlXG5cdFx0fSBlbHNlIGlmIChhaVNoaXBzUmVtYWluaW5nID09PSAwKSB7XG5cdFx0XHRlbmRHYW1lKHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHVwZGF0ZVBsYXllckJvYXJkKHgsIHksIHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdC8vIEdldCBwbGF5ZXIgY2VsbFxuXHRcdGNvbnN0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9ncmlkXCIpO1xuXHRcdGNvbnN0IGNlbGwgPSBwbGF5ZXJHcmlkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcz1cIiR7eH0tJHt5fVwiXWApO1xuXHRcdC8vIFVwZGF0ZSBjbGFzc0xpc3Rcblx0XHRpZiAocmVzdWx0ID09PSBcImhpdFwiKSB7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsX2hpdFwiKTtcblx0XHRcdC8vIFNoYWtlIHBsYXllciBib2FyZFxuXHRcdFx0cGxheWVyR3JpZC5jbGFzc0xpc3QuYWRkKFwic2hha2VcIik7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0cGxheWVyR3JpZC5jbGFzc0xpc3QucmVtb3ZlKFwic2hha2VcIik7XG5cdFx0XHR9LCAxMDAwKTtcblx0XHR9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJtaXNzXCIpIHtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxfbWlzc1wiKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBoaWdobGlnaHRDZWxsKGNlbGwpIHtcblx0XHRpZiAoZ2FtZS5pc1BsYXllcnNUdXJuKCkpIHtcblx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxfaGlnaGxpZ2h0XCIpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHBsYWNlbWVudE1vdXNlT3Zlcih4LCB5KSB7XG5cdFx0Y2xlYXJIaWdobGlnaHRzKCk7XG5cdFx0Y29uc3Qgc2hpcCA9IGdhbWUuZ2V0TmV4dFNoaXAoKTtcblx0XHRpZiAoIXNoaXApIHtcblx0XHRcdHJlbW92ZVBsYWNlbWVudExpc3RlbmVycygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHZhbGlkID0gZ2FtZS5jaGVja0ZpdHMoeCwgeSwgc2hpcC5sZW5ndGgsIHBsYWNlbWVudFJvdGF0aW9uKTtcblxuXHRcdC8vIGNvbG9yIGNlbGxzIGlmIHNoaXAgcG9zaXRpb24gaXMgdmFsaWRcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IG5ld1ggPSB4ICsgKHBsYWNlbWVudFJvdGF0aW9uID8gMCA6IGkpO1xuXHRcdFx0Y29uc3QgbmV3WSA9IHkgKyAocGxhY2VtZW50Um90YXRpb24gPyBpIDogMCk7XG5cdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9zPVwiJHtuZXdYfS0ke25ld1l9XCJdYCk7XG5cblx0XHRcdGlmICh2YWxpZCkge1xuXHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZF9jZWxsXCIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKGdhbWUudmFsaWRYWShuZXdYLCBuZXdZKSkge1xuXHRcdFx0XHRcdGNlbGwuY2xhc3NMaXN0LmFkZChcImludmFsaWRfY2VsbFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIHBsYWNlU2hpcChlKSB7XG5cdFx0Y29uc3Qgc2hpcCA9IGdhbWUuZ2V0TmV4dFNoaXAoKTtcblx0XHRpZiAoIXNoaXApIHtcblx0XHRcdC8vIEFsbCBzaGlwcyBwbGFjZWRcblx0XHRcdHJlbW92ZVBsYWNlbWVudExpc3RlbmVycygpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBvc2l0aW9uID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wb3NcIikuc3BsaXQoXCItXCIpO1xuXHRcdGNvbnN0IHggPSBwYXJzZUludChwb3NpdGlvblswXSk7XG5cdFx0Y29uc3QgeSA9IHBhcnNlSW50KHBvc2l0aW9uWzFdKTtcblx0XHRjb25zdCB2YWxpZCA9IGdhbWUuY2hlY2tGaXRzKHgsIHksIHNoaXAubGVuZ3RoLCBwbGFjZW1lbnRSb3RhdGlvbik7XG5cblx0XHRpZiAodmFsaWQpIHtcblx0XHRcdGdhbWUuYWRkU2hpcCh4LCB5LCBzaGlwLmxlbmd0aCwgcGxhY2VtZW50Um90YXRpb24sIHNoaXAubmFtZSk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNoaXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgbmV3WCA9IHggKyAocGxhY2VtZW50Um90YXRpb24gPyAwIDogaSk7XG5cdFx0XHRcdGNvbnN0IG5ld1kgPSB5ICsgKHBsYWNlbWVudFJvdGF0aW9uID8gaSA6IDApO1xuXHRcdFx0XHRjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihcblx0XHRcdFx0XHRgW2RhdGEtcG9zPVwiJHtuZXdYfS0ke25ld1l9XCJdYFxuXHRcdFx0XHQpO1xuXHRcdFx0XHRjZWxsLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWRfY2VsbFwiKTtcblx0XHRcdH1cblx0XHRcdGdhbWUucmVtb3ZlQ3VycmVudFNoaXAoKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjbGVhckhpZ2hsaWdodHMoKSB7XG5cdFx0Y29uc3QgaGlnaGxpZ2h0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG5cdFx0XHRcIi52YWxpZF9jZWxsLCAuaW52YWxpZF9jZWxsLCAuY2VsbF9oaWdobGlnaHRcIlxuXHRcdCk7XG5cdFx0aGlnaGxpZ2h0cy5mb3JFYWNoKChjZWxsKSA9PiB7XG5cdFx0XHRjZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJ2YWxpZF9jZWxsXCIpO1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZF9jZWxsXCIpO1xuXHRcdFx0Y2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiY2VsbF9oaWdobGlnaHRcIik7XG5cdFx0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiByZW1vdmVQbGFjZW1lbnRMaXN0ZW5lcnMoKSB7XG5cdFx0Y29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2VtZW50X2dyaWRcIik7XG5cdFx0Z3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cblx0XHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnllbGxvd0J1dHRvblwiKTtcblx0XHRidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcInllbGxvd0J1dHRvblwiKTtcblx0XHRidXR0b24uY2xhc3NMaXN0LmFkZChcImdyZWVuQnV0dG9uXCIpO1xuXG5cdFx0YnV0dG9uLnRleHRDb250ZW50ID0gXCJTVEFSVCFcIjtcblx0XHRidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYWNlU2hpcCk7XG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydEdhbWUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZEJhY2tncm91bmQoKSB7XG5cdFx0Y29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblx0XHRjb25zdCBvdmVybGF5ID0gdXRpbGl0eS5jcmVhdGVEaXYoXCJvdmVybGF5XCIpO1xuXHRcdGNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cdH1cblxuXHRmdW5jdGlvbiBlbmRHYW1lKHBsYXllcldpbnMpIHtcblx0XHRjb25zdCBhaUdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFpX2dyaWRcIik7XG5cdFx0Y29uc3QgcGxheWVyR3JhcGhpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX2dyYXBoaWNcIik7XG5cdFx0Y29uc3QgYWlHcmFwaGljID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5haV9ncmFwaGljXCIpO1xuXHRcdGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi51cHBlcl90ZXh0XCIpO1xuXHRcdGNvbnN0IGdhbWVUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lX3RleHRcIik7XG5cblx0XHRpZiAocGxheWVyV2lucykge1xuXHRcdFx0YWlHcmFwaGljLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cdFx0XHRnYW1lVGV4dC50ZXh0Q29udGVudCA9IFwiWW91IHdpbiFcIjtcblx0XHRcdGluZm9UZXh0LnRleHRDb250ZW50ID0gXCJBbGwgY29tcHV0ZXIgc2hpcHMgZGVzdHJveWVkIVwiO1xuXHRcdH0gZWxzZSBpZiAoIXBsYXllcldpbnMpIHtcblx0XHRcdHBsYXllckdyYXBoaWMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0XHRcdGdhbWVUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgbG9zZSFcIjtcblx0XHRcdGluZm9UZXh0LnRleHRDb250ZW50ID0gXCJZb3VyIHNoaXBzIGhhdmUgYmVlbiBkZXN0cm95ZWQhXCI7XG5cdFx0fVxuXHRcdGFpR3JpZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5cdH1cblxuXHRsb2FkQmFja2dyb3VuZCgpO1xuXHRsb2FkU3BsYXNoKCk7XG5cdC8vIGxvYWRQbGFjZW1lbnRVSSgpO1xuXHQvLyBzdGFydEdhbWUoKTtcbn0pKCk7XG4iLCIvLyBIZWxwZXIgZnVuY3Rpb25zIEkgdXNlIG9mdGVuXG5jb25zdCBjcmVhdGVEaXYgPSAoY2xhc3NOYW1lKSA9PiB7XG5cdGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG5cdHJldHVybiBkaXY7XG59O1xuXG5jb25zdCBhZGRJbWFnZSA9IChwYXRoLCBjb250YWluZXIpID0+IHtcblx0Y29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG5cdGltZy5zcmMgPSBwYXRoO1xuXG5cdGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xufTtcblxuY29uc3QgY3JlYXRlQnV0dG9uID0gKGNsYXNzTmFtZSwgYnV0dG9uVGV4dCkgPT4ge1xuXHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRidXR0b24uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHRidXR0b24udGV4dENvbnRlbnQgPSBidXR0b25UZXh0O1xuXHRyZXR1cm4gYnV0dG9uO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlRGl2LCBhZGRJbWFnZSwgY3JlYXRlQnV0dG9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=