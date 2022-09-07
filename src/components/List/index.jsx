import React from 'react';

const List = () => {
  const fruits = ['Apel', 'Mangga', 'Anggur', 'Kelengkeng', 'Markisa'];

  return (
    <>
      <ul>
        {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
      </ul>
    </>
  );
};

export default List;