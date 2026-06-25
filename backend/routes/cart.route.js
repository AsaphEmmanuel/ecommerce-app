import express from 'express';
import * as cartController from '../controllers/cart.controller.js';

export const cartRouter = express.Router();

cartRouter
  .route('/')
  .get(cartController.getCartItems)
// .post(cartController.createCart);

// cartRouter
// .route('/:id')
// .get(cartController.getCart)
// .patch(cartController.updateCart)
// .delete(cartController.deleteCart);
