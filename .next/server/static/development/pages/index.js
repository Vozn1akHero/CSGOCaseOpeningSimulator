module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Case/Case.jsx":
/*!**********************************!*\
  !*** ./Components/Case/Case.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Case; });
/* harmony import */ var _case_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./case.module.scss */ "./Components/Case/case.module.scss");
/* harmony import */ var _case_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_case_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Item/Item */ "./Components/Item/Item.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
/* harmony import */ var _helpers_container_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/container-type */ "./helpers/container-type.js");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\Case\\Case.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






class Case extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(props) {
    super(props);

    switch (this.props.chosenType) {
      case _helpers_container_type__WEBPACK_IMPORTED_MODULE_5__["containerType"][0]:
        this.state = {
          linkBase: "case"
        };
        break;

      case _helpers_container_type__WEBPACK_IMPORTED_MODULE_5__["containerType"][1]:
        this.state = {
          linkBase: "souvenir"
        };
        break;

      default:
        this.state = {
          linkBase: "case"
        };
        break;
    }
  }

  render() {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `/container/` + this.props.id + `?type=${this.state.linkBase}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "case",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
      inventoryStyles: true,
      type: _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].GREY,
      image: this.props.img,
      weapon: this.props.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    })));
  }

}

/***/ }),

/***/ "./Components/Case/case.module.scss":
/*!******************************************!*\
  !*** ./Components/Case/case.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"case": "case_case__GlsPs",
	"img": "case_img__2Pwcd"
};

/***/ }),

/***/ "./Components/CaseList/CaseList.jsx":
/*!******************************************!*\
  !*** ./Components/CaseList/CaseList.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CaseList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Case_Case__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Case/Case */ "./Components/Case/Case.jsx");
/* harmony import */ var _ScrollableList_ScrollableList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ScrollableList/ScrollableList */ "./Components/ScrollableList/ScrollableList.jsx");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\CaseList\\CaseList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class CaseList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      caseList: this.props.items
    };
  } // select = (page) => {
  //   let firstIndex = (page - 1) * 30;
  //   let lastIndex = firstIndex + 29;
  //   return this.props.items.slice(firstIndex, lastIndex);
  // };


  render() {
    return __jsx(_ScrollableList_ScrollableList__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, this.state.caseList.map((value, index) => __jsx(_Case_Case__WEBPACK_IMPORTED_MODULE_1__["default"], {
      chosenType: this.props.chosenType,
      key: index,
      id: value.id,
      title: value.title,
      img: value.image,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 11
      }
    })));
  }

}

/***/ }),

/***/ "./Components/Dropdown/Dropdown.jsx":
/*!******************************************!*\
  !*** ./Components/Dropdown/Dropdown.jsx ***!
  \******************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.module.scss */ "./Components/Dropdown/Dropdown.module.scss");
/* harmony import */ var _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\Dropdown\\Dropdown.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Dropdown = props => {
  const {
    0: optionsVisible,
    1: setOptionsVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const onOptionClick = index => {
    props.onOptionClick(index);
    setOptionsVisible(false);
  };

  return __jsx("div", {
    className: _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.dropdown,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    onClick: () => {
      setOptionsVisible(!optionsVisible);
    },
    className: _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.titleWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, props.title), __jsx("div", {
    className: _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.optWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.chosenOption,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, props.chosenOption), __jsx("img", {
    src: "/images/chevron-right.png",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }))), optionsVisible && __jsx("ul", {
    className: _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.options,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, props.options.map((value, index) => __jsx("li", {
    key: index,
    onClick: () => onOptionClick(index),
    className: _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.option,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, value))));
};

/***/ }),

/***/ "./Components/Dropdown/Dropdown.module.scss":
/*!**************************************************!*\
  !*** ./Components/Dropdown/Dropdown.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"dropdown": "Dropdown_dropdown__13gy4",
	"titleWrap": "Dropdown_titleWrap__35hsE",
	"title": "Dropdown_title__2d2xn",
	"optWrap": "Dropdown_optWrap__6CLsp",
	"chosenOption": "Dropdown_chosenOption__Q8raN",
	"options": "Dropdown_options__31TA8",
	"option": "Dropdown_option__2zvUl"
};

/***/ }),

/***/ "./Components/HeaderAnchor/HeaderAnchor.jsx":
/*!**************************************************!*\
  !*** ./Components/HeaderAnchor/HeaderAnchor.jsx ***!
  \**************************************************/
/*! exports provided: HeaderAnchor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderAnchor", function() { return HeaderAnchor; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\HeaderAnchor\\HeaderAnchor.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const HeaderAnchor = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: props.to,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "jsx-2216202401" + " " + 'header-btn',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: props.icon,
    alt: "",
    className: "jsx-2216202401",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }))), props.bordered && __jsx("hr", {
    className: "jsx-2216202401" + " " + 'header-btn__border',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 28
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2216202401",
    __self: undefined
  }, ".header-btn.jsx-2216202401{height:100%;width:200px;background:none;outline:none;font-weight:500;font-size:1.01rem;color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-text-decoration:none;text-decoration:none;}.header-btn.jsx-2216202401 img.jsx-2216202401{width:22px;}.header-btn__border.jsx-2216202401{height:100%;width:3px;background:rgba(0,0,0,0.4);margin:0;float:right;border:none;}.header-btn.jsx-2216202401:hover{background:rgba(255,255,255,0.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xccmVhY3Qtc3NyXFxyZWFjdC1zc3JcXENvbXBvbmVudHNcXEhlYWRlckFuY2hvclxcSGVhZGVyQW5jaG9yLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlUyxBQUd5QixBQWFELEFBR0MsQUFRd0IsV0FWdEMsQ0FiYyxBQWdCRixVQUNvQixFQWhCZCxTQXVCbEIsT0F0QmUsU0FnQkosSUFmTyxLQWdCSixXQWZNLENBZ0JOLFlBQ2QsS0FoQmMsWUFDQywwRUFDTSw2RkFDSSxtR0FDRixrREFDdkIiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxyZWFjdC1zc3JcXHJlYWN0LXNzclxcQ29tcG9uZW50c1xcSGVhZGVyQW5jaG9yXFxIZWFkZXJBbmNob3IuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyQW5jaG9yID0gKHByb3BzKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDw+XHJcbiAgICAgICAgPExpbmsgaHJlZj17cHJvcHMudG99PlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPSdoZWFkZXItYnRuJz5cclxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmljb259IGFsdD0nJyAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICB7cHJvcHMuYm9yZGVyZWQgJiYgPGhyIGNsYXNzTmFtZT0naGVhZGVyLWJ0bl9fYm9yZGVyJyAvPn1cclxuICAgICAgPC8+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5oZWFkZXItYnRuIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4wMXJlbTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmhlYWRlci1idG4gaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZGVyLWJ0bl9fYm9yZGVyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaGVhZGVyLWJ0bjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\react-ssr\\\\react-ssr\\\\Components\\\\HeaderAnchor\\\\HeaderAnchor.jsx */"));
};

/***/ }),

/***/ "./Components/HeaderNav/HeaderNav.jsx":
/*!********************************************!*\
  !*** ./Components/HeaderNav/HeaderNav.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderNav; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderNav_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderNav.module.scss */ "./Components/HeaderNav/HeaderNav.module.scss");
/* harmony import */ var _HeaderNav_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_HeaderNav_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderAnchor_HeaderAnchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HeaderAnchor/HeaderAnchor */ "./Components/HeaderAnchor/HeaderAnchor.jsx");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\HeaderNav\\HeaderNav.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class HeaderNav extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: _HeaderNav_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.headerNav,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx(_HeaderAnchor_HeaderAnchor__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchor"], {
      bordered: true,
      to: "/",
      icon: "/images/homeicon.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }), __jsx(_HeaderAnchor_HeaderAnchor__WEBPACK_IMPORTED_MODULE_2__["HeaderAnchor"], {
      to: "/settings",
      icon: "/images/settingsicon.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }));
  }

}

/***/ }),

/***/ "./Components/HeaderNav/HeaderNav.module.scss":
/*!****************************************************!*\
  !*** ./Components/HeaderNav/HeaderNav.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"headerNav": "HeaderNav_headerNav__1v_w8"
};

/***/ }),

/***/ "./Components/Inventory/Inventory.jsx":
/*!********************************************!*\
  !*** ./Components/Inventory/Inventory.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inventory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseList_CaseList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../CaseList/CaseList */ "./Components/CaseList/CaseList.jsx");
/* harmony import */ var _Inventory_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Inventory.module.scss */ "./Components/Inventory/Inventory.module.scss");
/* harmony import */ var _Inventory_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Inventory_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _InventoryButton_InventoryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InventoryButton/InventoryButton */ "./Components/InventoryButton/InventoryButton.jsx");
/* harmony import */ var _Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Dropdown/Dropdown */ "./Components/Dropdown/Dropdown.jsx");
/* harmony import */ var _helpers_container_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/container-type */ "./helpers/container-type.js");
/* harmony import */ var _public_Souvenir_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../public/Souvenir.js */ "./public/Souvenir.js");
/* harmony import */ var _public_cases_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/cases.js */ "./public/cases.js");
/* harmony import */ var _ReceivedItems_ReceivedItems__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ReceivedItems/ReceivedItems */ "./Components/ReceivedItems/ReceivedItems.jsx");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\Inventory\\Inventory.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 //import cases from "../../public/cases.json";




class Inventory extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "changeContainerType", index => {
      if (!this.state.souvenirs) {
        if (_helpers_container_type__WEBPACK_IMPORTED_MODULE_5__["containerType"][1].id === _helpers_container_type__WEBPACK_IMPORTED_MODULE_5__["containerType"][index].id) {
          this.setState({
            souvenirs: _public_Souvenir_js__WEBPACK_IMPORTED_MODULE_6__["Souvenir"],
            containerType: _helpers_container_type__WEBPACK_IMPORTED_MODULE_5__["containerType"][index]
          });
        }
      } else {
        this.setState({
          containerType: _helpers_container_type__WEBPACK_IMPORTED_MODULE_5__["containerType"][index]
        });
      }
    });

    console.log(_public_cases_js__WEBPACK_IMPORTED_MODULE_7__["Cases"]);
    this.state = {
      cases: _public_cases_js__WEBPACK_IMPORTED_MODULE_7__["Cases"],
      chosenSection: 1,
      currentPage: 1,
      containerType: _helpers_container_type__WEBPACK_IMPORTED_MODULE_5__["containerType"][0]
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.chosenSection !== this.state.chosenSection) {
      this.setState({
        currentPage: 1
      });
    }
  }

  render() {
    return __jsx("div", {
      className: _Inventory_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inventory,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: _Inventory_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, __jsx(_InventoryButton_InventoryButton__WEBPACK_IMPORTED_MODULE_3__["InventoryButton"], {
      onClick: () => {
        this.setState({
          chosenSection: 1
        });
      },
      active: this.state.chosenSection === 1,
      text: "Cases",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    }), __jsx(_InventoryButton_InventoryButton__WEBPACK_IMPORTED_MODULE_3__["InventoryButton"], {
      onClick: () => {
        this.setState({
          chosenSection: 2
        });
      },
      active: this.state.chosenSection === 2,
      text: "Items",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: _Inventory_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.ddWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, __jsx(_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
      title: "Type",
      options: [..._helpers_container_type__WEBPACK_IMPORTED_MODULE_5__["containerType"].map(value => value.title)],
      onOptionClick: index => {
        this.changeContainerType(index);
      },
      chosenOption: this.state.containerType.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: _Inventory_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }
    }, this.state.chosenSection === 1 && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.state.containerType === _helpers_container_type__WEBPACK_IMPORTED_MODULE_5__["containerType"][0] && __jsx(_CaseList_CaseList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      chosenType: this.state.containerType,
      items: this.state.cases,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }), this.state.containerType === _helpers_container_type__WEBPACK_IMPORTED_MODULE_5__["containerType"][1] && __jsx(_CaseList_CaseList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      chosenType: this.state.containerType,
      items: this.state.souvenirs,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    })), this.state.chosenSection === 2 && __jsx(_ReceivedItems_ReceivedItems__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 46
      }
    })));
  }

}

/***/ }),

/***/ "./Components/Inventory/Inventory.module.scss":
/*!****************************************************!*\
  !*** ./Components/Inventory/Inventory.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"inventory": "Inventory_inventory__Lml40",
	"header": "Inventory_header__1WzUs",
	"listWrap": "Inventory_listWrap__39tDR",
	"ddWrap": "Inventory_ddWrap__6RBsQ"
};

/***/ }),

/***/ "./Components/InventoryButton/InventoryButton.jsx":
/*!********************************************************!*\
  !*** ./Components/InventoryButton/InventoryButton.jsx ***!
  \********************************************************/
/*! exports provided: InventoryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryButton", function() { return InventoryButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InventoryButton_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryButton.module.scss */ "./Components/InventoryButton/InventoryButton.module.scss");
/* harmony import */ var _InventoryButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_InventoryButton_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\InventoryButton\\InventoryButton.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const InventoryButton = props => {
  return __jsx("button", {
    onClick: () => props.onClick(),
    className: `${_InventoryButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inventoryBtn} ${props.active && _InventoryButton_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inventoryBtn_active}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, props.text);
};

