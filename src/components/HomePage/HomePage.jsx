import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';

import myImage from '../../images/Ima1.png';
import myImage1 from '../../imagesHome/Ima6.png';
import myImage2 from '../../imagesHome/Ima2a.png';
import myImage3 from '../../imagesHome/Ima4a.png';
import myImage4 from '../../images/Ima1.png';

import styles from './home.module.css';

// Importa el módulo de Scrollbar
import { Scrollbar } from 'swiper/modules';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.introText}></p>
      
      {/* Swiper con Scrollbar */}
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {/* Diapositiva 1: Imagen */}
        <SwiperSlide>
          <img src={myImage} alt="Mi Imagen" className={styles.homeImage} />
        </SwiperSlide>

        {/* Diapositiva 2: Otro contenido */}
        <SwiperSlide>
          <img src={myImage1} alt="Mi Imagen" className={styles.homeImage} />
        </SwiperSlide>

        {/* Diapositiva 3: Otro contenido */}
        <SwiperSlide>
          <img src={myImage2} alt="Mi Imagen" className={styles.homeImage} />
        </SwiperSlide>

        <SwiperSlide>
          <img src={myImage3} alt="Mi Imagen" className={styles.homeImage} />
        </SwiperSlide>
        {/* Agrega más diapositivas según sea necesario */}
      </Swiper>
    </div>
  );
};

export default HomePage;
