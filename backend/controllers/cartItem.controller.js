import CartItem from '../models/cartItem.model.js';

export const getCartItems = async (req, res, next) => {
  try {
    const cartItems = await CartItem.find();

    res.status(200).json({
      status: 'success',
      results: cartItems.length,
      data: { cartItems },
    });
  } catch (err) {
    next(err);
  }
};

export const getCartItem = async (req, res, next) => {
  try {
    const cartItem = await CartItem.findById(req.params.id);

    if (!cartItem) {
      return res.status(404).json({
        status: 'fail',
        message: 'Cart item not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: { cartItem },
    });
  } catch (err) {
    next(err);
  }
};

export const createCartItem = async (req, res, next) => {
  try {
    const { productId, quantity, deliveryOptionId } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({
        status: 'fail',
        message: 'productId and quantity are required',
      });
    }

    const existingItem = await CartItem.findOne({ productId });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();

      return res.status(200).json({
        status: 'success',
        data: { cartItem: existingItem },
      });
    }

    const cartItem = await CartItem.create({
      productId,
      quantity,
      deliveryOptionId,
    });

    res.status(201).json({
      status: 'success',
      data: { cartItem },
    });
  } catch (err) {
    next(err);
  }
};

export const updateCartItem = async (req, res, next) => {
  try {
    const { quantity, deliveryOptionId } = req.body;

    const updatedCartItem = await CartItem.findByIdAndUpdate(
      req.params.id,
      {
        quantity,
        deliveryOptionId,
      },
      {
        returnDocument: 'after',
        runValidators: true,
      },
    );

    if (!updatedCartItem) {
      return res.status(404).json({
        status: 'fail',
        message: 'Cart item not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: { cartItem: updatedCartItem },
    });
  } catch (err) {
    next(err);
  }
};

export const deleteCartItem = async (req, res, next) => {
  try {
    const deletedCartItem = await CartItem.findByIdAndDelete(req.params.id);

    if (!deletedCartItem) {
      return res.status(404).json({
        status: 'fail',
        message: 'Cart item not found',
      });
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
