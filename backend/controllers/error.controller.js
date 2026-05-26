export const globalErrorHandler = async (err, req, res, next) => {
  const status = err.status || 'error';
  const statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === 'development') {
    return res.status(statusCode).json({
      status: status,
      message: err.message,
      error: err,
      stack: err.stack,
    });
  } else if (process.env.NODE_ENV === 'production') {
    if (err.isOperational) {
      return res.status(statusCode).json({
        status: status,
        message: err.message,
      });
    }

    res.status(500).json({
      status: 'error',
      message: 'something went wrong',
    });
  }
};
