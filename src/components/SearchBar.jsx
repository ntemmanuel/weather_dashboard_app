import React, { useState } from 'react';

/**
 * SearchBar Component - Allows users to enter a city name and trigger a search.
 * @param {function} onSearch - Callback function to handle the search when the form is submitted.
 */
function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');  // State to manage the input field value

  /**
   * Handles the form submission and triggers the search callback.
   * @param {object} e - The event object from form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();  // Prevent the form from reloading the page
    if (input.trim()) {  // Check if input is not empty or just spaces
      onSearch(input);   // Call the onSearch function passed from parent with the input value
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center items-center mb-6">
      <input
        type="text"
        className="p-3 w-full max-w-xs border-2 border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        value={input}  // Controlled input, linked to state
        onChange={(e) => setInput(e.target.value)}  // Update state on input change
        placeholder="Enter city name"
      />
      <button
        type="submit"
        className="ml-4 p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
