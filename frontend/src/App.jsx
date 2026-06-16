import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage';
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage'
import { OrdersPage } from './pages/OrdersPage/OrdersPage';
import { TrackingPage } from './pages/TrackingPage/TrackingPage'
import { SignupPage } from './pages/SignupPage'
import { LoginPage } from './pages/LoginPage'
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/orders' element={<OrdersPage />} />
        <Route path='/tracking' element={<TrackingPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App;
