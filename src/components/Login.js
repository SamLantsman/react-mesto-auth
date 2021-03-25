import React from "react";
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
    e.preventDefault();
    props.handleSubmit({ password: password, email: email });
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
        <form noValidate onSubmit={handleSubmit}>
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
          <button className="login__button" type="submit">
            {props.button}
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
