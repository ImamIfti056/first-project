import { Request, Response, NextFunction } from 'express';


const globalErrorHandler = (err:any, req: Request, res:Response, next:NextFunction) => {
  
    if((err)){
      res.status(500).json({
          success: false,
          message: err.message || 'something went wrong',
          error: err
        })
    }
  }

export default globalErrorHandler;