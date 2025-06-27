// src/Cart/Cart.jsx
import React from "react";
import { useCart } from "../CartContext";

export default function Cart() {
  const { cartItems } = useCart();

  return (
    <div style={{ padding: "30px" }}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <strong>{item.price}</strong>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
