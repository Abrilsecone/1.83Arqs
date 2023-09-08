import React, { useState } from 'react';
import styles from './contact.module.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formsubmit.co/1.83arquitectos@gmail.com', {
        method: 'POST',
        body: new FormData(e.target),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Mensaje enviado correctamente');
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        setMessage('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error(error);
      setMessage('Error inesperado');
    }
  };

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
        {message && <p className={styles.message}>{message}</p>}
        <form action="https://formsubmit.co/1.83arquitectos@gmail.com" method="POST">
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required onChange={handleInputChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required onChange={handleInputChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="4" required onChange={handleInputChange} />
          </div>
          <button type="submit" className={styles.submitButton}>Enviar Mensaje</button>
          <input type="hidden" name="_next" value="https://1-83arqs.netlify.app/" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
