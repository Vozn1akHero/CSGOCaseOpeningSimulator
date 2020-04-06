module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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

/***/ "./Components/CaseOpeningAudio/CaseOpeningAudio.jsx":
/*!**********************************************************!*\
  !*** ./Components/CaseOpeningAudio/CaseOpeningAudio.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CaseOpeningAudio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts/SettingsContext */ "./contexts/SettingsContext.js");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\CaseOpeningAudio\\CaseOpeningAudio.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class CaseOpeningAudio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "playOpeningSound", () => {
      this.openSound.current.play();
      this.openSound.current.playbackRate = 1.3;
      this.rollSound.current.loop = true;
      this.rollSound.current.playbackRate = 1.1;
      this.rollSound2.current.loop = true;
      this.rollSound2.current.playbackRate = 1.1;
      this.rollSound.current.play();
      setTimeout(() => {
        this.rollSound2.current.play();
      }, 12.5 * this.context.caseOpeningTime / 100);
      setTimeout(() => {
        this.rollSound2.current.pause();
        this.rollSound.current.playbackRate = 1;
      }, 50 * this.context.caseOpeningTime / 100);
      setTimeout(() => {
        this.rollSound.current.playbackRate = 0.9;
      }, 75 * this.context.caseOpeningTime / 100);
      setTimeout(() => {
        this.rollSound.current.pause();
      }, this.context.caseOpeningTime);
    });

    this.rollSound = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.rollSound2 = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.openSound = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  componentDidMount() {
    this.playOpeningSound();
    this.rollSound.current.volume = this.context.volume;
    this.rollSound2.current.volume = this.context.volume;
    this.openSound.current.volume = this.context.volume;
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("audio", {
      ref: this.openSound,
      id: "caseOpeningAudioOpen",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "/sound/open.mp3",
      type: "audio/mp3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }
    })), __jsx("audio", {
      ref: this.rollSound,
      id: "caseOpeningAudioRoll",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "/sound/roll.mp3",
      type: "audio/mp3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    })), __jsx("audio", {
      ref: this.rollSound2,
      id: "caseOpeningAudioRoll",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "/sound/roll.mp3",
      type: "audio/mp3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    })));
  }

}

_defineProperty(CaseOpeningAudio, "contextType", _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_1__["SettingsContext"]);

/***/ }),

/***/ "./Components/CaseOpeningConfirmation/CaseOpeningConfirmation.jsx":
/*!************************************************************************!*\
  !*** ./Components/CaseOpeningConfirmation/CaseOpeningConfirmation.jsx ***!
  \************************************************************************/
/*! exports provided: CaseOpeningConfirmation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseOpeningConfirmation", function() { return CaseOpeningConfirmation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CaseOpeningConfirmation_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CaseOpeningConfirmation.module.scss */ "./Components/CaseOpeningConfirmation/CaseOpeningConfirmation.module.scss");
/* harmony import */ var _CaseOpeningConfirmation_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CaseOpeningConfirmation_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Item/Item */ "./Components/Item/Item.jsx");
/* harmony import */ var _GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../GreenButton/GreenButton */ "./Components/GreenButton/GreenButton.jsx");
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\CaseOpeningConfirmation\\CaseOpeningConfirmation.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CaseOpeningConfirmation = props => {
  return __jsx("div", {
    className: _CaseOpeningConfirmation_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.caseOpeningConfirmation,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: _CaseOpeningConfirmation_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.itemWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].GREY,
    image: props.image,
    weapon: props.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  })), __jsx(_GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_3__["GreenButton"], {
    onClick: () => props.onSubmit(),
    text: "Continue",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./Components/CaseOpeningConfirmation/CaseOpeningConfirmation.module.scss":
/*!********************************************************************************!*\
  !*** ./Components/CaseOpeningConfirmation/CaseOpeningConfirmation.module.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"caseOpeningConfirmation": "CaseOpeningConfirmation_caseOpeningConfirmation__39ecv",
	"itemWrap": "CaseOpeningConfirmation_itemWrap__35IVr",
	"submitBtn": "CaseOpeningConfirmation_submitBtn__1U_US"
};

/***/ }),

/***/ "./Components/CaseOpeningSec/CaseOpeningSec.jsx":
/*!******************************************************!*\
  !*** ./Components/CaseOpeningSec/CaseOpeningSec.jsx ***!
  \******************************************************/
/*! exports provided: CaseOpeningSec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaseOpeningSec", function() { return CaseOpeningSec; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/SettingsContext */ "./contexts/SettingsContext.js");
/* harmony import */ var _helpers_container_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/container-type */ "./helpers/container-type.js");
/* harmony import */ var _helpers_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/storage */ "./helpers/storage.js");
/* harmony import */ var _CaseOpeningAudio_CaseOpeningAudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../CaseOpeningAudio/CaseOpeningAudio */ "./Components/CaseOpeningAudio/CaseOpeningAudio.jsx");
/* harmony import */ var _CaseOpeningConfirmation_CaseOpeningConfirmation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CaseOpeningConfirmation/CaseOpeningConfirmation */ "./Components/CaseOpeningConfirmation/CaseOpeningConfirmation.jsx");
/* harmony import */ var _ItemLine_ItemLine__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ItemLine/ItemLine */ "./Components/ItemLine/ItemLine.jsx");
/* harmony import */ var _ReceivedItemModal_ReceivedItemModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ReceivedItemModal/ReceivedItemModal */ "./Components/ReceivedItemModal/ReceivedItemModal.jsx");
/* harmony import */ var _UnlockingContainerNotification_UnlockingContainerNotification__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../UnlockingContainerNotification/UnlockingContainerNotification */ "./Components/UnlockingContainerNotification/UnlockingContainerNotification.jsx");
/* harmony import */ var _RandomCaseItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./RandomCaseItem */ "./Components/CaseOpeningSec/RandomCaseItem.js");
/* harmony import */ var _RandomItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./RandomItem */ "./Components/CaseOpeningSec/RandomItem.js");
/* harmony import */ var _RandomSouvenir__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./RandomSouvenir */ "./Components/CaseOpeningSec/RandomSouvenir.js");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\CaseOpeningSec\\CaseOpeningSec.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;













