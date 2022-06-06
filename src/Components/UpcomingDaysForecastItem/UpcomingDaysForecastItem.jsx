import React from "react";
import PropTypes from "prop-types";

const UpcomingDaysForecastItem = ({
  weekday,
  temperatureC,
  temperatureF,
  img,
}) => (
  <li>
    <img src={`${img}`} alt="icon" />
    <span>{weekday}</span>
    <span>{temperatureC}</span>
  </li>
);

UpcomingDaysForecastItem.prototype = {
  weekday: PropTypes.string.isRequired,
  temperatureC: PropTypes.string.isRequired,
  temperatureF: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default UpcomingDaysForecastItem;