import User from '../models/user.model.js';

export const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      status: 'success',
      data: { users },
    });
  } catch (err) {
    next(err);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const newUser = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    res.status(200).json({
      status: 'success',
      data: { newUser },
    });
  } catch (err) {
    next(err);
  }
};

export const getUser = async (req, res, next) => {
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

export const updateUser = async (req, res, next) => {
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

export const deleteUser = async (req, res, next) => {
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
