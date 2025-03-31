import React, { useState } from "react";
import { reviewsData } from "../assets/data"; // Import reviews
import "../styles/reviews.css";

const ReviewList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  // Pagination Logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewsData.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="mt-4 w-100 d-flex align-items-center justify-content-start reviews-container">
      {/* Review List */}
      <div className="d-flex flex-column align-items-center justify-content-between w-100 reviews-list" style={{ rowGap: "30px" }}>
        {currentReviews.map((review) => (
          <div key={review.id} className="d-flex justify-content-between align-items-start w-100 pb-3 reviews-item">
            {/* Customer Name & Verified Badge */}
            <div className="d-flex gap-0 reviews-customer">
              <strong className="fs-5">{review.customer}</strong>
              <small className="text-muted">{review.date}</small>
              {review.verified && <strong className="">Verified Buyer</strong>}
            </div>

            {/* Review Content */}
            <div className="d-flex flex-column gap-1 review-content" style={{ width: "75%" }}>
              <strong className="fs-5">{review.title}</strong>
              <span className="text-warning fs-5 d-flex gap-1">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star-half-stroke"></i>
              </span>
              <p className="review-text">{review.text}</p>
              <small className="text-muted d-flex align-items-center gap-2">
                Helpful ? <i className="fa-solid fa-thumbs-up"></i> ({review.helpful})
              </small>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <nav className="mt-4">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link border-0" onClick={() => paginate(currentPage - 1)}>« Prev</button>
          </li>

          {[...Array(totalPages)].map((_, index) => (
            <li key={index + 1} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
              <button onClick={() => paginate(index + 1)} className="page-link border-0">{index + 1}</button>
            </li>
          ))}

          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link border-0" onClick={() => paginate(currentPage + 1)}>Next »</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ReviewList;
