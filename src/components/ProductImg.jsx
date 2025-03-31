import React from "react";
import { productImages } from "../assets/data"; // Import Data
import "../styles/ProductImg.css"
const ProductImg = () => {
  return (
    <div className="d-flex justify-content-center align-items-start gap-3 w-100 product-img-container">
      
      {/* 📌 Thumbnail Images & Video */}
      <div className="d-flex gap-3 justify-content-start align-items-center thumbnail-container">
        {productImages.thumbnails.map((item, index) =>
          item.type === "image" ? (
            <img key={index} src={item.src} alt={item.alt} width="80px" height="80px" className="border rounded-1" />
          ) : (
            <video key={index} src={item.src} width="80px" height="80px" className="rounded-1" controls></video>
          )
        )}
      </div>

      {/* 📌 Main Product Image & "Best For" Section */}
      <div className="d-flex flex-column gap-3 justify-content-center align-items-start w-100">
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
          
          {/* 🖼️ Main Product Image (Now Responsive) */}
          <img 
            src={productImages.mainImage} 
            alt="Main Product" 
            className="main-product-img border rounded-2"
          />

          {/* 🔥 Best For Section */}
          <div className="d-flex border bg-light py-2 rounded-1 w-100 bestfor-section">
            Best For:
            {productImages.bestFor.map((item, index) => (
              <span key={index} className="d-flex align-items-center bestfor-item">
                <i className={`${item.icon} border p-2 bg-white rounded-1 me-1`}></i> <span className="fw-medium">{item.text}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ⭐ Key Highlights Section */}
        <div className="w-100 d-flex justify-content-center">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h5 className="text-primary">Key Highlights</h5>
            <ul className="list-unstyled">
              {productImages.highlights.map((highlight, index) => (
                <li key={index} className="d-flex align-items-start gap-2">
                  <i className="fa-regular fa-circle-check text-success mt-1"></i>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductImg;
