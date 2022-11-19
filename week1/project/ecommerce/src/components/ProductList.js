import React, { useEffect, useState } from 'react';
import categories from '../fake-data/all-categories';
import products from './../fake-data/all-products';
import ProductCard from './ProductCard';
import CategoryButton from './CategoryButton';

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredProducts(
        products.filter(
          (product) => product.category === selectedCategory.slice(6),
        ),
      );
    }
  }, [selectedCategory]);

  return (
    <>
      <h1>Products</h1>
      <div className="product-filter-bar">
        {categories.map((ctg) => (
          <CategoryButton
            key={ctg}
            category={ctg}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        ))}
      </div>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard value={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
