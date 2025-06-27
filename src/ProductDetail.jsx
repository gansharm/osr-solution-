// src/ProductDetail.jsx
import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function ProductDetail() {
  const { name } = useParams();
  const location = useLocation();
  const product = location.state;

  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ padding: "30px" }}>
      <h1>{name}</h1>
      <p>{product.desc}</p>
      <p style={{ fontWeight: "bold" }}>{product.price}</p>
    </div>
  );
}
