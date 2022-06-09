import React, { Component } from "react";
import { SettingsContext } from "../../Context/settingsContext";
import Button from "@mui/material/Button";

class SelectTemperature extends Component {
  static contextType = SettingsContext;
  render() {
    const { temperatureSelect } = this.context;
    const changeTemp = () => {
      console.log("temp");
      let btn = document.querySelector("button");
      if (btn.textContent === "Fahrenheit") btn.textContent = "Celsius";
      else btn.textContent = "Fahrenheit";
    };
    const selectNchange = () => {
      temperatureSelect();
      changeTemp();
    };
    return (
      <Button variant="outlined" onClick={selectNchange}>
        Fahrenheit
      </Button>
    );
  }
}

export default SelectTemperature;
