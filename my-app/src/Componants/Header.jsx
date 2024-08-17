import logo from "../asset/argentBankLogo.png"
import { Link } from "react-router-dom";


    
    function Header() {
        return (
            <nav className="main-nav">
      <div className="main-nav-logo">
      <Link to={'SignUp'}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
      </div>
      <div>
        <a className="main-nav-item" href="../Pages/sign-in.html">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
        );
      }
      
      export default Header;