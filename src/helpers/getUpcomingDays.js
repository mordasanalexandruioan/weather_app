import moment from "moment";

const getUpcomingDays = (data) => {
  console.log(data[0].day.condition.icon);
  data.slice(1).map((param) => ({
    img: param.day.condition.icon,
    temperatureC: param.day.avgtemp_c,
    temperatureF: param.day.avgtemp_f,
    weekday: moment(param.date).format("dddd").substring(0, 3),
  }));
};

export default getUpcomingDays;
