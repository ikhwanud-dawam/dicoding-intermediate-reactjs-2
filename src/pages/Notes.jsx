import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContext";
import useNotes from "../hooks/useNotes";
import { getActiveNotes } from "../utils/network-data";

function Notes() {
  const { locale } = React.useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeNotes, isLoading] = useNotes(() => getActiveNotes());
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  const loadingMessages = {
    id: "Memuat catatan...",
    en: "Fetching notes...",
  };

  function onKeywordChange(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const notes = activeNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="homepage">
      <h2>{locale === "id" ? "Catatan Aktif" : "Active Note"}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChange} />
      {isLoading ? loadingMessages[locale] : <NotesList notes={notes} />}
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

export default Notes;
