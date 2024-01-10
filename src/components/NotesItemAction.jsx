import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function DetailPageAction({
  id,
  archiveNote,
  unarchiveNote,
  deleteNote,
  isArchived,
}) {
  return (
    <div className="detail-page__action">
      <ArchiveButton
        id={id}
        archiveNote={archiveNote}
        unarchiveNote={unarchiveNote}
        isArchived={isArchived}
      />
      <DeleteButton id={id} deleteNote={deleteNote} />
    </div>
  );
}

DetailPageAction.propTypes = {
  id: PropTypes.string.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  isArchived: PropTypes.bool.isRequired,
};

export default DetailPageAction;
