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
    },  true && __jsx("div", {
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

/***/ })

})
//# sourceMappingURL=index.js.fa6b9123ad0c858635a1.hot-update.js.map