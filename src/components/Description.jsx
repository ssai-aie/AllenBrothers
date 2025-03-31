import React from "react";
import CookingInstructions from "./CookingInstructions";
import "../styles/Description.css"
const Description = () => {
  return (
    <div className="description-container d-flex justify-content-between align-items-start gap-5 py-5">
      {/* Cooking Instructions Section */}
      <div className="description-section">
      <CookingInstructions />
      </div>
      {/* Product Video */}
      <div className="description-section">
      <video 
        src="" 
        width="100%" 
        className="product-video rounded-3 border"
        controls
      />
      </div>
      
    </div>
  );
};

export default Description;
