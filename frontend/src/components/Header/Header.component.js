import React from "react";
import { Link } from "react-router-dom";
import "./Header.styles.css";

function Header({ toggleHeader }) {
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
          <Link to="/" className="link">
            <li>Contact</li>
          </Link>
          {/* <li>Profile</li>
          <li>Ask</li>
          <li>Trending</li>
          <li>Log Out</li> */}
        </ul>
      </div>
    </div>
  );
}

export default Header;
