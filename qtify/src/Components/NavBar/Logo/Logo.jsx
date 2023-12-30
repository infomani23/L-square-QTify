import React from "react";
import Logo from "../../../Assests/Logo.png";

/**
 * Represents the logo component.
 * Renders an image as a logo.
 * @returns {JSX.Element} The rendered logo component.
 */
const logo = () => {
  return <img src={Logo} alt="Logo" />;
  
};

export default logo;