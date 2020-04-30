import React from 'react';
import { array } from 'prop-types';

const Button = ({ children }) => ( 
  <button className="btn">{children}</button> 
); 
 
Button.propTypes = { 
  children: array 
};

export default Button;
