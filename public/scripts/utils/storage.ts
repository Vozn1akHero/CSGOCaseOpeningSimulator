import { Quality } from "../drop/quality";
import { Settings } from "contexts/SettingsContext"

export default class Storage {
  static readonly identifier: string = "receivedItems";
  static readonly settings: string = "settings";


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
    const all = JSON.parse(localStorage.getItem(Storage.identifier));
    if (all) {
      const keys = Object.keys(Quality);
      return [
        ...all.map((value) => {
          if (value.quality !== undefined)
            value.quality = keys.find(
              (key) => Quality[key] === value.quality
            );

          return value;
        }),
      ];
    }

    return [];
  };

  static clearUnboxedItems = () => {
    localStorage.removeItem(Storage.identifier)
  }

  static updateSettings = (settings: Settings) => {
    localStorage.setItem(Storage.settings, JSON.stringify(settings));
  }

  static getSettings = (): Settings => {
    const settings = localStorage.getItem(Storage.settings)
    if (settings) return JSON.parse(settings)
    return null;
  }
}
