import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { id, name, price, quantity, image } = item;
  const [imgError, setImgError] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80";
  
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img 
          src={imgError ? fallbackImage : image} 
          alt={name} 
          onError={() => setImgError(true)}
        />
      </div>
      <div className="cart-item-details">
        <h4 className="cart-item-name">{name}</h4>
        <p className="cart-item-price">${price.toFixed(2)}</p>
      </div>
      <div className="cart-item-quantity">
        <button 
          onClick={() => updateQuantity(id, quantity - 1)} 
          className="quantity-btn"
        >
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button 
          onClick={() => updateQuantity(id, quantity + 1)} 
          className="quantity-btn"
        >
          +
        </button>
      </div>
      <div className="cart-item-total">
        ${(price * quantity).toFixed(2)}
      </div>
      <button 
        onClick={() => removeFromCart(id)} 
        className="remove-btn"
      >
        ×
      </button>
    </div>
  );
};

export default CartItem;
