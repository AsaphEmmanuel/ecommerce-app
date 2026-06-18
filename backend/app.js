import express from 'express';
import cors from 'cors';
import AppError from './utils/appError.js';
import { productRouter } from './routes/product.route.js';
import { cartItemRouter } from './routes/cartItem.route.js';
import { userRouter } from './routes/user.route.js';
import { globalErrorHandler } from './controllers/error.controller.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/images', express.static('images'));

app.use('/api/products', productRouter);
app.use('/api/cart-items', cartItemRouter);
app.use('/api/users', userRouter);

app.all('*splat', (req, res, next) => {
  next(new AppError(`Page not found. Can't find ${req.originalUrl}`, 404));
});

app.use(globalErrorHandler);

export default app;
