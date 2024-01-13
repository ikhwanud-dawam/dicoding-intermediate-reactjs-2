import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../contexts/ThemeContext";

function ThemeToggle() {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} className="toggle-theme">
      {theme === "light" ? <FaMoon /> : <FaSun />}
    </button>
  );
}

export default ThemeToggle;
