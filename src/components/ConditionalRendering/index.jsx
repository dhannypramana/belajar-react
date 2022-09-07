import React, { useState, useEffect, useRef } from 'react';

const ConditionalRendering = () => {
  const [login, setLogin] = useState(false);
  
  // Manipulasi DOM di React menggunakan Ref (Reference)
  const judulRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      judulRef.current.textContent = "Aplikasi";
    }, 1000);
  }, [])

  return (
    <>
      <h1 ref={judulRef}>Application</h1>
      <p>{login && 'Kamu sudah login'}</p>
      {login ? <button onClick={() => setLogin(false)}>Logout</button> : <button onClick={() => setLogin(true)}>Login</button>}
    </>
  );
}

export default ConditionalRendering;