import express from 'express';
import AppError from './utils/AppError.js';
import { productRouter } from './routes/product.route.js';
import { cartItemRouter } from './routes/cartItem.route.js';
import { globalErrorHandler } from './controllers/error.controller.js';

const app = express();

app.use('/api/products', productRouter);
app.use('/api/cart-items', cartItemRouter);

app.all('*splat', (req, res, next) => {
  next(new AppError(`Page not found. Can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

export default app;
