import axios from 'axios';
import { useState, useEffect } from 'react';
import { Product } from './Product';
import { Header } from '../../components/Header';
import './ProductsGrid.css';
import '../../index.css';

export const ProductsGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data.data.products);
    }

    loadProducts();
  }, []);

  return (
    <div className="products-grid">
      {products.map((product) =>
        <Product key={product._id} product={product} />
      )}
    </div>
  );
};