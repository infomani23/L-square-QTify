import React, { useEffect, useState } from "react";

import { useSwiper } from "swiper/react";


import styles from "./CarouselNavigationLeft.css";
import {ReactComponent as LeftArrow} from "../../../Assests/Leftarrow.png";


function CarouselNavigationLeft() {
    const swiper= useSwiper();
    const [isBeginning, setIsBeginning]= useState(true);

    useEffect(() => {
        if (swiper) {
            setIsBeginning(swiper.isBeginning || true);

            const handleSlideChange = () => {
                setIsBeginning(swiper.isBeginning || true);
            };

            swiper.on("slideChange", handleSlideChange);

            return () => {
                swiper.off("slideChange", handleSlideChange);
            };
        }
    }, [swiper]);

    return (
        <div className={styles.leftNavigation}>
            {
               !isBeginning && <LeftArrow onClick={()=> swiper.slidePrev()} />
            }
        </div>
    )
}

export default CarouselNavigationLeft;