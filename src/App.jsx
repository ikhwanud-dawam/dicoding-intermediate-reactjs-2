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
import { LocaleProvider } from "./contexts/LocaleContext";
import ThemeToggle from "./components/ThemeToggle";
import LocaleToggle from "./components/LocaleToggle";

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);
  const [initializing, setInitializing] = React.useState(true);
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );
  const [locale, setLocale] = React.useState(
    localStorage.getItem("locale") || "id"
  );

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
      setInitializing(false);
    });
  }, []);

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
      const newTheme = prevState === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  function toggleLocale() {
    setLocale((prevState) => {
      const newLocale = prevState === "id" ? "en" : "id";
      localStorage.setItem("locale", newLocale);
      return newLocale;
    });
  }

  const themeValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const localeValue = React.useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  if (initializing) {
    return null;
  }

  if (authedUser === null) {
    return (
      <ThemeProvider value={themeValue}>
        <LocaleProvider value={localeValue}>
          <div className="app-container">
            <header>
              <h1>
                <Link to={"/"}>
                  {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
                </Link>
              </h1>
              <LocaleToggle />
              <ThemeToggle />
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
        </LocaleProvider>
      </ThemeProvider>
    );
  }
  return (
    <ThemeProvider value={themeValue}>
      <LocaleProvider value={localeValue}>
        <div className="app-container">
          <header>
            <h1>
              <Link to={"/"}>
                {locale === "id" ? "Aplikasi Catatan" : "Notes App"}
              </Link>
            </h1>
            <Navigation />
            <LocaleToggle />
            <ThemeToggle />
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
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
