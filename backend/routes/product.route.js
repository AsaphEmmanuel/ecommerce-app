import express from 'express';
import {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

export const productRouter = express.Router();

productRouter.route('/').get(getProducts).post(createProduct);
productRouter
  .route('/:id')
  .get(getProduct)
  .patch(updateProduct)
  .delete(deleteProduct);
