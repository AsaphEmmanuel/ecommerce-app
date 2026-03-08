import express from 'express';
import {
  getCartItems,
  createCartItem,
  getCartItem,
  updateCartItem,
  deleteCartItem,
} from '../controllers/cartItem.controller.js';

export const cartItemRouter = express.Router();

cartItemRouter.route('/').get(getCartItems).post(createCartItem);
cartItemRouter
  .route('/:id')
  .get(getCartItem)
  .patch(updateCartItem)
  .delete(deleteCartItem);
