import React from 'react';

import './Footer.css';
import Icon from '../UI/Icon/Icon'

const icons = [
  { type: 'fab', icon: 'facebook' },
  { type: 'fab', icon: 'instagram' },
  { type: 'fab', icon: 'twitter' },
  { type: 'fab', icon: 'youtube' }
];

const footer = (props) => {
  return (
    <div className="footer">
      <div className="footer__container content__container">
        <div className="footer__text">
          <p className="margin_0"><b> ¡Habla con nosotros! </b></p>
          <p className="margin_0"> ¿Dudas? Envía un email a talks@hotmart.com </p>
        </div>

        <div className="footer__logo-icons__container">
          <div className="footer__hotmart-logo__container">
            <img className="footer__hotmart-logo" src={require('../../assets/images/hotmart-footer.png')}/>
          </div>
              
          <nav className="footer__icons">
            {
              icons.map(ic => (
                <Icon 
                  type={ic.type} 
                  icon={ic.icon}/>
              ))
            }
          </nav>
        </div>
        
      </div>
    </div>
  )
}

export default footer;