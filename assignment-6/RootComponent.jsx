import React from 'react';
import { CartProvider } from './context/CartContext'; // Adjust the path as necessary
import App from './App'; // Your main App component

const RootComponent = () => {
  return (
    <CartProvider>
      <App />
    </CartProvider>
  );
};

export default RootComponent;