const CaseOpeningSec = props => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__["SettingsContext"]);
  const {
    0: line,
    1: setLine
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: openingInProgress,
    1: setOpeningInProgress
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: receivedItemModalVisible,
    1: setReceivedItemModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: receivedItem,
    1: setReceivedItem
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  const generateItem = () => {
    let item;

    switch (props.containerType) {
      case _helpers_container_type__WEBPACK_IMPORTED_MODULE_4__["containerType"][0]:
        item = selectRandomItem();
        break;

      case _helpers_container_type__WEBPACK_IMPORTED_MODULE_4__["containerType"][1]:
        item = selectRandomSouvenir();
        break;

      default:
        item = selectRandomItem();
        break;
    }

    return item;
  };

  const generateLine = () => {
    let elements = [];
    let actItem = generateItem();
    setReceivedItem(actItem);
    _helpers_storage__WEBPACK_IMPORTED_MODULE_5__["default"].saveReceivedItem(actItem);

    for (let index = 0; index < 30; index++) {
      if (index === 25) {
        elements.push(actItem);
      } else {
        elements.push(generateItem());
      }
    }

    return __jsx(_ItemLine_ItemLine__WEBPACK_IMPORTED_MODULE_8__["default"], {
      items: elements,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 12
      }
    });
  };

  const selectRandomSouvenir = () => {
    let randomItem = new _RandomItem__WEBPACK_IMPORTED_MODULE_12__["default"]();
    let randomSouvenir = new _RandomSouvenir__WEBPACK_IMPORTED_MODULE_13__["default"]();
    const type = randomSouvenir.getRandomSouvenirTypeByItems(props.items);
    const item = randomItem.getSouvenirItemByType(props.items, type);
    return item;
  };

  const selectRandomItem = () => {
    let randomItem = new _RandomItem__WEBPACK_IMPORTED_MODULE_12__["default"]();
    let randomCaseItem = new _RandomCaseItem__WEBPACK_IMPORTED_MODULE_11__["default"]();
    const type = randomCaseItem.getRandomType();
    const item = randomItem.getItemFromCaseByType(props.items, props.specialItems, type);
    return item;
  };

  const openCase = () => {
    setLine(generateLine());
    setOpeningInProgress(true);
    setTimeout(() => {
      setReceivedItemModalVisible(true);
    }, context.caseOpeningTime + 100);
  };

  const onReceivedItemConfirmation = () => {
    router.push("/");
  };

  const onTryAgainBtnClick = () => {
    setReceivedItemModalVisible(false);
    setOpeningInProgress(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1263638782" + " " + 'case-opening-sec',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }
  }, openingInProgress && __jsx(_CaseOpeningAudio_CaseOpeningAudio__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 31
    }
  }), receivedItemModalVisible && __jsx(_ReceivedItemModal_ReceivedItemModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: receivedItem.title,
    isStatrak: receivedItem.isStatrak,
    quality: receivedItem.quality,
    type: receivedItem.type,
    image: receivedItem.image,
    onTryAgainBtnClick: () => onTryAgainBtnClick(),
    onSubmit: () => onReceivedItemConfirmation(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "jsx-1263638782" + " " + 'head-wrap',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 9
    }
  }, !openingInProgress && __jsx(_CaseOpeningConfirmation_CaseOpeningConfirmation__WEBPACK_IMPORTED_MODULE_7__["CaseOpeningConfirmation"], {
    image: props.caseImage,
    title: props.caseTitle,
    onSubmit: () => openCase(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }), openingInProgress && __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1263638782" + " " + 'case-opener-bg',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx("hr", {
    className: "jsx-1263638782" + " " + 'middle-line',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-1263638782" + " " + 'case-opener',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 17
    }
  }, line)))), openingInProgress && __jsx(_UnlockingContainerNotification_UnlockingContainerNotification__WEBPACK_IMPORTED_MODULE_10__["UnlockingContainerNotification"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 31
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1263638782",
    __self: undefined
  }, ".case-opening-sec.jsx-1263638782{width:100%;height:50%;padding-top:2rem;background:#121b24;box-shadow:0px 0px 11px 1px rgba(0,0,0,0.75);}.case-opening-sec.jsx-1263638782 .head-wrap.jsx-1263638782{width:101%;-webkit-transform:translateX(-0.5%);-ms-transform:translateX(-0.5%);transform:translateX(-0.5%);background:#10161b;box-shadow:0px 0px 11px 1px rgba(0,0,0,0.75);height:54%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.case-opening-sec.jsx-1263638782 .head-wrap.jsx-1263638782 .case-opener-bg.jsx-1263638782{width:400px;background:black;position:relative;padding:16px 2px;}.case-opening-sec.jsx-1263638782 .head-wrap.jsx-1263638782 .case-opener-bg.jsx-1263638782 .case-opener.jsx-1263638782{width:100%;height:102px;overflow:hidden;position:relative;}.middle-line.jsx-1263638782{background:#605337;height:100%;position:absolute;left:50%;width:3px;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);top:0;margin:0;z-index:1;border:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xccmVhY3Qtc3NyXFxyZWFjdC1zc3JcXENvbXBvbmVudHNcXENhc2VPcGVuaW5nU2VjXFxDYXNlT3BlbmluZ1NlYy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEhTLEFBR3dCLEFBUUEsQUFXQyxBQU9ELEFBT1EsV0FoQ1IsQUFRaUIsQUFrQmYsQ0FQSSxPQWNMLEdBaENLLEVBMEJELEtBUEUsRUFjQSxRQWhDQyxDQTBCRCxPQVBELEVBY1IsU0FoQ3VDLEFBMEJsRCxBQU9ZLE1BZFosSUFlNkIsbUNBakM3QixJQUtxQixtQkFDNkIsbUNBNEIxQyxNQUNHLElBNUJFLEtBNkJELE1BNUJHLElBNkJELFlBQ2QsMERBN0JxQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoiRDpcXFByb2plY3RzXFxyZWFjdC1zc3JcXHJlYWN0LXNzclxcQ29tcG9uZW50c1xcQ2FzZU9wZW5pbmdTZWNcXENhc2VPcGVuaW5nU2VjLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgU2V0dGluZ3NDb250ZXh0IH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL1NldHRpbmdzQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBjb250YWluZXJUeXBlIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnMvY29udGFpbmVyLXR5cGVcIjtcclxuaW1wb3J0IFN0b3JhZ2UgZnJvbSBcIi4uLy4uL2hlbHBlcnMvc3RvcmFnZVwiO1xyXG5pbXBvcnQgQ2FzZU9wZW5pbmdBdWRpbyBmcm9tIFwiLi4vQ2FzZU9wZW5pbmdBdWRpby9DYXNlT3BlbmluZ0F1ZGlvXCI7XHJcbmltcG9ydCB7IENhc2VPcGVuaW5nQ29uZmlybWF0aW9uIH0gZnJvbSBcIi4uL0Nhc2VPcGVuaW5nQ29uZmlybWF0aW9uL0Nhc2VPcGVuaW5nQ29uZmlybWF0aW9uXCI7XHJcbmltcG9ydCBJdGVtTGluZSBmcm9tIFwiLi4vSXRlbUxpbmUvSXRlbUxpbmVcIjtcclxuaW1wb3J0IFJlY2VpdmVkSXRlbU1vZGFsIGZyb20gXCIuLi9SZWNlaXZlZEl0ZW1Nb2RhbC9SZWNlaXZlZEl0ZW1Nb2RhbFwiO1xyXG5pbXBvcnQgeyBVbmxvY2tpbmdDb250YWluZXJOb3RpZmljYXRpb24gfSBmcm9tIFwiLi4vVW5sb2NraW5nQ29udGFpbmVyTm90aWZpY2F0aW9uL1VubG9ja2luZ0NvbnRhaW5lck5vdGlmaWNhdGlvblwiO1xyXG5pbXBvcnQgUmFuZG9tQ2FzZUl0ZW0gZnJvbSBcIi4vUmFuZG9tQ2FzZUl0ZW1cIjtcclxuaW1wb3J0IFJhbmRvbUl0ZW0gZnJvbSBcIi4vUmFuZG9tSXRlbVwiO1xyXG5pbXBvcnQgUmFuZG9tU291dmVuaXIgZnJvbSBcIi4vUmFuZG9tU291dmVuaXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXNlT3BlbmluZ1NlYyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFNldHRpbmdzQ29udGV4dCk7XHJcbiAgY29uc3QgW2xpbmUsIHNldExpbmVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW29wZW5pbmdJblByb2dyZXNzLCBzZXRPcGVuaW5nSW5Qcm9ncmVzc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3JlY2VpdmVkSXRlbU1vZGFsVmlzaWJsZSwgc2V0UmVjZWl2ZWRJdGVtTW9kYWxWaXNpYmxlXSA9IHVzZVN0YXRlKFxyXG4gICAgZmFsc2VcclxuICApO1xyXG4gIGNvbnN0IFtyZWNlaXZlZEl0ZW0sIHNldFJlY2VpdmVkSXRlbV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVJdGVtID0gKCkgPT4ge1xyXG4gICAgbGV0IGl0ZW07XHJcbiAgICBzd2l0Y2ggKHByb3BzLmNvbnRhaW5lclR5cGUpIHtcclxuICAgICAgY2FzZSBjb250YWluZXJUeXBlWzBdOlxyXG4gICAgICAgIGl0ZW0gPSBzZWxlY3RSYW5kb21JdGVtKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgY29udGFpbmVyVHlwZVsxXTpcclxuICAgICAgICBpdGVtID0gc2VsZWN0UmFuZG9tU291dmVuaXIoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBpdGVtID0gc2VsZWN0UmFuZG9tSXRlbSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVMaW5lID0gKCkgPT4ge1xyXG4gICAgbGV0IGVsZW1lbnRzID0gW107XHJcbiAgICBsZXQgYWN0SXRlbSA9IGdlbmVyYXRlSXRlbSgpO1xyXG4gICAgc2V0UmVjZWl2ZWRJdGVtKGFjdEl0ZW0pO1xyXG4gICAgU3RvcmFnZS5zYXZlUmVjZWl2ZWRJdGVtKGFjdEl0ZW0pO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDMwOyBpbmRleCsrKSB7XHJcbiAgICAgIGlmIChpbmRleCA9PT0gMjUpIHtcclxuICAgICAgICBlbGVtZW50cy5wdXNoKGFjdEl0ZW0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsZW1lbnRzLnB1c2goZ2VuZXJhdGVJdGVtKCkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gPEl0ZW1MaW5lIGl0ZW1zPXtlbGVtZW50c30gLz47XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0UmFuZG9tU291dmVuaXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmFuZG9tSXRlbSA9IG5ldyBSYW5kb21JdGVtKCk7XHJcbiAgICBsZXQgcmFuZG9tU291dmVuaXIgPSBuZXcgUmFuZG9tU291dmVuaXIoKTtcclxuICAgIGNvbnN0IHR5cGUgPSByYW5kb21Tb3V2ZW5pci5nZXRSYW5kb21Tb3V2ZW5pclR5cGVCeUl0ZW1zKHByb3BzLml0ZW1zKTtcclxuICAgIGNvbnN0IGl0ZW0gPSByYW5kb21JdGVtLmdldFNvdXZlbmlySXRlbUJ5VHlwZShwcm9wcy5pdGVtcywgdHlwZSk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9O1xyXG4gIGNvbnN0IHNlbGVjdFJhbmRvbUl0ZW0gPSAoKSA9PiB7XHJcbiAgICBsZXQgcmFuZG9tSXRlbSA9IG5ldyBSYW5kb21JdGVtKCk7XHJcbiAgICBsZXQgcmFuZG9tQ2FzZUl0ZW0gPSBuZXcgUmFuZG9tQ2FzZUl0ZW0oKTtcclxuICAgIGNvbnN0IHR5cGUgPSByYW5kb21DYXNlSXRlbS5nZXRSYW5kb21UeXBlKCk7XHJcbiAgICBjb25zdCBpdGVtID0gcmFuZG9tSXRlbS5nZXRJdGVtRnJvbUNhc2VCeVR5cGUoXHJcbiAgICAgIHByb3BzLml0ZW1zLFxyXG4gICAgICBwcm9wcy5zcGVjaWFsSXRlbXMsXHJcbiAgICAgIHR5cGVcclxuICAgICk7XHJcbiAgICByZXR1cm4gaXRlbTtcclxuICB9O1xyXG4gIGNvbnN0IG9wZW5DYXNlID0gKCkgPT4ge1xyXG4gICAgc2V0TGluZShnZW5lcmF0ZUxpbmUoKSk7XHJcbiAgICBzZXRPcGVuaW5nSW5Qcm9ncmVzcyh0cnVlKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRSZWNlaXZlZEl0ZW1Nb2RhbFZpc2libGUodHJ1ZSk7XHJcbiAgICB9LCBjb250ZXh0LmNhc2VPcGVuaW5nVGltZSArIDEwMCk7XHJcbiAgfTtcclxuICBjb25zdCBvblJlY2VpdmVkSXRlbUNvbmZpcm1hdGlvbiA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uVHJ5QWdhaW5CdG5DbGljayA9ICgpID0+IHtcclxuICAgIHNldFJlY2VpdmVkSXRlbU1vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgICBzZXRPcGVuaW5nSW5Qcm9ncmVzcyhmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Nhc2Utb3BlbmluZy1zZWMnPlxyXG4gICAgICAgIHtvcGVuaW5nSW5Qcm9ncmVzcyAmJiA8Q2FzZU9wZW5pbmdBdWRpbyAvPn1cclxuICAgICAgICB7cmVjZWl2ZWRJdGVtTW9kYWxWaXNpYmxlICYmIChcclxuICAgICAgICAgIDxSZWNlaXZlZEl0ZW1Nb2RhbFxyXG4gICAgICAgICAgICB0aXRsZT17cmVjZWl2ZWRJdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICBpc1N0YXRyYWs9e3JlY2VpdmVkSXRlbS5pc1N0YXRyYWt9XHJcbiAgICAgICAgICAgIHF1YWxpdHk9e3JlY2VpdmVkSXRlbS5xdWFsaXR5fVxyXG4gICAgICAgICAgICB0eXBlPXtyZWNlaXZlZEl0ZW0udHlwZX1cclxuICAgICAgICAgICAgaW1hZ2U9e3JlY2VpdmVkSXRlbS5pbWFnZX1cclxuICAgICAgICAgICAgb25UcnlBZ2FpbkJ0bkNsaWNrPXsoKSA9PiBvblRyeUFnYWluQnRuQ2xpY2soKX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9eygpID0+IG9uUmVjZWl2ZWRJdGVtQ29uZmlybWF0aW9uKCl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZWFkLXdyYXAnPlxyXG4gICAgICAgICAgeyFvcGVuaW5nSW5Qcm9ncmVzcyAmJiAoXHJcbiAgICAgICAgICAgIDxDYXNlT3BlbmluZ0NvbmZpcm1hdGlvblxyXG4gICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5jYXNlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLmNhc2VUaXRsZX1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17KCkgPT4gb3BlbkNhc2UoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICB7b3BlbmluZ0luUHJvZ3Jlc3MgJiYgKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXNlLW9wZW5lci1iZyc+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPSdtaWRkbGUtbGluZScgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXNlLW9wZW5lcic+e2xpbmV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7b3BlbmluZ0luUHJvZ3Jlc3MgJiYgPFVubG9ja2luZ0NvbnRhaW5lck5vdGlmaWNhdGlvbiAvPn1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAuY2FzZS1vcGVuaW5nLXNlYyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMjFiMjQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY2FzZS1vcGVuaW5nLXNlYyAuaGVhZC13cmFwIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMSU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMC41JSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxMDE2MWI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1NCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jYXNlLW9wZW5pbmctc2VjIC5oZWFkLXdyYXAgLmNhc2Utb3BlbmVyLWJnIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4IDJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY2FzZS1vcGVuaW5nLXNlYyAuaGVhZC13cmFwIC5jYXNlLW9wZW5lci1iZyAuY2FzZS1vcGVuZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDJweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5taWRkbGUtbGluZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2MDUzMzc7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIl19 */\n/*@ sourceURL=D:\\\\Projects\\\\react-ssr\\\\react-ssr\\\\Components\\\\CaseOpeningSec\\\\CaseOpeningSec.jsx */"));
};

