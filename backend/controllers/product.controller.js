import Product from '../models/product.model.js';
import AppError from '../utils/AppError.js';

export const getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: 'success',
      count: products.length,
      data: { products },
    });
  } catch (err) {
    next(err);
  }
};

export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return next(new AppError('Product not found', 404));
    }

    res.status(200).json({
      status: 'success',
      data: { product },
    });
  } catch (err) {
    next(err);
  }
};
