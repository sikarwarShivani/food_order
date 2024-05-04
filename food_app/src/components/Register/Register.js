import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  // State variable to store input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State variable to store error messages
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required
      `;
      }
    });
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // If there are errors, update the errors state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, log input data to the console
    console.log(formData);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message for the field being edited
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="main">
      <div className="SecondMain">
        <div className="heading">
          <div className="rounded_dot"></div>
          <h1>Register</h1>
        </div>
        <div className="paragraph_text">
          <p>Sign up now and get full access to our app</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="FirstInput">
            <input
              placeholder="First Name"
              type="text"
              className="First"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="error-message">{errors.firstName}</p>
            )}
            <input
              placeholder="Last Name"
              type="text"
              className="First"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="error-message">{errors.lastName}</p>
            )}
          </div>
          <div className="SecondInput">
            <input
              placeholder="Email"
              type="text"
              className="second"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
            <input
              placeholder="Password"
              type="password"
              className="second"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="error-message">{errors.password}</p>
            )}
            <input
              placeholder="Confirm Password"
              type="password"
              className="second"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="error-message">{errors.confirmPassword}</p>
            )}
          </div>
          <div className="res-sub">
            <button type="submit" className="sub-mit">
              Submit
            </button>
          </div>
        </form>
        <p className="sign-in">
          Already have an account? <a>Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
