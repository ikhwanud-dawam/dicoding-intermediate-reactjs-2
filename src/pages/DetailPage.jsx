import React from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteDetails from "../components/NoteDetails";
import NotFound from "../components/NotFound";
import { archiveNote, unarchiveNote, deleteNote } from "../utils/local-data";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: getNote(props.id),
    };
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.onUnarchiveNoteHandler = this.onUnarchiveNoteHandler.bind(this);
  }

  onDeleteNoteHandler(id) {
    deleteNote(id);
    this.props.navigate("/");
  }

  onArchiveNoteHandler(id) {
    archiveNote(id);
    this.props.navigate("/");
  }

  onUnarchiveNoteHandler(id) {
    unarchiveNote(id);
    this.props.navigate("/");
  }

  render() {
    if (this.state.note === undefined) {
      return <NotFound />;
    }

    return (
      <section className="detail-page">
        <NoteDetails
          {...this.state.note}
          archiveNote={this.onArchiveNoteHandler}
          unarchiveNote={this.onUnarchiveNoteHandler}
          deleteNote={this.onDeleteNoteHandler}
        />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
