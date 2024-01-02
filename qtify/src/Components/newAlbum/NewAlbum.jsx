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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import "./NewAlbum.css";
import arrowLeft from '../../Assests/Leftarrow.png';
import arrowRight from '../../Assests/Rightarrow.png';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

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
