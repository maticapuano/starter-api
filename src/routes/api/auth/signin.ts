import { ApiResponse } from '@utils/ApiResponse';
import { Request, Response, Router } from 'express';

const router = Router();

router.post('/auth/signin', (req: Request, res: Response) => {
  return ApiResponse.success(res, { route: 'Signin user' });
});

export { router as signInRoute };
