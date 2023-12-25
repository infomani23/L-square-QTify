import React from "react";
import Logo from "./Logo/Logo";
import SearchBar from "./SearchBar/SearchBar";
import "./NavBar.css";
import Button from "./Button/Button";

/**
 * Represents the navigation bar component.
 * Renders a navigation bar with a logo, search bar, and a button.
 * @returns {JSX.Element} The rendered navigation bar component.
 */
const NavBar = () => {
  return (
    <nav className="navBar">
      <Logo />
      <SearchBar />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;