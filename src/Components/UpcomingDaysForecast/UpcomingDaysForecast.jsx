import React from "react";
import PropTypes from "prop-types";

import UpcomingDaysForecastItem from "../UpcomingDaysForecastItem/UpcomingDaysForecastItem";

const UpcomingDaysForecast = ({ days }) => {
  <ul>
    {console.log(days)}
    {days.map((day) => (
      <UpcomingDaysForecastItem {...day} key={day.weekday} />
    ))}
  </ul>;
};

UpcomingDaysForecast.prototype = {
  params: PropTypes.array.isRequired,
};

export default UpcomingDaysForecast;
