import React from "react";
import { footerData } from "../assets/data"; // Importing footer data
import logo from "../assets/Allen-Brothers-Logo.png"; // Importing company logo
import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-4 ">
      <div className="d-flex align-items-start justify-content-between gap-4 footer-container">
        
        {/* 🏢 Company Information Section */}
        <div className="compnay-info-section">
          <img
            src={logo}
            alt="Company Logo"
            width="100%"
            style={{ border: "2px solid red" }}
          />
          <p className="mt-2 text-sm footer-company-desc">{footerData.companyInfo.description}</p>

          {/* 🌍 Social Media Links */}
          <div className="mt-3 d-flex align-items-start gap-3 justify-content-start">
            {footerData.companyInfo.socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-600 hover:text-gray-900 text-muted"
                aria-label={`Follow us on ${link.icon}`}
              >
                <i className={`fab fa-${link.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* 📌 Footer Sections (Dynamically Rendered) */}
        {footerData.sections.map((section, index) => (
          <div key={index} className="d-flex flex-column">
            <h6 className="font-semibold text-lg">{section.title}</h6>
            <ul className="mt-2 list-unstyled d-flex gap-2 flex-column">
              {section.links.map((link, i) => (
                <li key={i} className="text-sm hover:underline cursor-pointer">
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* ☎️ Contact Information */}
        <div className="d-flex flex-column gap-0">
          {/* Customer Service Info */}
          <div>
            <h6 className="font-semibold">{footerData.contactInfo.customerService.title}</h6>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.customerService.phone}</p>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.customerService.days}</p>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.customerService.hour}</p>
          </div>

          {/* Phone Orders Info */}
          <div className="mt-4">
            <h6 className="font-semibold">{footerData.contactInfo.phoneOrders.title}</h6>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.phoneOrders.phone}</p>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.customerService.days}</p>
            <p className="text-sm p-0 m-0">{footerData.contactInfo.phoneOrders.hour}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