/***/ }),

/***/ "./Components/InventoryButton/InventoryButton.module.scss":
/*!****************************************************************!*\
  !*** ./Components/InventoryButton/InventoryButton.module.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"inventoryBtn": "InventoryButton_inventoryBtn__aC-3L",
	"inventoryBtn_active": "InventoryButton_inventoryBtn_active__3YXMV"
};

/***/ }),

/***/ "./Components/Item/Item.jsx":
/*!**********************************!*\
  !*** ./Components/Item/Item.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _item_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./item.module.scss */ "./Components/Item/item.module.scss");
/* harmony import */ var _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_item_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
/* harmony import */ var _helpers_quality__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/quality */ "./helpers/quality.js");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\Item\\Item.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Item extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    switch (this.props.type) {
      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_2__["itemType"].GREY:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item_consumerGrade
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_2__["itemType"].LIGHTBLUE:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item_baseGrade
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_2__["itemType"].BLUE:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item_blue
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_2__["itemType"].PURPLE:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item_purple
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_2__["itemType"].PINK:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item_pink
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_2__["itemType"].RED:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item_red
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_2__["itemType"].GOLD:
        this.state = {
          gunCardBorderName: this.props.inventoryStyles ? _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item_red : _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item_special
        };
        break;

      default:
        this.state = {
          gunCardBorderName: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item_consumerGrade
        };
        break;
    }

    if (this.props.isStatrak) {
      if (this.props.type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_2__["itemType"].GOLD) {
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
      className: `${_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item} ${this.props.inventoryStyles && _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.item_inInventory}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 7
      }
    }, this.state.modalInfoVisible && this.props.withModalInfo && __jsx("div", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalInfo__title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, this.state.showStatrak && "StatTrak™ ", this.props.weapon, " ", this.props.showSkinTitle && __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.skintitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, this.props.skin)), __jsx("hr", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalInfo__line,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 13
      }
    }), this.props.quality && __jsx("div", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalInfo__qualityWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalInfo__label,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 17
      }
    }, "Quality: "), __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalInfo__info,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }
    }, this.props.quality))), __jsx("div", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.imageWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: this.props.image,
      className: `${_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img} ${this.props.inventoryStyles && _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.img_inInventory}`,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: `${_item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.bottom} ${this.state.gunCardBorderName}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 11
      }
    }, this.state.showStatrak && "StatTrak™ ", this.props.weapon), this.props.showSkinTitle && __jsx("span", {
      className: _item_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.skintitle,
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

/***/ "./Components/Item/item.module.scss":
/*!******************************************!*\
  !*** ./Components/Item/item.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
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

/***/ }),

