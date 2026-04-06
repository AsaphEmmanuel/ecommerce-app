import CartItem from '../models/cartItem.model.js';

export const getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.find();

    res.status(200).json({
      status: 'success',
      data: { cartItems },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    });
  }
};

export const createCartItem = async (req, res) => {
  try {
    const newCartItem = await CartItem.create(req.body);

    res.status(200).json({
      status: 'success',
      data: { newCartItem },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    });
  }
};

export const getCartItem = async (req, res) => {
  console.log('get cart-item');
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

export const updateCartItem = async (req, res) => {
  console.log('update cart-item');
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

export const deleteCartItem = async (req, res) => {
  console.log('delete cart-item');
  res.status(200).json({
    status: 'success',
    data: {},
  });
};
