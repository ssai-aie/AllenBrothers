import React from "react";
import { product } from "../assets/data"; // Import Data
import AddToCart from "./AddToCart";
import BuySaveMore from "./BuySaveMore";
import Benfits from "./Benfits";
import "../styles/ProductDescription.css"

const ProductDescription = () => {
  return (
    <div className="d-flex flex-column gap-4 justify-content-start align-items-start position-relative">
      
      {/* 🏷️ Product Info */}
      <div className="d-flex flex-column gap-0 justify-content-start align-items-start">
        
        {/* SALE Badge (Only Show if On Sale) */}
        {product.isOnSale && (
          <span className="bg-danger px-3 rounded-5 text-white fw-medium">SALE</span>
        )}

        {/* Product Name */}
        <h4>{product.name}</h4>

        {/* ⭐ Star Ratings & Reviews */}
        <div className="d-flex flex-row gap-2 align-items-center justify-content-start">
          {[...Array(product.rating)].map((_, i) => (
            <i key={i} className="fa-solid fa-star"></i>
          ))}
          <span>{product.reviewCount} Reviews</span>
        </div>

        {/* 📦 Pack Information */}
        <div className="d-flex flex-row gap-3 align-items-start justify-content-center">
          <span className="border-end pe-3">{product.packDetails}</span> 
          <span>Item Code: {product.itemCode}</span>
        </div>

        {/* ⚖️ Weight Options */}
        <div className="d-flex flex-column gap-1 align-items-start justify-content-center py-3">
          <h5 className="fw-medium">Weight</h5>
          <div className="d-flex flex-row gap-2 align-items-start justify-content-center">
            {product.weights.map((weight, index) => (
              <p key={index} className="text-center px-2 py-2 rounded-3 weight-option">
                <strong>{weight.size}</strong> <br /> {weight.thickness}
              </p>
            ))}
          </div>
        </div>

        {/* 💰 Pricing with Discount */}
        <div className="text-danger fs-5 d-flex flex-row align-items-center gap-2 justify-content-start">
          <strong>${product.price.toFixed(2)}</strong>  
          <span className="text-muted" style={{ textDecoration: "line-through" }}>
            ${product.originalPrice.toFixed(2)}
          </span> 
          <span className="fw-medium" style={{ fontSize: "16px" }}>
            {product.discount}
          </span>
        </div>

      </div>

      {/* 🛒 Additional Components */}
      <AddToCart />
      <BuySaveMore />
      <Benfits />
      <button className="save-icon position-absolute top-0 end-0 btn border">
      <i class="fa-regular fa-bookmark"></i>
      </button>
    </div>
  );
};

export default ProductDescription;
