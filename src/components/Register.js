import React from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./Header";

function Register(props) {
  const history = useHistory();

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
    history.push("/signin");
  }
  return (
    <>
      <Header button="Войти" onClick={handleRedirect} />
      <div className="register">
        <form noValidate onSubmit={handleSubmit}>
          <h3 className="register__heading">{props.title}</h3>
          <input
            type="text"
            placeholder="Email"
            className="register__email"
            onChange={handleEmailChange}
            defaultValue=""
            required
          />
          <input
            type="text"
            placeholder="Пароль"
            className="register__pswrd"
            onChange={handlePasswordChange}
            defaultValue=""
            required
          />
          <button className="register__button" type="submit">
            {props.button}
          </button>
        </form>
      </div>
      <div className="register">
        <Link to="/signin" className="register__link">
          Уже зарегистрированы? Войти
        </Link>
      </div>
    </>
  );
}

export default Register;
