import React from "react";
import ProductImg from "./ProductImg";
import ProductDescription from "./ProductDescription";
import "../styles/Hero.css"
const Hero = () => {
  return (
    <div className="hero-container d-flex justify-content-between gap-4 pb-5">
      
      {/* 🖼️ Product Image Section */}
      <div className="hero-section">
        <ProductImg />
      </div>

      {/* 📝 Product Description Section */}
      <div className="hero-section">
        <ProductDescription />
      </div>

    </div>
  );
};

export default Hero;
