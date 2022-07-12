import React from "react";
import { Link } from "react-router-dom";
import "./NavCard.styles.css";

function NavCard({ url, title, description, image }) {
  return (
    <div className="card-body">
      <img src={image} width={450} />
      <Link to={url}>
        <div className="card-title">{title}</div>
      </Link>
      <div className="card-description">{description}</div>
    </div>
  );
}

export default NavCard;
