import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Products from './components/Products';
import ProductDetails from './components/ProductDetails';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        console.log(data)
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products products={products} />} />
        <Route path="/productDetails/:id" element={<ProductDetails products={products} />} />
      </Routes>
    </Router>
  );
}

export default App;
