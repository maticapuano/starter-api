import { logger } from '@config/logger';
import { NODE_ENV } from '@config/secrets.env';
import { ApiError } from '@errors/ApiError';
import { InternalServerError } from '@errors/error/InternalServerError';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status-codes';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): Response => {
  if (err instanceof ApiError) {
    return ApiError.handler(err, res);
  }

  if (NODE_ENV === 'development') {
    logger.error(err);

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message,
      error: err.name,
      stack: err.stack,
    });
  }

  return ApiError.handler(new InternalServerError(), res);
};
