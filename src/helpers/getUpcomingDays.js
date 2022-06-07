import moment from "moment";

const getUpcomingDays = (data) => {
  console.log(data[0].day.condition.icon);
  data.slice(1).map((param) => ({
    weekday: moment(param.date).format("dddd").substring(0, 3),
    img: param.day.condition.icon,
    temperatureC: param.day.avgtemp_c,
    temperatureF: param.day.avgtemp_f,
  }));
};

export default getUpcomingDays;
