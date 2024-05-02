import React from "react";
import "./Register.css";

const Register = () => {
   

  return (
    <div className="main">
      <div className="SecondMain">
        <div className="heading">
          <div className="rounded_dot"></div>
          <h1>Register</h1>
        </div>
        <div className="paragraph_text">
          <p>singup now and get full access our app</p>
        </div>
        <div className="FirstInput">
          <input placeholder="FirstName" type="text" className="First" />
          <input placeholder="LastName" type="text" className="First" />
        </div>
        <div className="SecondInput">
          <input placeholder="Email" type="text" className="second" />
          <input placeholder="Password" type="password" className="second" />
          <input
            placeholder="confirn Password"
            type="password"
            className="second"
          />
        </div>
        <button>Submit</button>
        <p>
          Already have acount ? <a>signin</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
