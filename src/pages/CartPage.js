import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import CartItem from '../components/CartItem';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, getCartTotal, clearCart } = useCart();
  
  if (cartItems.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/" className="btn btn-primary">Browse Restaurants</Link>
        </div>
      </div>
    );
  }
  
  const deliveryFee = 49;
  const tax = Math.round(getCartTotal() * 0.05);
  const total = getCartTotal() + deliveryFee + tax;
  
  return (
    <div className="container">
      <div className="cart-page">
        <h1 className="cart-title">Your Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            <div className="cart-header">
              <span className="header-item">Item</span>
              <span className="header-quantity">Quantity</span>
              <span className="header-total">Total</span>
            </div>
            
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            
            <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
          </div>
          
          <div className="cart-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{getCartTotal()}</span>
            </div>
            
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>
            
            <div className="summary-row">
              <span>GST (5%)</span>
              <span>₹{tax}</span>
            </div>
            
            <div className="summary-row total-row">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
            
            <Link to="/checkout" className="btn btn-primary checkout-btn">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