/***/ }),

/***/ "./Components/CaseOpeningSec/RandomCaseItem.js":
/*!*****************************************************!*\
  !*** ./Components/CaseOpeningSec/RandomCaseItem.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RandomCaseItem; });
/* harmony import */ var _helpers_chance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/chance */ "./helpers/chance.js");
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class RandomCaseItem {
  constructor() {
    _defineProperty(this, "getRandomType", () => {
      const ran = Math.random();
      if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_0__["ItemChance"].BLUE) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].BLUE;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_0__["ItemChance"].PURPLE) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].PURPLE;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_0__["ItemChance"].PINK) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].PINK;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_0__["ItemChance"].RED) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].RED;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_0__["ItemChance"].GOLD) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].GOLD;else return _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].BLUE;
    });
  }

}

/***/ }),

/***/ "./Components/CaseOpeningSec/RandomItem.js":
/*!*************************************************!*\
  !*** ./Components/CaseOpeningSec/RandomItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RandomItem; });
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
/* harmony import */ var _helpers_quality__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/quality */ "./helpers/quality.js");
/* harmony import */ var _helpers_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/random */ "./helpers/random.js");
/* harmony import */ var _helpers_chance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/chance */ "./helpers/chance.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class RandomItem {
  constructor() {
    _defineProperty(this, "getSouvenirItemByType", (items, type) => {
      if (!items || !type) throw new Error();
      const allGroupItems = [...items.filter(val => val.type === type)];
      const ran = Object(_helpers_random__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(0, allGroupItems.length);
      const item = allGroupItems[ran];
      const quality = this.getRandomQuality(item);
      return _objectSpread({}, item, {
        isStatrak: false,
        isSouvenir: true,
        quality
      });
    });

    _defineProperty(this, "getItemFromCaseByType", (items, specialItems, type) => {
      if (!items || !specialItems || !type) throw new Error();
      let isStatrak = this.getRandomStatrakByItemType(type);

      if (type === _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].GOLD) {
        const ran = Object(_helpers_random__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(0, specialItems.length);
        const item = specialItems[ran];
        const quality = this.getRandomQuality(item);
        return _objectSpread({}, item, {
          isStatrak,
          quality
        });
      } else {
        const allGroupItems = [...items.filter(val => val.type === type)];
        const ran = Object(_helpers_random__WEBPACK_IMPORTED_MODULE_2__["getRandomInt"])(0, allGroupItems.length);
        const item = allGroupItems[ran];
        const quality = this.getRandomQuality(item);
        return _objectSpread({}, item, {
          isStatrak,
          quality
        });
      }
    });

    _defineProperty(this, "getRandomStatrakByItemType", type => {
      if (!type) throw new Error();
      const ran = Math.random();
      if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_3__["ItemStatrakChance"].BLUE && type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].BLUE) return true;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_3__["ItemStatrakChance"].PURPLE && type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].PURPLE) return true;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_3__["ItemStatrakChance"].PINK && type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].PINK) return true;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_3__["ItemStatrakChance"].RED && type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].RED) return true;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_3__["ItemStatrakChance"].GOLD && type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].GOLD) return true;else return false;
    });

    _defineProperty(this, "getRandomQuality", item => {
      if (!item) throw new Error();
      const ran = Math.random();

      if ((!item.quality || item.quality.indexOf(_helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Battle-Scarred"]) !== -1) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_3__["QualityChance"].BATTLESCARRED) {
        return _helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Battle-Scarred"];
      } else if ((!item.quality || item.quality.indexOf(_helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Field-Tested"]) !== -1) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_3__["QualityChance"].FIELDTESTED) {
        return _helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Field-Tested"];
      } else if ((!item.quality || item.quality.indexOf(_helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Well-Worn"]) !== -1) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_3__["QualityChance"].WELLWORN) {
        return _helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Well-Worn"];
      } else if ((!item.quality || item.quality.indexOf(_helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Minimal Wear"]) !== -1) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_3__["QualityChance"].MINIMALWEAR) {
        return _helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Minimal Wear"];
      } else if ((!item.quality || item.quality.indexOf(_helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Factory New"]) !== -1) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_3__["QualityChance"].FACTORYNEW) {
        return _helpers_quality__WEBPACK_IMPORTED_MODULE_1__["Quality"]["Factory New"];
      }
    });
  }

}

/***/ }),

/***/ "./Components/CaseOpeningSec/RandomSouvenir.js":
/*!*****************************************************!*\
  !*** ./Components/CaseOpeningSec/RandomSouvenir.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RandomSouvenir; });
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
/* harmony import */ var _helpers_chance__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/chance */ "./helpers/chance.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class RandomSouvenir {
  constructor() {
    _defineProperty(this, "getRandomSouvenirTypeByItems", items => {
      if (!items) throw Error();
      const ran = Math.random();
      if (items.some(e => e.type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].GREY) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_1__["ItemChance"].GREY) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].GREY;else if (items.some(e => e.type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].LIGHTBLUE) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_1__["ItemChance"].LIGHTBLUE) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].LIGHTBLUE;else if (items.some(e => e.type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].BLUE) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_1__["ItemChance"].BLUE) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].BLUE;else if (items.some(e => e.type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].PURPLE) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_1__["ItemChance"].PURPLE) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].PURPLE;else if (items.some(e => e.type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].PINK) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_1__["ItemChance"].PINK) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].PINK;else if (items.some(e => e.type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].RED) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_1__["ItemChance"].RED) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].RED;else if (items.some(e => e.type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].GOLD) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_1__["ItemChance"].GOLD) return _helpers_item_type__WEBPACK_IMPORTED_MODULE_0__["itemType"].GOLD;
    });
  }

}

