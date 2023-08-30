import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import styles from './NavBar.module.css';
import logoImage from '../../images/logoArqNegroL.png';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); 
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={isMenuOpen ? styles.mobileMenu : styles.hiddenMenu}>
          <a href="#featured" onClick={() => scrollToSection('featured')}>
            Proyectos
          </a>
          <a href="#about-us" onClick={() => scrollToSection('about-us')}>
            El equipo
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>
            Contacto
          </a>
        </div>
        <FaBars className={styles.menuIcon} onClick={toggleMenu} />
      </div>
      <div className={styles.middleSection}>
        <a href="/">
          <img src={logoImage} alt="Logo" className={styles.logo} />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
