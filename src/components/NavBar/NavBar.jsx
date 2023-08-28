// NavBar.jsx
import React from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './NavBar.module.css';
import logoImage from '../../images/logoArqNegroL.png';

const NavBar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
      </div>
      <div className={styles.middleSection}>
        <a href="#home">
          <img src={logoImage} alt="Logo" className={styles.logo} />
        </a>
      </div>
      <div className={styles.rightSection}>
        <FaBars className={styles.menuIcon} />
      </div>
    </nav>
  );
};

export default NavBar;
