import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPass, onConfirmPassChange] = useInput("");

  function onSubmitHandler(event) {
    event.preventDefault();

    register({
      name,
      email,
      password,
      confirmPass,
    });
  }

  return (
    <form className="register-input" onSubmit={onSubmitHandler}>
      <div className="input-register">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={onEmailChange}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={onPasswordChange}
          autoComplete="current-password"
        ></input>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPass}
          onChange={onConfirmPassChange}
        ></input>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
