import express from 'express';
import { getProducts, getProduct } from '../controllers/product.controller.js';

export const productRouter = express.Router();

productRouter.route('/').get(getProducts);
productRouter.route('/:id').get(getProduct);
