import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Error from './Error';
import loading from '../assets/loading-gif.gif';

export default function Product() {
  const [product, setProduct] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  let params = useParams();
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${params.productId}`,
        );
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    })();
  }, [params.productId]);
  return isLoading ? (
    <>
      <h2>Loading...</h2>
      <img src={loading} alt="loading.." />
    </>
  ) : error ? (
    <Error error={error} />
  ) : (
    <div className="product-detail">
      <img src={product?.image} alt={product.id} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>
        <strong>$</strong>
        {product.price}
      </p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
