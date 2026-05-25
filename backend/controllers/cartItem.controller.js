import CartItem from '../models/cartItem.model.js';

export const getCartItems = async (req, res, next) => {
  try {
    const cartItems = await CartItem.find();

    res.status(200).json({
      status: 'success',
      data: { cartItems },
    });
  } catch (err) {
    next(err);
  }
};

export const createCartItem = async (req, res, next) => {
  try {
    const newCartItem = await CartItem.create(req.body);

    res.status(200).json({
      status: 'success',
      data: { newCartItem },
    });
  } catch (err) {
    next(err);
  }
};

export const getCartItem = async (req, res, next) => {
  try {
    console.log('get cart-item');
    res.status(200).json({
      status: 'success',
      data: {},
    });
  } catch (err) {
    next(err);
  }
};

export const updateCartItem = async (req, res, next) => {
  try {
    console.log('update cart-item');
    res.status(200).json({
      status: 'success',
      data: {},
    });
  } catch (err) {
    next(err);
  }
};

export const deleteCartItem = async (req, res, next) => {
  try {
    console.log('delete cart-item');
    res.status(200).json({
      status: 'success',
      data: {},
    });
  } catch (err) {
    next(err);
  }
};
