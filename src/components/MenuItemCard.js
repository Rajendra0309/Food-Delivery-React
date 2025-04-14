import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './MenuItemCard.css';

const MenuItemCard = ({ item }) => {
  const { addToCart } = useCart();
  const { name, description, price, image } = item;
  const [imgError, setImgError] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80";
  
  const handleAddToCart = () => {
    addToCart(item);
  };
  
  return (
    <div className="menu-item-card">
      <div className="menu-item-image">
        <img 
          src={imgError ? fallbackImage : image} 
          alt={name} 
          onError={() => setImgError(true)}
        />
      </div>
      <div className="menu-item-info">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
        <div className="menu-item-footer">
          <span className="menu-item-price">${price.toFixed(2)}</span>
          <button onClick={handleAddToCart} className="btn btn-primary add-to-cart-btn">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
