webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Components/Item/Item.jsx":
/*!**********************************!*\
  !*** ./Components/Item/Item.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _item_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item.module.scss */ "./Components/Item/item.module.scss");
/* harmony import */ var _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_item_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
/* harmony import */ var _helpers_quality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/quality */ "./helpers/quality.js");

var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\Item\\Item.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





class Item extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    switch (this.props.type) {
      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__["itemType"].GREY:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item_consumerGrade
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__["itemType"].LIGHTBLUE:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item_baseGrade
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__["itemType"].BLUE:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item_blue
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__["itemType"].PURPLE:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item_purple
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__["itemType"].PINK:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item_pink
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__["itemType"].RED:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item_red
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__["itemType"].GOLD:
        this.state = {
          gunCardBorderName: this.props.inventoryStyles ? _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item_red : _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item_special
        };
        break;

      default:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item_consumerGrade
        };
        break;
    }

    if (this.props.isStatrak) {
      if (this.props.type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__["itemType"].GOLD) {
        if (this.props.inventoryStyles) {
          this.state = _objectSpread({}, this.state, {
            showStatrak: true
          });
        } else {
          this.state = _objectSpread({}, this.state, {
            showStatrak: false
          });
        }
      } else {
        this.state = _objectSpread({}, this.state, {
          showStatrak: true
        });
      }
    }
  }

  render() {
    return __jsx("div", {
      onMouseOver: () => {
        this.setState({
          modalInfoVisible: true
        });
      },
      onMouseLeave: () => {
        this.setState({
          modalInfoVisible: false
        });
      },
      className: "".concat(_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item, " ").concat(this.props.inventoryStyles && _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item_inInventory),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, this.state.modalInfoVisible && __jsx("div", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalInfo__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, this.state.showStatrak && "StatTrak™ ", this.props.weapon, " ", this.props.showSkinTitle && __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.skintitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, this.props.skin)), __jsx("hr", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalInfo__line,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }), this.props.quality && __jsx("div", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalInfo__qualityWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalInfo__label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, "Quality: "), __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.modalInfo__info,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, this.props.quality))), __jsx("div", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.imageWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: this.props.image,
      className: "".concat(_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.img, " ").concat(this.props.inventoryStyles && _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.img_inInventory),
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: "".concat(_item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bottom, " ").concat(this.state.gunCardBorderName),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.itemTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }
    }, this.state.showStatrak && "StatTrak™ ", this.props.weapon), this.props.showSkinTitle && __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.skintitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 13
      }
    }, this.props.skin)));
  }

}

