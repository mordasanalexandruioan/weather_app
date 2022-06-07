import { useState } from "react";
import axios from "axios";
import getCurrentDay from "../helpers/getCurrentDay";
import getCurrentDayDescrp from "../helpers/getCurrentDayDescrp";
import getUpcomingDays from "../helpers/getUpcomingDays";

const BASE_URL =
  "http://api.weatherapi.com/v1/forecast.json?key=b6d505ab68f4411e8ab124145222505";

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isForecast, setForecast] = useState(null);

  const getWoeid = async (location) => {
    const { data } = await axios(`${BASE_URL}`, {
      params: { query: location, days: 3, aqi: "yes", alerts: "yes" },
    });

    if (!data) {
      setError("Location not found");
      setLoading(false);
      return;
    }

    return data;
  };

  const getherForecastData = (data) => {
    const currentDay = getCurrentDay(data, data.location.name);
    const currentDayDescr = getCurrentDayDescrp(data);
    const upcomingDays = getUpcomingDays(data);

    setForecast({ currentDay, currentDayDescr, upcomingDays });
    setLoading(false);
  };

  const submitRequest = async (location) => {
    try {
      setLoading(true);
      setError(false);

      const data = await getWoeid(location);
      const response = await axios(`${BASE_URL}`, {
        params: { query: location, days: 3, aqi: "yes", alerts: "yes" },
      });
      setLoading(false);

      if (!response.data) return;
      if (!data) return;

      console.log("DATA", data);

      getherForecastData(data);
    } catch (error) {
      setError("Location not found");
      setLoading(false);
      console.log(error);
    }
  };

  return { isError, isLoading, isForecast, submitRequest };
};

export default useForecast;
