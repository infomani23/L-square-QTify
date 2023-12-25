import LogoImage from "../../../Assests/Logo.png";

/**
 * Represents the logo component.
 * Renders an image as a logo.
 * @returns {JSX.Element} The rendered logo component.
 */
const Logo = () => {
  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px', 
  };

  return (
    <div style={logoContainerStyle}>
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;