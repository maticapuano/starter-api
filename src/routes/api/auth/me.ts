import { validateRequest } from '@middlewares/validateRequest';
import { ApiResponse } from '@utils/ApiResponse';
import { Request, Response, Router } from 'express';
import { header } from 'express-validator';

const router = Router();

const meSchema = [
  header('Authorization')
    .notEmpty()
    .withMessage('Authorization is requerid.'),
];

router.get(
  '/auth/me',
  meSchema,
  validateRequest,
  (req: Request, res: Response) => {
    return ApiResponse.success(res, { route: 'Current user details' });
  },
);

export { router as meRoute };
