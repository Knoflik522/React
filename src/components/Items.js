import React from 'react';
import Item from './Item';

function Items({ items, onShowItem, onAdd, convertToUSD }) {
  return (
    <main>
      {items.map(el => (
        <Item 
          key={el.id} 
          item={el} 
          onShowItem={onShowItem} 
          onAdd={onAdd} 
          convertToUSD={convertToUSD} 
        />
      ))}
    </main>
  );
}

export default Items;
