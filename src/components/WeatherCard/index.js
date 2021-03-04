import React from "react";
import { constants } from "../../utils";
import "./styles.css";

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

export default WeatherCard;
