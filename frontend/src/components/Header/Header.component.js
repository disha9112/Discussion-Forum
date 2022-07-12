import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";

function Header({ toggleHeader, setToggleHeader }) {
  async function handleLogOutClick() {
    setToggleHeader(false);
    localStorage.removeItem("token");
  }

  if (toggleHeader) {
    return (
      <div className="header-body">
        <div className="header-content">
          <Link className="link" to="/">
            <div className="header-brand">Discussion Forum</div>
          </Link>
          <ul className="header-links">
            <Link className="link" to="/profile">
              <li>Profile</li>
            </Link>
            <Link className="link" to="/ask">
              <li>Ask</li>
            </Link>
            <Link to="/trending" className="link">
              <li>Trending</li>
            </Link>
            <Link onClick={() => handleLogOutClick()} className="link" to="/">
              <li>Log Out</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="header-body">
        <div className="header-content">
          <Link className="link" to="/">
            <div className="header-brand">Discussion Forum</div>
          </Link>
          <ul className="header-links">
            <Link className="link" to="/">
              <li>About Us</li>
            </Link>
            <Link className="link" to="/">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
