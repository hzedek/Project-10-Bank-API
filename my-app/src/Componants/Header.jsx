import logo from "../asset/argentBankLogo.png";
import { Link } from "react-router-dom";
import "../style/main.css"

function Header() {
  return (
    <nav className="main-nav">
      <div className="main-nav-logo">
        <Link to={"/"}>
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
      </div>
      <div className="main-nav-item">
        <Link to={"/SignUp"}>
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Header;
