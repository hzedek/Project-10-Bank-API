import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Slice/loginSlice";

function Button({hasToken, userName }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
      dispatch(logout());
      navigate("/");
    };
  if (hasToken) {
    return (
      <>
        <div className="main-nav-item">
          <Link to="/UserProfile">
            <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
        </div>
        <div className="main-nav-item" onClick={handleLogout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
        </div>
      </>
    );
  } else {
    return (
      <div className="main-nav-item">
        <Link to="/SignUp">
          <i className="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    );
  }
}

export default Button;
