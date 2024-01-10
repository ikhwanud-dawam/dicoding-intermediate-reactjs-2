import React from "react";
import PropTypes from "prop-types";
import { RiDeleteBin6Line } from "react-icons/ri";

function DeleteButton({ id, deleteNote }) {
  return (
    <button
      className="action"
      title="Hapus"
      type="button"
      onClick={() => deleteNote(id)}
    >
      <RiDeleteBin6Line />
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default DeleteButton;
