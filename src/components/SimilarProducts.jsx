import React, { useState } from "react";
import { similarProducts } from "../assets/data"; // Import product data
import "../styles/SimilarProducts.css"; // Add CSS styles

const ITEMS_PER_PAGE = 4; // Show 4 products per page

const SimilarProducts = () => {
  const [startIndex, setStartIndex] = useState(0);

  // Function to go to the next set of products
  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < similarProducts.length) {
      setStartIndex(startIndex + ITEMS_PER_PAGE);
    }
  };

  // Function to go to the previous set of products
  const handlePrev = () => {
    if (startIndex - ITEMS_PER_PAGE >= 0) {
      setStartIndex(startIndex - ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="py-5 d-flex flex-column gap-4 position-relative similar-products-container w-100">
      <h3>Similar Products You Might Like</h3>

      {/* Product Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 position-relative w-100">
        {similarProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE).map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 shadow-sm product-card">
              
              {/* Product Image */}
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="card-img-top"
                />
              </div>

              {/* Product Details */}
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{product.name}</h6>
                <p className="card-text">
                  Starting from <span className="text-primary">{product.price}</span>
                </p>
                <a href="/" className="btn btn-primary w-100 mt-auto text-white">
                  View Options
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Back Button (Hidden on First Set) */}
      {startIndex > 0 && (
        <i 
          className="fa-solid fa-circle-arrow-left arrow-left"
          onClick={handlePrev}
          style={{ cursor: "pointer" }}
        ></i>
      )}

      {/* Next Button (Hidden on Last Set) */}
      {startIndex + ITEMS_PER_PAGE < similarProducts.length && (
        <i 
          className="fa-solid fa-circle-arrow-right arrow-right"
          onClick={handleNext}
          style={{ cursor: "pointer" }}
        ></i>
      )}
    </div>
  );
};

export default SimilarProducts;
