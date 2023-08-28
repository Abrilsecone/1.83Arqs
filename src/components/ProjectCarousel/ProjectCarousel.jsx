import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import styles from './project-carousel.module.css';

const ProjectCarousel = ({ images }) => {
  return (
    <Carousel className={styles.carousel}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
