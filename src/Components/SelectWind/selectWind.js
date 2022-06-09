import React, { Component } from "react";
import { SettingsContext } from "../../Context/settingsContext";
import Button from "@mui/material/Button";

class SelectWind extends Component {
  static contextType = SettingsContext;
  render() {
    const { windSelect } = this.context;
    const changeWind = () => {
      console.log("wind");
      let btn = document.querySelector("button");
      if (btn.textContent === "Mph") btn.textContent = "Kph";
      else btn.textContent = "Mph";
    };
    const selectNchange = () => {
      windSelect();
      changeWind();
    };
    return (
      <Button variant="outlined" onClick={selectNchange}>
        Mph
      </Button>
    );
  }
}

export default SelectWind;
