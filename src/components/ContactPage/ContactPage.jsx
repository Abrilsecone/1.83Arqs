// components/ContactPage.js
import React from 'react';
import styles from './contact.module.css';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contáctanos</h1>
      <p>¿Tienes alguna pregunta o comentario? ¡No dudes en ponerte en contacto con nosotros!</p>
      
      <div className={styles.contactInfo}>
        <h2>Información de Contacto</h2>
        <p>Dirección: 123 Calle Arquitectura, Ciudad</p>
        <p>Teléfono: +123 456 7890</p>
        <p>Correo Electrónico: contacto@tuempresa.com</p>
      </div>
      
      <div className={styles.contactForm}>
        <h2>Formulario de Contacto</h2>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required />
          </div>
          <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
