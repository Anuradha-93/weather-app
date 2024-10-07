import React, { useState } from 'react';

const Search = ({ getWeather }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === '') return;
    getWeather(city);
    setCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search-input"
        aria-label="City Name"
      />
      <button type="submit" className="search-button">Get Weather</button>
    </form>
  );
};

export default Search;
