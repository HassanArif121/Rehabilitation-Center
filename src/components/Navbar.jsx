import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Rehab</div>
      {isOpen && (
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
         
          <Link to="/home" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link to="/membership" onClick={closeMenu}>
            Membership
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
          <Link to="/signin" className="log" onClick={closeMenu}>
            Sign In
          </Link>
        </div>
      )}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        
        <Link to="/home" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/membership" onClick={closeMenu}>
          Membership
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link to="/signin" className="logg" onClick={closeMenu}>
          Sign In
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
        <div className="menu-line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
