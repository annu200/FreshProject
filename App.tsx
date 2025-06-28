import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {CartProvider} from './src/context/CartContext';
import {FavoritesProvider} from './src/context/FavoritesContext';
import {Provider} from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <FavoritesProvider>
        <CartProvider>
          <AppNavigator />
        </CartProvider>
      </FavoritesProvider>
    </Provider>
  );
}
