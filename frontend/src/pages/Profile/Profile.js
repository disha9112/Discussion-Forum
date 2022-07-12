import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavCard from "../../components/NavCard/NavCard.component";
import ask from "../../assets/ask.png";
import trending from "../../assets/trending.png";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  let navCardInfo = [
    {
      image: ask,
      url: "/ask",
      title: "ASK",
      description: "Fire your doubts and start a discussion.",
    },
    {
      image: trending,
      url: "/trending",
      title: "TRENDING",
      description: "Check out questions trending on the forum.",
    },
  ];

  const navCardList = navCardInfo.map((navCard, idx) => {
    return (
      <NavCard
        key={idx}
        url={navCard.url}
        title={navCard.title}
        description={navCard.description}
        image={navCard.image}
      />
    );
  });

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  return <div className="profile-body">{navCardList}</div>;
}

export default Profile;
