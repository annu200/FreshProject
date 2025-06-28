import React, {createContext, useContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = product => {
    const exists = cartItems.find(item => item.id === product.id);
    if (exists) return; // optional: prevent duplicates
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = productId => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const getTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price, 0);
  };

  return (
    <CartContext.Provider
      value={{cartItems, addToCart, removeFromCart, getTotal}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
