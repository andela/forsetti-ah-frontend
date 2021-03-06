import React from 'react';
import ListItem from './ListItem';

const HorizontalListItems = ({ items, className }) => (
  <ul className={className}>
    {items.map(item => <ListItem key={item.no} name={item.name} />)}
  </ul>
);

export default HorizontalListItems;
