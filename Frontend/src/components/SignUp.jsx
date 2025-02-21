import React, { useState, useEffect } from "react";
import "./Login.css"; // Import the separate CSS file
import { Link } from "react-router-dom";

const SignUp = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className="login-page">
      {/* Header with Dark Mode Toggle */}
      

      {/* Login Form Section */}
      <div className="login-container">
        <h2>SignUp</h2>
        <p>Welcome back! Please enter your credentials to log in.</p>

        <form className="login-form">
          <label>Name</label>
          <input type="Name" placeholder="Your Name" required />
          <label>Email</label>
          <input type="email" placeholder="Your Email" required />

          <label>Password</label>
          <input type="password" placeholder="Your Password" required />

          <button type="submit">SignUp</button>
        </form>

        {/* Additional Links */}
        <div className="login-links">
          <a href="#">Forgot Password?</a>

          <p> Already have a Account</p>

      <Link to="/login"> <p> Login</p>

                      </Link>    
        </div>
      </div>
    </div>
  );
};

export default SignUp;
