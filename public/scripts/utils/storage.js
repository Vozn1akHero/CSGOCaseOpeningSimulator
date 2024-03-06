import { Quality } from "../drop/quality";

export default class Storage {
  static identifier = "receivedItems";

  static saveReceivedItem = (item) => {
    const curValue =
      localStorage.getItem(Storage.identifier) != null
        ? JSON.parse(localStorage.getItem(Storage.identifier))
        : [];
    const valToStore = JSON.stringify(Array.of(item, ...curValue));
    localStorage.setItem(Storage.identifier, valToStore);
  };

  static selectAllRaw = () => {
    return JSON.parse(localStorage.getItem(Storage.identifier));
  };

  static selectAll = () => {
    let all = JSON.parse(localStorage.getItem(Storage.identifier));
    return [
      ...all.map((value) => {
        if (value.quality)
          value.quality = Object.keys(Quality).find(
            (key) => Quality[key] === value.quality
          );

        return value;
      }),
    ];
  };
}
