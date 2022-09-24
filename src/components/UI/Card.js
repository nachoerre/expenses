import React from 'react';
import './Card.css'

const Card = (props) => {
  const newclasses = 'card ' + props.className;
  return <div className={newclasses}>{props.children}</div>;
  
}

export default Card;