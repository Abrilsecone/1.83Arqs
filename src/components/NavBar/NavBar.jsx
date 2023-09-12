import React from 'react';
import { Link, useMatch } from 'react-router-dom'; 
import styles from './NavBar.module.css';
import logoImage from '../../images/logoArqNegroL.png';

const NavBar = () => {
  const isFeaturedActive = useMatch('/featured');
  const isAboutUsActive = useMatch('/about-us');
  const isContactActive = useMatch('/contact');

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <Link to="/featured" className={`${styles.navLink} ${isFeaturedActive ? styles.activeNavLink : ''}`}>
          Proyectos
        </Link>
        <Link to="/about-us" className={`${styles.navLink} ${isAboutUsActive ? styles.activeNavLink : ''}`}>
          El equipo
        </Link>
        <Link to="/contact" className={`${styles.navLink} ${isContactActive ? styles.activeNavLink : ''}`}>
          Contacto
        </Link>
      </div>
      <div className={styles.middleSection}>
        <Link to="/">
          <img src={logoImage} alt="Logo" className={styles.logo} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
