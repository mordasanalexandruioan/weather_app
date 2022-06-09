import React, { Component } from "react";
import { SettingsContext } from "../../Context/settingsContext";

class SelectPrecipitation extends Component {
  static contextType = SettingsContext;
  render() {
    const { precipSelect } = this.context;
    const changePrecip = () => {
      let btn = document.getElementsByTagName("BUTTON")[2];
      if (btn.textContent === "In") btn.textContent = "Mm";
      else btn.textContent = "In";
    };
    const selectNchangePp = () => {
      precipSelect();
      changePrecip();
    };
    return <button onClick={selectNchangePp}>In</button>;
  }
}

export default SelectPrecipitation;
