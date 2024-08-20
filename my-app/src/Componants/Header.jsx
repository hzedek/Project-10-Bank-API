import logo from "../asset/argentBankLogo.png";
import { Link } from "react-router-dom";
import "../style/main.css"
import Button from "./Button";


function Header({ userName }) {

  const token = localStorage.getItem('token');  
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
        <Button hasToken={!!token} userName={userName}/>
      </div>
    </nav>
  );
}

export default Header;
