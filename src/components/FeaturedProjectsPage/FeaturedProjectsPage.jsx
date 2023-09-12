import React from 'react';
import styles from './featured-projects.module.css';
import { Link } from 'react-router-dom';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import image1 from '../../imagesHome/Ima1.png';
import image2 from '../../imagesHome/Ima2.png';
import image3 from '../../imagesHome/Ima3.png';
import image4 from '../../imagesHome/Ima4.png';
import image5 from '../../imagesHome/Ima5.png';
import image6 from '../../imagesHome/Ima6.png';
import image7 from '../../imagesHome/Ima7.png';
import image8 from '../../imagesHome/Ima8.png';
import image9 from '../../imagesHome/Ima9.png';
import image10 from '../../imagesHome/Ima10.png';
import image11 from '../../imagesHome/Ima11.png';
import image12 from '../../imagesHome/Ima12.png';

const FeaturedProjectsPage = () => {
  const projects = [
    {
      title: 'Casa Fran',
      description: 'Vivienda construida bajo el programa Pro.Cre.Ar, que combina con maestría elementos tradicionales y contemporáneos. Esta residencia única se destaca por su exterior de ladrillo visto y paneles de chapa, creando una estética distintiva que mezcla lo rústico con lo moderno.',
      images: [image1, image2, image3],
    },
    {
      title: 'Ampliación Juan',
      description: 'Esta casa experimentó una reforma de ladrillo que mejoró tanto su apariencia como su durabilidad. Los ladrillos originales fueron restaurados o reemplazados según fuera necesario, lo que le dio un aspecto fresco y renovado.El resultado es una casa con un exterior de ladrillo revitalizado y atractivo..',
      images: [image4, image5, image6],
    },
    {
      title: 'Fun Place',
      description: 'La remodelación de este local comercial transformó su aspecto tanto en el interior como en el exterior. Se adoptó un diseño moderno y funcional, con una distribución mejorada para un flujo de clientes más eficiente. Se utilizaron materiales y acabados de alta calidad para lograr un aspecto pulido y se incorporaron tecnologías avanzadas para mejorar la experiencia del cliente.',
      images: [image7, image8, image9],
    },
    {
      title: 'Oficina JS',
      description: 'La remodelación de esta oficina modernizó su diseño, mejoró la eficiencia del espacio y creó un entorno de trabajo más cómodo. Se incorporaron elementos contemporáneos y se utilizaron colores y materiales que fomentan la productividad y el bienestar de los empleados. La renovación también incluyó la actualización de sistemas tecnológicos para un funcionamiento más eficiente..',
      images: [image10, image11, image12],
    },
    // Agregar más proyectos según sea necesario
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>
      <div className={styles.projectList}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <ProjectCarousel images={project.images} />
            <h2 className={styles.projectTitle}>{project.title}</h2>
            <div className={styles.projectDescriptionContainer}>
              <p className={styles.projectDescription}>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjectsPage;


/*     <Link to="/otros-proyectos" className={`${styles.moreProjectsButton} ${styles.button}`}>
Ver más proyectos
</Link>*/