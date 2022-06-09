import React, { Component } from "react";
import { SettingsContext } from "../../Context/settingsContext";

class SelectVisibility extends Component {
  static contextType = SettingsContext;
  render() {
    const { visibSelect } = this.context;
    const changeVisib = () => {
      let btn = document.getElementsByTagName("BUTTON")[4];
      if (btn.textContent === "Mil") btn.textContent = "Km";
      else btn.textContent = "Mil";
    };
    const selectNchangeVis = () => {
      visibSelect();
      changeVisib();
    };
    return <button onClick={selectNchangeVis}>Mil</button>;
  }
}

export default SelectVisibility;
