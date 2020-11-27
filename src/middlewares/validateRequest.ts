import { ValidationError as ValidationErr } from '@errors/error/ValidationError';
import { NextFunction, Request, Response } from 'express';
import { ValidationError, validationResult } from 'express-validator';

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const errors = validationResult(req);
  const errorList = errors.array().map((error: ValidationError) => ({
    message: error.msg,
    location: error.location,
    param: error.param,
    value: error.value,
  }));

  if (!errors.isEmpty()) {
    throw new ValidationErr('ValidationError', errorList);
  }

  return next();
};
