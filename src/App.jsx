import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import ErrorMessage from './components/ErrorMessage';

/**
 * Main App Component - Handles state management and API calls.
 */
const API_KEY = 'f797cbaf4433ac212bcac7036fb40d2b';  // Store the API key 

function App() {
  // State variables to manage the city input, fetched weather data, loading state, and error state
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  /**
   * Fetches weather data for a given city from the OpenWeatherMap API.
   * @param {string} cityName - The name of the city to fetch weather data for.
   */
  const fetchWeatherData = async (cityName) => {
    setLoading(true);  // Show loading indicator while fetching data
    setError('');      // Clear any previous errors
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      setWeatherData(response.data);  // Save fetched data in state
    } catch (err) {
      // Handle specific errors, such as invalid API key or city not found
      if (err.response && err.response.status === 401) {
        setError('Invalid API key. Please check your API key and try again.');
      } else {
        setError('City not found or network error.');
      }
    } finally {
      setLoading(false);  // Stop showing the loader once request completes
    }
  };

  /**
   * Handles the city search from the SearchBar component.
   * @param {string} cityName - The city name submitted by the user.
   */
  const handleSearch = (cityName) => {
    setCity(cityName);       // Update the city state with user input
    fetchWeatherData(cityName);  // Fetch weather data for the entered city
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-white mb-8 text-center">Weather Dashboard</h1>
      <div className="w-full max-w-screen-lg bg-white p-8 rounded-lg shadow-lg">
        <SearchBar onSearch={handleSearch} />  {/* Render the SearchBar for user input */}
        
        {/* Show loading state, error message, or weather data based on the state */}
        {loading ? (
          <p className="text-xl mt-4 text-center">Loading...</p>
        ) : error ? (
          <ErrorMessage message={error} />
        ) : (
          weatherData && <WeatherCard weatherData={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;
