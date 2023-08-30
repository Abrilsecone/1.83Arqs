import React from 'react';
import styles from './OtherProjects.module.css';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
import image1 from '../../imagesHome/Ima1.png';
import image2 from '../../imagesHome/Ima2.png';
import image3 from '../../imagesHome/Ima3.png';

const OtherProjects = () => {
  const projects = [
    {
      title: 'Casa Fran',
      description: 'Vivienda construida bajo el programa Pro.Cre.Ar, que combina con maestría elementos tradicionales y contemporáneos. Esta residencia única se destaca por su exterior de ladrillo visto y paneles de chapa, creando una estética distintiva que mezcla lo rústico con lo moderno.',
      images: [image1, image2, image3],
    },
    {
      title: 'Proyecto B',
      description: 'Descripción del Proyecto B.',
      images: [image1, image2, image3],
    },
    {
      title: 'Proyecto C',
      description: 'Descripción del Proyecto C.',
      images: [image1, image2, image3],
    },
    {
      title: 'Proyecto D',
      description: 'Descripción del Proyecto D.',
      images: [image1, image2, image3],
    },
  ];

  return (
    <div className={styles.containerP}>
      <h1 className={styles.titleP}></h1>
      <div className={styles.projectListP}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCardP}>
            <ProjectCarousel images={project.images} />
            <h2 className={styles.projectTitleP}>{project.title}</h2>
            <p className={styles.projectDescriptionP}>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;