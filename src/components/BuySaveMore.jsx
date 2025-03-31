import React from 'react';
import { pricingOptions } from '../assets/data'; // Import pricing data

const BuySaveMore = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 text-center border rounded-4 overflow-hidden">
      {/* Header Section */}
      <div className="border-bottom w-100 bg-light rounded-top-4 px-3 py-2">
        <h5 className="m-0">
          Buy More & Save More! <i className="fa-solid fa-tag"></i>
        </h5>
        <p className="m-0 text-muted">Save more with our volume pricing discounts</p>
      </div>

      {/* Pricing Section */}
      <div className="d-flex flex-column gap-2 align-items-center justify-content-center py-3 w-100">
        {pricingOptions.map((item, index) => (
          <div key={index} className="d-flex justify-content-center align-items-center gap-3">
            <strong>{item.pack}</strong>
            <span className="text-muted">{item.steaks}</span>
            <strong className="text-danger">{item.price}</strong>
            <span className="fst-italic text-muted">{item.discount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuySaveMore;