/***/ }),

/***/ "./Components/GreenButton/GreenButton.jsx":
/*!************************************************!*\
  !*** ./Components/GreenButton/GreenButton.jsx ***!
  \************************************************/
/*! exports provided: GreenButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenButton", function() { return GreenButton; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\GreenButton\\GreenButton.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const GreenButton = props => {
  const styles = (() => {
    let obj = {};

    if (props.height) {
      obj = _objectSpread({}, obj, {
        height: props.height
      });
    }

    if (props.width) {
      obj = _objectSpread({}, obj, {
        width: props.width
      });
    }

    return obj;
  })();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    onClick: () => {
      props.onClick();
    },
    style: styles,
    className: "jsx-1075470374" + " " + 'green-button',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, props.text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1075470374",
    __self: undefined
  }, ".green-button.jsx-1075470374{display:block;margin-left:auto;margin-right:auto;margin-top:1rem;background:#507325;border:none;width:11rem;height:34px;color:white;box-shadow:0px 0px 11px 1px rgba(0,0,0,0.75);outline:none;}.green-button.jsx-1075470374:active{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xccmVhY3Qtc3NyXFxyZWFjdC1zc3JcXENvbXBvbmVudHNcXEdyZWVuQnV0dG9uXFxHcmVlbkJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJTLEFBRzJCLEFBYUYsWUFDZCxFQWJtQixpQkFDQyxrQkFDRixnQkFDRyxtQkFDUCxZQUNBLFlBQ0EsWUFDQSxZQUNvQyw2Q0FDbkMsYUFDZiIsImZpbGUiOiJEOlxcUHJvamVjdHNcXHJlYWN0LXNzclxccmVhY3Qtc3NyXFxDb21wb25lbnRzXFxHcmVlbkJ1dHRvblxcR3JlZW5CdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEdyZWVuQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc3R5bGVzID0gKCgpID0+IHtcclxuICAgIGxldCBvYmogPSB7fTtcclxuICAgIGlmIChwcm9wcy5oZWlnaHQpIHtcclxuICAgICAgb2JqID0geyAuLi5vYmosIGhlaWdodDogcHJvcHMuaGVpZ2h0IH07XHJcbiAgICB9XHJcbiAgICBpZiAocHJvcHMud2lkdGgpIHtcclxuICAgICAgb2JqID0geyAuLi5vYmosIHdpZHRoOiBwcm9wcy53aWR0aCB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9KSgpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIHByb3BzLm9uQ2xpY2soKTtcclxuICAgICAgICB9fVxyXG4gICAgICAgIHN0eWxlPXtzdHlsZXN9XHJcbiAgICAgICAgY2xhc3NOYW1lPSdncmVlbi1idXR0b24nXHJcbiAgICAgID5cclxuICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5ncmVlbi1idXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzUwNzMyNTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB3aWR0aDogMTFyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDExcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZ3JlZW4tYnV0dG9uIDphY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\react-ssr\\\\react-ssr\\\\Components\\\\GreenButton\\\\GreenButton.jsx */"));
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

