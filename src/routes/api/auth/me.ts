import AuthController from '@controllers/Auth.controller';
import { validateRequest } from '@middlewares/validateRequest';
import { Router } from 'express';
import { header } from 'express-validator';

const router = Router();

const meSchema = [
  header('Authorization')
    .notEmpty()
    .withMessage('Authorization is requerid.'),
];

router.get('/auth/me', meSchema, validateRequest, AuthController.self);

export { router as meRoute };
