import React from 'react';
import Ratings from './Ratings';
import ReviewFilter from './ReviewFilter';
import ReviewList from './Reviews';

const CustomerReviews = () => {
  return (
    <div className="d-flex flex-column align-items-start justify-content-center gap-3 w-100 py-5">
      {/* Section Title */}
      <h3 className="fw-bold">Customer Reviews</h3>

      {/* Customer Ratings */}
      <Ratings />

      {/* Review Filter Options */}
      <ReviewFilter />

      {/* List of Customer Reviews */}
      <ReviewList />
    </div>
  );
};

export default CustomerReviews;
