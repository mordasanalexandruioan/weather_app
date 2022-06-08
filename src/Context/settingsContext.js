import React, { Component, createContext } from "react";

export const SettingsContext = createContext();

class SettingsContextProvider extends Component {
  state = {
    tempStatus: true,
    windStatus: true,
    precipStatus: true,
    pressureStatus: true,
    visbilityStatus: true,
  };
  render() {
    return (
      <SettingsContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsContextProvider;
