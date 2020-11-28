import AuthController from '@controllers/Auth.controller';
import { requireAuth } from '@middlewares/requireAuth';
import { validateRequest } from '@middlewares/validateRequest';
import { Router } from 'express';
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
  requireAuth,
  AuthController.refreshToken,
);

export { router as refreshTokenRoute };
