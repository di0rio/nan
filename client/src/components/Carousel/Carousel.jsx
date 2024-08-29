import styles from "./Carousel.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import jogo from "../../assets/novidade.png";
import site from "../../assets/novidade.png";
import jogo2 from "../../assets/novidade.png";

const Carousel = () => {
  const slides = [jogo, site, jogo2];

  return (
    <div className={styles.Container}>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination
        loop
        
      >
        {slides.map((slide) => (
          <SwiperSlide>
            <img src={slide} alt={slides} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
