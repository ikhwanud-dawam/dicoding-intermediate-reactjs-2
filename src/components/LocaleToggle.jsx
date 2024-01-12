import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeConsumer } from "../contexts/ThemeContext";

function LocaleToggle() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => {
        return (
          <button onClick={toggleTheme} className="toggle-locale">
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
        );
      }}
    </ThemeConsumer>
  );
}

export default LocaleToggle;
