import React from "react";
import "./HeroSection.css";
import headphoneImage from "../../Assests/headphone.png";

/**
 * Represents the hero section of the application.
 * Displays a left section with text and a right section with an image.
 * @returns {JSX.Element} The rendered hero section component.
 */
const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h3>100 Thousand Songs, ad-free</h3>
        <h3>Over thousands podcast episodes</h3>
      </div>
      <div className="hero_right">
        <img src={headphoneImage} height="250px" width="250px" alt="headphoneImage" />
      </div>
    </div>
  );
};

export default HeroSection;