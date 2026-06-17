import { Header } from '../../components/Header';
import { ProductsGrid } from './ProductsGrid';
import { Fragment } from 'react';
import '../../index.css';
import './HomePage.css';

export const HomePage = () => {
  return (
    <Fragment>
      <Header />

      <div className="home-page">
        <ProductsGrid />
      </div>
    </Fragment>
  );
};