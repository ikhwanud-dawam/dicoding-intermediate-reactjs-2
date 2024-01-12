import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { ThemeConsumer } from "../contexts/ThemeContext";

function Navigation({ logout, name }) {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to={"/archives"}>Arsip</Link>
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Navigation;
