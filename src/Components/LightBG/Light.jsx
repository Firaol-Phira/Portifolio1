import React, { useEffect, useState } from "react";
import "./Light.css";

 function ThemeToggle() {
  // Default is dark mode (false)
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    
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
        <i className="bi bi-moon-fill toggle-icon"></i>
      ) : (
        <i className="bi bi-sun-fill toggle-icon"></i>
      )}
    </button>
  );
}
export default ThemeToggle;