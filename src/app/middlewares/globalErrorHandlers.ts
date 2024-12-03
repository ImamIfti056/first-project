import { Response } from 'express';

const globalErrorHandler = (err: any, res: Response) => {
  if (err) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

export default globalErrorHandler;
