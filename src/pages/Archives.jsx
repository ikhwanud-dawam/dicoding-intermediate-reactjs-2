import React from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";
import { getArchivedNotes } from "../utils/local-data";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";

function ArchivesWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("keyword");
  function changeSearchParams(keyword) {
    setSearchParams({ keyword });
  }

  return (
    <Archives defaultKeyword={keyword} keywordChange={changeSearchParams} />
  );
}
class Archives extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      archivedNotes: getArchivedNotes(),
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
    const notes = this.state.archivedNotes.filter((note) => {
      return note.title
        .toLowerCase()
        .includes(this.state.keyword.toLowerCase());
    });

    return (
      <section className="archives-page">
        <h2>Catatan Arsip</h2>
        <SearchBar
          keyword={this.state.keyword}
          keywordChange={this.onKeywordChangeHandler}
        />
        <NotesList notes={notes} />
      </section>
    );
  }
}

Archives.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
};

export default ArchivesWrapper;
