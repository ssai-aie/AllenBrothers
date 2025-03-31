import React from "react";
import { productData } from "../assets/data"; // Importing product details

const ProductDetails = () => {
  // Destructure product details safely
  const { title, description, cookingInstructions } = productData || {};
  const filetMignon = cookingInstructions?.filetMignon;

  return (
    <div className="d-flex flex-column gap-2 align-items-start justify-content-center">
      {/* Product Title */}
      <h2 className="text-primary">{title}</h2>
      <p style={{textAlign:"justify"}}>{description}</p>

      {/* Cooking Instructions Section */}
      {filetMignon && (
        <>
          <h3 className="text-primary">Cooking Instructions: Filet Mignon</h3>
          <p>
            <strong>{filetMignon.weight}</strong> | Serving Size: {filetMignon.servingSize}
          </p>

          {Object.values(filetMignon.methods).map((method, index) => (
            <div key={index}>
              <h4>{method.title}</h4>
              <ol>
                {method.steps.map((step, stepIndex) => (
                  <li key={stepIndex}>{step}</li>
                ))}
              </ol>
            </div>
          ))}
        </>
      )}

      {/* Cooking Guides Link */}
      <span className="pb-4">
        See our <a href="/" aria-label="View cooking guides">Cooking Guides</a> for everything you need to know about ordering, storing, and cooking.
      </span>

      {/* Nutritional Info Button */}
      <button 
        className="btn border-secondary text-primary d-block w-100 d-flex flex-row justify-content-between align-items-center fs-5 fw-medium"
        aria-label="View nutritional information"
      >
        Nutritional Info <i className="fa-solid fa-angle-down text-muted"></i>
      </button>
    </div>
  );
};

export default ProductDetails;
