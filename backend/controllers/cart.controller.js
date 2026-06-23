import Cart from '../models/cart.model.js';

export const getCart = async (req, res, next) => {
  try {
    const Cart = await Cart.find();

    res.status(200).json({
      status: 'success',
      results: Cart.length,
      data: { Cart },
    });
  } catch (err) {
    next(err);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const Cart = await Cart.findById(req.params.id);

    if (!Cart) {
      return res.status(404).json({
        status: 'fail',
        message: 'Cart item not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: { Cart },
    });
  } catch (err) {
    next(err);
  }
};

export const createCart = async (req, res, next) => {
  try {
    const { productId, quantity, deliveryOptionId } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({
        status: 'fail',
        message: 'productId and quantity are required',
      });
    }

    const existingItem = await Cart.findOne({ productId });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();

      return res.status(200).json({
        status: 'success',
        data: { Cart: existingItem },
      });
    }

    const Cart = await Cart.create({
      productId,
      quantity,
      deliveryOptionId,
    });

    res.status(201).json({
      status: 'success',
      data: { Cart },
    });
  } catch (err) {
    next(err);
  }
};

export const updateCart = async (req, res, next) => {
  try {
    const { quantity, deliveryOptionId } = req.body;

    const updatedCart = await Cart.findByIdAndUpdate(
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

    if (!updatedCart) {
      return res.status(404).json({
        status: 'fail',
        message: 'Cart item not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: { Cart: updatedCart },
    });
  } catch (err) {
    next(err);
  }
};

export const deleteCart = async (req, res, next) => {
  try {
    const deletedCart = await Cart.findByIdAndDelete(req.params.id);

    if (!deletedCart) {
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
