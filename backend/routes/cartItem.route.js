import express from 'express';
import * as cartItemController from '../controllers/cartItem.controller.js';

export const cartItemRouter = express.Router();

cartItemRouter
  .route('/')
  .get(cartItemController.getCartItems)
  .post(cartItemController.createCartItem);
cartItemRouter
  .route('/:id')
  .get(cartItemController.getCartItem)
  .patch(cartItemController.updateCartItem)
  .delete(cartItemController.deleteCartItem);
