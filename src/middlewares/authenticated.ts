import { IPayloadJWT, JWT } from '@utils/JWT';
import { Request, Response, NextFunction } from 'express';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: IPayloadJWT;
    }
  }
}

export const authenticated = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    if (req.headers['authorization']) {
      const token = req.headers['authorization'].split(' ')[1];

      const checkToken = await JWT.verify(token);

      if (!checkToken) {
        return next();
      }

      const decode = (await JWT.decode(token)) as IPayloadJWT;

      req.user = decode;
    }
  } catch {
    return next();
  }

  return next();
};
