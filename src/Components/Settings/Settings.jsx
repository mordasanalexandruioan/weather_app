import React, { useState } from "react";

const Settings = () => {
  const [temperature, setTemperature] = useState("celsius");
  const [wind, setWind] = useState("kmph");
  const [precipitation, setPrecipitation] = useState("mm");
  const [presure, setPresure] = useState("mb");
  const [visibility, setVisibility] = useState("km");
};

export default Settings;
