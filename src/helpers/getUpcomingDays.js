import moment from "moment";

const getUpcomingDays = (data) => {
  const array = data.forecast.forecastday;

  array.slice(1).map((param) => {
    const { day } = param;
    const getWeekDay = moment(param.date).format("dddd").substring(0, 3);
    console.log("temp", day.condition.icon, day.avgtemp_c, day.avgtemp_f);
    return {
      img: day.condition.icon,
      temperatureC: day.avgtemp_c,
      temperatureF: day.avgtemp_f,
      weekday: getWeekDay,
      gfhcgfhg,
    };
  });
};

export default getUpcomingDays;
