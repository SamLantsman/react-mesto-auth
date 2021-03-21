import "../index.css";
import logo from "../images/logo.svg";

function Header(props) {
  return (
    <header className="header">
      <img className="header__image" alt="логотип Mesto" src={logo} />
      <div className="header__info">
        <p className="header__email">{props.email}</p>
        <button
          className={`header__button header__button_${props.faded}`}
          type="button"
          onClick={props.onClick}
        >
          {props.button}
        </button>
      </div>
    </header>
  );
}

export default Header;
