import React, { useContext } from 'react';
import { FavoritesContext } from '../Favorites';
import heartSvg from '../assets/heart-regular.svg';
import heartSolidSvg from './../assets/heart-solid.svg';

export default function FavoriteIcon({ product }) {
  const { favoriteProducts, addFavorite, removeFavorite } =
    useContext(FavoritesContext);

  const isFavorite = (id) => {
    const boolean = favoriteProducts.some((product) => product.id === id);
    return boolean;
  };
  return (
    <div className="heart">
      {isFavorite(product.id) ? (
        <img
          src={heartSolidSvg}
          alt="favorite-icon"
          onClick={() => {
            removeFavorite(product.id);
          }}
        />
      ) : (
        <img
          src={heartSvg}
          alt="favorite-icon"
          onClick={() => {
            addFavorite(product);
          }}
        />
      )}
    </div>
  );
}
