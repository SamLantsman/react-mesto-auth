import React from "react";
import { Link, useHistory } from "react-router-dom";
import * as auth from "../utils/auth";
import Header from "./Header";
import InfoToolTip from "./InfoToolTip";
import successSign from "../images/info-tool-tip__success.png";
import failSign from "../images/info-tool-tip__fail.png";

function Register(props) {
  let history = useHistory();

  const [email, setEmail] = React.useState("");

  const [isInfoToolTipPopupOpen, setIsInfoToolTopPopupOpen] = React.useState(
    false
  );

  const [isRegistered, setIsRegistered] = React.useState(false);

  const [password, setPassword] = React.useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function closeRegistrationPopup() {
    setIsInfoToolTopPopupOpen(false);
    if (isRegistered) {
      history.push("/signin");
    }
    setPassword("");
    setEmail("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.register(password, email).then((res) => {
      if (res) {
        setIsRegistered(true);
        setIsInfoToolTopPopupOpen(true);
      } else {
        setIsInfoToolTopPopupOpen(true);
        return {
          message: "Что-то пошло не так!",
        };
      }
    });
  }

  function handleRedirect() {
    history.push("/signin");
  }
  return (
    <>
      <Header button="Войти" onClick={handleRedirect} />
      <div className="register">
        <form noValidate>
          <h3 className="register__heading">{props.title}</h3>
          <input
            type="text"
            placeholder="Email"
            className="register__email"
            onChange={handleEmailChange}
            value={email}
            required
          />
          <input
            type="text"
            placeholder="Пароль"
            className="register__pswrd"
            onChange={handlePasswordChange}
            value={password}
            required
          />
          <button
            className="register__button"
            type="submit"
            onClick={handleSubmit}
          >
            {props.button}
          </button>
        </form>
      </div>
      <div className="register">
        <Link to="/signin" className="register__link">
          Уже зарегистрированы? Войти
        </Link>
      </div>
      <InfoToolTip
        isOpen={isInfoToolTipPopupOpen}
        title={
          isRegistered
            ? "Вы успешно зарегистрировались!"
            : "Что-то пошло не так! Попробуйте еще раз."
        }
        src={isRegistered ? successSign : failSign}
        name="success"
        onClose={closeRegistrationPopup}
      />
    </>
  );
}

export default Register;
