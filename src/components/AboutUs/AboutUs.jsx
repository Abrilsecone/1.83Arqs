
import React from 'react';
import styles from './AboutUs.module.css';
import person1Image from '../../imagesHome/luliiiii.png'; 

const teamMembers = [
  {
    name: 'Luciano Gimenez Bonaccorsi',
    description: 'Un arquitecto joven de 34 años es un profesional apasionado y creativo en el campo de la arquitectura. Con una mezcla de energía juvenil y experiencia, se destaca por su enfoque innovador en el diseño y la resolución de problemas.',
    image: person1Image,
  },
  {
    name: 'Nombre Persona 2',
    description: 'Descripción de la persona 2.',
  },
  // Puedes agregar más miembros del equipo aquí
];

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <h1 className={styles.title}></h1>
      <div className={styles.teamMembers}>
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.teamMember}>
            <img src={member.image} alt={member.name} className={styles.memberImage} />
            <h3>{member.name}</h3>
            <p>{member.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
