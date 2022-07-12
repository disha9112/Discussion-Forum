import React from "react";
import { Link } from "react-router-dom";
import "./NavCard.styles.css";

function NavCard({ url, title, description }) {
  return (
    <div className="card-body">
      <Link to={url}>
        <div className="card-title">{title}</div>
      </Link>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default NavCard;
