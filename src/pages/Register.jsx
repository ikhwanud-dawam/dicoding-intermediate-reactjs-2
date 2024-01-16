import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";
import LocaleContext from "../contexts/LocaleContext";

function Register() {
  const { locale } = React.useContext(LocaleContext);
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    if (user.password !== user.confirmPass) {
      alert("Password and password confirm must be same.");
    }

    const { error } = await register(user);
    if (!error) {
      navigate("/");
    }
  }

  return (
    <section className="register-page">
      <h2>
        {locale === "id"
          ? "Isi form untuk mendaftar akun."
          : "Fill the form to register account."}
      </h2>
      <RegisterInput register={onRegisterHandler} />
      <p>
        {locale === "id" ? "Sudah punya akun? " : "Already have an account? "}
        <Link to={"/login"}>
          {locale === "id" ? "Login di sini" : "Login here"}
        </Link>
      </p>
    </section>
  );
}

export default Register;
