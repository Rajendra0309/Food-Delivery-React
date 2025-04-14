import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  
  const addToCart = (item, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(i => i.id === item.id);
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
  };
  
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };
  
  const updateQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCartItems([]);
  };
  
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity, 
      0
    );
  };
  
  const getItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  
  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};
