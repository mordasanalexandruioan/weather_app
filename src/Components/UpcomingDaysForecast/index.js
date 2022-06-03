import React from "react";
import PropTypes from "prop-types";

const UpcomingDaysForecast = ({ img, temperatureC, temperatureF, weekday }) => {
  return (
    <div>
      {weekday}
      {img}
      {temperatureC}
      {temperatureF}
      UpcomingDaysForecast
    </div>
  );
};

UpcomingDaysForecast.prototype = {
  img: PropTypes.string.isRequired,
  temperatureC: PropTypes.string.isRequired,
  temperatureF: PropTypes.string.isRequired,
  weekday: PropTypes.string.isRequired,
};

export default UpcomingDaysForecast;
