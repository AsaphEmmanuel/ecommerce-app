import express from 'express';
import { productRouter } from './routes/product.route.js';
import { cartItemRouter } from './routes/cartItem.route.js';

export const app = express();

app.use('/api/products', productRouter);
app.use('/api/cart-items', cartItemRouter);
