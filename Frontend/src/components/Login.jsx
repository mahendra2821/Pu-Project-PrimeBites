import React, { useState, useEffect } from "react";
import "./Login.css"; // Import the separate CSS file
import { Link } from "react-router-dom";

const Login = () => {
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
        <h2>Login</h2>
        <p>Welcome back! Please enter your credentials to log in.</p>

        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="Your Email" required />

          <label>Password</label>
          <input type="password" placeholder="Your Password" required />

          <button type="submit">Login</button>
        </form>

        {/* Additional Links */}
        <div className="login-links">
          <a href="#">Forgot Password?</a>

          <p>
            Don't have an account? 
          </p>

          <Link to="/signup">Sign Up</Link>
        

        </div>
      </div>
    </div>
  );
};

export default Login;
