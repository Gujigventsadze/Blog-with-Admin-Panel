import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        BlogWebsite
      </Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="navbar-login">
        <button className="login btn">
          <span>Log In</span>
        </button>
      </div>
      <div className="hamburger-menu" onClick={handleMenuClick}>
        <div className={menuOpen ? "line1-active" : "line1"}></div>
        <div className={menuOpen ? "line2-active" : "line2"}></div>
        <div className={menuOpen ? "line3-active" : "line3"}></div>
      </div>
      <div className={`menu-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={handleMenuClick}>
          Home
        </Link>
        <Link to="/about" onClick={handleMenuClick}>
          About
        </Link>
        <Link to="/contact" onClick={handleMenuClick}>
          Contact
        </Link>
        <Link to="/login" onClick={handleMenuClick}>
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
