import "../index.css";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__image" alt="логотип Mesto" src={logo} />
    </header>
  );
}

export default Header;
