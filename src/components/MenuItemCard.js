import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import './MenuItemCard.css';

const MenuItemCard = ({ item }) => {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const { id, name, description, price, image } = item;
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  
  const fallbackImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80";
  
  const cartItem = cartItems.find(i => i.id === id);
  const itemQuantity = cartItem ? cartItem.quantity : 0;
  
  const handleAddToCart = () => {
    addToCart(item);
  };
  
  const handleRemoveFromCart = () => {
    if (itemQuantity === 1) {
      removeFromCart(id);
    } else {
      updateQuantity(id, itemQuantity - 1);
    }
  };
  
  return (
    <div className="menu-item-card">
      <div className="menu-item-image">
        <img 
          src={imgError ? fallbackImage : image} 
          alt={name} 
          onError={() => setImgError(true)}
          onLoad={() => setImgLoaded(true)}
          style={{ opacity: imgLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
        />
      </div>
      <div className="menu-item-info">
        <h3 className="menu-item-name">{name}</h3>
        <p className="menu-item-description">{description}</p>
        <div className="menu-item-footer">
          <span className="menu-item-price">₹{price}</span>
          
          {itemQuantity === 0 ? (
            <button 
              onClick={handleAddToCart} 
              className="btn btn-primary add-to-cart-btn"
            >
              Add to Cart
            </button>
          ) : (
            <div className="quantity-control">
              <button 
                className="quantity-btn" 
                onClick={handleRemoveFromCart}
              >
                −
              </button>
              <span className="quantity">{itemQuantity}</span>
              <button 
                className="quantity-btn" 
                onClick={handleAddToCart}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
