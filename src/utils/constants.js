const BASE_URL = "https://openweathermap.org";
const API_URL = "https://api.openweathermap.org/data/2.5";

const constants = {
  API_KEY: process.env.REACT_APP_API_KEY,
  BASE_URL,
  API_URL,
  WEATHER_BASE_URL: `${API_URL}/weather`,
  WEATHER_UNITS: {
    METRIC: "metric",
    STANDARD: "standard",
    IMPERIAL: "imperial",
  },
};

export default constants;
