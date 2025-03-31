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
      <div className="description-section w-100">
      <iframe width="100%" height="500" className="rounded-2" src="https://www.youtube.com/embed/psp702ghkaI?si=LtEs_uOKapMG93Bm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      
    </div>
  );
};

export default Description;
