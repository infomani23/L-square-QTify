import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import HeroSection from "./Components/HeroSection/HeroSection";
import TopAlbum from "./Components/topAlbum/TopAlbum";
import NewAlbum from "./Components/newAlbum/NewAlbum";
import AudioPlayer from "./Components/AudioPlayer/AudioPlayer";
import Songs from "./Components/Songs/Songs";

import "./Layout.css";
const Layout = () => {
    return (
      <div className="layout">
        <NavBar />
        <HeroSection />
        <TopAlbum />
        <NewAlbum />
        <Songs/>
        <AudioPlayer />
        </div>
        );
        }

export default Layout;