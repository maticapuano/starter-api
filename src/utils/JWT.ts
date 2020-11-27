import { ACCESS_TOKEN_SECRET } from '@config/secrets.env';
import { IUserDto } from '@models/User.model';
import jwt, { SignOptions } from 'jsonwebtoken';
import _ from 'lodash';

interface IPayloadJWT {
  id: string;
  iat: number;
  exp: number;
  aud: string;
  iss: string;
}

export class JWT {
  public static async encode(
    payload: IUserDto,
    options: SignOptions,
  ): Promise<string> {
    const data = _.pick(payload, ['id']);
    const encode = await jwt.sign(
      { ...data },
      ACCESS_TOKEN_SECRET as string,
      options,
    );

    return encode;
  }

  public static async verify(token: string): Promise<boolean> {
    try {
      const verify = (await jwt.verify(
        token,
        ACCESS_TOKEN_SECRET as string,
      )) as IPayloadJWT;

      return verify ? true : false;
    } catch {
      return false;
    }
  }
}
