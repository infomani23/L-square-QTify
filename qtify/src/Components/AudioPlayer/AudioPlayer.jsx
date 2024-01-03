import React from "react";
import "./AudioPlayer.css";
import SongImage from "../../Assests/Player.png";
import playPauseImage from "../../Assests/play.png"
import durationImage from "../../Assests/DurationImage.png"

const AudioPlayer = () => {
  return (
    <div className="AudioPlayer">
      {/* picture */}
      <div className="AudioPlayer_image">
        <img src={SongImage} alt="songImage" />
        <div className="AudioPlayer_image_heading">
          <h3>Song name</h3>
          <p>Album Name</p>
        </div>
      </div>
      {/* music player */}
      <div className="player">
        <img src={playPauseImage} width="48px" height="48px" alt="playPauseImage" />
        <div className="duration">
          <span className="startTime">0:38</span>
          <img src={durationImage} height="6px"  alt="durationImage" />
          <span className="endTime">3:38</span>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default AudioPlayer;