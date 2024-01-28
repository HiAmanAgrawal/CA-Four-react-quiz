import { useState } from 'react';

export default function DarkMode({ onDarkModeToggle }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    onDarkModeToggle(!isDarkMode);
    console.log(`Dark mode is on: ${isDarkMode}`);
  };

  return (
    <div>
    <button
      onClick={toggleDarkMode}
      className="darkModeBtn  btn"
      style={{ backgroundColor: isDarkMode ? 'white' : '#FFEB9B' }}
  >
        <img src={isDarkMode ? "public/moon.png" : "public/sun.png"} alt="dark mode" width="40px" height="40px"/>
      </button>
    </div>
  );

}
