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
import LogoutButton from "./components/LogoutButton";
import { getUserLogged, putAccessToken } from "./utils/network-data";
import { ThemeProvider } from "./contexts/ThemeContext";
import LocaleToggle from "./components/LocaleToggle";

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  });

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);

    const { data } = await getUserLogged();
    setAuthedUser(data);
  }

  function onLogout() {
    setAuthedUser(null);
    putAccessToken("");
  }

  function toggleTheme() {
    setTheme((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
  }

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={{ theme, toggleTheme }}>
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
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="app-container">
        <header>
          <h1>
            <Link to={"/"}>Aplikasi Catatan</Link>
          </h1>
          <Navigation />
          <LocaleToggle />
          <LogoutButton name={authedUser.name} logout={onLogout} />
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
    </ThemeProvider>
  );
}

export default App;
