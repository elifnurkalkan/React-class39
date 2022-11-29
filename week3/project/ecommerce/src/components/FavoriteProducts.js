import React, { useContext } from 'react';
import { FavoritesContext } from '../Favorites';
import ProductCard from './ProductCard';

export default function FavoriteProducts() {
  const { favoriteProducts } = useContext(FavoritesContext);

  return (
    <>
      <h1>Favorite Products</h1>
      <div className="favorite-products">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))
        ) : (
          <h2>You haven't chosen any favorites yet!</h2>
        )}
      </div>
    </>
  );
}
