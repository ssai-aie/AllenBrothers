import React from 'react';
import { OrderInfoSection } from '../assets/data'; // Ensure correct import path

const Benefits = () => {
  return (
    <div className="order-info-section">
      {/* Mapping through OrderInfoSection items to display benefits */}
      {OrderInfoSection?.infoItems?.map((item, index) => (
        <div key={index} className="d-flex align-items-start gap-3 mb-3">
          {/* Icon for each benefit */}
          <i className={`fa-solid ${item.icon} fs-4 pt-2`}></i>
          
          {/* Text content for the benefit */}
          <div>
            <strong className="m-0 fw-medium">{item.title}</strong>
            <p className="text-muted m-0">
              {item.description} 
              {item.linkUrl && (
                <a href={item.linkUrl} className='text-primary'> {item.linkText}</a>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
