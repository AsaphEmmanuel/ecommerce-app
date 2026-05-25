import express from 'express';
import { productRouter } from './routes/product.route.js';
import { cartItemRouter } from './routes/cartItem.route.js';
import AppError from './utils/AppError.js';

const app = express();

app.use('/api/products', productRouter);
app.use('/api/cart-items', cartItemRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Page not found. Can't find ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  const status = err.status || 'error';
  const statusCode = err.statusCode || 500;
  const message = err.message;

  res.status(statusCode).json({ status, message });
});

export default app;
