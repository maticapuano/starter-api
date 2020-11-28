import AuthController from '@controllers/Auth.controller';
import { requireAuth } from '@middlewares/requireAuth';
import { validateRequest } from '@middlewares/validateRequest';
import { Router } from 'express';
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
  requireAuth,
  AuthController.self,
);

const updateSchema = [...meSchema];

router.put(
  '/auth/me',
  updateSchema,
  validateRequest,
  requireAuth,
  AuthController.update,
);

export { router as meRoute };
