// src/ProductDetail.jsx
import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { useCart } from "./CartContext"; // Adjust path based on your project

export default function () {
  const { name } = useParams();
  const { state: product } = useLocation();
  const { addToCart } = useCart();

  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>{product.name}</h1>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", maxWidth: "400px", borderRadius: "8px" }}
      />
      <p style={{ marginTop: "15px" }}>{product.description}</p>
<p style={{ fontWeight: "bold", fontSize: "20px", color: "#28a745" }}>
  {product.price ? `₹${product.price.toLocaleString()}` : "₹N/A"}
</p>

      <div style={{ marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: "#1e3a8a",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => alert("Proceed to Buy")}
        >
          Buy Now
        </button>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <h3>Reviews</h3>
        <ul>
          <li><strong>Amit:</strong> Amazing quality product!</li>
          <li><strong>Sneha:</strong> Worth every rupee!</li>
        </ul>
      </div>
    </div>
  );
}
