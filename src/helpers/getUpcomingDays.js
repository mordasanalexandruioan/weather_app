import moment from "moment";

const getUpcomingDays = (data) =>{
    const getWeekDay = moment(data.forecast.forecastday.date).format('dddd').substring(0,3);
    data.forecast.forecastday.map(day=>({
         img:day.condition.icon,
         temperatureC:day.avgtemp_c,
         temperatureF:day.avgtemp_f,
         weekday:getWeekDay(day.location.localtime),
    }))
}

export default getUpcomingDays;