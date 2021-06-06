import { Request, Response, NextFunction } from 'express';

import { Exception } from '../errors/Exception';

export const errorHandler = (err: Error, request: Request, response: Response, next: NextFunction): Response => {
  if (err instanceof Exception) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
};
