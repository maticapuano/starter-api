import { ApiResponse } from '@utils/ApiResponse';
import { Request, Response, Router } from 'express';

const router = Router();

router.post('/auth/refresh', (req: Request, res: Response) => {
  return ApiResponse.success(res, { route: 'Refresh token' });
});

export { router as refreshTokenRoute };
