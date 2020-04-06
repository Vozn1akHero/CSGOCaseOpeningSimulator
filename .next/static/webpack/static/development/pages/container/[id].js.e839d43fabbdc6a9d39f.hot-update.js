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
    })), !this.props.baseContainerType && __jsx(_Item_Item__WEBPACK_IMPORTED_MODULE_1__["default"], {
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

/***/ "./pages/container/[id].jsx":
/*!**********************************!*\
  !*** ./pages/container/[id].jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ })

})
//# sourceMappingURL=[id].js.e839d43fabbdc6a9d39f.hot-update.js.map