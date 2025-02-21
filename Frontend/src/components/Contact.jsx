import React, { useState, useEffect } from "react";
import "./Contact.css"; // Import the separate CSS file

const Contact = () => {
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
    <div className="contact-page">
      {/* Header with Dark Mode Toggle */}
      

      {/* Contact Form Section */}
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>Have any questions or need assistance? Reach out to us!</p>

        <form className="contact-form">
          <label>Name</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" placeholder="Your Email" required />

          <label>Message</label>
          <textarea placeholder="Your Message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Details */}
        <div className="contact-info">
          <p>📧 Email: support@primebites.com</p>
          <p>📞 Phone: +91 12345 67890</p>
          <p>📍 Address: Vadodara, Gujarat, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
