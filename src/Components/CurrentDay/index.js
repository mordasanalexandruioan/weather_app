import React from "react";
import PropTypes from "prop-types";

const CurrentDay = ({
  weekday,
  date,
  location,
  temperatureC,
  temperatureF,
  weatherIcon,
  maxtempC,
  maxtempF,
  mintempC,
  mintempF,
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

CurrentDay.propTypes = {
  weekday: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  temperatureC: PropTypes.number.isRequired,
  temperatureF: PropTypes.number.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  maxtempC: PropTypes.number.isRequired,
  maxtempF: PropTypes.number.isRequired,
  mintempC: PropTypes.number.isRequired,
  mintempF: PropTypes.number.isRequired,
};

export default CurrentDay;
