// import React, { useEffect, useState } from "react";
// import { topAlbumData, getUId } from "../AxiosData/AxiosData";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Card from "../Card/Card";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import "./TopAlbum.css";
// import arrowLeft from '../../Assests/Leftarrow.png';
// import arrowRight from '../../Assests/Rightarrow.png';

// const TopAlbum = () => {
//   const [albumData, setAlbumData] = useState([]);
//   const [collapseView, setCollapseView] = useState(true);

//   useEffect(() => {
//     const loadHandler = async () => {
//       try {
//         const res = await topAlbumData();
//         setAlbumData(res);
//       } catch (error) {
//         console.log("Error fetching top album data:", error);
//       }
//     };
//     loadHandler();
//   }, []);

//   const handleOnClick = () => {
//     setCollapseView(!collapseView);
//   };

//   return (
//     <Box className="topAlbum">
//       <div className="topAlbum_static">
//         <h3>Top Albums</h3>
//         <button onClick={handleOnClick}>
//           {collapseView ? `Show all` : `Collapse`}
//         </button>
//       </div>
//       {collapseView ? (
//         <Grid container spacing={2} className="topAlbum_cards">
//           {albumData.map((albumItem, index) => {
//             const id = getUId();
//             return (
//               <Grid item xs={2} key={id}>
//                 <Card data={albumItem} type="normal" />
//               </Grid>
//             );
//           })}
//         </Grid>
//       ) : (
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={4}
//           navigation={{
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           }}
//           className="topAlbum_swiper"
//         >
//           {albumData.map((albumItem, index) => {
//             const id = getUId();
//             return (
//               <SwiperSlide key={id}>
//                 <Card data={albumItem} type="normal" />
//               </SwiperSlide>
//             );
//           })}
//           <div className="swiper-button-next">
//           <img src={arrowRight} alt="Right Arrow" />
//           </div>
//           <div className="swiper-button-prev">
//             <img src={arrowLeft} alt="Left Arrow" />
//           </div>
//         </Swiper>
//       )}
//     </Box>
//   );
// };

// export default TopAlbum;


import React, { useEffect, useState } from "react";
import { topAlbumData, getUId } from "../AxiosData/AxiosData";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import "./TopAlbum.css";
import arrowLeft from '../../Assests/Leftarrow.png';
import arrowRight from '../../Assests/Rightarrow.png';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const TopAlbum = () => {
  const [albumData, setAlbumData] = useState([]);
  const [collapseView, setCollapseView] = useState(true);
  const [nextButtonClickCount, setNextButtonClickCount] = useState(0);

  useEffect(() => {
    const loadHandler = async () => {
      try {
        const res = await topAlbumData();
        setAlbumData(res);
      } catch (error) {
        console.log("Error fetching top album data:", error);
      }
    };
    loadHandler();
  }, []);

  const handleOnClick = () => {
    setCollapseView(!collapseView);
  };

  const handleNextClick = () => {
    setNextButtonClickCount(nextButtonClickCount + 1);

    // Logic to check visibility after 4 clicks
    if (nextButtonClickCount >= 4) {
      // Assuming you have a function to check the visibility of the first two albums
      checkVisibilityOfFirstTwoAlbums();
    }
  };

  const checkVisibilityOfFirstTwoAlbums = () => {
    // Add your logic to check if the first two albums are not visible
    // For example, you can use refs to get the Swiper instance and check the visible slides
    // Ref: https://swiperjs.com/react#swiper-instance
    const swiperInstance = document.querySelector('.topAlbum_swiper').swiper;

    if (swiperInstance) {
      const visibleSlides = swiperInstance.slides;
      const firstTwoAlbumsVisible = visibleSlides[0] && visibleSlides[1];

      if (!firstTwoAlbumsVisible) {
        console.log('The first two albums are not visible!');
      }
    }
  };

  return (
    <Box className="topAlbum">
      <div className="topAlbum_static">
        <h3>Top Albums</h3>
        <button onClick={handleOnClick}>
          {collapseView ? `Show all` : `Collapse`}
        </button>
      </div>
      {collapseView ? (
        <Grid container spacing={2} className="topAlbum_cards">
          {albumData.map((albumItem, index) => {
            const id = getUId();
            return (
              <Grid item xs={2} key={id}>
                <Card data={albumItem} type="normal" />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="topAlbum_swiper"
          onSlideChange={handleNextClick}
        >
          {albumData.map((albumItem, index) => {
            const id = getUId();
            return (
              <SwiperSlide key={id}>
                <Card data={albumItem} type="normal" />
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
      )}
    </Box>
  );
};

export default TopAlbum;
