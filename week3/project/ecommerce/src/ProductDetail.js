import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Error from './components/Error';
import loading from './assets/loading-gif.gif';
import { useFetch } from './useFetch';
import FavoriteIcon from './components/FavoriteIcon';

export default function ProductDetail() {
  let params = useParams();
  const productUrl = `https://fakestoreapi.com/products/${params.productId}`;
  const { data: product, isLoading, error } = useFetch(productUrl);

  return isLoading ? (
    <>
      <h2>Loading...</h2>
      <img src={loading} alt="loading.." />
    </>
  ) : error ? (
    <Error error={error} />
  ) : (
    <div className="product-detail">
      <FavoriteIcon product={product} />
      <img
        className="product-detail-image"
        src={product?.image}
        alt={product.id}
      />
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
