import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";
import Login from "./Login";
import Register from "./Register";
import Products from './Products';
import ShopDetail from "./ShopDetail";


import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar/Navbar"; // Corrected import

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar goes outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:name" element={<ShopDetail />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:name" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
