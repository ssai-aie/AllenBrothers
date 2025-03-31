import React from "react";
import Searchbar from "../components/Searchbar";
import Categories from "../components/Categories";
import Navigator from "../components/Navigator";
import Hero from "../components/Hero";
import Description from "../components/Description";
import SimilarProducts from "../components/SimilarProducts";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";
import FooterLast from "../components/FooterLast";
import "../styles/PDP.css"; // Import styles

const PDP = () => {
  return (
    <div>
      {/* Top Section */}
      <Searchbar />
      <Categories />

      {/* Product Main Section */}
      <div className="main border-bottom">
        <Navigator />
        <Hero />
      </div>

      {/* Product Description */}
      <div className="main border-bottom">
        <Description />
      </div>

      {/* Similar Products */}
      <div className="main border-bottom">
        <SimilarProducts />
      </div>

      {/* Customer Reviews */}
      <div className="main border-bottom">
        <CustomerReviews />
      </div>

      {/* Footer */}
      <div className="main">
        <Footer />
      </div>

      {/* Footer Last Section */}
      <FooterLast />
    </div>
  );
};

export default PDP;
