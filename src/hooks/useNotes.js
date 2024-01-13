import React from "react";
import { getActiveNotes } from "../utils/network-data";

function useNotes() {
  const [isLoading, setLoading] = React.useState(true);
  const [activeNotes, setActiveNotes] = React.useState([]);

  React.useEffect(() => {
    getActiveNotes().then(({ error, data }) => {
      !error ? setActiveNotes(data) : alert("Sistem sedang error");
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, []);

  return [activeNotes, isLoading];
}

export default useNotes;