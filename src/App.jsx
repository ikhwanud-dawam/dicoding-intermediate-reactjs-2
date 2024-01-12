import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Notes from "./pages/Notes";
import Archives from "./pages/Archives";
import DetailPage from "./pages/DetailPage";
import AddNotes from "./pages/AddNotes";
import NotFound from "./components/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { getUserLogged, putAccessToken } from "./utils/network-data";

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  });

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <div className="app-container">
        <header>
          <h1>
            <Link to={"/"}>Aplikasi Catatan</Link>
          </h1>
        </header>
        <main>
          <Routes>
            <Route
              path="/*"
              element={<Login loginSuccess={onLoginSuccess} />}
            ></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </main>
      </div>
    );
  }
  return (
    <div className="app-container">
      <header>
        <h1>
          <Link to={"/"}>Aplikasi Catatan</Link>
        </h1>
        <Navigation name={authedUser.name} logout={onLogout} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Notes />}></Route>
          <Route path="/archives" element={<Archives />}></Route>
          <Route path="/notes/new" element={<AddNotes />}></Route>
          <Route path="/notes/:id" element={<DetailPage />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
