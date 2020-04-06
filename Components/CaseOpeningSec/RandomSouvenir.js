import { itemType } from "../../helpers/item-type";
import { ItemChance } from "../../helpers/chance";

export default class RandomSouvenir {
  getRandomSouvenirTypeByItems = (items) => {
    const ran = Math.random();
    if (items.some((e) => e.type == itemType.GREY) && ran < ItemChance.GREY)
      return itemType.GREY;
    else if (
      items.some((e) => e.type == itemType.LIGHTBLUE) &&
      ran < ItemChance.LIGHTBLUE
    )
      return itemType.LIGHTBLUE;
    else if (
      items.some((e) => e.type == itemType.BLUE) &&
      ran < ItemChance.BLUE
    )
      return itemType.BLUE;
    else if (
      items.some((e) => e.type == itemType.PURPLE) &&
      ran < ItemChance.PURPLE
    )
      return itemType.PURPLE;
    else if (
      items.some((e) => e.type == itemType.PINK) &&
      ran < ItemChance.PINK
    )
      return itemType.PINK;
    else if (items.some((e) => e.type == itemType.RED) && ran < ItemChance.RED)
      return itemType.RED;
    else if (
      items.some((e) => e.type == itemType.GOLD) &&
      ran < ItemChance.GOLD
    )
      return itemType.GOLD;
  };
}