/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./Components/Item/item.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Components/Item/item.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".item_item__19Udh {\n  width: 122px;\n  height: 105px;\n  position: relative;\n  flex-shrink: 0; }\n  .item_item_inInventory__1PvPc {\n    width: 135px;\n    height: 136px; }\n  .item_item__19Udh .item_modalInfo__2QuKF {\n    position: absolute;\n    right: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.75);\n    transform: translateX(105%);\n    z-index: 1;\n    color: white;\n    width: 220px;\n    text-align: center;\n    padding: 10px 0;\n    font-size: 0.8rem; }\n    .item_item__19Udh .item_modalInfo__line__2cyCf {\n      opacity: 0.1; }\n    .item_item__19Udh .item_modalInfo__label__VEfbi {\n      opacity: 0.75; }\n  .item_item__19Udh .item_imageWrap__1eiOo {\n    height: 70%;\n    width: 100%;\n    background: #fdfdfd69;\n    display: flex;\n    align-items: center;\n    justify-content: center; }\n    .item_item__19Udh .item_imageWrap__1eiOo .item_img__zVA8W {\n      width: 99px; }\n      .item_item__19Udh .item_imageWrap__1eiOo .item_img_inInventory__Nr1Ut {\n        width: 120px; }\n  .item_item__19Udh .item_bottom__QbbnY {\n    height: 30%;\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    padding-left: 7px;\n    box-sizing: border-box; }\n    .item_item__19Udh .item_bottom__QbbnY .item_itemTitle__45Vdd {\n      word-break: keep-all;\n      font-size: 0.68rem;\n      font-weight: 500;\n      color: white; }\n    .item_item__19Udh .item_bottom__QbbnY .item_skintitle__3yChY {\n      word-break: keep-all;\n      font-size: 0.65rem;\n      font-weight: 400;\n      color: white; }\n  .item_item_red__2N5_f {\n    background: #eb4b4b; }\n  .item_item_pink__ES_qo {\n    background: #d32ee6; }\n  .item_item_purple__arWcM {\n    background: #8847ff; }\n  .item_item_blue__2U3Hw {\n    background: #4b69ff; }\n  .item_item_special__3-uBZ {\n    background: #9a8610; }\n  .item_item_consumerGrade__1LEMA {\n    background: #8b98a6; }\n  .item_item_baseGrade__3mVHT {\n    background: #5e98d9; }\n", "",{"version":3,"sources":["D:/Projects/react-ssr/react-ssr/Components/Item/item.module.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,cAAc,EAAA;EAEd;IACE,YAAY;IACZ,aAAa,EAAA;EARjB;IAYI,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,+BAA+B;IAC/B,2BAA2B;IAC3B,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,iBAAiB,EAAA;IAtBrB;MAyBM,YAAY,EAAA;IAzBlB;MA6BM,aAAa,EAAA;EA7BnB;IAkCI,WAAW;IACX,WAAW;IACX,qBAAqB;IACrB,aAAa;IACb,mBAAmB;IACnB,uBAAuB,EAAA;IAvC3B;MAyCM,WAAW,EAAA;MAzCjB;QA2CQ,YAAY,EAAA;EA3CpB;IAiDI,WAAW;IACX,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,sBAAsB,EAAA;IAxD1B;MA0DM,oBAAoB;MACpB,kBAAkB;MAClB,gBAAgB;MAChB,YAAY,EAAA;IA7DlB;MAgEM,oBAAoB;MACpB,kBAAkB;MAClB,gBAAgB;MAChB,YAAY,EAAA;EAIhB;IACE,mBAAmB,EAAA;EAGrB;IACE,mBAAmB,EAAA;EAGrB;IACE,mBAAmB,EAAA;EAGrB;IACE,mBAAmB,EAAA;EAGrB;IACE,mBAAmB,EAAA;EAErB;IACE,mBAAmB,EAAA;EAErB;IACE,mBAAmB,EAAA","file":"item.module.scss","sourcesContent":[".item {\r\n  width: 122px;\r\n  height: 105px;\r\n  position: relative;\r\n  flex-shrink: 0;\r\n\r\n  &_inInventory {\r\n    width: 135px;\r\n    height: 136px;\r\n  }\r\n\r\n  .modalInfo {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    background: rgba(0, 0, 0, 0.75);\r\n    transform: translateX(105%);\r\n    z-index: 1;\r\n    color: white;\r\n    width: 220px;\r\n    text-align: center;\r\n    padding: 10px 0;\r\n    font-size: 0.8rem;\r\n\r\n    &__line {\r\n      opacity: 0.1;\r\n    }\r\n\r\n    &__label {\r\n      opacity: 0.75;\r\n    }\r\n  }\r\n\r\n  .imageWrap {\r\n    height: 70%;\r\n    width: 100%;\r\n    background: #fdfdfd69;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    .img {\r\n      width: 99px;\r\n      &_inInventory {\r\n        width: 120px;\r\n      }\r\n    }\r\n  }\r\n\r\n  .bottom {\r\n    height: 30%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-left: 7px;\r\n    box-sizing: border-box;\r\n    .itemTitle {\r\n      word-break: keep-all;\r\n      font-size: 0.68rem;\r\n      font-weight: 500;\r\n      color: white;\r\n    }\r\n    .skintitle {\r\n      word-break: keep-all;\r\n      font-size: 0.65rem;\r\n      font-weight: 400;\r\n      color: white;\r\n    }\r\n  }\r\n\r\n  &_red {\r\n    background: #eb4b4b;\r\n  }\r\n\r\n  &_pink {\r\n    background: #d32ee6;\r\n  }\r\n\r\n  &_purple {\r\n    background: #8847ff;\r\n  }\r\n\r\n  &_blue {\r\n    background: #4b69ff;\r\n  }\r\n\r\n  &_special {\r\n    background: #9a8610;\r\n  }\r\n  &_consumerGrade {\r\n    background: #8b98a6;\r\n  }\r\n  &_baseGrade {\r\n    background: #5e98d9;\r\n  }\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"item": "item_item__19Udh",
	"item_inInventory": "item_item_inInventory__1PvPc",
	"modalInfo": "item_modalInfo__2QuKF",
	"modalInfo__line": "item_modalInfo__line__2cyCf",
	"modalInfo__label": "item_modalInfo__label__VEfbi",
	"imageWrap": "item_imageWrap__1eiOo",
	"img": "item_img__zVA8W",
	"img_inInventory": "item_img_inInventory__Nr1Ut",
	"bottom": "item_bottom__QbbnY",
	"itemTitle": "item_itemTitle__45Vdd",
	"skintitle": "item_skintitle__3yChY",
	"item_red": "item_item_red__2N5_f",
	"item_pink": "item_item_pink__ES_qo",
	"item_purple": "item_item_purple__arWcM",
	"item_blue": "item_item_blue__2U3Hw",
	"item_special": "item_item_special__3-uBZ",
	"item_consumerGrade": "item_item_consumerGrade__1LEMA",
	"item_baseGrade": "item_item_baseGrade__3mVHT"
};

/***/ })

})
//# sourceMappingURL=index.js.da1e06313a771abe08e0.hot-update.js.map