import React from "react";
import PropTypes from "prop-types";
import { SettingsContext } from "../../Context/settingsContext";

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
  windKPH,
  windMPH,
  pressureIN,
  pressureMB,
  moonPhase,
  temperatureC,
  temperatureF,
  weatherIcon,
  maxtempC,
  maxtempF,
  mintempC,
  mintempF,
  visibilityKM,
  visibilityMIL,
}) => {
  return (
    <SettingsContext.Consumer>
      {(context) => {
        const {
          tempStatus,
          windStatus,
          precipStatus,
          pressureStatus,
          visbilityStatus,
        } = context;
        const storageTempS = JSON.parse(localStorage.getItem("temp"));
        const tempS = () => {
          if (storageTempS === null) {
            if (tempStatus) return `${temperatureC}°C`;
            else return `${temperatureF}°F`;
          } else if (storageTempS) return `${temperatureF}°F`;
          else return `${temperatureC}°C`;
        };
        const precipS = precipStatus ? `${precipMM} mm` : `${precipIN} in`;
        const visibilityS = visbilityStatus
          ? `${visibilityKM} km`
          : `${visibilityMIL} mil`;
        const windS = windStatus ? `${windKPH} km/h` : `${windMPH} mph`;
        const pressureS = pressureStatus
          ? `${pressureMB} mb`
          : `${pressureIN} in`;
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
                alignItems: "center",
              }}
            >
              <span>{tempS()}</span>
              <img src={weatherIcon} alt="" />
            </div>
            <span>{maxtempC}°C</span>
            <span>{precipS}</span>
            <span>Visibility range: {visibilityS}</span>
            <span>Wind speed: {windS}</span>
            <span>Air pressure: {pressureS}</span>
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
      }}
    </SettingsContext.Consumer>
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
  windKPH: PropTypes.number.isRequired,
  windMPH: PropTypes.number.isRequired,
  pressureIN: PropTypes.number.isRequired,
  pressureMB: PropTypes.number.isRequired,
  moonPhase: PropTypes.string.isRequired,
  temperatureC: PropTypes.number.isRequired,
  temperatureF: PropTypes.number.isRequired,
  weatherIcon: PropTypes.string.isRequired,
  maxtempC: PropTypes.number.isRequired,
  maxtempF: PropTypes.number.isRequired,
  mintempC: PropTypes.number.isRequired,
  mintempF: PropTypes.number.isRequired,
  visibilityKM: PropTypes.number.isRequired,
  visibilityMIL: PropTypes.number.isRequired,
};

export default CurrentDay;