/***/ "./Components/Layout/Layout.jsx":
/*!**************************************!*\
  !*** ./Components/Layout/Layout.jsx ***!
  \**************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HeaderNav_HeaderNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HeaderNav/HeaderNav */ "./Components/HeaderNav/HeaderNav.jsx");
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/SettingsContext */ "./contexts/SettingsContext.js");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\Layout\\Layout.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = props => {
  return __jsx(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2707750688" + " " + 'layout',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx(_HeaderNav_HeaderNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), __jsx("main", {
    className: "jsx-2707750688",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, props.content), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2707750688",
    __self: undefined
  }, ".layout.jsx-2707750688{background-image:url(\"/images/csgomenubg.jpg\");width:100vw;height:100vh;background-size:cover;background-repeat:no-repeat;}main.jsx-2707750688{margin-top:3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xccmVhY3Qtc3NyXFxyZWFjdC1zc3JcXENvbXBvbmVudHNcXExheW91dFxcTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXVyxBQUc4RCxBQVEvQixnQkFDbEIsK0JBUmMsWUFDQyxhQUNTLHNCQUNNLDRCQUM5QiIsImZpbGUiOiJEOlxcUHJvamVjdHNcXHJlYWN0LXNzclxccmVhY3Qtc3NyXFxDb21wb25lbnRzXFxMYXlvdXRcXExheW91dC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXJOYXYgZnJvbSBcIi4uL0hlYWRlck5hdi9IZWFkZXJOYXZcIjtcclxuaW1wb3J0IFNldHRpbmdzQ29udGV4dFByb3ZpZGVyIGZyb20gXCIuLi8uLi9jb250ZXh0cy9TZXR0aW5nc0NvbnRleHRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFNldHRpbmdzQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbGF5b3V0Jz5cclxuICAgICAgICA8SGVhZGVyTmF2IC8+XHJcbiAgICAgICAgPG1haW4+e3Byb3BzLmNvbnRlbnR9PC9tYWluPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAubGF5b3V0IHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvaW1hZ2VzL2NzZ29tZW51YmcuanBnXCIpO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbWFpbiB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU2V0dGluZ3NDb250ZXh0UHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\react-ssr\\\\react-ssr\\\\Components\\\\Layout\\\\Layout.jsx */")));
};

