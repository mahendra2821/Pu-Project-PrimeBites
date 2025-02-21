import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Branding */}
        <div className="footer-brand">
          <h2 className="brand-name">Prime<span className="highlight">Bites</span></h2>
          <p className="footer-text">Premium Nutrition, Tailored for You.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Meal Plans</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@primebites.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>&copy; 2025 PrimeBites. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
