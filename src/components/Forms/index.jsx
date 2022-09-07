import React, { useState } from 'react';

const Forms = () => {
  const [nama, setNama] = useState('');

  const formSubmitted = e => {
    e.preventDefault();
    console.log(nama);
  };

  return (
    <>
      <form onSubmit={formSubmitted}>
        <div> 
          <label htmlFor="text">Nama</label><br />
          <input type="text" value={nama} onChange={e => setNama(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Forms;