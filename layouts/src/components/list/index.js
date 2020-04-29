import React from 'react';
import List from './list';

const Mylist = ({some_list}) => (
    <List 
      collection={some_list}
      textKey="excerpt" 
      titleKey="title" 
    /> 
);

export default Mylist;
