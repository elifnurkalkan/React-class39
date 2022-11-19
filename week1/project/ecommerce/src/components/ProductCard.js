import React from 'react';

export default function ProductCard({ value }) {
  return (
    <div className="product-card">
      <img src={value.image} alt={value.title} />
      <h3>{value.title}</h3>
    </div>
  );
}
