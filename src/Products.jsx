// src/Products.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Products.css";

const productCategories = [
  {
    name: "Motherboards",
    image: "/headBoard.jpeg",
    description: "Durable and high-performance motherboards for flex machines.",
    price: 55000,
  },
  {
    name: "Print-Heads",
    image: "/Print-Heads.jpeg",
    description: "Precision-engineered print heads for clear output.",
    price: 95000,
  },
  {
    name: "Industrial Machines",
    image: "/machine.jpeg",
    description: "Heavy-duty flex printing machines with efficient operation.",
    price: 55000,
  },
  {
    name: "Ink Cartridges",
    image: "/ink.jpeg",
    description: "High-quality inks for long-lasting vibrant prints.",
    price: 1200,
  },
  {
    name: "Power Supplies",
    image: "/power-supply.jpeg",
    description: "Reliable power units for continuous printing performance.",
    price: 28000,
  },
  {
    name: "Rollers & Belts",
    image: "/rollers.jpeg",
    description: "Smooth feeding rollers and belts for machine accuracy.",
    price: 4800,
  },
];

export default function Products() {
  return (
    <div className="products-page">
      <h1 className="products-title">Build Your Flex Machine</h1>
      <div className="products-grid">
        {productCategories.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.price && <p className="product-price">₹{item.price.toLocaleString()}</p>}
              <Link
                to={`/product/${item.name.toLowerCase().replace(/\s/g, "-")}`}
                state={item}
              >
                <button className="view-btn">View Product</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
