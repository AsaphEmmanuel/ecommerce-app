import { Header } from '../../components/Header';
import { Product } from './Product';
import '../../index.css';
import './HomePage.css';

export const HomePage = () => {
  return (
    <>
      <Header />

      <div className="home-page">
        <div className="products-grid">
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </>
  );
};