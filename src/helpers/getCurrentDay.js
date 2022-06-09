import moment from "moment";

const getCurrentDay = (data, title) => ({
  weekday: moment(data.forecast.forecastday[0].date).format("dddd"),
  date: moment(data.forecast.forecastday[0].astro.date).format("MMMM Do"),
  location: title,
  name: data.location.name,
  airQualityCO: Math.round(data.current.air_quality.co),
  airQualityNO2: Math.round(data.current.air_quality.no2),
  airQualityO3: Math.round(data.current.air_quality.o3),
  airQualityPM10: Math.round(data.current.air_quality.pm10),
  airQualitySO2: Math.round(data.current.air_quality.so2),
  precipIN: data.forecast.forecastday[0].day.totalprecip_in,
  precipMM: data.forecast.forecastday[0].day.totalprecip_mm,
  windKPH: data.current.wind_kph,
  windMPH: data.current.wind_mph,
  pressureIN: data.current.pressure_in,
  pressureMB: data.current.pressure_mb,
  moonPhase: data.forecast.forecastday[0].astro.moon_phase,
  temperatureC: data.forecast.forecastday[0].day.avgtemp_c,
  temperatureF: data.forecast.forecastday[0].day.avgtemp_f,
  weatherIcon: data.forecast.forecastday[0].day.condition.icon,
  maxtempC: data.forecast.forecastday[0].day.maxtemp_c,
  maxtempF: data.forecast.forecastday[0].day.maxtemp_f,
  mintempC: data.forecast.forecastday[0].day.mintemp_c,
  mintempF: data.forecast.forecastday[0].day.mintemp_f,
  visibilityKM: data.current.vis_km,
  visibilityMIL: data.current.vis_miles,
});

export default getCurrentDay;
