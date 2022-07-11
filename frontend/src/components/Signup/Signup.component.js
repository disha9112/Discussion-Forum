import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.styles.css";

function Signup() {
  const navigate = useNavigate();

  var mailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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

    if (password !== confPassword) {
      alert("Passwords don't match, please try again");
    } else if (!email.match(mailFormat)) {
      alert("Enter a valid email address");
    } else if (password.length <= 5) {
      alert("Enter a strong password with more than 5 characters");
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
          // navigate("/profile");
        } else {
          alert("Please check the data entered");
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

export default Signup;
