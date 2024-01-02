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
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const TopAlbum = () => {
  const [albumData, setAlbumData] = useState([]);
  const [collapseView, setCollapseView] = useState(true);

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

  // Function to simulate clicking the next button on the slider
  const clickNextButton = () => {
    // Your implementation to simulate clicking the next button
    // You may need to use the Swiper API to navigate to the next slide
    // For example: swiperRef.current.slideNext();
  };

  // Function to check if the first two albums are visible
  const areFirstTwoAlbumsVisible = () => {
    // Your implementation to check the visibility of the first two albums
    // You may need to use the Swiper API to get the current visible slides
    // For example: swiperRef.current.activeIndex
  };

  // Test function to verify slider functionality
  const testSliderFunctionality = () => {
    // Assuming you have access to the Swiper instance
    // You may need to use a useRef to get the Swiper instance
    // For example: const swiperRef = useRef(null);

    // Assuming the Swiper instance is assigned to swiperRef.current

    // Simulate clicking the next button on the slider four times
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

  const handleOnClick = () => {
    setCollapseView(!collapseView);
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
          // ref={swiperRef} // Uncomment and assign to a ref if needed
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

