import React from 'react';
import FavoriteIcon from './FavoriteIcon';
import { Link } from 'react-router-dom';
export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to={`/products/${product.id}`}
        key={product.id}
      >
        <div>
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
          <h3>{product.title}</h3>
        </div>
      </Link>
      <FavoriteIcon product={product} />
    </div>
  );
}
