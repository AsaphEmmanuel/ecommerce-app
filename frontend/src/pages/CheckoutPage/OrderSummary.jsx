import { CartItem } from './CartItem'
import './OrderSummary.css';

export const OrderSummary = () => {
  return (
    <div className="order-summary">
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
};