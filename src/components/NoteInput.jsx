import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";

function NoteInput({ addNote }) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  function onTitleChangeEventHandler(event) {
    setTitle(event.target.value);
  }

  function onBodyInputEventHandler(event) {
    setBody(event.target.innerHTML);
  }

  function onSubmitChangeEventHandler(event) {
    event.preventDefault();
    addNote({ title, body });
  }

  return (
    <form className="note-input" onSubmit={onSubmitChangeEventHandler}>
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          type="text"
          placeholder="Masukkan judul note"
          value={title}
          onChange={onTitleChangeEventHandler}
        />
        <div
          className="add-new-page__input__body"
          data-placeholder="Masukkan isi note yaa ..."
          contentEditable
          onInput={onBodyInputEventHandler}
        />
      </div>
      <div className="add-new-page__action">
        <button className="action" type="submit" title="Simpan">
          <FaCheck />
        </button>
      </div>
    </form>
  );
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
