import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";

function AddNotes() {
  const navigate = useNavigate();

  function onAddNotesHandler(title, body) {
    navigate("/");
    addNote(title, body);
  }

  return (
    <section className="add-new-page">
      <NoteInput addNote={onAddNotesHandler} />
    </section>
  );
}

export default AddNotes;
