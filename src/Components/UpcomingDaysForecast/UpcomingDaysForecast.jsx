import React from "react";
import PropTypes from "prop-types";

import UpcomingDaysForecastItem from "../UpcomingDaysForecastItem";

const UpcomingDaysForecast = ({ days }) => (
  <ul>
    {console.log("days", days)}
    {days.map((day) => (
      <UpcomingDaysForecastItem {...day} key={day.weekday} />
    ))}
  </ul>
);

UpcomingDaysForecast.propTypes = {
  days: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;
