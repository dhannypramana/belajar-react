import React, { useEffect, useState } from 'react';
import Counter from '../Counter';

const LifeCycle = () => {
  const [isClick, setIsClick] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('init carousel');
    return () => {
      console.log('destroy carousel');
    }
  }, [])

  return (
    <>
      <div id="hola">Hello, World!</div>
      <button onClick={() => {
        setIsClick(true);
      }}>Click Me</button>
      <div>
        <h1>{count}</h1>
        <button type="submit" onClick={() => setCount(count + 1)}>Klik</button>
    </div>
    </>
  );
};

export default LifeCycle;