/***/ "./Components/ItemLine/ItemLine.jsx":
/*!******************************************!*\
  !*** ./Components/ItemLine/ItemLine.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Item_Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Item/Item */ "./Components/Item/Item.jsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _keyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./keyframes */ "./Components/ItemLine/keyframes.js");
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../contexts/SettingsContext */ "./contexts/SettingsContext.js");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\ItemLine\\ItemLine.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const Animation = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div`
  display: flex;
  animation: ${styled_components__WEBPACK_IMPORTED_MODULE_2__["css"]`
    ${props => props.slider} ${props => props.time / 1000}s;
  `};
  animation-fill-mode: forwards;

  & > div {
    margin-left: 5px;
  }
`;
class ItemLine extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    return {
      slider: Object(_keyframes__WEBPACK_IMPORTED_MODULE_3__["getSlider"])()
    };
  }

  render() {
    return __jsx(Animation, {
      slider: this.state.slider,
      time: this.context.caseOpeningTime,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, this.props.items.map((value, index) => {
      if (value.type === _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].GOLD) {
        return __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: index,
          type: _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].GOLD,
          image: "/images/specialitem1.png",
          isStatrak: value.isStatrak,
          weapon: "★ Rare Special Item ★",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }
        });
      } else {
        return __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: index,
          type: value.type,
          image: value.image,
          showSkinTitle: true,
          isStatrak: value.isStatrak,
          weapon: value.weapon,
          skin: value.skin,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }
        });
      }
    }));
  }

}

_defineProperty(ItemLine, "contextType", _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_5__["SettingsContext"]);

/***/ }),

/***/ "./Components/ItemLine/keyframes.js":
/*!******************************************!*\
  !*** ./Components/ItemLine/keyframes.js ***!
  \******************************************/
/*! exports provided: getSlider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlider", function() { return getSlider; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/random */ "./helpers/random.js");


