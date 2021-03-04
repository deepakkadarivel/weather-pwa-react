import axios from "axios";
import { constants } from "../utils";

const { API_KEY, WEATHER_BASE_URL, WEATHER_UNITS } = constants;

export const fetchWeather = async (query) => {
  const { data } = await axios.get(WEATHER_BASE_URL, {
    params: {
      q: query,
      appid: API_KEY,
      units: WEATHER_UNITS.METRIC,
    },
  });

  return data;
};
