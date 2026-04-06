import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      status: 'success',
      data: { products },
      count: products.length,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });

    if (!product) {
      return res.status(404).json({
        status: 'fail',
        message: 'product not found',
      });
    }

    res.status(200).json({
      status: 'success',
      data: { product },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    });
  }
};
