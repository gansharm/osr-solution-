import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";

import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar/Navbar"; // Corrected import

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar goes outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/product/:name" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
