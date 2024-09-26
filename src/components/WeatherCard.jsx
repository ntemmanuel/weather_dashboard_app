import React from 'react';

/**
 * WeatherCard Component - Displays the weather data.
 * @param {object} weatherData - The weather data object from the API.
 */
function WeatherCard({ weatherData }) {
  // Destructure required data from the weatherData prop
  const { name, main, wind, weather } = weatherData;

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-400 p-6 rounded-lg shadow-lg text-white w-full text-center">
      <h2 className="text-3xl font-bold mb-4">{name}</h2>  {/* City name */}
      <div className="flex flex-col sm:flex-row justify-around items-center">
        <div className="mb-4 sm:mb-0">
          {/* Display temperature, humidity, and wind speed */}
          <p className="text-xl">Temperature: {main.temp}°C</p>
          <p className="text-xl">Humidity: {main.humidity}%</p>
          <p className="text-xl">Wind Speed: {wind.speed} km/h</p>
        </div>
        <div>
          {/* Display weather icon and description */}
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt="weather icon"
            className="w-24 h-24"
          />
          <p className="text-xl capitalize">{weather[0].description}</p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
