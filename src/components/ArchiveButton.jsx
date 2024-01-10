import React from "react";
import PropTypes from "prop-types";
import { RiInboxArchiveLine, RiInboxUnarchiveLine } from "react-icons/ri";

function ArchiveButton({ id, isArchived, archiveNote, unarchiveNote }) {
  return (
    <button
      className="action"
      type="button"
      title={isArchived ? "Aktifkan" : "Arsipkan"}
      onClick={() => (isArchived ? unarchiveNote(id) : archiveNote(id))}
    >
      {isArchived ? <RiInboxUnarchiveLine /> : <RiInboxArchiveLine />}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  isArchived: PropTypes.bool.isRequired,
  archiveNote: PropTypes.func.isRequired,
  unarchiveNote: PropTypes.func.isRequired,
};

export default ArchiveButton;
