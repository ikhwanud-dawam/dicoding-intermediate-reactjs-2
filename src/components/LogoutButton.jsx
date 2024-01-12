import React from "react";
import PropTypes from "prop-types";
import { FiLogOut } from "react-icons/fi";

function LogoutButton({ logout, name }) {
  return (
    <button onClick={logout} className="button-logout">
      <FiLogOut />
      {name}
    </button>
  );
}

LogoutButton.propTypes = {
  name: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default LogoutButton;
