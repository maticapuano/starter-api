import { NotAuthorizedError } from '@errors/error/NotAuthorizedError';
import { Request, NextFunction, Response } from 'express';

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (!req.user) {
    throw new NotAuthorizedError();
  }

  next();
};
