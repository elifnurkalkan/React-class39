import './App.css';
import ProductList from './ProductList';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import { FavoritesProvider } from './Favorites';
import FavoriteProducts from './components/FavoriteProducts';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <FavoritesProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/favorites" element={<FavoriteProducts />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Routes>
      </FavoritesProvider>
    </div>
  );
}

export default App;
