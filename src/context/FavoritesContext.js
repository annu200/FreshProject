import React, {createContext, useContext, useState} from 'react';

export const FavoritesContext = createContext();

export const FavoritesProvider = ({children}) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = product => {
    const exists = favorites.find(item => item.id === product.id);
    if (!exists) setFavorites([...favorites, product]);
  };

  const removeFromFavorites = productId => {
    setFavorites(favorites.filter(item => item.id !== productId));
  };

  const isFavorite = productId => {
    return favorites.some(item => item.id === productId);
  };

  return (
    <FavoritesContext.Provider
      value={{favorites, addToFavorites, removeFromFavorites, isFavorite}}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
