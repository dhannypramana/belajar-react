import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button type="submit" onClick={() => setCount(count + 1)}>KlikKuh</button>
    </div>
  );
}

export default Counter;
