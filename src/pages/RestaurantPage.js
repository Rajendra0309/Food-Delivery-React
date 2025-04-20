import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { restaurants, menuItems } from '../data/mockData';
import MenuItemCard from '../components/MenuItemCard';
import './RestaurantPage.css';

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurantId = parseInt(id);
  const [imgError, setImgError] = useState(false);
  
  const restaurant = restaurants.find(r => r.id === restaurantId);
  const menu = menuItems[restaurantId] || [];

  const fallbackImage = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";
  
  if (!restaurant) {
    return (
      <div className="container">
        <div className="error-message">
          <h2>Restaurant not found</h2>
          <p>Sorry, the restaurant you are looking for does not exist.</p>
        </div>
      </div>
    );
  }
  
  const bannerStyle = {
    backgroundImage: `url(${imgError ? fallbackImage : restaurant.image})`
  };

  return (
    <div className="container">
      <div className="restaurant-banner" style={bannerStyle}>
        <img 
          src={imgError ? fallbackImage : restaurant.image} 
          alt={restaurant.name}
          onError={() => setImgError(true)}
          style={{ display: 'none' }}
        />
        <div className="restaurant-banner-overlay">
          <div className="container">
            <h1 className="restaurant-banner-title">{restaurant.name}</h1>
            <div className="restaurant-banner-meta">
              <span className="restaurant-rating">★ {restaurant.rating}</span>
              <span className="restaurant-delivery-time">{restaurant.deliveryTime}</span>
              <span className="restaurant-delivery-fee">₹{restaurant.deliveryFee} delivery</span>
              <span className="restaurant-cuisine">{restaurant.cuisine}</span>
            </div>
            <p className="restaurant-description">{restaurant.description}</p>
          </div>
        </div>
      </div>
      
      <section className="menu-section">
        <h2>Menu</h2>
        <div className="menu-items">
          {menu.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantPage;
