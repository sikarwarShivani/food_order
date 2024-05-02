import React from "react";
import "./Login.css";
import { FaGooglePlus } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login">
      <div className="Second_div">
        <div className="header_login">
          <h1>Singin</h1>
        </div>
        <div className="input_div">
          <input placeholder="Email" type="text" className="text_input" />
          <input
            placeholder="Password"
            type="password"
            className="text_input"
          />
        </div>
        <p className="pera-graph">Forgot password</p>
        <button className="btn_sub">Submit</button>
        <p>or sing in with</p>
        <div className="icon_div">
          <FaGooglePlus />
          <FaApple />
          <FaGooglePlus />
        </div>
        <p>Learn user licence agreement</p>
      </div>
    </div>
  );
};

export default Login;
