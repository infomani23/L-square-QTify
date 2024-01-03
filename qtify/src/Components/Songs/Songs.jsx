import React, { useEffect, useState } from "react";
import { songsData, getUId } from "../AxiosData/AxiosData";
import Box from "@mui/material/Box";
import Filter from "./Filter/Filter";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import arrowLeft from '../../Assests/Leftarrow.png';
import arrowRight from '../../Assests/Rightarrow.png';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const Songs = () => {
  const [songs, setSongs] = useState([]);
  const [nextButtonClickCount, setNextButtonClickCount] = useState(0);

  useEffect(() => {
    const loadHandler = async () => {
      try {
        const songsDataResponse = await songsData();
        setSongs(songsDataResponse);
      } catch (error) {
        console.log("Error fetching songs data:", error);
      }
    };
    loadHandler();
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  const handleNextClick = () => {
    setNextButtonClickCount(nextButtonClickCount + 1);

    // Logic to check visibility after 4 clicks
    if (nextButtonClickCount >= 4) {
      // Assuming you have a function to check the visibility of the first two songs
      checkVisibilityOfFirstTwoSongs();
    }
  };

  const checkVisibilityOfFirstTwoSongs = () => {
    // Add your logic to check if the first two songs are not visible
    // For example, you can use refs to get the Swiper instance and check the visible slides
    // Ref: https://swiperjs.com/react#swiper-instance
    const swiperInstance = document.querySelector('.songs_swiper').swiper;

    if (swiperInstance) {
      const visibleSlides = swiperInstance.slides;
      const firstTwoSongsVisible = visibleSlides[0] && visibleSlides[1];

      if (!firstTwoSongsVisible) {
        console.log('The first two songs are not visible!');
      }
    }
  };

  return (
    <Box className="songs">
      <div>
      <div className="">
        <h2>Songs</h2>
      </div>
      <div className="">
        <Filter />
      </div>
    </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="songs_swiper"
        onSlideChange={handleNextClick}
      >
        {songs.map((songItem, index) => {
          const id = getUId();
          return (
            <SwiperSlide key={id}>
              <Card data={songItem} type="normal" />
            </SwiperSlide>
          );
        })}
        <div className="swiper-button-next">
          <img src={arrowRight} alt="Right Arrow" />
        </div>
        <div className="swiper-button-prev">
          <img src={arrowLeft} alt="Left Arrow" />
        </div>
      </Swiper>
    </Box>
  );
};

export default Songs;
