import React, { useEffect, useState } from 'react';
import './index.css';
import Cart from '../../assets/images/shopping-cart.png';

const Product = props => {
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity(quantity + 1);
    if (quantity >= props.stock) {
      setQuantity(1);
    }
  };

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    handleCounterChange();
  }, [quantity]);

  const handleCounterChange = () => {
    props.onCounterChange(quantity);
  };

  return (
    <div className="card">
      <div className="imageProduct">
        <img className="image" 
            src={props.image} 
            alt="gambar produk" />
      </div>
      <div className="descriptionProduct">
        <p>{props.title}</p>
        <p>{props.price}</p>
        <p>Stok Barang : {props.stock}</p>
      </div>
      <div className="buyProduct">
        <button type="submit" onClick={handleMinus}>-</button>
        <input type="text" value={quantity} />
        <button type="submit" onClick={handlePlus}>+</button>
      </div>
    </div>
  );
};

const ProductOutput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleCounterChange = newValue => {
    console.log(newValue);
    setQuantity(newValue);
  };

  return (
    <>
      <div className="cardWrapper">
        <Product 
          image="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/11/5/abd9802a-a5d6-4c80-9d8e-c8459cd7b4db.jpg.webp?ect=4g" 
          title="Kaos Pria Kizaru T-Shirt Anime Tensura RIMURU TEMPEST"
          price="89.900" stock={15} onCounterChange={value => handleCounterChange(value)}/>
      </div>
      <div className="cartWrapper">
        <img src={Cart} alt="Cart" className="cart-image" />
        <div className="cart-counter">{quantity}</div>
      </div>
    </>
  );
};

export default ProductOutput;