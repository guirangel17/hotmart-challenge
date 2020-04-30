import React from 'react';

import './Lecturers.css';
import ImageBullet from '../UI/ImageBullet/ImageBullet'
import person1 from '../../assets/images/person-1.png';

const lecturersList = [
  { name: 'Raul Maraña', description: ['Business Development Leader.', <b> Europe | Hotmart </b>], personNumber: 1 },
  { name: 'Alejandro Novás', description: ['Co-fundador de Mundo Entrenamiento y fundador de', <b> Vivir de tu Passión </b>], personNumber: 2 },
  { name: 'Borja Montón', description: 'Creador de contenido, Ilusionista profesional y joven emprendededor', personNumber: 3 }
];

const lecturers = (props) => {
  return (
    <div className="lecturers content__container">
      {
        lecturersList.map(lecturer => (
          <ImageBullet 
            name={lecturer.name} 
            description={lecturer.description}
            personNumber={lecturer.personNumber}
          />
        ))
      }
    </div>
  )
}

export default lecturers;