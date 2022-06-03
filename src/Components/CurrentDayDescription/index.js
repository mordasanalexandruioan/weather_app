import React from "react";
import PropTypes from "prop-types";

const CurrentDayDescr = ({ weatherDescription }) => {
  return (
    <div
      style={{
        padding: ".8em",
        textAlign: "center",
      }}
    >
      {weatherDescription}
    </div>
  );
};

CurrentDayDescr.prototype = {
  weatherDescription: PropTypes.string.isRequired,
};

export default CurrentDayDescr;
