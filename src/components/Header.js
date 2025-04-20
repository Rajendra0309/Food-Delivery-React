import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useTheme } from '../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const { getItemCount } = useCart();
  const { darkMode, toggleTheme, setSystemTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showThemeOptions, setShowThemeOptions] = useState(false);

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
            <li className="theme-selector">
              <button 
                className="theme-toggle" 
                onClick={() => setShowThemeOptions(!showThemeOptions)} 
                aria-label="Theme options"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              
              {showThemeOptions && (
                <div className="theme-dropdown">
                  <button 
                    className={`theme-option ${theme === 'light' ? 'active' : ''}`} 
                    onClick={() => {
                      localStorage.setItem('theme', 'light');
                      toggleTheme();
                      setShowThemeOptions(false);
                    }}
                  >
                    Light
                  </button>
                  <button 
                    className={`theme-option ${theme === 'dark' ? 'active' : ''}`} 
                    onClick={() => {
                      localStorage.setItem('theme', 'dark');
                      toggleTheme();
                      setShowThemeOptions(false);
                    }}
                  >
                    Dark
                  </button>
                  <button 
                    className={`theme-option ${!localStorage.getItem('theme') ? 'active' : ''}`} 
                    onClick={() => {
                      setSystemTheme();
                      setShowThemeOptions(false);
                    }}
                  >
                    System
                  </button>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
