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

const PropsOutput = () => {
  return (
    <div className='cardWrapper'>
      <Props
        image="https://i.ytimg.com/vi/fU-csrkqwbU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8niMcS6op4DiLTELppx1x42oiQg"
        title="Between The Margins Ep. 02: Esensi Manusia dalam Mendesain a la Studio Woork"
        channelName="Grafis Masa Kini" />
      <Props
        image="https://i.ytimg.com/vi/LBDDjOl4-xQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMfTdlNZUFZYRqinfML_2AiFaquw"
        title="渚とカルマは、誰もが息をのむほどのプロの暗殺者の技で誰かの首に鋭いナイフを突きつけて威嚇します"
        channelName="H Media" />
      <Props
        image="https://i.ytimg.com/vi/vSis_AMDhGo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7IxUfwLNMEx8k07koIdReMRf3Qg"
        title="3 TEKNIK MAGIC YANG KAMU HARUS BISA"
        channelName="Rynku Viceroy" />
      <Props 
        title="Dota : Game Terbaik Sepanjang Masa Mengalahkan Mobile Legend" 
        channelName="Under Expert" />
    </div>
  );
}

Props.defaultProps = {
  image: "https://dummyimage.com/275x154/ffffff/000000&text=No+Image",
  title: "No Title",
  channelName: "No Channel Name"
}

export default PropsOutput;