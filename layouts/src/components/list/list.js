import React from 'react';
import { array, string } from 'prop-types';
import Item from './item';

const List = ({ collection, textKey, titleKey }) => ( 
  <ul> 
    {collection.map(item => 
      <Item
        key={item.id} 
        text={item[textKey]} 
        title={item[titleKey]} 
      /> 
    )} 
  </ul> 
);

List.propTypes = { 
  collection: array, 
  textKey: string, 
  titleKey: string, 
}

export default List;
