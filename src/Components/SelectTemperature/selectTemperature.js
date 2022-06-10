import React, { Component } from "react";
import { SettingsContext } from "../../Context/settingsContext";

class SelectTemperature extends Component {
  static contextType = SettingsContext;
  render() {
    const { temperatureSelect } = this.context;
    const tempTextContent = () => {
      const item = JSON.parse(localStorage.getItem("temp"));
      if (item === true) return "Celsius";
      else return "Fahrenheit";
    };
    const changeTemp = () => {
      let btn = document.getElementsByTagName("BUTTON")[0];
      if (btn.textContent === "Fahrenheit") btn.textContent = "Celsius";
      else btn.textContent = "Fahrenheit";
    };
    const selectNchangeT = () => {
      temperatureSelect();
      changeTemp();
    };
    return <button onClick={selectNchangeT}>{tempTextContent()}</button>;
  }
}

export default SelectTemperature;
