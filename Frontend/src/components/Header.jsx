
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../ThemeContext";
import "./Header.css";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      <div className="logo">PrimeBites</div>

      {/* Hamburger Icon for Mobile */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/diet-plans" onClick={closeMenu}>Diet Plans</Link></li>
          <li><Link to="/items" onClick={closeMenu}>Items</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/aboutus" onClick={closeMenu}>About Us</Link></li>
        </ul>

        <div className="auth-buttons">
          <Link to="/login"><button className="login-btn" onClick={closeMenu}>Login</button></Link>
          <Link to="/signup"><button className="signup-btn" onClick={closeMenu}>Sign Up</button></Link>
        </div>

        {/* Theme Toggle with Sun & Moon Icon */}
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FaSun size={22} color="#FFD700" /> : <FaMoon size={22} color="#FFFFFF" />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
