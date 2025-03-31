import React from "react";

const Navigator = () => {
  return (
    <div className="text-primary">
      {/* 🏠 Home Icon with Breadcrumb Navigation */}
      <i className="fa-solid fa-house"></i> 
      <a href="/" className="text-primary text-decoration-none"> Home</a> /  
      <a href="/" className="text-primary text-decoration-none"> Beef</a> /  
      <a href="/" className="text-primary text-decoration-none"> Shop By Cut</a> /  
      <a href="/" className="text-primary text-decoration-none"> Filet Mignon</a> /  

      {/* 🏷️ Highlighted Product Name (Non-clickable) */}
      <span className="text-black"> Allen Brothers Angus Filet Mignon</span>
    </div>
  );
};

export default Navigator;
