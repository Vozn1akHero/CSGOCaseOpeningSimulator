import React, { createContext, Component } from "react";

export const SettingsContext = createContext();

export default class SettingsContextProvider extends Component {
  state = {
    volume: 0.1,
    caseOpeningTime: 2000,
  };
  render() {
    return (
      <SettingsContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}
