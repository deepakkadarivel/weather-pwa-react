import React, { Suspense, useState, lazy } from "react";
import { fetchWeather } from "./api";
import "./App.css";
const WeatherCard = lazy(() => import("./components/WeatherCard"));

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
      <label className="search-label" htmlFor="search">
        Search by city
      </label>
      <input
        id="search"
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      <Suspense fallback="Loading ...">
        {weather?.main && <WeatherCard data={weather} />}
      </Suspense>
    </div>
  );
};

export default App;
