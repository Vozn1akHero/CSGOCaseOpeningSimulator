import { ItemChance } from "./chance";
import { itemType } from "./item-type";

export default class RandomCaseItem {
  getRandomType = () => {
    const ran = Math.random();
    if (ran < ItemChance.BLUE) return itemType.BLUE;
    else if (ran < ItemChance.PURPLE) return itemType.PURPLE;
    else if (ran < ItemChance.PINK) return itemType.PINK;
    else if (ran < ItemChance.RED) return itemType.RED;
    else if (ran < ItemChance.GOLD) return itemType.GOLD;
    else return itemType.BLUE;
  };
}
