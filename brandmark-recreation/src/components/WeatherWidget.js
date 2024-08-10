import React, { useState, useEffect } from 'react';

function WeatherWidget() {
  const [city, setCity] = useState('Bengaluru'); // Default city
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError('');
      const apiKey = 'TFGRXQFFYYBVQ7KK4BC9ELPLK'; // Replace with your API key
      const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/India?unitGroup=us&key=TFGRXQFFYYBVQ7KK4BC9ELPLK&contentType=json";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        setWeather({
          description: data.currentConditions.conditions,
          temp: data.currentConditions.temp,
          city: data.address
        });
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          className="p-2 border border-gray-300 rounded"
        />
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {weather && (
        <div>
          <p className="text-lg font-semibold">Weather in {weather.city}:</p>
          <p>{weather.description}</p>
          <p>Temperature: {weather.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default WeatherWidget;
