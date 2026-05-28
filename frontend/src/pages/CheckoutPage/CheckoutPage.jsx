import { CheckoutHeader } from './CheckoutHeader';
import { PaymentSummary } from './PaymentSummary';
import { OrderSummary } from './OrderSummary';
import './CheckoutPage.css';
import '../../index.css';

export const CheckoutPage = () => {
  return (
    <>
      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary />
          <PaymentSummary />
        </div>
      </div>
    </>
  );
};