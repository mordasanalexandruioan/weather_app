import React from "react";
import PropTypes from "prop-types";

const CurrentDay = ({
  weekday,
  date,
  location,
  name,
  airQualityCO,
  airQualityNO2,
  airQualityO3,
  airQualityPM10,
  airQualitySO2,
  precipIN,
  precipMM,
  moonPhase,
  temperatureC,
  temperatureF,
  weatherIcon,
  maxtempC,
  maxtempF,
  mintempC,
  mintempF,
}) => {
  return (
    <section
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
      <h2>
        {name}
        <span
          style={{
            fontSize: ".8rem",
          }}
        >
          /{location}
        </span>
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <h1>{temperatureC}°C</h1>
        <img src={weatherIcon} />
      </div>
      <span>{maxtempC}°C</span>
      <div
        style={{
          textAlign: "center",
          marginTop: ".6em",
          fontWeight: "bold",
        }}
      >
        Air Quality
        <ul
          style={{
            width: "370px",
            listStyle: "none",
            display: "flex",
            flexDirection: "row",
            padding: "0",
            justifyContent: "space-evenly",
            margin: ".3em 0",
          }}
        >
          <li>CO: {airQualityCO}</li>
          <li>NO2: {airQualityNO2}</li>
          <li>O3: {airQualityO3}</li>
          <li>PM10: {airQualityPM10}</li>
          <li>SO2: {airQualitySO2}</li>
        </ul>
      </div>
    </section>
  );
};

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  airQualityCO: PropTypes.number.isRequired,
  airQualityNO2: PropTypes.number.isRequired,
  airQualityO3: PropTypes.number.isRequired,
  airQualityPM10: PropTypes.number.isRequired,
  airQualitySO2: PropTypes.number.isRequired,
  precipIN: PropTypes.number.isRequired,
  precipMM: PropTypes.number.isRequired,
  moonPhase: PropTypes.string.isRequired,
  temperatureC: PropTypes.number.isRequired,
  temperatureF: PropTypes.number.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  maxtempC: PropTypes.number.isRequired,
  maxtempF: PropTypes.number.isRequired,
  mintempC: PropTypes.number.isRequired,
  mintempF: PropTypes.number.isRequired,
};

export default CurrentDay;
