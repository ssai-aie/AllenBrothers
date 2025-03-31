import React from "react";
import logo from "../assets/Allen-Brothers-Logo.png";
import { meatCategories, specialCategories } from "../assets/data";
import "../styles/Searchbar.css";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""} bg-primary text-white w-100`}>
      <div className="d-flex flex-row align-items-center justify-content-between w-100">
        <img src={logo} width="200px" alt="Allen Brothers Logo" className="logo" />
        <i className="fa-solid fa-xmark close-icon" onClick={onClose}></i>
      </div>
      
      <div className="search-container">
        <input type="text" className="form-control search-input" placeholder="I'm shopping for..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>
      <span><i className="fa-solid fa-phone"></i> 1-800-957-0111</span>
      <span><i className="fa-regular fa-circle-user"></i> Sign in</span>
      <span><i className="fa-solid fa-cart-shopping"></i> My Cart</span>

      <span className="text-decoration-underline" style={{textUnderlineOffset:"5px"}}>Categories :</span>
      <div className="d-flex flex-column justify-content-start gap-4 align-items-start border-2 pt-2 w-100">
        {meatCategories.map((category, index) => (
          <span key={index} className="d-flex w-100 justify-content-between align-items-center ">{category} <i class="fa-solid fa-angle-down"></i></span>
        ))}
      </div>
      
      <div className="d-flex flex-column justify-content-start gap-4 align-items-start pt-2 w-100">
        {specialCategories.map((category, index) => (
          <span key={index} className={`d-flex w-100 justify-content-between align-items-center  ${category.isDeal ? 'text-danger fw-bold' : ''}`}>{category.name} <i class="fa-solid fa-angle-down"></i></span>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
