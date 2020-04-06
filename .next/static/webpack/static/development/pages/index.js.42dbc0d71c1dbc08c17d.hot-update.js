webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Components/ReceivedItems/ReceivedItems.jsx":
/*!****************************************************!*\
  !*** ./Components/ReceivedItems/ReceivedItems.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReceivedItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/storage */ "./helpers/storage.js");
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Item/Item */ "./Components/Item/Item.jsx");
/* harmony import */ var _ScrollableList_ScrollableList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ScrollableList/ScrollableList */ "./Components/ScrollableList/ScrollableList.jsx");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\ReceivedItems\\ReceivedItems.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class ReceivedItems extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      items: _helpers_storage__WEBPACK_IMPORTED_MODULE_1__["default"].selectAll()
    };
    console.log(this.state.items);
  }

  render() {
    return __jsx(_ScrollableList_ScrollableList__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, this.state.items.map((value, index) => __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      showSkinTitle: true,
      inventoryStyles: true,
      type: value.type,
      image: value.image,
      weapon: value.weapon,
      quality: value.quality,
      skin: value.skin,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    })));
  }

}

/***/ })

})
//# sourceMappingURL=index.js.42dbc0d71c1dbc08c17d.hot-update.js.map