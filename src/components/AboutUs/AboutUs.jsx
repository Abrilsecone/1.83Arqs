import React from 'react';
import styles from './AboutUs.module.css';
import person1Image from '../../imagesHome/luliiiii.png'; 
import person2Image from '../../imagesHome/delfii.jpg'; 


const teamMembers = [
  {
    name: 'Luciano Gimenez Bonaccorsi',
    description: "Arquitecto de 34 años, un profesional apasionado y altamente creativo en el ámbito de la arquitectura. Combina una energía juvenil con una valiosa experiencia en su campo. Su distinción radica en su enfoque innovador para el diseño y su habilidad para resolver problemas de manera eficaz y original.",
    image: person1Image,
  },
  {
    name: 'Delfina Bordoni',
    description: 'Arquitecta de 28 años, una profesional apasionada y altamente creativa en el campo de la arquitectura. Combina una energía juvenil con una valiosa experiencia en su campo. Su distinción radica en su enfoque innovador para el diseño y su habilidad para resolver problemas de manera eficaz y original. Su perspectiva única y su compromiso con la excelencia hacen de ella una líder destacada en la industria de la arquitectura',
    image: person2Image,

  },
];

const AboutUs = () => {
  return (
    <div className={styles.container}>
      <section className={styles.aboutUs}>
        <h1 className={styles.title}></h1>
        <div className={styles.teamMembers}>
          {teamMembers.map((member, index) => (
            <div key={index} className={`${styles.teamMember} ${styles.flipCard}`}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src={member.image} alt={member.name} className={styles.memberImage} />
                </div>
                <div className={styles.flipCardBack}>
                  <p>{member.description}</p>
                  <h3 className={styles.memberName}>{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
