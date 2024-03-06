import { itemType } from "./item-type";
import { Quality } from "./quality";
import { getRandomInt } from "../utils/random";
import {
  ItemChance,
  ItemStatrakChance,
  QualityChance,
} from "./chance";

export default class RandomItem {
  getStickerByType = (items, type) => {
    if (items == null || type == null) throw new Error();
    const allGroupItems = [...items.filter((val) => val.type === type)];
    const ran = getRandomInt(0, allGroupItems.length);
    const item = allGroupItems[ran];
    return {
      ...item
    };
  }

  getSouvenirItemByType = (items, type) => {
    if (items == null || type == null) throw new Error();
    const allGroupItems = [...items.filter((val) => val.type === type)];
    const ran = getRandomInt(0, allGroupItems.length);
    const item = allGroupItems[ran];
    const quality = this.getRandomQuality(item);
    return {
      ...item,
      isStatrak: false,
      isSouvenir: true,
      quality,
    };
  };

  getItemFromCaseByType = (items, specialItems, type) => {
    if (!items || !specialItems || !type) throw new Error();
    const isStatrak = this.getRandomStatrakByItemType(type);
    if (type === itemType.GOLD) {
      const ran = getRandomInt(0, specialItems.length);
      const item = specialItems[ran];
      const quality = this.getRandomQuality(item);
      return {
        ...item,
        isStatrak,
        quality,
      };
    } else {
      const allGroupItems = [...items.filter((val) => val.type === type)];
      const ran = getRandomInt(0, allGroupItems.length);
      const item = allGroupItems[ran];
      const quality = this.getRandomQuality(item);
      return { ...item, isStatrak, quality };
    }
  };

  getRandomStatrakByItemType = (type) => {
    if (!type) throw new Error();
    const ran = Math.random();
    if (ran < ItemStatrakChance.BLUE && type == itemType.BLUE) return true;
    else if (ran < ItemStatrakChance.PURPLE && type == itemType.PURPLE)
      return true;
    else if (ran < ItemStatrakChance.PINK && type == itemType.PINK) return true;
    else if (ran < ItemStatrakChance.RED && type == itemType.RED) return true;
    else if (ran < ItemStatrakChance.GOLD && type == itemType.GOLD) return true;
    else return false;
  };

  getRandomQuality = (item) => {
    if (!item) throw new Error();
    const ran = Math.random();
    if (
      (!item.quality ||
        item.quality.indexOf(Quality["Battle-Scarred"]) !== -1) &&
      ran < QualityChance.BATTLESCARRED
    ) {
      return Quality["Battle-Scarred"];
    } else if (
      (!item.quality || item.quality.indexOf(Quality["Field-Tested"]) !== -1) &&
      ran < QualityChance.FIELDTESTED
    ) {
      return Quality["Field-Tested"];
    } else if (
      (!item.quality || item.quality.indexOf(Quality["Well-Worn"]) !== -1) &&
      ran < QualityChance.WELLWORN
    ) {
      return Quality["Well-Worn"];
    } else if (
      (!item.quality || item.quality.indexOf(Quality["Minimal Wear"]) !== -1) &&
      ran < QualityChance.MINIMALWEAR
    ) {
      return Quality["Minimal Wear"];
    } else if (
      (!item.quality || item.quality.indexOf(Quality["Factory New"]) !== -1) &&
      ran < QualityChance.FACTORYNEW
    ) {
      return Quality["Factory New"];
    }
  };
}
