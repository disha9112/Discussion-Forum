import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../../components/SignUp/SignUp.component";
import LogIn from "../../components/LogIn/LogIn.component";
import "./Home.css";

function Home({ setToggleHeader }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/profile");
    }
  });

  return (
    <div className="auth-forms">
      <SignUp setToggleHeader={setToggleHeader} />
      <LogIn setToggleHeader={setToggleHeader} />
    </div>
  );
}

export default Home;
