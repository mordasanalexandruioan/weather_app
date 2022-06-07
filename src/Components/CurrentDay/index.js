import React from "react";
import PropTypes from "prop-types";

const CurrentDay = ({
  weekday,
  date,
  location,
  airQualityCO,
  airQualityNO2,
  airQualityO3,
  airQualityPM10,
  airQualitySO2,
  precipIN,
  precipMM,
  pressureIN,
  pressureMB,
  temperatureC,
  temperatureF,
  weatherIcon,
  maxtempC,
  maxtempF,
  mintempC,
  mintempF,
  visibilityKM,
  visibilityMIL,
  windKPH,
  windMPH,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: ".5em",
        color: "#FAFAFA",
      }}
    >
      <h2>{weekday}</h2>
      <span>{date}</span>
      <h2>{location}</h2>
      <h1>{temperatureC}°C</h1>
      <span>
        {maxtempC}°C / {mintempF}°F
      </span>
      <img src={weatherIcon} />
    </div>
  );
};

CurrentDay.prototype = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  airQualityCO: PropTypes.number.isRequired,
  airQualityNO2: PropTypes.number.isRequired,
  airQualityO3: PropTypes.number.isRequired,
  airQualityPM10: PropTypes.number.isRequired,
  airQualitySO2: PropTypes.number.isRequired,
  precipIN: PropTypes.number.isRequired,
  precipMM: propTypes.number.isRequired,
  pressureIN: propTypes.number.isRequired,
  pressureMB: propTypes.number.isRequired,
  temperatureC: PropTypes.number.isRequired,
  temperatureF: PropTypes.number.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  maxtempC: PropTypes.number.isRequired,
  maxtempF: PropTypes.number.isRequired,
  mintempC: PropTypes.number.isRequired,
  mintempF: PropTypes.number.isRequired,
  visibilityKM: PropTypes.number.isRequired,
  visibilityMIL: PropTypes.number.isRequired,
  windKPH: PropTypes.number.isRequired,
  windMPH: propTypes.number.isRequired,
};

export default CurrentDay;
