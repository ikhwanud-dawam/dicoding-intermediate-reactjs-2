import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteDetails from "../components/NoteDetails";
import NotFound from "../components/NotFound";
import { archiveNote, unarchiveNote, deleteNote } from "../utils/local-data";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = React.useState([]);

  React.useState(() => {
    setNote(getNote(id));
  }, []);

  function onDeleteNoteHandler(id) {
    deleteNote(id);
    navigate("/");
  }

  function onArchiveNoteHandler(id) {
    archiveNote(id);
    navigate("/");
  }

  function onUnarchiveNoteHandler(id) {
    unarchiveNote(id);
    navigate("/");
  }

  if (note === undefined) {
    return <NotFound />;
  }

  return (
    <section className="detail-page">
      <NoteDetails
        {...note}
        archiveNote={onArchiveNoteHandler}
        unarchiveNote={onUnarchiveNoteHandler}
        deleteNote={onDeleteNoteHandler}
      />
    </section>
  );
}

export default DetailPage;
