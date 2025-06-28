// src/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Hoodie.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const { cartItems } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out");
    window.location.reload();
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/">OSR Solution</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
          <span className="toggle-bar"></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#contact" onClick={toggleMenu}>Contact Us</a>
          {/* <Link to="/cart" className="cart-icon" onClick={toggleMenu}>
            <FaShoppingCart size={24} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link> */}
          {!isLoggedIn ? (
            <>
              <button className="login-btn" onClick={() => navigate("/login")}>Login</button>
              <button className="signup-btn" onClick={() => navigate("/register")}>Sign Up</button>
            </>
          ) : (
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          )}
        </div>

        {/* Cart and User Buttons on desktop */}
        <div className="nav-actions">
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={28} />
            {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
