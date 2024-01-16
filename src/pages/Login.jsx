import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../contexts/LocaleContext";

function Login({ loginSuccess }) {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();

  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }

    navigate("/");
  }

  return (
    <section className="Login-page">
      <h2>
        {locale === "id"
          ? "Yuk, login untuk menggunakan aplikasi."
          : "Login to use app, please."}
      </h2>
      <LoginInput login={onLoginHandler} />
      <p>
        {locale === "id" ? "Belum punya akun? " : "Don't have an account? "}
        <Link to={"/register"}>
          {locale === "id" ? "Daftar di sini" : "Register here"}
        </Link>
      </p>
    </section>
  );
}

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default Login;
