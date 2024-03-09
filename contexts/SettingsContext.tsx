import Storage from "public/scripts/utils/storage";
import React, { createContext, useEffect, useMemo, useState } from "react";

export interface Settings {
  volume: number;
  caseOpeningTime: number;
}

export type SettingsContextType = {
  settings: Settings;
  setSettings: (settings: Settings) => void;
  resetSettings: () => void;
}

export const SettingsContext = createContext<SettingsContextType | null>(null);

const SettingsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const defSettings: Settings = { volume: 0.1, caseOpeningTime: 3500 };
  const [settings, setSettings] = useState<Settings>(defSettings);

  useEffect(() => {
    const settings = getSettings();
    setSettings(settings)
  }, [])

  useEffect(() => {
    Storage.updateSettings(settings)
  }, [settings])

  const resetSettings = () => {
    Storage.updateSettings(defSettings)
    setSettings(defSettings)
  }

  const getSettings = (): Settings => {
    const savedSettings = Storage.getSettings()
    if (savedSettings) return savedSettings;
    Storage.updateSettings(defSettings)
    return defSettings
  }

  return (
    <SettingsContext.Provider value={{ settings, setSettings, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsContextProvider;