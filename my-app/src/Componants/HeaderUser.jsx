import logo from "../asset/argentBankLogo.png";
import { Link } from "react-router-dom";
import "../style/main.css"

function HeaderUser() {
  return (
    <nav className="main-nav">
     <Link to={"/"}>
          <img
            className="main-nav-logo-image"
            src={logo}
            alt="Argent Bank Logo"
          />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
    <div>
      <div className="main-nav-item">
      <Link to={"/UserProfile"}>
        <i className="fa fa-user-circle"></i>
        Tony
        </Link>
      </div>
      <div className="main-nav-item" >
      <Link to={"/"}>
        <i className="fa fa-sign-out"></i>
        Sign Out
        </Link>
      </div>
    </div>
  </nav>
  );
}

export default HeaderUser;
