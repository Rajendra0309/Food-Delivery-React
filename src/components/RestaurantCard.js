import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  const { id, name, image, rating, deliveryTime, deliveryFee, cuisine, description } = restaurant;
  const [imgError, setImgError] = useState(false);

  const fallbackImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  
  return (
    <Link to={`/restaurant/${id}`} className="restaurant-card">
      <div className="restaurant-image">
        <img 
          src={imgError ? fallbackImage : image} 
          alt={name} 
          onError={() => setImgError(true)}
        />
      </div>
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <div className="restaurant-meta">
          <span className="restaurant-rating">★ {rating}</span>
          <span className="restaurant-delivery-time">{deliveryTime}</span>
          <span className="restaurant-delivery-fee">₹{deliveryFee} delivery</span>
        </div>
        <p className="restaurant-cuisine">{cuisine}</p>
        <p className="restaurant-description">{description}</p>
      </div>
    </Link>
  );
};

export default RestaurantCard;