/***/ }),

/***/ "./Components/ReceivedItems/ReceivedItems.jsx":
/*!****************************************************!*\
  !*** ./Components/ReceivedItems/ReceivedItems.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReceivedItems; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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
      withModalInfo: true,
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

/***/ }),

/***/ "./Components/ScrollableList/ScrollableList.jsx":
/*!******************************************************!*\
  !*** ./Components/ScrollableList/ScrollableList.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollableList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ScrollableList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScrollableList.module.scss */ "./Components/ScrollableList/ScrollableList.module.scss");
/* harmony import */ var _ScrollableList_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ScrollableList_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\ScrollableList\\ScrollableList.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class ScrollableList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: _ScrollableList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.scrollableList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6,
        columnNumber: 12
      }
    }, this.props.children);
  }

}

/***/ }),

/***/ "./Components/ScrollableList/ScrollableList.module.scss":
/*!**************************************************************!*\
  !*** ./Components/ScrollableList/ScrollableList.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"scrollableList": "ScrollableList_scrollableList__YeffC"
};

/***/ }),

/***/ "./contexts/SettingsContext.js":
/*!*************************************!*\
  !*** ./contexts/SettingsContext.js ***!
  \*************************************/
/*! exports provided: SettingsContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsContext", function() { return SettingsContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SettingsContextProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\contexts\\SettingsContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SettingsContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
class SettingsContextProvider extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      volume: 0.1,
      caseOpeningTime: 2000
    });
  }

  render() {
    return __jsx(SettingsContext.Provider, {
      value: _objectSpread({}, this.state),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, this.props.children);
  }

}

/***/ }),

