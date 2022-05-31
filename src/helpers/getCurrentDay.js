import moment from "moment";

const getCurrentDay = ( data, title ) =>({
    weekday: moment(data.forecast.forecastday[0].astro.date).format('DDDD'),
    date: moment(data.forecast.forecastday[0].astro.date).format('MMMM Do'),
    location: title,
    temperatureC: data.forecast.forecastday[0].day.avgtemp_c,
    temperatureF:data.forecast.forecastday[0].day.avgtemp_f,
    weatherIcon: data.forecast.forecastday[0].day.condition.icon,
    maxtempC: data.forecast.forecastday[0].day.maxtemp_c,
    maxtempF: data.forecast.forecastday[0].day.maxtemp_f,
    mintempC: data.forecast.forecastday[0].day.mintemp_c,
    mintempF: data.forecast.forecastday[0].day.mintemp_f,
})

export default getCurrentDay;