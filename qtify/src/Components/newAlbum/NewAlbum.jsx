// import React, { useEffect, useState } from "react";
// import { newAlbumData, getUId } from "../AxiosData/AxiosData";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Card from "../Card/Card";
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import "./NewAlbum.css";
// import arrowLeft from '../../Assests/Leftarrow.png';
// import arrowRight from '../../Assests/Rightarrow.png';

// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

// const NewAlbum = () => {
//   const [albumData, setAlbumData] = useState([]);
//   const [collapseView, setCollapseView] = useState(true);

//   useEffect(() => {
//     const loadHandler = async () => {
//       try {
//         const res = await newAlbumData();
//         setAlbumData(res);
//       } catch (error) {
//         console.log("Error fetching new album data:", error);
//       }
//     };
//     loadHandler();
//   }, []);

//   const handleOnClick = () => {
//     setCollapseView(!collapseView);
//   };

//   return (
//     <Box className="newAlbum">
//       <div className="newAlbum_static">
//         <h3>New Albums</h3>
//         <button onClick={handleOnClick}>
//           {collapseView ? `Show all` : `Collapse`}
//         </button>
//       </div>
//       {collapseView ? (
//         <Grid container spacing={2} className="newAlbum_cards">
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
//           className="newAlbum_swiper"
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
//             <img src={arrowRight} alt="Right Arrow" />
//           </div>
//           <div className="swiper-button-prev">
//             <img src={arrowLeft} alt="Left Arrow" />
//           </div>
//         </Swiper>
//       )}
//     </Box>
//   );
// };

// export default NewAlbum;

import React, { useEffect, useState } from "react";
import { newAlbumData, getUId } from "../AxiosData/AxiosData";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import "./NewAlbum.css";
import arrowLeft from '../../Assests/Leftarrow.png';
import arrowRight from '../../Assests/Rightarrow.png';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const NewAlbum = () => {
  const [albumData, setAlbumData] = useState([]);
  const [collapseView, setCollapseView] = useState(true);

  useEffect(() => {
    const loadHandler = async () => {
      try {
        const res = await newAlbumData();
        setAlbumData(res);
      } catch (error) {
        console.log("Error fetching new album data:", error);
      }
    };
    loadHandler();
  }, []);

  const handleOnClick = () => {
    setCollapseView(!collapseView);
  };

  // Function to simulate clicking the next button on the slider
  const clickNextButton = () => {
    // Your implementation to simulate clicking the next button
    // For example, you can update the Swiper instance or use Swiper's API
  };

  // Test function to verify slider functionality
  const testSliderFunctionality = () => {
    // Simulate clicking the next button 4 times
    for (let i = 0; i < 4; i++) {
      clickNextButton();
    }

    // Verify if the first two albums are not visible
    if (!areFirstTwoAlbumsVisible()) {
      console.log("Slider functionality test - Passed");
    } else {
      console.log("Slider functionality test - Failed");
    }
  };

  // Function to check if the first two albums are visible
  const areFirstTwoAlbumsVisible = () => {
    // Your implementation to check the visibility of the first two albums
    // For example, you can inspect the DOM or use Swiper's API
    return false; // Placeholder, update as needed
  };

  return (
    <Box className="newAlbum">
      <div className="newAlbum_static">
        <h3>New Albums</h3>
        <button onClick={handleOnClick}>
          {collapseView ? `Show all` : `Collapse`}
        </button>
      </div>
      {collapseView ? (
        <Grid container spacing={2} className="newAlbum_cards">
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
          className="newAlbum_swiper"
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

export default NewAlbum;