/***/ "./helpers/container-type.js":
/*!***********************************!*\
  !*** ./helpers/container-type.js ***!
  \***********************************/
/*! exports provided: containerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containerType", function() { return containerType; });
const containerType = [{
  id: 0,
  title: "Case"
}, {
  id: 1,
  title: "Souvenir"
}];

/***/ }),

/***/ "./helpers/item-type.js":
/*!******************************!*\
  !*** ./helpers/item-type.js ***!
  \******************************/
/*! exports provided: itemType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemType", function() { return itemType; });
const itemType = {
  GREY: 0,
  LIGHTBLUE: 1,
  BLUE: 2,
  PURPLE: 3,
  PINK: 4,
  RED: 5,
  GOLD: 6
};

/***/ }),

/***/ "./helpers/quality.js":
/*!****************************!*\
  !*** ./helpers/quality.js ***!
  \****************************/
/*! exports provided: Quality */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quality", function() { return Quality; });
const Quality = {
  "Battle-Scarred": 0,
  "Field-Tested": 1,
  "Well-Worn": 2,
  "Minimal Wear": 3,
  "Factory New": 4
};

/***/ }),

/***/ "./helpers/storage.js":
/*!****************************!*\
  !*** ./helpers/storage.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Storage; });
/* harmony import */ var _quality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quality */ "./helpers/quality.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class Storage {}

_defineProperty(Storage, "identifier", "receivedItems");

_defineProperty(Storage, "saveReceivedItem", item => {
  const curValue = localStorage.getItem(Storage.identifier) != null ? JSON.parse(localStorage.getItem(Storage.identifier)) : [];
  const valToStore = JSON.stringify(Array.of(item, ...curValue));
  localStorage.setItem(Storage.identifier, valToStore);
});

_defineProperty(Storage, "selectAllRaw", () => {
  return JSON.parse(localStorage.getItem(Storage.identifier));
});

_defineProperty(Storage, "selectAll", () => {
  let all = JSON.parse(localStorage.getItem(Storage.identifier));
  return [...all.map(value => {
    if (value.quality) value.quality = Object.keys(_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]).find(key => _quality__WEBPACK_IMPORTED_MODULE_0__["Quality"][key] === value.quality);
    return value;
  })];
});

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Inventory_Inventory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Inventory/Inventory */ "./Components/Inventory/Inventory.jsx");
/* harmony import */ var _Components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Layout/Layout */ "./Components/Layout/Layout.jsx");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\pages\\index.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class App extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    return __jsx(_Components_Layout_Layout__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
      content: __jsx("div", {
        className: "jsx-94145611" + " " + 'index',
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }
      }, __jsx(_Components_Inventory_Inventory__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 13
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "94145611",
        __self: this
      }, ".index.jsx-94145611{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xccmVhY3Qtc3NyXFxyZWFjdC1zc3JcXHBhZ2VzXFxpbmRleC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWWUsQUFHZ0MsMEVBQ00sNkZBQ0ksbUdBQ3pCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xccmVhY3Qtc3NyXFxyZWFjdC1zc3JcXHBhZ2VzXFxpbmRleC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnZlbnRvcnkgZnJvbSBcIi4uL0NvbXBvbmVudHMvSW52ZW50b3J5L0ludmVudG9yeVwiO1xyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vQ29tcG9uZW50cy9MYXlvdXQvTGF5b3V0XCI7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXRcclxuICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbmRleCc+XHJcbiAgICAgICAgICAgIDxJbnZlbnRvcnkgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgLmluZGV4IHtcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\react-ssr\\\\react-ssr\\\\pages\\\\index.jsx */")),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./public/Souvenir.js":
