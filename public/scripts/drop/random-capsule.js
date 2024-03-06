import { CapsuleWithoutRedChance } from "./chance";
import { itemType } from "./item-type";
import { getRandomIntSecure } from "../utils/random";

export default class RandomCapsule {
    getRandomWithoutRed = () => {
        const ran = getRandomIntSecure();
        if (ran < CapsuleWithoutRedChance.BLUE) return itemType.BLUE;
        else if (ran < CapsuleWithoutRedChance.PURPLE) return itemType.PURPLE;
        else if (ran < CapsuleWithoutRedChance.PINK) return itemType.PINK;
        else return CapsuleWithoutRedChance.BLUE;
    };
}
