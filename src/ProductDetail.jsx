import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import './ProductDetail.css';
import { useCart } from "./CartContext";
export default function ProductDetail() {
  const { name } = useParams();
 const { addToCart } = useCart();
  const location = useLocation();
  const product = location.state;

  let productImages = [];

  if (name === "Premium Ink Cartridge XL") {
    productImages = [
      "/ink.jpeg",
      "/ink2.jpeg",
      "/ink3.jpeg",
      "/ink4.jpeg"
    ];
  } else if (name === "High-End Headboard X1") {
    productImages = [
      "/headBoard.jpeg",
      "/headBoard2.jpeg",
      "/headBoard3.jpeg",
      "/headBoard4.jpeg"
    ];
  } else {
    productImages = [
       "/mainBoard.jpeg",
      "/mainBoard2.jpeg",
      "/mainBoard3.jpeg",
      "/mainBoard4.jpeg"
    ];
  }

  const [selectedImage, setSelectedImage] = useState(productImages[0]);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail-container">
      <h1>{name}</h1>
      <div className="image-gallery">
        <img src={selectedImage} alt="Main view" className="main-image" />
        <div className="thumbnail-row">
          {productImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i}`}
              className={`thumbnail ${selectedImage === img ? "active" : ""}`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>
      <p>{product.desc}</p>
      <p className="price">{product.price}</p>
      <div className="action-buttons">
        <button className="buy-btn">Buy Now</button>
<button onClick={() => addToCart(product)} className="cart-btn">Add to Cart</button>
      </div>
      <div className="reviews-section">
        <h3>Customer Reviews</h3>
        <ul>
          <li><strong>Amit:</strong> Great quality product. Smooth performance.</li>
          <li><strong>Riya:</strong> Worth the price. Very durable.</li>
        </ul>
      </div>
    </div>
  );
}