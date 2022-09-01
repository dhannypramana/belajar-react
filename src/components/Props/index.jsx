import React from 'react';
import './index.css';

const Props = props => {
  return (
    <div className='card'>
      <img className='image' src={props.image} alt={props.channelName} />
      <div className='textWrapper'>
        <p className='text'>{props.title}</p>
        <p>{props.channelName}</p>
      </div>
    </div>
  );
};

export default Props;