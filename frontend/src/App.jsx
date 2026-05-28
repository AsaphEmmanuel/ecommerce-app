import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { TrackingPage } from './pages/TrackingPage/TrackingPage'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/tracking' element={<TrackingPage />} />
      </Routes>
    </>
  )
}

export default App;
