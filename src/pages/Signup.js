import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dateOfBirth: "",
    password: "",
    repeatPassword: "", 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/user/signupuser",
        formData
      );

      if (response.data.status === "Failed") {
        console.log(response.data.message);
      } else if (response.data.status === "Pending") {
        console.log("Signup successful");
        console.log("Verification email sent");
        toast.success("Registered successfully!");

        // Clear form fields
        setFormData({
          name: "",
          email: "",
          dateOfBirth: "",
          password: "",
          repeatPassword: "",
        });
      }
    } catch (error) {
      console.log("An error occurred while signing up:", error);
    }
  };

  return (
    <div className="Signup-container">
      <div className="card">
        <h3>Signup</h3>
        <form className="login-form" onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="abc@test.com"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="repeatPassword">Repeat Password</label>
            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={formData.repeatPassword}
              onChange={handleInputChange}
            />
          </div>
          <button className="button" type="submit">
            Signup
          </button>
        </form>
        <div>
          <Link to="/login" className="linklogin">
            <p>Go to login if account exists</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
