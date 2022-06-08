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
  precipIN: data.current.precip_in,
  precipMM: data.current.precip_mm,
  moonPhase: data.forecast.forecastday[0].astro.moon_phase,
  temperatureC: data.forecast.forecastday[0].day.avgtemp_c,
  temperatureF: data.forecast.forecastday[0].day.avgtemp_f,
  weatherIcon: data.forecast.forecastday[0].day.condition.icon,
  maxtempC: data.forecast.forecastday[0].day.maxtemp_c,
  maxtempF: data.forecast.forecastday[0].day.maxtemp_f,
  mintempC: data.forecast.forecastday[0].day.mintemp_c,
  mintempF: data.forecast.forecastday[0].day.mintemp_f,
});

export default getCurrentDay;
