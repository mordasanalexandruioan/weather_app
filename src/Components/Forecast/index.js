import React from "react";
import PropTypes from "prop-types";
import CurrentDay from "../CurrentDay";
import CurrentDayDescr from "../CurrentDayDescription";
import UpcomingDayForecast from "../UpcomingDaysForecast";

const Forecast = ({ isForecast }) => {
  console.log(isForecast.upcomingDaysForecast);
  return (
    <div
      style={{
        backgroundColor: "#4483FF",
        maxWidth: "550px",
        margin: "2em auto",
        borderRadius: ".5em",
      }}
    >
      <CurrentDay {...isForecast.currentDay} />
      <CurrentDayDescr {...isForecast.currentDayDescr} />
      <UpcomingDayForecast {...isForecast.upcomingDaysForecast} />
    </div>
  );
};

Forecast.prototype = {
  isForecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDescr: PropTypes.object,
    upcomingDaysForecast: PropTypes.array,
  }),
};

export default Forecast;
