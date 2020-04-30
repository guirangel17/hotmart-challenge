import React from 'react';

import './ImageBullet.css';


const imageBullet = (props) => {
  let imagePath = require('../../../assets/images/person-' + props.personNumber + '.png');

  return (
    <div>
      <a href="#" class="bullet">
        <span class="bullet__wrapper">
         <img src={imagePath} />
        </span>
      </a>
      <p class="name"> { props.name }  </p>
      <p class="description"> { props.description} </p> 
    </div>
  )
}

export default imageBullet;