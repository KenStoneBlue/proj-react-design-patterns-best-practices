import React from 'react';
import { string } from 'prop-types';

const Item = ({ text, title, i }) => (
  <li key={i}>
    <h1>{title} {i}</h1>
    {text && <p>{text}</p>}
  </li>
);
 
Item.propTypes = {
  text: string,
  title: string
};

export default Item;
