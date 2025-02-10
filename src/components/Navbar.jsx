import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Use if you're using React Router
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"><img className="logo-gif" src="./images/logo.gif" alt="" /></div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/courses">Workshop</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
