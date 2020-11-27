import { ACCESS_TOKEN_SECRET } from '@config/secrets.env';
import { IUserDto } from '@models/User.model';
import jwt, { SignOptions } from 'jsonwebtoken';
import _ from 'lodash';

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
}
