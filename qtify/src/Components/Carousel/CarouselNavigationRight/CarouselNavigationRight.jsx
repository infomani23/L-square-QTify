import React, { useState, useEffect } from "react";
import styles from "./CarouselNavigationRight.css";
import {ReactComponent as RightArrow} from "../../../Assests/Rightarrow.png";
import { useSwiper } from "swiper/react";

function CarouselNavigationRight() {
    const swiper= useSwiper();
    const [isEnd, setIsEnd]= useState(true);

    useEffect(() => {
        if (swiper) {
            setIsEnd(swiper.isEnd || true);

            const handleSlideChange = () => {
                setIsEnd(swiper.isEnd || true);
            };

            swiper.on("slideChange", handleSlideChange);

            return () => {
                swiper.off("slideChange", handleSlideChange);
            };
        }
    }, [swiper]);

    return (
        <div className={styles.navigationRight}>
            {
                !isEnd && <RightArrow onClick={() => swiper.slideNext()} />
            }
        </div>
    )
}
export default CarouselNavigationRight;