import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
    </div>
  );
}
