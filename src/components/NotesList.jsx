import React from "react";
import NotesItem from "./NotesItem.jsx";
import PropTypes from "prop-types";

function NotesList({ notes }) {
  if (!notes.length) {
    return (
      <section className="notes-list-empty">
        <p>Tidak ada catatan 😸</p>
      </section>
    );
  }

  return (
    <section className="notes-list">
      {notes.map((note) => {
        return <NotesItem key={note.id} {...note} />;
      })}
    </section>
  );
}

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NotesList;
