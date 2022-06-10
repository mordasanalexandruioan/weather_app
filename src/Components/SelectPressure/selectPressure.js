import React, { Component } from "react";
import { SettingsContext } from "../../Context/settingsContext";

class SelectPressure extends Component {
  static contextType = SettingsContext;
  render() {
    const { pressSelect } = this.context;
    const changePress = () => {
      let btn = document.getElementsByTagName("BUTTON")[3];
      if (btn.textContent === "In") btn.textContent = "Mb";
      else btn.textContent = "In";
    };
    const selectNchangePss = () => {
      pressSelect();
      changePress();
    };
    return <button onClick={selectNchangePss}>In</button>;
  }
}

export default SelectPressure;