/*!****************************!*\
  !*** ./public/Souvenir.js ***!
  \****************************/
/*! exports provided: Souvenir */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Souvenir", function() { return Souvenir; });
const Souvenir = [{
  id: 1,
  title: "Souvenir Cobblestone Package",
  image: "/images/cbble/package.png",
  items: [{
    title: "Souvenir P90 | Storm",
    weapon: "P90",
    skin: "Storm",
    image: "/images/cbble/p90storm.png",
    type: 0
  }, {
    title: "Souvenir SCAR-20 | Storm",
    weapon: "SCAR-20",
    skin: "Storm",
    image: "/images/cbble/scarstorm.png",
    type: 0
  }, {
    title: "Souvenir Dual Berettas | Briar",
    weapon: "Dual Berettas",
    skin: "Briar",
    image: "/images/cbble/berettasbriar.png",
    type: 0
  }, {
    title: "Souvenir MAC-10 | Indigo",
    weapon: "MAC-10",
    skin: "Indigo",
    image: "/images/cbble/mac10indigo.png",
    type: 0
  }, {
    title: "Souvenir UMP-45 | Indigo",
    weapon: "UMP-45",
    skin: "Indigo",
    image: "/images/cbble/ump45indigo.png",
    type: 0
  }, {
    title: "Souvenir MAG-7 | Silver",
    weapon: "MAG-7",
    skin: "Silver",
    image: "/images/cbble/mag7silver.png",
    type: 1
  }, {
    title: "Souvenir Nova | Green Apple",
    weapon: "Nova",
    skin: "Green Apple",
    image: "/images/cbble/novagreenapple.png",
    type: 1
  }, {
    title: "Souvenir Sawed-Off | Rust Coat",
    weapon: "Sawed-Off",
    skin: "Rust Coat",
    image: "/images/cbble/sawedoffrustcoat.png",
    type: 1
  }, {
    title: "Souvenir USP-S | Royal Blue",
    weapon: "USP-S",
    skin: "Royal Blue",
    image: "/images/cbble/uspsroyalblue.png",
    type: 1
  }, {
    title: "Souvenir P2000 | Chainmail",
    weapon: "P2000",
    skin: "Chainmail",
    image: "/images/cbble/p2000chainmail.png",
    type: 2
  }, {
    title: "Souvenir MP9 | Dark Age",
    weapon: "MP9",
    skin: "Dark Age",
    image: "/images/cbble/mp9darkage.png",
    type: 2
  }, {
    title: "Souvenir CZ75-Auto | Chalice",
    weapon: "CZ75-Auto",
    skin: "Chalice",
    image: "/images/cbble/cz75autochalice.png",
    type: 3
  }, {
    title: "Souvenir Desert Eagle | Hand Cannon",
    weapon: "Desert Eagle",
    skin: "Hand Cannon",
    image: "/images/cbble/deaglehandcanon.png",
    type: 3
  }, {
    title: "Souvenir M4A1-S | Knight",
    weapon: "M4A1-S",
    skin: "Knight",
    image: "/images/cbble/m4a1knight.png",
    type: 4
  }, {
    title: "Souvenir AWP | Dragon Lore",
    weapon: "AWP",
    skin: "Dragon Lore",
    image: "/images/cbble/awpdl.png",
    type: 5
  }]
}];

/***/ }),

/***/ "./public/cases.js":
/*!*************************!*\
  !*** ./public/cases.js ***!
  \*************************/
/*! exports provided: Cases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cases", function() { return Cases; });
/* harmony import */ var _knives__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knives */ "./public/knives.js");
/* harmony import */ var _helpers_quality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/quality */ "./helpers/quality.js");


