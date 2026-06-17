import express from 'express';
import * as productController from '../controllers/product.controller.js';

export const productRouter = express.Router();

productRouter.route('/').get(productController.getProducts);
productRouter.route('/:id').get(productController.getProduct);
