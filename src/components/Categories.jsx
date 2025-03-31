import React from 'react';
import { meatCategories, specialCategories } from '../assets/data'; // Import category data
import "../styles/Categories.css"
const Categories = () => {
  return (
    <div className=" justify-content-center align-items-center py-2 border-bottom border-2 categories-container">
      
      {/* Meat Categories Section */}
      <div className="d-flex flex-row justify-content-center gap-4 align-items-center border-end border-2 pt-2 pe-5">
        {meatCategories.map((category, index) => (
          <p key={index} className="fw-medium">{category}</p>
        ))}
      </div>

      {/* Special Categories Section */}
      <div className="d-flex flex-row justify-content-center gap-4 align-items-center ps-4 pt-2">
        {specialCategories.map((category, index) => (
          <p key={index} className={`fw-medium ${category.isDeal ? 'text-danger' : ''}`}>
            {category.name}
          </p>
        ))}
      </div>

    </div>
  );
};

export default Categories;
