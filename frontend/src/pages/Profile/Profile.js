import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavCard from "../../components/NavCard/NavCard.component";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  let navCardInfo = [
    {
      url: "/ask",
      title: "ASK",
      description: "Fire your doubts and start a discussion.",
    },
    {
      url: "/trending",
      title: "TRENDING",
      description: "Check out questions trending on the forum.",
    },
    {
      url: "/questions",
      title: "YOUR QUESTIONS",
      description: "Find your past questions.",
    },
    {
      url: "/replies",
      title: "YOUR REPLIES",
      description: "See your replies on past questions.",
    },
  ];

  const navCardList = navCardInfo.map((navCard, idx) => {
    return (
      <NavCard
        key={idx}
        url={navCard.url}
        title={navCard.title}
        description={navCard.description}
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
