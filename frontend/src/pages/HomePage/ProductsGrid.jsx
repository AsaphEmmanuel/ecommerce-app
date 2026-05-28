import { Header } from '../../components/Header';
import { Product } from './Product';
import './ProductsGrid.css';
import '../../index.css';

export const ProductsGrid = () => {
  return (
    <div className="products-grid">
      <Product />
      <Product />
      <Product />
    </div>
  );
};