webpackHotUpdate("static\\development\\pages\\container\\[id].js",{

/***/ "./Components/CaseOpeningSec/RandomItem.js":
/*!*************************************************!*\
  !*** ./Components/CaseOpeningSec/RandomItem.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RandomItem; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/item-type */ "./helpers/item-type.js");
/* harmony import */ var _helpers_quality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/quality */ "./helpers/quality.js");
/* harmony import */ var _helpers_random__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers/random */ "./helpers/random.js");
/* harmony import */ var _helpers_chance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/chance */ "./helpers/chance.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





class RandomItem {
  constructor() {
    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getSouvenirItemByType", (items, type) => {
      const allGroupItems = [...items.filter(val => val.type === type)];
      const ran = Object(_helpers_random__WEBPACK_IMPORTED_MODULE_3__["getRandomInt"])(0, allGroupItems.length);
      const item = allGroupItems[ran];
      const quality = getRandomQuality(item);
      return _objectSpread({}, item, {
        isStatrak: false,
        quality
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getItemFromCaseByType", (items, specialItems, type) => {
      let isStatrak = this.getRandomStatrakByItemType(type);

      if (type === _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].GOLD) {
        const ran = Object(_helpers_random__WEBPACK_IMPORTED_MODULE_3__["getRandomInt"])(0, specialItems.length);
        const item = specialItems[ran];
        const quality = this.getRandomQuality(item);
        return _objectSpread({}, item, {
          isStatrak,
          quality
        });
      } else {
        const allGroupItems = [...items.filter(val => val.type === type)];
        const ran = Object(_helpers_random__WEBPACK_IMPORTED_MODULE_3__["getRandomInt"])(0, allGroupItems.length);
        const item = allGroupItems[ran];
        const quality = this.getRandomQuality(item);
        return _objectSpread({}, item, {
          isStatrak,
          quality
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getRandomStatrakByItemType", type => {
      const ran = Math.random();
      if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_4__["ItemStatrakChance"].BLUE && type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].BLUE) return true;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_4__["ItemStatrakChance"].PURPLE && type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].PURPLE) return true;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_4__["ItemStatrakChance"].PINK && type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].PINK) return true;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_4__["ItemStatrakChance"].RED && type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].RED) return true;else if (ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_4__["ItemStatrakChance"].GOLD && type == _helpers_item_type__WEBPACK_IMPORTED_MODULE_1__["itemType"].GOLD) return true;else return false;
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getRandomQuality", item => {
      const ran = Math.random();
      console.log(!item.quality, ran);

      if ((!item.quality || item.quality.indexOf(_helpers_quality__WEBPACK_IMPORTED_MODULE_2__["Quality"]["Battle-Scarred"]) !== -1) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_4__["QualityChance"].BATTLESCARRED) {
        return _helpers_quality__WEBPACK_IMPORTED_MODULE_2__["Quality"]["Battle-Scarred"];
      } else if ((!item.quality || item.quality.indexOf(_helpers_quality__WEBPACK_IMPORTED_MODULE_2__["Quality"]["Field-Tested"]) !== -1) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_4__["QualityChance"].FIELDTESTED) {
        return _helpers_quality__WEBPACK_IMPORTED_MODULE_2__["Quality"]["Field-Tested"];
      } else if ((!item.quality || item.quality.indexOf(_helpers_quality__WEBPACK_IMPORTED_MODULE_2__["Quality"]["Well-Worn"]) !== -1) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_4__["QualityChance"].WELLWORN) {
        return _helpers_quality__WEBPACK_IMPORTED_MODULE_2__["Quality"]["Well-Worn"];
      } else if ((!item.quality || item.quality.indexOf(_helpers_quality__WEBPACK_IMPORTED_MODULE_2__["Quality"]["Minimal Wear"]) !== -1) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_4__["QualityChance"].MINIMALWEAR) {
        return _helpers_quality__WEBPACK_IMPORTED_MODULE_2__["Quality"]["Minimal Wear"];
      } else if ((!item.quality || item.quality.indexOf(_helpers_quality__WEBPACK_IMPORTED_MODULE_2__["Quality"]["Factory New"]) !== -1) && ran < _helpers_chance__WEBPACK_IMPORTED_MODULE_4__["QualityChance"].FACTORYNEW) {
        return _helpers_quality__WEBPACK_IMPORTED_MODULE_2__["Quality"]["Factory New"];
      }
    });
  }

}

/***/ })

})
//# sourceMappingURL=[id].js.23dbaab0b878cce12064.hot-update.js.map