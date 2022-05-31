const getCurrentDayDescrp = data =>({
    weatherDescription: data.forecast.forecastday[0].day.condition.text
});

export default getCurrentDayDescrp;