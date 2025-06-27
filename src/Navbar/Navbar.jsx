// src/Navbar/Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Hoodie.css";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../CartContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
 const { cartItems } = useCart();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">OSR Solution</Link>
        </div>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <a href="#services" onClick={toggleMenu}>Services</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#contact" onClick={toggleMenu}>Contact Us</a>
          <Link to="/cart" className="cart-icon">
            <FaShoppingCart size={28} />
{cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
          </Link>
        </div>

        <div className="nav-actions">
          <div className="nav-toggle" onClick={toggleMenu}>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