const Cases = [{
  id: 1,
  title: "Prisma 2 Case",
  image: "/images/prisma2case/prisma2case.png",
  items: [{
    title: "AWP | Capillary",
    weapon: "AWP",
    skin: "Capillary",
    image: "/images/prisma2case/awpcapillary.png",
    type: 2
  }, {
    title: "Desert Eagle | Blue Ply",
    weapon: "Desert Eagle",
    skin: "Blue Ply",
    image: "/images/prisma2case/deserteagleblueply.png",
    type: 2
  }, {
    title: "AUG | Tom Cat",
    weapon: "AUG",
    skin: "Tom Cat",
    image: "/images/prisma2case/augtomcat.png",
    type: 2
  }, {
    title: "CZ75-Auto | Distressed",
    weapon: "CZ75-Auto",
    skin: "Distressed",
    image: "/images/prisma2case/cz75distressed.png",
    type: 2
  }, {
    title: "MP5-SD | Desert Strike",
    weapon: "MP5-SD",
    skin: "Desert Strike",
    image: "/images/prisma2case/mp5desertstrike.png",
    type: 2
  }, {
    title: "Negev | Prototype",
    weapon: "Negev",
    skin: "Prototype",
    image: "/images/prisma2case/negevprototype.png",
    type: 2
  }, {
    title: "R8 Revolver | Bone Forged",
    weapon: "R8 Revolver",
    skin: "Bone Forged",
    image: "/images/prisma2case/r8boneforged.png",
    type: 2
  }, {
    title: "SG 553 | Darkwing",
    weapon: "SG 553",
    skin: "Darkwing",
    image: "/images/prisma2case/sg553darwking.png",
    type: 3
  }, {
    title: "SSG 08 | Fever Dream",
    weapon: "SSG 08",
    skin: "Fever Dream",
    image: "/images/prisma2case/ssg08feverdream.png",
    type: 3
  }, {
    title: "SCAR-20 | Enforcer",
    weapon: "SCAR-20",
    skin: "Enforcer",
    image: "/images/prisma2case/scarenforcer.png",
    type: 3
  }, {
    title: "P2000 | Acid Etched",
    weapon: "P2000",
    skin: "Acid Etched",
    image: "/images/prisma2case/p2000acidetched.png",
    type: 3
  }, {
    title: "Sawed-Off | Apocalypto",
    weapon: "Sawed-Off",
    skin: "Apocalypto",
    image: "/images/prisma2case/sawedoffapocalypto.png",
    type: 3
  }, {
    title: "AK-47 | Phantom Disruptor",
    weapon: "AK-47",
    skin: "Phantom Disruptor",
    image: "/images/prisma2case/ak47phantomdisruptor.png",
    type: 4
  }, {
    title: "MAC-10 | Disco Tech",
    weapon: "MAC-10",
    skin: "Disco Tech",
    image: "/images/prisma2case/mac10discotech.png",
    type: 4
  }, {
    title: "MAG-7 | Justice",
    weapon: "MAG-7",
    skin: "Justice",
    image: "/images/prisma2case/mag7justice.png",
    type: 4
  }, {
    title: "M4A1-S | Player Two",
    weapon: "M4A1-S",
    skin: "Player Two",
    image: "/images/prisma2case/m4a1splayertwo.png",
    type: 5
  }, {
    title: "Glock-18 | Bullet Queen",
    weapon: "Glock-18",
    skin: "Bullet Queen",
    image: "/images/prisma2case/glockbulletqueen.png",
    type: 5
  }],
  specialItems: _knives__WEBPACK_IMPORTED_MODULE_0__["Knives"][1]
}, {
  id: 2,
  title: "Bravo Case",
  image: "/images/bravocase/bravocase.png",
  items: [{
    title: "SG 553 | Wave Spray",
    weapon: "SG 553",
    skin: "Wave Spray",
    image: "/images/bravocase/sg553wavespray.png",
    type: 2
  }, {
    title: "Dual Berettas | Black Limba",
    weapon: "Dual Berettas",
    skin: "Black Limba",
    image: "/images/bravocase/dualberettasblacklimba.png",
    type: 2
  }, {
    title: "Nova | Tempest",
    weapon: "Nova",
    skin: "Tempest",
    image: "/images/bravocase/novatempest.png",
    type: 2
  }, {
    title: "Galil AR | Shattered",
    weapon: "Galil AR",
    skin: "Shattered",
    image: "/images/bravocase/galilarshattered.png",
    type: 2
  }, {
    title: "UMP-45 | Bone Pile",
    weapon: "UMP-45",
    skin: "Bone Pile",
    image: "/images/bravocase/ump45bonepile.png",
    type: 2
  }, {
    title: "G3SG1 | Demeter",
    weapon: "G3SG1",
    skin: "Demeter",
    image: "/images/bravocase/g3sg1demeter.png",
    type: 2
  }, {
    title: "USP-S | Overgrowth",
    weapon: "USP-S",
    skin: "Overgrowth",
    image: "/images/bravocase/uspsovergrowth.png",
    type: 3
  }, {
    title: "M4A4 | Zirka",
    weapon: "M4A4",
    skin: "Zirka",
    image: "/images/bravocase/m4a4zirka.png",
    type: 3
  }, {
    title: "MAC-10 | Graven",
    weapon: "MAC-10",
    skin: "Graven",
    image: "/images/bravocase/mac10graven.png",
    type: 3
  }, {
    title: "M4A1-S | Bright Water",
    weapon: "M4A1-S",
    skin: "Bright Water",
    image: "/images/bravocase/m4a1sbrightwater.png",
    quality: [_helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Field-Tested"], _helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Minimal Wear"]],
    type: 3
  }, {
    title: "P90 | Emerald Dragon",
    weapon: "P90",
    skin: "Emerald Dragon",
    image: "/images/bravocase/p90emeralddragon.png",
    type: 4
  }, {
    title: "AWP | Graphite",
    weapon: "AWP",
    skin: "Graphite",
    image: "/images/bravocase/awpgraphite.png",
    quality: [_helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Minimal Wear"], _helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Factory New"]],
    type: 4
  }, {
    title: "Desert Eagle | Golden Koi",
    weapon: "Desert Eagle",
    skin: "Golden Koi",
    image: "/images/bravocase/deserteaglegoldenkoi.png",
    quality: [_helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Minimal Wear"], _helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Factory New"]],
    type: 5
  }, {
    title: "AK-47 | Fire Serpent",
    weapon: "AK-47",
    skin: "Fire Serpent",
    image: "/images/bravocase/ak47fireserpent.png",
    type: 5
  }],
  specialItems: _knives__WEBPACK_IMPORTED_MODULE_0__["Knives"]["default"]
}];

