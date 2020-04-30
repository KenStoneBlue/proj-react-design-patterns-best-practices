import React from 'react';
import { oneOfType, array, element } from 'prop-types';

const Button = ({ children }) => ( 
  <button className="btn">{children}</button> 
); 
 
Button.propTypes = { 
  children: oneOfType([ 
    array, 
    element 
  ])
};

export default Button;
