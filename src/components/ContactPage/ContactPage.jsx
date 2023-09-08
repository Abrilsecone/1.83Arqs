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
        <p>Dirección: Rivadavia 1183, Villa Constitucion.</p>
        <p>Teléfono: +54 9 341-3751131</p>
        <p>Correo Electrónico: 1.83arquitectos@gmail.com</p>
      </div>
      
      <div className={styles.contactForm}>
        <h2>Formulario de Contacto</h2>
        <form action="https://formsubmit.co/1.83arquitectos@gmail.com" method="POST">
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
          <input type="hidden" name="_next" value={window.location.href} />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
