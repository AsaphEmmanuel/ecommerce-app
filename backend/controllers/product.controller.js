import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
  const products = await Product.find();

  res.status(200).json({
    status: 'success',
    data: { products },
  });
};

export const createProduct = (req, res) => {
  console.log('create product');
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

export const getProduct = (req, res) => {
  console.log('get product');
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

export const updateProduct = (req, res) => {
  console.log('update product');
  res.status(200).json({
    status: 'success',
    data: {},
  });
};

export const deleteProduct = (req, res) => {
  console.log('delete product');
  res.status(200).json({
    status: 'success',
    data: {},
  });
};
