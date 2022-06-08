import React, { Component, createContext } from "react";

export const SettingsContext = createContext();

class SettingsContextProvider extends Component {
  state = {
    temp: "",
    wind: "",
    precipitation: "",
    pressure: "",
    visibility: "",
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
