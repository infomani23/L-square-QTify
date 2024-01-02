import { Navigation } from 'swiper';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styles from "./Carousel.css";
import Card from "../Card/Card.jsx"
import CarouselNavigationLeft from "./CarouselNavigationLeft/CarouselNavigationLeft.jsx"
import CarouselNavigationRight from './CarouselNavigationRight/CarouselNavigationRight.jsx';

const Controls= ({album}) => {
    const { swiper }= useSwiper();
    useEffect(() => {
      if (swiper) {
        swiper.slideTo(0);
      }
    }, [album, swiper]);
  
    return <></>;
  };


function Carousel ({album, cardType}) {
//   return (
//     <div className={styles.wrapper}>
//         <Swiper
//           modules={{ Navigation }}
//           spaceBetween={40}
//           slidesPerView={6}
//           style={{padding: "20px 30px"}}
//           initialSlide={0}
//           allowTouchMove
//         >  
//             <Controls album={album}/>

//             <CarouselNavigationLeft />
//             <CarouselNavigationRight />

//             {album && album.map((albumItem) => (
//                 <SwiperSlide>
//                   {
//                     cardType ? 
//                     (
//                       <Card 
//                       key={albumItem.id}
//                       imgLink={albumItem.image} 
//                       number={albumItem.follows} 
//                       genreName={albumItem.title}
//                       numberSongs={albumItem.songs.length}
//                       cardType={cardType}
//                       />
//                     ) :
//                     (
//                       <Card
//                       key={albumItem.id}
//                       imgLink={albumItem.image}
//                       number={albumItem.likes}
//                       genreName={albumItem.title}
//                       numberSongs={""}
//                       cardType={cardType}
//                       />
//                     )
//                   }
//                 </SwiperSlide>
//             ))}

//         </Swiper>
//     </div>
//   );
// };

// export default Carousel;
return (
  <div className={styles.wrapper}>
    <Swiper
      modules={{ Navigation }}
      spaceBetween={40}
      slidesPerView={6}
      style={{ padding: "20px 30px" }}
      initialSlide={2} // Adjust this value based on your requirement
      allowTouchMove
    >
      <Controls album={album} />

      <CarouselNavigationLeft />
      <CarouselNavigationRight />

      {album &&
        album.map((albumItem) => (
          <SwiperSlide key={albumItem.id}>
            {cardType ? (
              <Card
                key={albumItem.id}
                imgLink={albumItem.image}
                number={albumItem.follows}
                genreName={albumItem.title}
                numberSongs={albumItem.songs.length}
                cardType={cardType}
              />
            ) : (
              <Card
                key={albumItem.id}
                imgLink={albumItem.image}
                number={albumItem.likes}
                genreName={albumItem.title}
                numberSongs={""}
                cardType={cardType}
              />
            )}
          </SwiperSlide>
        ))}
    </Swiper>
  </div>
);
}

export default Carousel;