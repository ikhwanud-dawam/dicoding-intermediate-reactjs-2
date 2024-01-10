import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import PropTypes from "prop-types";
import { getActiveNotes } from "../utils/local-data";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";

function NotesWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return <Notes defaultKeyword={keyword} keywordChange={changeSearchParams} />;
}

class Notes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeNotes: getActiveNotes(),
      keyword: props.defaultKeyword || "",
    };

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
  }

  onKeywordChangeHandler(keyword) {
    this.setState(() => {
      return {
        keyword,
      };
    });

    this.props.keywordChange(keyword);
  }

  render() {
    const notes = this.state.activeNotes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="homepage">
        <h2>Catatan Aktif</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesList notes={notes} />
        <div className="homepage__action">
          <Link to="/notes/new">
            <button className="action" type="button" title="Tambah">
              <FaPlus />
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

Notes.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default NotesWrapper;
