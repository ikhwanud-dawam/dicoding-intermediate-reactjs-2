import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import { login } from "../utils/network-data";

function Login({ loginSuccess }) {
  async function onLoginHandler({ email, password }) {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <section className="Login-page">
      <h2>Yuk, login untuk menggunakan aplikasi.</h2>
      <LoginInput login={onLoginHandler} />
      <p>
        Belum punya akun? <Link to={"/register"}>Daftar di sini</Link>
      </p>
    </section>
  );
}

Login.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default Login;
