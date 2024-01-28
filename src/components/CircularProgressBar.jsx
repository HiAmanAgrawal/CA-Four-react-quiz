import React from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ progress , isDarkMode }) => {
  const dashOffset = 283 - (283 * progress) / 100;

  return (
    <div className="circularProgressContainer">
      <svg className="circularProgress" viewBox="0 0 100 100">
        <circle className="progressBarBackground" cx="50" cy="50" r="40"></circle>
        <circle className="progressBar" cx="50" cy="50" r="40" style={{ strokeDashoffset: dashOffset }}></circle>
        <text x="50" y="50" textAnchor="middle" dy="7" className={isDarkMode ? "progressText" : "progressTextDark" }>{progress}%</text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
