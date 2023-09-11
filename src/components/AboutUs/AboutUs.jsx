import React from 'react';
import styles from './AboutUs.module.css';
import person1Image from '../../imagesHome/luliiiii.png'; 
import person2Image from '../../imagesHome/person2Image.png'; 


const teamMembers = [
  {
    name: 'Luciano Bonaccorsi',
    description: 'Un profesional apasionado y creativo en el campo de la arquitectura. Con una mezcla de energía juvenil y experiencia, se destaca por su enfoque innovador en el diseño y la resolución de problemas.',
    image: person1Image,
  },
  {
    name: 'Delfina Bordoni',
    description: "Una arquitecta talentosa y comprometida, conocida por su enfoque creativo y su habilidad para abordar proyectos con soluciones innovadoras y prácticas.",
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
            <div key={index} className={`${styles.teamMember} ${styles[`teamMember${index}`]} ${styles.flipCard}`}>
              <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                  <img src={member.image} alt={member.name} className={styles.memberImage} />
                  <h3 className={styles.memberName}>{member.name}</h3>
                </div>
                <div className={styles.flipCardBack}>
                  <p>{member.description}</p>
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
