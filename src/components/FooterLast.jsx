import React from "react";
import "../styles/FooterLast.css"
const FooterLast = () => {
  return (
    <footer className="bg-primary w-100 main py-2 text-white d-flex flex-row align-items-center footer-last-container">
      
      {/* 🏷️ Copyright Notice */}
      <div>© 2024 Allen Brothers. All Rights Reserved.</div>

      {/* 🔗 Legal Links */}
      <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
        <p className="m-0 cursor-pointer">Privacy Policy</p>
        <p className="m-0 cursor-pointer">Terms of Service</p>
      </div>
      
    </footer>
  );
};

export default FooterLast;
