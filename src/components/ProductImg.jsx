import React, { useState } from "react";
import { productImages } from "../assets/data"; // Import Data
import "../styles/ProductImg.css"
const ProductImg = () => {
  const [mainContent, setMainContent] = useState(productImages.thumbnails[0])

  const handleThumbnailClick = (item)=>{
    setMainContent(item)
  }

  const getYouTubeVideoId = (url) => {

    const match = url.match(/(?:\/embed\/|v=|youtu\.be\/|\/v\/|\/e\/|watch\?v=)([^#&?]+)/);
  
    return match ? match[1] : "";
  
  };

  const zoomImage = (e) => {
    const img = e.target;
    const { left, top, width, height } = img.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const mouseXPercent = (mouseX / width) * 100;
    const mouseYPercent = (mouseY / height) * 100;

    img.style.transformOrigin = `${mouseXPercent}% ${mouseYPercent}%`;
    img.style.transform = 'scale(1.5)';
  };

  const resetZoom = () => {
    const img = document.querySelector('.main-product-img-container img');
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
  };   

  return (
    <div className="d-flex justify-content-center align-items-start gap-3 w-100 product-img-container">
      
      {/* 📌 Thumbnail Images & Video */}
      <div className="d-flex gap-3 justify-content-start align-items-center thumbnail-container">
        {productImages.thumbnails.map((item, index) =>(
          <div key={index} onClick={()=>handleThumbnailClick(item)} style={{cursor:"pointer",opacity:item.src === mainContent.src ? 0.5 : 1}}>
            {item.type === "image"? (
              <img src={item.src} width="80px" height="80px" className="border rounded-1"/>
            ):(
              <div className="position-relative" style={{width:"80px", height:"80px"}}>
              <img key={index} src={`https://img.youtube.com/vi/${getYouTubeVideoId(item.src)}/0.jpg`} width="80px" height="80px" className="rounded-1 " controls></img>
              <i class="fa-regular fa-circle-play position-absolute top-50 start-50 translate-middle text-white fs-2"></i>
              </div>
            )}
          </div>
        )
        )}
      </div>

      {/* 📌 Main Product Image & "Best For" Section */}
      <div className="d-flex flex-column gap-3 justify-content-center align-items-start w-100">
        <div className="d-flex flex-column gap-3 justify-content-center align-items-center w-100">
          {/* 🖼️ Main Product Image (Now Responsive) */}
          {mainContent.type==="image" ? (
          <div className="main-product-img-container"  onMouseMove={zoomImage} onMouseLeave={resetZoom}>
            <img 
            src={mainContent.src} 
            alt="Main Product" 
            className="main-product-img border rounded-2"
            onMouseMove={zoomImage} onMouseLeave={resetZoom}
          />
          </div>
          ):(
            <iframe  src={mainContent.src} className="rounded-1 main-product-img" allow="autoplay" controls></iframe>
          )}

          {/* 🔥 Best For Section */}
          <div className="d-flex border bg-light py-2 rounded-1 w-100 bestfor-section">
            Best For:
            {productImages.bestFor.map((item, index) => (
              <span key={index} className="d-flex align-items-center bestfor-item">
                <i className={`${item.icon} border p-2 bg-white rounded-1 me-1`}></i> <span className="fw-medium">{item.text}</span>
              </span>
            ))}
          </div>
        </div>

        {/* ⭐ Key Highlights Section */}
        <div className="w-100 d-flex justify-content-center">
          <div className="w-100" style={{ maxWidth: "500px" }}>
            <h5 className="text-primary">Key Highlights</h5>
            <ul className="list-unstyled">
              {productImages.highlights.map((highlight, index) => (
                <li key={index} className="d-flex align-items-start gap-2">
                  <i className="fa-regular fa-circle-check text-success mt-1"></i>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductImg;
