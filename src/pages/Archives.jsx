import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import LocaleContext from "../contexts/LocaleContext";
import { getArchivedNotes } from "../utils/network-data";
import useNotes from "../hooks/useNotes";

function Archives() {
  const { locale } = React.useContext(LocaleContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [archivedNotes, isLoading] = useNotes(() => getArchivedNotes());
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });

  function onKeywordChange(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const loadingMessages = {
    id: "Memuat catatan...",
    en: "Fetching notes...",
  };

  const notes = archivedNotes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <section className="archives-page">
      <h2>{locale === "id" ? "Catatan Arsip" : "Archived Note"}</h2>
      <SearchBar keyword={keyword} keywordChange={onKeywordChange} />
      {isLoading ? loadingMessages[locale] : <NotesList notes={notes} />}
    </section>
  );
}

export default Archives;
