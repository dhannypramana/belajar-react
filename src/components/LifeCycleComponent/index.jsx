import React, { useEffect, useState } from 'react';

const LifeCycle = () => {
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(0);

  //replacement for ComponentDidMount
  useEffect(() => {

  }, []);

  // Replacement for ComponentDidUpdate
  useEffect(() => {

  }, [count]);

  useEffect(() => {

  });

  // Replacement for ComponentDidUnmount
  useEffect(() => {
    console.log('init carousel');

    return () => {
      console.log('destroy carousel');
    };
  });

  return (
    <>
      <h1 id='hola'>Hello, World!</h1>
      <button onClick={() => setIsClick(true)}>Click Me</button>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <p>Count : {count}</p>
    </>
  );
};


export default LifeCycle;