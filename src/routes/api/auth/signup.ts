import { ApiResponse } from '@utils/ApiResponse';
import { Request, Response, Router } from 'express';

const router = Router();

router.post('/auth/signUp', (req: Request, res: Response) => {
  return ApiResponse.success(res, { route: 'SignUp user' });
});

export { router as signUpRoute };
