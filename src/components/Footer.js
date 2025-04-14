import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>FoodDelivery</h3>
          <p>Delicious food delivered to your doorstep.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@fooddelivery.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} FoodDelivery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
