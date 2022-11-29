import { createContext, useState } from 'react';
export const FavoritesContext = createContext();
export const Favorites = ({ children }) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const addFavorite = (product) => {
    setFavoriteProducts([...favoriteProducts, product]);
  };
  const removeFavorite = (id) => {
    setFavoriteProducts(
      favoriteProducts.filter((product) => product.id !== id),
    );
  };
  const value = { favoriteProducts, addFavorite, removeFavorite };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
