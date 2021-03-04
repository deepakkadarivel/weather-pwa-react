import React, { useState } from "react";
import { fetchWeather } from "./api";
import "./App.css";
import { constants } from "./utils";

const WeatherCard = ({ data }) => {
  const { name, sys, main, weather } = data;
  return (
    <div className="city">
      <h2 className="city-name">
        <span>{name}</span>
        <sup>{sys?.country}</sup>
      </h2>
      <div className="city-temp">
        {Math.round(main?.temp)}
        <sup>&deg;</sup>
      </div>
      <div className="info">
        <img
          className="city-icon"
          src={`${constants.BASE_URL}/img/wn/${weather[0].icon}@2x.png`}
          alt={weather[0].description}
        />
        <p>{weather[0].description}</p>
      </div>
    </div>
  );
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);

  const search = async (e) => {
    if (e.key === "Enter") {
      const res = await fetchWeather(query);
      setWeather(res);
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />

      {weather?.main && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;
