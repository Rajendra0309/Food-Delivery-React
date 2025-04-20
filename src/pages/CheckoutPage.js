import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit',
    upiId: '',
    upiApp: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const selectUpiApp = (app) => {
    setFormData(prev => ({
      ...prev,
      upiApp: app
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOrderPlaced(true);
      clearCart();
      
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1500);
  };
  
  const subtotal = getCartTotal();
  const deliveryFee = 49;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax;
  
  if (isOrderPlaced) {
    return (
      <div className="container">
        <div className="order-success">
          <h2>Order Placed Successfully!</h2>
          <p>Thank you for your order. You will receive a confirmation email shortly.</p>
          <p>Redirecting to home page...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container">
      <div className="checkout-page">
        <h1 className="checkout-title">Checkout</h1>
        
        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>Delivery Information</h3>
              
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input 
                  type="text" 
                  id="address" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input 
                    type="text" 
                    id="city" 
                    name="city" 
                    value={formData.city} 
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="zipCode">PIN Code</label>
                  <input 
                    type="text" 
                    id="zipCode" 
                    name="zipCode" 
                    value={formData.zipCode} 
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
            </div>
            
            <div className="form-section">
              <h3>Payment Method</h3>
              
              <div className="payment-methods">
                <div className="payment-method">
                  <input 
                    type="radio" 
                    id="credit" 
                    name="paymentMethod" 
                    value="credit"
                    checked={formData.paymentMethod === 'credit'}
                    onChange={handleChange}
                  />
                  <label htmlFor="credit">Credit/Debit Card</label>
                </div>
                
                <div className="payment-method">
                  <input 
                    type="radio" 
                    id="upi" 
                    name="paymentMethod" 
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                  />
                  <label htmlFor="upi">UPI Payment</label>
                </div>
                
                <div className="payment-method">
                  <input 
                    type="radio" 
                    id="paypal" 
                    name="paymentMethod" 
                    value="paypal"
                    checked={formData.paymentMethod === 'paypal'}
                    onChange={handleChange}
                  />
                  <label htmlFor="paypal">PayPal</label>
                </div>
                
                <div className="payment-method">
                  <input 
                    type="radio" 
                    id="cash" 
                    name="paymentMethod" 
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleChange}
                  />
                  <label htmlFor="cash">Cash on Delivery</label>
                </div>
              </div>
              
              {formData.paymentMethod === 'credit' && (
                <div className="credit-card-details">
                  <div className="form-group">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" />
                  </div>
                  
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="expiry">Expiry Date</label>
                      <input type="text" id="expiry" placeholder="MM/YY" />
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="cvv">CVV</label>
                      <input type="text" id="cvv" placeholder="123" />
                    </div>
                  </div>
                </div>
              )}
              
              {formData.paymentMethod === 'upi' && (
                <div className="upi-details">
                  <div className="form-group">
                    <label htmlFor="upiId">UPI ID</label>
                    <input 
                      type="text" 
                      id="upiId" 
                      name="upiId" 
                      placeholder="yourname@upi" 
                      value={formData.upiId}
                      onChange={handleChange}
                    />
                  </div>
                  <p className="upi-app-label">Select UPI App:</p>
                  <div className="upi-app-grid">
                    <button
                      type="button"
                      className={`upi-app-btn ${formData.upiApp === 'gpay' ? 'active' : ''}`}
                      onClick={() => selectUpiApp('gpay')}
                    >
                      Google Pay
                    </button>
                    <button
                      type="button"
                      className={`upi-app-btn ${formData.upiApp === 'phonepe' ? 'active' : ''}`}
                      onClick={() => selectUpiApp('phonepe')}
                    >
                      PhonePe
                    </button>
                    <button
                      type="button"
                      className={`upi-app-btn ${formData.upiApp === 'paytm' ? 'active' : ''}`}
                      onClick={() => selectUpiApp('paytm')}
                    >
                      Paytm
                    </button>
                    <button
                      type="button"
                      className={`upi-app-btn ${formData.upiApp === 'bhim' ? 'active' : ''}`}
                      onClick={() => selectUpiApp('bhim')}
                    >
                      BHIM
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary place-order-btn"
              disabled={isSubmitting || (formData.paymentMethod === 'upi' && (!formData.upiId || !formData.upiApp))}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </button>
          </form>
          
          <div className="order-summary">
            <h3>Order Summary</h3>
            
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
