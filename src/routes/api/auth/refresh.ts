import { validateRequest } from '@middlewares/validateRequest';
import { ApiResponse } from '@utils/ApiResponse';
import { Request, Response, Router } from 'express';
import { header } from 'express-validator';

const router = Router();

const refreshTokenSchema = [
  header('Authorization')
    .notEmpty()
    .withMessage('Authorization is requerid.'),
];

router.post(
  '/auth/refresh',
  refreshTokenSchema,
  validateRequest,
  (req: Request, res: Response) => {
    return ApiResponse.success(res, { route: 'Refresh token' });
  },
);

export { router as refreshTokenRoute };
