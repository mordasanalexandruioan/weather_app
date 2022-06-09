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
  temperatureSelect = () => {
    this.setState({ tempStatus: !this.state.tempStatus });
  };
  windSelect = () => {
    this.setState({ windStatus: !this.state.windStatus });
  };
  precipSelect = () => {
    this.setState({ precipStatus: !this.state.precipStatus });
  };
  pressSelect = () => {
    this.setState({ pressureStatus: !this.state.pressureStatus });
  };
  visibSelect = () => {
    this.setState({ visbilityStatus: !this.state.visbilityStatus });
  };
  render() {
    return (
      <SettingsContext.Provider
        value={{
          ...this.state,
          temperatureSelect: this.temperatureSelect,
          windSelect: this.windSelect,
          precipSelect: this.precipSelect,
          pressSelect: this.pressSelect,
          visibSelect: this.visibSelect,
        }}
      >
        {this.props.children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsContextProvider;
