import React from "react";

function useNotes(getNotes) {
  const [isLoading, setLoading] = React.useState(true);
  const [notes, setNotes] = React.useState([]);

  React.useEffect(() => {
    getNotes().then(({ error, data }) => {
      !error ? setNotes(data) : alert("Sistem sedang error");
      setLoading(false);
    });

    return () => {
      setLoading(true);
    };
  }, []);

  return [notes, isLoading];
}

export default useNotes;