const getSlider = () => {
  const pos = Object(_helpers_random__WEBPACK_IMPORTED_MODULE_1__["getRandomInt"])(2978, 3104);
  console.log(pos);
  return styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"]`
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-${pos}px);
    }`;
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

/***/ "./Components/ReceivedItemModal/ReceivedItemModal.jsx":
/*!************************************************************!*\
  !*** ./Components/ReceivedItemModal/ReceivedItemModal.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReceivedItemModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../GreenButton/GreenButton */ "./Components/GreenButton/GreenButton.jsx");
/* harmony import */ var _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReceivedItemModal.module.scss */ "./Components/ReceivedItemModal/ReceivedItemModal.module.scss");
/* harmony import */ var _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/SettingsContext */ "./contexts/SettingsContext.js");
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\ReceivedItemModal\\ReceivedItemModal.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ReceivedItemModal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.caseOpeningAudioBaseDrop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.caseOpeningAudioBlueDrop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.caseOpeningAudioPurpleDrop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.caseOpeningAudioPinkDrop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    this.caseOpeningAudioRedDrop = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();

    switch (this.props.type) {
      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].GREY:
        this.state = {
          receivedItemModalBgClass: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.receivedItemModal_consumerGrade
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].LIGHTBLUE:
        this.state = {
          receivedItemModalBgClass: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.receivedItemModal_lightBlue
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].BLUE:
        this.state = {
          receivedItemModalBgClass: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.receivedItemModal_blue
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].PURPLE:
        this.state = {
          receivedItemModalBgClass: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.receivedItemModal_purple
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].PINK:
        this.state = {
          receivedItemModalBgClass: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.receivedItemModal_pink
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].RED:
        this.state = {
          receivedItemModalBgClass: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.receivedItemModal_red
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].GOLD:
        this.state = {
          receivedItemModalBgClass: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.receivedItemModal_special
        };
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].GREY | _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].LIGHTBLUE:
        this.state = {
          receivedItemModalBgClass: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.receivedItemModal_consumerGrade
        };

      default:
        break;
    }
  }

  componentDidMount() {
    this.caseOpeningAudioBaseDrop.current.volume = this.context.volume;
    this.caseOpeningAudioBlueDrop.current.volume = this.context.volume;
    this.caseOpeningAudioPurpleDrop.current.volume = this.context.volume;
    this.caseOpeningAudioPinkDrop.current.volume = this.context.volume;
    this.caseOpeningAudioRedDrop.current.volume = this.context.volume;

    switch (this.props.type) {
      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].GREY:
      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].LIGHTBLUE:
        this.caseOpeningAudioBaseDrop.current.play();
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].BLUE:
        this.caseOpeningAudioBlueDrop.current.play();
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].PURPLE:
        this.caseOpeningAudioPurpleDrop.current.play();
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].PINK:
        this.caseOpeningAudioPinkDrop.current.play();
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].RED:
        this.caseOpeningAudioRedDrop.current.play();
        break;

      case _helpers_item_type__WEBPACK_IMPORTED_MODULE_4__["itemType"].GOLD:
        this.caseOpeningAudioRedDrop.current.play();
        break;

      default:
        break;
    }
  }

  render() {
    return __jsx("div", {
      className: `${_ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.receivedItemModal} ${this.state.receivedItemModalBgClass}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 7
      }
    }, __jsx("audio", {
      ref: this.caseOpeningAudioBaseDrop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "/sound/drop1.mp3",
      type: "audio/mp3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    })), __jsx("audio", {
      ref: this.caseOpeningAudioBlueDrop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "/sound/drop2.mp3",
      type: "audio/mp3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    })), __jsx("audio", {
      ref: this.caseOpeningAudioPurpleDrop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "/sound/drop3.mp3",
      type: "audio/mp3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 11
      }
    })), __jsx("audio", {
      ref: this.caseOpeningAudioPinkDrop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "/sound/drop4.mp3",
      type: "audio/mp3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 11
      }
    })), __jsx("audio", {
      ref: this.caseOpeningAudioRedDrop,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }
    }, __jsx("source", {
      src: "/sound/drop5.mp3",
      type: "audio/mp3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 11
      }
    })), __jsx("h1", {
      className: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.itemTitle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }
    }, this.props.isStatrak && "StatTrak™" + " ", " ", this.props.title), __jsx("div", {
      className: `${_ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.imageWrap}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 9
      }
    }, __jsx("img", {
      src: this.props.image,
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 11
      }
    })), __jsx("div", {
      className: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.bottomWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }
    }, __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 11
      }
    }, "You got a new item!"), __jsx("div", {
      className: _ReceivedItemModal_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.btnRowWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 11
      }
    }, __jsx(_GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_1__["GreenButton"], {
      onClick: () => {
        this.props.onSubmit();
      },
      text: "Continue",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }), __jsx(_GreenButton_GreenButton__WEBPACK_IMPORTED_MODULE_1__["GreenButton"], {
      onClick: () => {
        this.props.onTryAgainBtnClick();
      },
      text: "Try again",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 13
      }
    }))));
  }

}

_defineProperty(ReceivedItemModal, "contextType", _contexts_SettingsContext__WEBPACK_IMPORTED_MODULE_3__["SettingsContext"]);

/***/ }),

/***/ "./Components/ReceivedItemModal/ReceivedItemModal.module.scss":
/*!********************************************************************!*\
  !*** ./Components/ReceivedItemModal/ReceivedItemModal.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"receivedItemModal": "ReceivedItemModal_receivedItemModal__3VaMa",
	"imageWrap": "ReceivedItemModal_imageWrap__3IVmi",
	"receivedItemModal_red": "ReceivedItemModal_receivedItemModal_red__31aMU",
	"receivedItemModal_special": "ReceivedItemModal_receivedItemModal_special__3NYCg",
	"receivedItemModal_pink": "ReceivedItemModal_receivedItemModal_pink__dGp6a",
	"receivedItemModal_purple": "ReceivedItemModal_receivedItemModal_purple__1nBix",
	"receivedItemModal_blue": "ReceivedItemModal_receivedItemModal_blue__1w3v2",
	"receivedItemModal_lightBlue": "ReceivedItemModal_receivedItemModal_lightBlue__3aT1B",
	"receivedItemModal_consumerGrade": "ReceivedItemModal_receivedItemModal_consumerGrade__2kMSF",
	"bottomWrap": "ReceivedItemModal_bottomWrap__3E_8_",
	"btnRowWrap": "ReceivedItemModal_btnRowWrap__1OscU"
};

/***/ }),

/***/ "./Components/Showcase/Showcase.jsx":
/*!******************************************!*\
  !*** ./Components/Showcase/Showcase.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Showcase; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
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

/***/ }),

/***/ "./Components/Showcase/showcase.module.scss":
/*!**************************************************!*\
  !*** ./Components/Showcase/showcase.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"showcase": "showcase_showcase__2y1OM",
	"items": "showcase_items__1hRCt",
	"introtext": "showcase_introtext__ipGcA"
};

/***/ }),

/***/ "./Components/UnlockingContainerNotification/UnlockingContainerNotification.jsx":
/*!**************************************************************************************!*\
  !*** ./Components/UnlockingContainerNotification/UnlockingContainerNotification.jsx ***!
  \**************************************************************************************/
/*! exports provided: UnlockingContainerNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnlockingContainerNotification", function() { return UnlockingContainerNotification; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\Components\\UnlockingContainerNotification\\UnlockingContainerNotification.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const UnlockingContainerNotification = () => {
  return __jsx("div", {
    className: "jsx-32343439" + " " + 'unlocking-container-notification',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx("span", {
    className: "jsx-32343439",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, "Unlocking Container..."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "32343439",
    __self: undefined
  }, ".unlocking-container-notification.jsx-32343439{height:4rem;width:60%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#253645;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-left:2rem;margin:0 auto;}.unlocking-container-notification.jsx-32343439 span.jsx-32343439{font-size:1.1rem;font-weight:500;color:#7998b7;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xccmVhY3Qtc3NyXFxyZWFjdC1zc3JcXENvbXBvbmVudHNcXFVubG9ja2luZ0NvbnRhaW5lck5vdGlmaWNhdGlvblxcVW5sb2NraW5nQ29udGFpbmVyTm90aWZpY2F0aW9uLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRUyxBQUd5QixBQVVLLFlBVFAsS0FVTSxLQVRILFdBVUMsY0FDaEIsaURBVnFCLG1CQUNBLDZGQUNELGtCQUNKLGNBQ2hCIiwiZmlsZSI6IkQ6XFxQcm9qZWN0c1xccmVhY3Qtc3NyXFxyZWFjdC1zc3JcXENvbXBvbmVudHNcXFVubG9ja2luZ0NvbnRhaW5lck5vdGlmaWNhdGlvblxcVW5sb2NraW5nQ29udGFpbmVyTm90aWZpY2F0aW9uLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVbmxvY2tpbmdDb250YWluZXJOb3RpZmljYXRpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd1bmxvY2tpbmctY29udGFpbmVyLW5vdGlmaWNhdGlvbic+XHJcbiAgICAgIDxzcGFuPlVubG9ja2luZyBDb250YWluZXIuLi48L3NwYW4+XHJcblxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICAudW5sb2NraW5nLWNvbnRhaW5lci1ub3RpZmljYXRpb24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyNTM2NDU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMnJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnVubG9ja2luZy1jb250YWluZXItbm90aWZpY2F0aW9uIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgY29sb3I6ICM3OTk4Yjc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\Projects\\\\react-ssr\\\\react-ssr\\\\Components\\\\UnlockingContainerNotification\\\\UnlockingContainerNotification.jsx */"));
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

/***/ "./helpers/chance.js":
/*!***************************!*\
  !*** ./helpers/chance.js ***!
  \***************************/
/*! exports provided: ItemChance, ItemStatrakChance, SouvenirChance, QualityChance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemChance", function() { return ItemChance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemStatrakChance", function() { return ItemStatrakChance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SouvenirChance", function() { return SouvenirChance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QualityChance", function() { return QualityChance; });
const ItemChance = {
  GREY: 0.56999,
  LIGHTBLUE: 0.70923,
  BLUE: 0.7992327,
  PURPLE: 0.9590792,
  PINK: 0.9910485,
  RED: 0.9974424,
  GOLD: 0.9999999
};
const ItemStatrakChance = {
  BLUE: 0.07992327,
  PURPLE: 0.09590792,
  PINK: 0.09910485,
  RED: 0.09974424,
  GOLD: 0.09999999
};
const SouvenirChance = {
  GREY: 0.8,
  LIGHTBLUE: 0.96,
  BLUE: 0.992,
  PURPLE: 0.9976,
  PINK: 0.9988,
  RED: 0.9999
};
const QualityChance = {
  BATTLESCARRED: 0.3,
  FIELDTESTED: 0.55,
  WELLWORN: 0.75,
  MINIMALWEAR: 0.9,
  FACTORYNEW: 0.99
};

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

/***/ "./helpers/random.js":
/*!***************************!*\
  !*** ./helpers/random.js ***!
  \***************************/
/*! exports provided: getRandomInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInt", function() { return getRandomInt; });
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
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

/***/ "./pages/container/[id].jsx":
/*!**********************************!*\
  !*** ./pages/container/[id].jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_CaseOpeningSec_CaseOpeningSec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Components/CaseOpeningSec/CaseOpeningSec */ "./Components/CaseOpeningSec/CaseOpeningSec.jsx");
/* harmony import */ var _Components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/Layout/Layout */ "./Components/Layout/Layout.jsx");
/* harmony import */ var _Components_Showcase_Showcase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Components/Showcase/Showcase */ "./Components/Showcase/Showcase.jsx");
/* harmony import */ var _helpers_container_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/container-type */ "./helpers/container-type.js");
/* harmony import */ var _public_cases_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/cases.js */ "./public/cases.js");
/* harmony import */ var _public_souvenir_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../public/souvenir.js */ "./public/souvenir.js");
var _jsxFileName = "D:\\Projects\\react-ssr\\react-ssr\\pages\\container\\[id].jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






 // import cases from "../../public/cases.json";



const Container = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: containerInfo,
    1: setContainerInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: items,
    1: setItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: specialItems,
    1: setSpecialItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: chosenContainerType,
    1: setChosenContainerType
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (router && router.query && router.query.id) {
      const type = router.query.type;

      switch (type) {
        case "case":
          {
            setChosenContainerType(_helpers_container_type__WEBPACK_IMPORTED_MODULE_6__["containerType"][0]);
            const {
              title,
              image,
              items,
              specialItems
            } = _public_cases_js__WEBPACK_IMPORTED_MODULE_7__["Cases"].find(value => value.id === +router.query.id);
            setContainerInfo({
              title,
              image
            });
            setItems(items);
            setSpecialItems(specialItems);
            break;
          }

        case "souvenir":
          {
            setChosenContainerType(_helpers_container_type__WEBPACK_IMPORTED_MODULE_6__["containerType"][1]);
            const {
              title,
              image,
              items
            } = _public_souvenir_js__WEBPACK_IMPORTED_MODULE_8__["Souvenir"].find(value => value.id === +router.query.id);
            setContainerInfo({
              title,
              image
            });
            setItems(items);
            break;
          }

        default:
          {
            setChosenContainerType(_helpers_container_type__WEBPACK_IMPORTED_MODULE_6__["containerType"][0]);
            const {
              title,
              image,
              items,
              specialItems
            } = _public_cases_js__WEBPACK_IMPORTED_MODULE_7__["Cases"].find(value => value.id === +router.query.id);
            setContainerInfo({
              title,
              image
            });
            setItems(items);
            setSpecialItems(specialItems);
            break;
          }
      }
    }
  }, [router]);
  return __jsx(_Components_Layout_Layout__WEBPACK_IMPORTED_MODULE_4__["Layout"], {
    content: __jsx("div", {
      className: "jsx-3757945159" + " " + 'container-page',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-3757945159" + " " + 'm-sec',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jsx-3757945159" + " " + 'head-wrap',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }), chosenContainerType === _helpers_container_type__WEBPACK_IMPORTED_MODULE_6__["containerType"][0] && items && specialItems && __jsx(_Components_CaseOpeningSec_CaseOpeningSec__WEBPACK_IMPORTED_MODULE_3__["CaseOpeningSec"], {
      items: items,
      containerType: _helpers_container_type__WEBPACK_IMPORTED_MODULE_6__["containerType"][0],
      caseTitle: containerInfo.title,
      caseImage: containerInfo.image,
      specialItems: specialItems,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }), chosenContainerType === _helpers_container_type__WEBPACK_IMPORTED_MODULE_6__["containerType"][1] && items && __jsx(_Components_CaseOpeningSec_CaseOpeningSec__WEBPACK_IMPORTED_MODULE_3__["CaseOpeningSec"], {
      items: items,
      containerType: _helpers_container_type__WEBPACK_IMPORTED_MODULE_6__["containerType"][1],
      caseTitle: containerInfo.title,
      caseImage: containerInfo.image,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 15
      }
    }), items && __jsx(_Components_Showcase_Showcase__WEBPACK_IMPORTED_MODULE_5__["default"], {
      baseContainerType: chosenContainerType === _helpers_container_type__WEBPACK_IMPORTED_MODULE_6__["containerType"][0],
      items: items,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    })), ")}", __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3757945159",
      __self: undefined
    }, ".container-page.jsx-3757945159{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.head-wrap.jsx-3757945159{background:#121b24;}.container-page.jsx-3757945159 .m-sec.jsx-3757945159{height:85vh;width:70vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxQcm9qZWN0c1xccmVhY3Qtc3NyXFxyZWFjdC1zc3JcXHBhZ2VzXFxjb250YWluZXJcXFtpZF0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1HYSxBQUc4QixBQU1NLEFBSVAsWUFDRCxPQUpiLElBS0EsbURBWHFCLDZGQUNJLG1HQUN6QiIsImZpbGUiOiJEOlxcUHJvamVjdHNcXHJlYWN0LXNzclxccmVhY3Qtc3NyXFxwYWdlc1xcY29udGFpbmVyXFxbaWRdLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDYXNlT3BlbmluZ1NlYyB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0Nhc2VPcGVuaW5nU2VjL0Nhc2VPcGVuaW5nU2VjXCI7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL0xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IFNob3djYXNlIGZyb20gXCIuLi8uLi9Db21wb25lbnRzL1Nob3djYXNlL1Nob3djYXNlXCI7XHJcbmltcG9ydCB7IGNvbnRhaW5lclR5cGUgfSBmcm9tIFwiLi4vLi4vaGVscGVycy9jb250YWluZXItdHlwZVwiO1xyXG5pbXBvcnQgeyBDYXNlcyB9IGZyb20gXCIuLi8uLi9wdWJsaWMvY2FzZXMuanNcIjtcclxuLy8gaW1wb3J0IGNhc2VzIGZyb20gXCIuLi8uLi9wdWJsaWMvY2FzZXMuanNvblwiO1xyXG5pbXBvcnQgeyBTb3V2ZW5pciB9IGZyb20gXCIuLi8uLi9wdWJsaWMvc291dmVuaXIuanNcIjtcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtjb250YWluZXJJbmZvLCBzZXRDb250YWluZXJJbmZvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3NwZWNpYWxJdGVtcywgc2V0U3BlY2lhbEl0ZW1zXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtjaG9zZW5Db250YWluZXJUeXBlLCBzZXRDaG9zZW5Db250YWluZXJUeXBlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJvdXRlciAmJiByb3V0ZXIucXVlcnkgJiYgcm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSByb3V0ZXIucXVlcnkudHlwZTtcclxuICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgY2FzZSBcImNhc2VcIjoge1xyXG4gICAgICAgICAgc2V0Q2hvc2VuQ29udGFpbmVyVHlwZShjb250YWluZXJUeXBlWzBdKTtcclxuXHJcbiAgICAgICAgICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgaXRlbXMsIHNwZWNpYWxJdGVtcyB9ID0gQ2FzZXMuZmluZChcclxuICAgICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZS5pZCA9PT0gK3JvdXRlci5xdWVyeS5pZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNldENvbnRhaW5lckluZm8oe1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICAgIHNldFNwZWNpYWxJdGVtcyhzcGVjaWFsSXRlbXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgXCJzb3V2ZW5pclwiOiB7XHJcbiAgICAgICAgICBzZXRDaG9zZW5Db250YWluZXJUeXBlKGNvbnRhaW5lclR5cGVbMV0pO1xyXG4gICAgICAgICAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGl0ZW1zIH0gPSBTb3V2ZW5pci5maW5kKFxyXG4gICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlLmlkID09PSArcm91dGVyLnF1ZXJ5LmlkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgc2V0Q29udGFpbmVySW5mbyh7XHJcbiAgICAgICAgICAgIHRpdGxlLFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgc2V0SXRlbXMoaXRlbXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgIHNldENob3NlbkNvbnRhaW5lclR5cGUoY29udGFpbmVyVHlwZVswXSk7XHJcbiAgICAgICAgICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgaXRlbXMsIHNwZWNpYWxJdGVtcyB9ID0gQ2FzZXMuZmluZChcclxuICAgICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZS5pZCA9PT0gK3JvdXRlci5xdWVyeS5pZFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIHNldENvbnRhaW5lckluZm8oe1xyXG4gICAgICAgICAgICB0aXRsZSxcclxuICAgICAgICAgICAgaW1hZ2UsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHNldEl0ZW1zKGl0ZW1zKTtcclxuICAgICAgICAgIHNldFNwZWNpYWxJdGVtcyhzcGVjaWFsSXRlbXMpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlcl0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dFxyXG4gICAgICBjb250ZW50PXtcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyLXBhZ2UnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tc2VjJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWQtd3JhcCc+PC9kaXY+XHJcbiAgICAgICAgICAgIHtjaG9zZW5Db250YWluZXJUeXBlID09PSBjb250YWluZXJUeXBlWzBdICYmXHJcbiAgICAgICAgICAgICAgaXRlbXMgJiZcclxuICAgICAgICAgICAgICBzcGVjaWFsSXRlbXMgJiYgKFxyXG4gICAgICAgICAgICAgICAgPENhc2VPcGVuaW5nU2VjXHJcbiAgICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgICAgICAgY29udGFpbmVyVHlwZT17Y29udGFpbmVyVHlwZVswXX1cclxuICAgICAgICAgICAgICAgICAgY2FzZVRpdGxlPXtjb250YWluZXJJbmZvLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICBjYXNlSW1hZ2U9e2NvbnRhaW5lckluZm8uaW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIHNwZWNpYWxJdGVtcz17c3BlY2lhbEl0ZW1zfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7Y2hvc2VuQ29udGFpbmVyVHlwZSA9PT0gY29udGFpbmVyVHlwZVsxXSAmJiBpdGVtcyAmJiAoXHJcbiAgICAgICAgICAgICAgPENhc2VPcGVuaW5nU2VjXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJUeXBlPXtjb250YWluZXJUeXBlWzFdfVxyXG4gICAgICAgICAgICAgICAgY2FzZVRpdGxlPXtjb250YWluZXJJbmZvLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgY2FzZUltYWdlPXtjb250YWluZXJJbmZvLmltYWdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtpdGVtcyAmJiAoXHJcbiAgICAgICAgICAgICAgPFNob3djYXNlXHJcbiAgICAgICAgICAgICAgICBiYXNlQ29udGFpbmVyVHlwZT17Y2hvc2VuQ29udGFpbmVyVHlwZSA9PT0gY29udGFpbmVyVHlwZVswXX1cclxuICAgICAgICAgICAgICAgIGl0ZW1zPXtpdGVtc31cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAuY29udGFpbmVyLXBhZ2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5oZWFkLXdyYXAge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzEyMWIyNDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5jb250YWluZXItcGFnZSAubS1zZWMge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4NXZoO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwdnc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyO1xyXG4iXX0= */\n/*@ sourceURL=D:\\\\Projects\\\\react-ssr\\\\react-ssr\\\\pages\\\\container\\\\[id].jsx */")),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

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

/***/ "./public/souvenir.js":
/*!****************************!*\
  !*** ./public/souvenir.js ***!
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

/***/ 4:
/*!****************************************!*\
  !*** multi ./pages/container/[id].jsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Projects\react-ssr\react-ssr\pages\container\[id].jsx */"./pages/container/[id].jsx");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

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
//# sourceMappingURL=[id].js.map