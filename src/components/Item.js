import React from 'react';

function Item({ item, convertToUSD, onShowItem, onAdd }) {
  const priceInUSD = convertToUSD(item.price);

  return (
    <div className='item'>
      <img src={`./img/${item.img}`} onClick={() => onShowItem(item)} />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price} UAH / {priceInUSD} USD</b>
      <div className='add-to-cart' onClick={() => onAdd(item)}>+</div>
    </div>
  );
}

export default Item;
