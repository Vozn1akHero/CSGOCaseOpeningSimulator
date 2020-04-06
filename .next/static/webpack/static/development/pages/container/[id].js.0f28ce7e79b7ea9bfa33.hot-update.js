webpackHotUpdate("static\\development\\pages\\container\\[id].js",{

/***/ "./Components/Showcase/Showcase.jsx":
/*!******************************************!*\
  !*** ./Components/Showcase/Showcase.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showcase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Item/Item */ "./Components/Item/Item.jsx");
/* harmony import */ var _showcase_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./showcase.module.scss */ "./Components/Showcase/showcase.module.scss");
/* harmony import */ var _showcase_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_showcase_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\Showcase\\Showcase.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Showcase extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: _showcase_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.showcase,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx("span", {
      className: _showcase_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.introtext,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, "Items that might be in this case:"), __jsx("div", {
      className: _showcase_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.items,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, this.props.items.map((value, index) => __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      showSkinTitle: true,
      type: value.type,
      image: value.image,
      weapon: value.weapon,
      skin: value.skin,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    })), this.props.baseContainerType && __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: _helpers_item_type__WEBPACK_IMPORTED_MODULE_3__["itemType"].GOLD,
      image: "/images/specialitem1.png",
      weapon: "★ Rare special item ★",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }
    })));
  }

}

/***/ })

})
//# sourceMappingURL=[id].js.0f28ce7e79b7ea9bfa33.hot-update.js.map