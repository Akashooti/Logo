// src/Weather.js
import React, { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    if (!city) return;

    const apiKey = 'TFGRXQFFYYBVQ7KK4BC9ELPLK'; // Replace with your actual API key
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey}&contentType=json`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data && data.currentConditions) {
        setWeather(data.currentConditions);
        setError('');
      } else {
        setWeather(null);
        setError('No data found for this city.');
      }
    } catch (err) {
      setWeather(null);
      setError('Failed to fetch weather data.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12">
      <h1 className="text-4xl font-bold mb-6">Weather Information</h1>
      <div className="max-w-md w-full px-6 py-4 bg-white rounded-lg shadow-lg">
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Enter city name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {weather && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">{city}</h2>
            <p className="text-lg">Weather: {weather.conditions}</p>
            <p className="text-lg">Temperature: {weather.temp}°C</p>
            <p className="text-lg">Humidity: {weather.humidity}%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
