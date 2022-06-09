import React, { Component } from "react";
import { SettingsContext } from "../../Context/settingsContext";

class SelectWind extends Component {
  static contextType = SettingsContext;
  render() {
    const { windSelect } = this.context;
    const changeWind = () => {
      console.log("wind");
      let btn = document.getElementsByTagName("BUTTON")[1];
      if (btn.textContent === "Mph" && btn.className === "btn windSt")
        btn.textContent = "Kph";
      else btn.textContent = "Mph";
    };
    const selectNchangeW = () => {
      windSelect();
      changeWind();
      console.log(changeWind);
    };
    return (
      <button className="btn windSt" onClick={selectNchangeW}>
        Mph
      </button>
    );
  }
}

export default SelectWind;
