import { Link } from 'react-router-dom'
import { Header } from '../../components/Header';
import { Order } from './Order';
import './OrdersPage.css';
import '../../index.css';

export const OrdersPage = () => {
  return (
    <>
      <Header />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          <Order />
          <Order />
        </div>
      </div>
    </>
  );
};