import React from 'react';

/**
 * ErrorMessage Component - Displays an error message if something goes wrong.
 * @param {string} message - The error message to display.
 */
function ErrorMessage({ message }) {
  return <p className="text-red-500 text-lg text-center mt-4">{message}</p>;  // Show the error message with red styling
}

export default ErrorMessage;
