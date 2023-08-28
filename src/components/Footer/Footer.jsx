// Footer.jsx
import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/1.83arqs/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className={styles.socialIcon} />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5493413751131" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={styles.socialIcon} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

//<p className={styles.footerText}>© {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
