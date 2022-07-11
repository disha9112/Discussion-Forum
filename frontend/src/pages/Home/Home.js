import React from "react";
import Signup from "../../components/Signup/Signup.component";
import Login from "../../components/Login/Login.component";
import "./Home.css";

function Home() {
  return (
    <div className="auth-forms">
      <Signup />
      <Login />
    </div>
  );
}

export default Home;
