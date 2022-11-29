import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import CategoryButton from './components/CategoryButton';
import loading from './assets/loading-gif.gif';
import Error from './components/Error';
import { useFetch } from '../src/useFetch';

export default function ProductList() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const ctgUrl = 'https://fakestoreapi.com/products/categories';
  const productsUrl = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : 'https://fakestoreapi.com/products';

  const {
    data: categories,
    isLoading: ctgIsLoading,
    error: ctgError,
  } = useFetch(ctgUrl);

  const {
    data: filteredProducts,
    isLoading: productIsLoading,
    error: productError,
  } = useFetch(productsUrl);

  return ctgIsLoading ? (
    <>
      <h2>Loading...</h2>
      <img src={loading} alt="loading.." />
    </>
  ) : ctgError ? (
    <Error error={ctgError} />
  ) : (
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
      {productIsLoading ? (
        <>
          <h2>Loading...</h2>
          <img src={loading} alt="loading.." />
        </>
      ) : productError ? (
        <Error error={productError} />
      ) : (
        <div className="product-list">
          {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </>
  );
}
