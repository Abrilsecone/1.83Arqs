import React from 'react';
import myImage from '../../images/Ima1.png';
import styles from './home.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.introText}>
      </p>
      <img src={myImage} alt="Mi Imagen" className={styles.homeImage}/>
    </div>
  );
};

export default HomePage;
