import React, { useState } from "react";
import validator from "validator";
import { useNavigate } from "react-router-dom";
import "./SignUp.styles.css";

function SignUp({ setToggleHeader }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfPasswordChange = (event) => {
    setConfPassword(event.target.value);
  };

  async function handleSignUpSubmit(event) {
    event.preventDefault();

    if (!validator.isEmail(email)) {
      alert("Invalid email address");
    } else if (!validator.isStrongPassword(password)) {
      alert(
        "Password is weak, it must have: min 8 characters, min 1 uppercase character, min 1 number, min 1 symbol"
      );
    } else {
      const response = await fetch("http://localhost:8000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.userExists) {
        alert(
          "Given credentials exist in database already, please try logging in"
        );
      } else {
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert("Sign up successful");
          setToggleHeader(true);
          navigate("/profile");
        } else {
          alert("There was an error, please try again");
        }
      }
    }
  }

  return (
    <div className="signup-body">
      <div className="signup-title">Sign Up</div>
      <form onSubmit={handleSignUpSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={handleNameChange}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          required
          value={confPassword}
          onChange={handleConfPasswordChange}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
