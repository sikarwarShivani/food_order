import React, { useState } from "react";
import "./Login.css";
import { FaGooglePlus } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Login = () => {
  // State variables to store input values and error messages
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate email
    if (!email) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }

    // If both fields are valid, proceed with form submission
    if (email && password) {
      console.log({
        email,
        password,
      });
    }
  };

  return (
    <div className="login">
      <div className="Second_div">
        <div className="header_login">
          <h1>Sign in</h1>
        </div>
        <div className="input_div">
          <input
            placeholder="Email"
            type="text"
            className={`text_input ${emailError && "error"}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <input
            placeholder="Password"
            type="password"
            className={`text_input ${passwordError && "error"}`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
        </div>
        <p className="pera-graph">Forgot password</p>

        <div className="login_btn">
          <button type="submit" className="log-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>

        <div className="icon_div">
          <label>or sign in with</label>
          <div className="Login-icon">
            <FaGooglePlus />
            <FaApple />
            <FaGooglePlus />
          </div>
        </div>
        <p className="last-con">Learn user licence agreement</p>
      </div>
    </div>
  );
};

export default Login;