import { OrderHeader } from './OrderHeader';
import { OrderDetails } from './OrderDetails';
import './Order.css'

export const Order = () => {
  return (
    <div className="order-container">
      <OrderHeader />
      <OrderDetails />
    </div>
  );
};