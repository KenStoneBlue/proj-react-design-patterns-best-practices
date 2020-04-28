import React from 'react';
import List from './list';

let some_list = [
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
  {'excerpt': 'the excerpt whatever', 'title': 'the title ofit'},
];

const Mylist = ({some_list}) => (
    <List 
      collection={some_list}
      textKey="excerpt" 
      titleKey="title" 
    /> 
);

export default Mylist;
