import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Icon.css';

const icon = (props) => {
  return (
    <button className="icon">
      <FontAwesomeIcon icon={[props.type, props.icon]} />
    </button>
  )
}

export default icon;