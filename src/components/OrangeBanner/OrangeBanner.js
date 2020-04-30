import React from 'react';

import './OrangeBanner.css';
import Button from '../UI/Button/Button'

const orangeBanner = () => {
  return (
    <div>
      <div className="header__banner">
        <div className="content__container header__banner__content">

          <img className="hotmart-talks-picture" src={require('../../assets/images/hotmart-talks.png')}/>
            
          <div className= "header__madrid__container">
            <div className="header__madrid__line header__madrid__1st__line"></div>

            <p className="header__place-text"> Madrid </p>
            <div className="header__madrid__line header__madrid__2nd__line"></div>
          </div>
          <div>
            <p className="header__date-text"> Jueves 30 de noviembre de 2017 </p>
            <p className="header__place-text"> Lamucca de prado | 19:30H </p>
          </div>
          
        </div>

        <div className="button__container">
          <Button> QUIERO INSCRIBIRME AHORA </Button>
        </div>
        
      </div>	

      <div class="header__information">
        <div class="content__container header__information__content">
          <p class="header__biggest-text"> Share knowledge, make friends and have fun. </p>

          <div class="header__smallest-text__container">
            <p class="header__smallest-text">
              <b>Hotmart Talks</b> es la oportunidad de participar en un Happy Hour y aprovechar para conocer a personas que se dedican al emprendimiento, 
              los productos digitales y el mercado de la innovación.
            </p>

            <p class="header__smallest-text">
              Ideado y organizado por Hotmart, <b>"Talks"</b> tiene lugar en bares o sitios que amalgaman happy hour con aprendizaje y cuenta 
              siempre con la presencia de invitados especiales, proporcionando una experiencia placentera para todos. 
              Es un momento dedicado a conversar, hacer amigos y crecer.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default orangeBanner;