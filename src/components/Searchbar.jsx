// Searchbar.js
import React, { useState } from "react";
import logo from "../assets/Allen-Brothers-Logo.png";
import Sidebar from "./Sidebar";
import "../styles/Searchbar.css";

const Searchbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex flex-row align-items-center gap-3 bg-primary searchbar py-3 px-5 text-white">
      <img src={logo} width="200px" alt="Allen Brothers Logo" className="logo" />
      
      <div className="search-container">
        <input type="text" className="form-control search-input" placeholder="I'm shopping for..." />
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
      </div>

      
      <div className="d-flex flex-row justify-content-center align-items-center gap-3 p-0 m-0">
        <p><i className="fa-solid fa-phone"></i> 1-800-957-0111</p>
        <p><i className="fa-regular fa-circle-user"></i> Sign in</p>
        <p><i className="fa-solid fa-cart-shopping"></i> My Cart</p>
      </div>
      <i className="fa-solid fa-bars menu-icon" onClick={() => setSidebarOpen(true)}></i>

      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
};

export default Searchbar;