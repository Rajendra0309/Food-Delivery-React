import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const { getItemCount } = useCart();
  const { darkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <h1>FoodDelivery</h1>
        </Link>
        
        <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li>
              <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
                Cart 
                {getItemCount() > 0 && <span className="cart-badge">{getItemCount()}</span>}
              </Link>
            </li>
            <li>
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
