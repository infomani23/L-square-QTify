import React from "react";
import LogoImage from "../../../Assests/Logo.png";

/**
 * Represents the logo component.
 * Renders an image as a logo.
 * @returns {JSX.Element} The rendered logo component.
 */
const Logo = () => {
  return <img src={LogoImage} alt="Logo" />;
};

export default Logo;