import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from "../utils";
import DetailPageAction from "./NotesItemAction";
import parse from "html-react-parser";

function NoteDetails({
  id,
  title,
  createdAt,
  body,
  archived,
  archiveNote,
  unarchiveNote,
  deleteNote,
}) {
  return (
    <>
      <h3 className="detail-page__title">{title}</h3>
      <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
      <div className="detail-page__body">{parse(body)}</div>
      <DetailPageAction
        id={id}
        isArchived={archived}
        archiveNote={archiveNote}
        unarchiveNote={unarchiveNote}
        deleteNote={deleteNote}
      />
    </>
  );
}

NoteDetails.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteDetails;
