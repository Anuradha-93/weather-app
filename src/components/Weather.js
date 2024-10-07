// src/components/Weather.js

import React from 'react';

const Weather = ({ data }) => {
  if (!data) {
    return <div className="weather-container">No data to display</div>;
  }

  return (
    <div className="weather-container">
      <h2>{data.name}, {data.sys.country}</h2>
      <div className="weather-info">
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
        />
        <p>{Math.round(data.main.temp)}°C</p>
      </div>
      <p className="description">{data.weather[0].description}</p>
      <p>Humidity: {data.main.humidity}%</p>
      <p>Wind: {Math.round(data.wind.speed)} m/s</p>
    </div>
  );
};

export default Weather;
