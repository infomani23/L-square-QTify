import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import TopAlbum from "./Components/topAlbum/TopAlbum";
import NewAlbum from "./Components/newAlbum/NewAlbum";
import "./Layout.css";
const Layout = () => {
    return (
      <div className="layout">
        <NavBar />
        <HeroSection />
        <TopAlbum />
        <NewAlbum />
        </div>
        );
        }

export default Layout;