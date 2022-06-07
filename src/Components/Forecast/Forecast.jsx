import React from "react";
import PropTypes from "prop-types";

import CurrentDay from "../CurrentDay";
import CurrentDayDescr from "../CurrentDayDescription";
import UpcomingDaysForecast from "../UpcomingDaysForecast";

const Forecast = ({ forecast }) => {
  return (
    <div
      style={{
        backgroundColor: "#4483FF",
        maxWidth: "550px",
        margin: "2em auto",
        borderRadius: ".5em",
      }}
    >
      <CurrentDay {...forecast.currentDay} />
      <CurrentDayDescr {...forecast.currentDayDescr} />
      <UpcomingDaysForecast days={forecast.upcomingDays} />
    </div>
  );
};

Forecast.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDescr: PropTypes.object,
    upcomingDays: PropTypes.array,
  }),
};

export default Forecast;
