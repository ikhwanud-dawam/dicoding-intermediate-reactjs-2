import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getNote,
  archiveNote,
  unarchiveNote,
  deleteNote,
} from "../utils/network-data";
import NoteDetails from "../components/NoteDetails";
import NotFound from "../components/NotFound";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setLoading] = React.useState(true);
  const [note, setNote] = React.useState(null);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);

      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, [id]);

  async function onDeleteNoteHandler(id) {
    await deleteNote(id);
    navigate("/");
  }

  async function onArchiveNoteHandler(id) {
    await archiveNote(id);
    navigate("/");
  }

  async function onUnarchiveNoteHandler(id) {
    await unarchiveNote(id);
    navigate("/");
  }

  if (isLoading) return null;

  if (note === null) return <NotFound />;

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
