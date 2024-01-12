import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function Navigation({ logout, name }) {
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <Link to={"/archives"}>Arsip</Link>
          </li>
        </ul>
      </nav>
      <button onClick={logout} className="button-logout">
        <FiLogOut />
        {name}
      </button>
    </>
  );
}

Navigation.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Navigation;
