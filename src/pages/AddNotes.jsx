import React from "react";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/network-data";
import NoteInput from "../components/NoteInput";

function AddNotes() {
  const navigate = useNavigate();

  async function onAddNotesHandler(title, body) {
    const { error } = await addNote(title, body);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="add-new-page">
      <NoteInput addNote={onAddNotesHandler} />
    </section>
  );
}

export default AddNotes;