/***/ }),

/***/ "./public/knives.js":
/*!**************************!*\
  !*** ./public/knives.js ***!
  \**************************/
/*! exports provided: Knives */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Knives", function() { return Knives; });
/* harmony import */ var _helpers_quality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/quality */ "./helpers/quality.js");

const Knives = {
  1: {
    id: 1,
    title: "Prisma Knives",
    items: [{
      title: "★ Talon Knife | Damascus Steel",
      weapon: "★ Talon Knife",
      skin: "Damascus Steel",
      image: "/images/prismaknives/talondamascussteel.png",
      type: 6
    }, {
      title: "★ Talon Knife | Doppler",
      weapon: "★ Talon Knife",
      skin: "Doppler",
      image: "/images/prismaknives/talondoppler.png",
      type: 6
    }, {
      title: "★ Talon Knife | Marble Fade",
      weapon: "★ Talon Knife",
      skin: "Marble Fade",
      image: "/images/prismaknives/talonmarblefade.png",
      type: 6
    }, {
      title: "★ Talon Knife | Rust Coat",
      weapon: "★ Talon Knife",
      skin: "Rust Coat",
      image: "/images/prismaknives/talonrustcoat.png",
      type: 6
    }, {
      title: "★ Talon Knife | Tiger Tooth",
      weapon: "★ Talon Knife",
      skin: "Tiger Tooth",
      image: "/images/prismaknives/talontigertooth.png",
      type: 6
    }, {
      title: "★ Talon Knife | Ultraviolet",
      weapon: "★ Talon Knife",
      skin: "Ultraviolet",
      image: "/images/prismaknives/talonultraviolet.png",
      type: 6
    }]
  },
  default: [{
    title: "★ Karambit",
    weapon: "★ Karambit",
    skin: "",
    image: "/images/defaultknives/karambit.png",
    quality: null,
    type: 6
  }, {
    title: "★ Karambit | Fade",
    weapon: "★ Karambit",
    skin: "Fade",
    image: "/images/defaultknives/karambitfade.png",
    quality: [_helpers_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]["Minimal Wear"], _helpers_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]["Factory New"]],
    type: 6
  }, {
    title: "★ Karambit | Case Hardened",
    weapon: "★ Karambit",
    skin: "Case Hardened",
    image: "/images/defaultknives/karambitcasehardened.png",
    quality: [_helpers_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]["Battle-Scarred"], _helpers_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]["Well-Worn"], _helpers_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]["Minimal Wear"], _helpers_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]["Factory New"]],
    type: 6
  }, {
    title: "★ Bayonet | Case Hardened",
    weapon: "★ Bayonet",
    skin: "Case Hardened",
    image: "/images/defaultknives/bayonetcasehardened.png",
    quality: [_helpers_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]["Battle-Scarred"], _helpers_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]["Well-Worn"], _helpers_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]["Minimal Wear"], _helpers_quality__WEBPACK_IMPORTED_MODULE_0__["Quality"]["Factory New"]],
    type: 6
  }]
};

/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\react-ssr\react-ssr\pages\index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map