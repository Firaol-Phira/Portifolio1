import React, { useEffect, useState } from "react";
import "./Light.css";

 function ThemeToggle() {
  // Default is dark mode (false)
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    // Check if user previously preferred light mode
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsLight(true);
      document.documentElement.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    if (isLight) {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      setIsLight(false);
    } else {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
      setIsLight(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle brightness mode"
    >
      {isLight ? (
        // Moon Icon (Shows when in light mode so user can go back dark)
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="toggle-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </svg>
      ) : (
        // Sun Icon (Shows when in dark mode so user can go light)
        <svg
          xmlns="http://w3.org"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="toggle-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m0 13.5V21M4.22 4.22l1.58 1.58m12.42 12.42l1.58 1.58M3 12h2.25m13.5 0H21m-16.78 4.78l1.58-1.58M18.36 5.64l1.58-1.58M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
          />
        </svg>
      )}
    </button>
  );
}
export default ThemeToggle;