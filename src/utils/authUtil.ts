import {
  ACCESS_TOKEN_EXP_DAYS,
  REFRESH_TOKEN_EXP_DAYS,
  TOKEN_AUDIENCE,
  TOKEN_ISSUER,
} from '@config/secrets.env';
import { BadRequestError } from '@errors/error/BadRequestError';
import en from '@locale';
import { IUserDto } from '@models/User.model';
import { JWT } from './JWT';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export const createTokens = async (user: IUserDto): Promise<Tokens> => {
  const accessToken = await JWT.encode(user, {
    issuer: TOKEN_ISSUER,
    audience: TOKEN_AUDIENCE,
    expiresIn: ACCESS_TOKEN_EXP_DAYS,
  });
  const refreshToken = await JWT.encode(user, {
    issuer: TOKEN_ISSUER,
    audience: TOKEN_AUDIENCE,
    expiresIn: REFRESH_TOKEN_EXP_DAYS,
  });

  if (!user.isActive) {
    throw new BadRequestError(en.ACCOUNT_NOT_ACTIVATED);
  }

  return {
    accessToken: accessToken,
    refreshToken: refreshToken,
  } as Tokens;
};
