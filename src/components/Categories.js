import React, { useState } from 'react';
import useLogState from '../hooks/useLogState';

function Categories({ chooseCategory }) {
  const [categories] = useState([
    { key: 'all', name: 'All' },
    { key: 'chairs', name: 'Chairs' },
    { key: 'tables', name: 'Tables' },
    { key: 'beds', name: 'Beds' },
    { key: 'sofas', name: 'Sofas' },
    { key: 'bookcases', name: 'Bookcases' },
    { key: 'loveseats', name: 'Loveseats' },
  ]);

  useLogState(categories);

  return (
    <div className='categories'>
      {categories.map(el => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}

export default Categories;
