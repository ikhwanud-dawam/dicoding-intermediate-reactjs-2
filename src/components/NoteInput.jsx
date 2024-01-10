import React from "react";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa6";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyInputEventHandler = this.onBodyInputEventHandler.bind(this);
    this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyInputEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.innerHTML,
      };
    });
  }

  onSubmitChangeEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className="note-input" onSubmit={this.onSubmitChangeEventHandler}>
        <div className="add-new-page__input">
          <input
            className="add-new-page__input__title"
            type="text"
            placeholder="Masukkan judul note"
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <div
            className="add-new-page__input__body"
            data-placeholder="Masukkan isi note yaa ..."
            contentEditable
            onInput={this.onBodyInputEventHandler}
          />
        </div>
        <div className="add-new-page__action">
          <button className="action" type="submit" title="Simpan">
            <FaCheck />
          </button>
        </div>
      </form>
    );
  }
}

NoteInput.propTypes = {
  addNote: PropTypes.func.isRequired,
};

export default NoteInput;
