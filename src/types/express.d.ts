import { IPayloadJWT } from '@utils/JWT';

declare module 'express-serve-static-core' {
  interface Request {
    user?: IPayloadJWT;
  }
}
