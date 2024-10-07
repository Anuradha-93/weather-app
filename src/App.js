// src/App.js

import React, { useState } from 'react';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeather = async (city) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${API_KEY}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('City not found');
        } else {
          throw new Error('An error occurred while fetching data');
        }
      }

      const data = await response.json();
      setWeatherData(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <Search getWeather={getWeather} />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      <Weather data={weatherData} />
    </div>
  );
}

export default App;
