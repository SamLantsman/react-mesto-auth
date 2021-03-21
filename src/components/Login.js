import React from "react";
import * as auth from "../utils/auth";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function Login(props) {
  let history = useHistory();

  const [email, setEmail] = React.useState("");

  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    console.log("хуй");
    e.preventDefault();
    auth
      .authorize(password, email)
      .then((data) => {
        if (data.token) {
          props.handleLogin(email);
          history.push("/main");
          setEmail("");
          setPassword("");
        }
      })
      .catch((err) => console.log(err));
  }

  function handleRedirect() {
    history.push("/signup");
  }

  return (
    <>
      <Header
        button="Регистрация"
        onClick={handleRedirect}
        email={props.email}
      />
      <div className="login">
        <form noValidate>
          <h3 className="login__heading">{props.title}</h3>
          <input
            type="text"
            placeholder="Email"
            className="login__email"
            onChange={handleEmailChange}
            required
          />
          <input
            type="text"
            placeholder="Пароль"
            className="login__pswrd"
            onChange={handlePasswordChange}
            required
          />
          <button
            className="login__button"
            type="submit"
            onClick={handleSubmit}
          >
            {props.button}
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
