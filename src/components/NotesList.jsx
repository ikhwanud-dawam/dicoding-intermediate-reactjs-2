import React from "react";
import NotesItem from "./NotesItem.jsx";
import LocaleContext from "../contexts/LocaleContext.js";
import PropTypes from "prop-types";

function NotesList({ notes }) {
  const { locale } = React.useContext(LocaleContext);

  if (!notes.length) {
    return (
      <section className="notes-list-empty">
        <p>{locale === "id" ? "Tidak ada catatan 😸" : "No notes 😸"}</p>
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
