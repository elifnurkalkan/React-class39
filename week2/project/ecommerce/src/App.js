import './App.css';
import ProductList from './components/ProductList';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:productId" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
