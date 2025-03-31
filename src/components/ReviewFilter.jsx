import React from "react";
import { reviewFilters, sortOptions } from "../assets/data"; // Import Data
import "../styles/ReviewFilter.css"

const ReviewFilter = () => {
  return (
    <div className="mt-4 w-100 d-flex align-items-start justify-content-start filter-container">
      
      {/* 📌 Filter by Section */}
      <div className="d-flex flex-row align-items-center justify-content-start gap-2">
        <strong className="w-100">Filter by</strong>
        <select className="form-select w-100 w-auto" style={{ minWidth: "180px" }}>
          {reviewFilters.map((filter, index) => (
            <option key={index}>{filter}</option>
          ))}
        </select>
      </div>

      {/* 🔄 Sort by Section */}
      <div className="d-flex flex-row align-items-center justify-content-start gap-2">
        <strong className="w-100">Sort by</strong>
        <select className="form-select w-100 w-auto" style={{ minWidth: "180px" }}>
          {sortOptions.map((sort, index) => (
            <option key={index}>{sort}</option>
          ))}
        </select>
      </div>

    </div>
  );
};

export default ReviewFilter;
