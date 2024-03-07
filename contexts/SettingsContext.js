import React, { createContext, Component } from "react";

export const SettingsContext = createContext();

export default class SettingsContextProvider extends Component {
  state = {
    volume: 0.05,
    caseOpeningTime: 3500,
  };
  render() {
    return (
      <SettingsContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}
