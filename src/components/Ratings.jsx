import React from "react";
import { ratingsData } from "../assets/data"; // Import Data
import "../styles/Ratings.css"

const Ratings = () => {
  // Calculate the percentage for each rating
  const totalReviews = ratingsData.totalReviews;
  
  return (
    <div className="d-flex align-items-start justify-content-between  w-100 ratings-container">
      
      {/* ⭐ Product Rating Section */}
      <div className="d-flex flex-column align-items-start justify-content-start gap-2" style={{ flex: "0 0 auto" }}>
        <h5>Product Rating</h5>
        <div className="text-warning d-flex gap-2 fs-5">
          {Array.from({ length: 5 }, (_, index) => (
            <i
              key={index}
              className={`fa-solid ${
                index + 1 <= Math.floor(ratingsData.overallRating)
                  ? "fa-star"
                  : index < ratingsData.overallRating
                  ? "fa-star-half-stroke"
                  : "fa-star"
              }`}
            ></i>
          ))}
        </div>
        <span>
          <strong>{ratingsData.overallRating} out of 5</strong> ({ratingsData.totalReviews} Reviews)
        </span>
      </div>

      {/* 📊 Ratings Breakdown with Progress Bars */}
      <div className="d-flex flex-column align-items-start justify-content-start gap-2 w-100" style={{ flex: "1" }}>
        {ratingsData.ratingBreakdown.map((rating) => (
          <div key={rating.star} className="d-flex align-items-center my-1 gap-2 w-100 progress-bar-container">
            <span className="text-decoration-underline">{rating.star} stars</span>
            <div className="progress mx-2 w-100 border" style={{ flex: "1",width:"100%", height: "15px" }}>
              <div
                className="progress-bar border progress-bar-striped progress-bar-animated bg-primary rounded-4"
                role="progressbar"
                style={{
                  width: `${(rating.count / totalReviews) * 100}%`
                }}
              ></div>
            </div>
            <span>({rating.count})</span>
          </div>
        ))}
      </div>

      {/* 📝 Review Button */}
      <div className="d-flex flex-column align-items-start gap-1" style={{ flex: "0 0 auto" }}>
        <p>Let us know your thoughts!</p>
        <button className="btn btn-primary">
          <i className="fa-solid fa-pen-to-square"></i> Write a Review
        </button>
      </div>
      
    </div>
  );
};

export default Ratings;
