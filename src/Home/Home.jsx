import React, { useState } from "react";
import './navbar.css';
import './Home.css';
import './Burger.css'
import { Link } from "react-router-dom";

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const products = [
    {
      name: "High-End Motherboard X1",
      price: "₹6,999",
      desc: "Powerful and durable for advanced systems.",
    },
    {
      name: "Precision Machine Z2",
      price: "₹29,999",
      desc: "Efficient for industrial-grade work.",
    },
    {
      name: "Premium Ink Cartridge XL",
      price: "₹499",
      desc: "Long-lasting quality prints.",
    },
  ];

  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">OSR Solution</div>
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          &#9776;
        </div>
        <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
          <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h1>OSR Solution</h1>
        <p>Your one-stop shop for Motherboards, Machines & Ink</p>
        <button className="primary-btn">Shop Now</button>
      </section>

      {/* Products */}
      <section id="services" className="products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <p className="price">{product.price}</p>
              <Link
                to={`/product/${encodeURIComponent(product.name)}`}
                state={product}
              >
                <button className="buy-btn">Buy Now</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>About OSR Solution</h2>
        <p>
          OSR Solution provides top-quality tech products and industrial machines. We ensure the best performance, quality, and customer support for all your technical needs.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Have questions or need help? Call us or email anytime.</p>
        <button className="contact-btn" onClick={() => setShowForm(true)}>Get in Touch</button>

        {showForm && (
          <form className="contact-form" onSubmit={(e) => e.preventDefault()} style={{ marginTop: "20px" }}>
            <div>
              <label>Name:</label><br />
              <input type="text" name="name" required />
            </div>
            <div>
              <label>Email:</label><br />
              <input type="email" name="email" required />
            </div>
            <div>
              <label>Message:</label><br />
              <textarea name="message" rows="4" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        )}
      </section>
    </div>
  );
}
