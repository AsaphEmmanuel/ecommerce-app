import AppError from '../utils/AppError.js';

export const globalErrorHandler = (err, req, res, next) => {
  let error = { ...err };
  const status = error.status || 'error';
  const statusCode = error.statusCode || 500;

  if (process.env.NODE_ENV === 'development') {
    return res.status(statusCode).json({
      status: status,
      message: error.message,
      error: error,
      stack: error.stack,
    });
  } else if (process.env.NODE_ENV === 'production') {
    if (err.name === 'CastError') {
      error = new AppError(
        `Invalid at path: ${error.path} with value: ${error.value}`,
        400,
      );
    }

    if (error.isOperational) {
      return res.status(statusCode).json({
        status: status,
        message: error.message,
      });
    }

    console.log('ERROR: ', err);

    res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    });
  }
};
