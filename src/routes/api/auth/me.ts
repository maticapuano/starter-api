import { ApiResponse } from '@utils/ApiResponse';
import { Request, Response, Router } from 'express';

const router = Router();

router.get('/auth/me', (req: Request, res: Response) => {
  return ApiResponse.success(res, { route: 'Current user details' });
});

export { router as meRoute };
