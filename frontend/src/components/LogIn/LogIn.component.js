import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.styles.css";

function LogIn({ setToggleHeader }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  async function handleLogInSubmit(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.userExists === false) {
      alert("Given credentials don't exist in database, please try signing up");
    } else {
      if (!data.isPasswordValid) {
        alert("Incorrect password, please try again");
      } else {
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert("Log in successful");
          setToggleHeader(true);
          navigate("/profile");
        } else {
          alert("Please check the data entered");
        }
      }
    }
  }

  return (
    <div className="login-body">
      <div className="login-title">Log In</div>
      <form onSubmit={handleLogInSubmit}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default LogIn;
