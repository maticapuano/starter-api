import AuthController from '@controllers/Auth.controller';
import { validateRequest } from '@middlewares/validateRequest';
import { Router } from 'express';
import { body } from 'express-validator';

const router = Router();

const signUpSchema = [
  body('full_name')
    .isString()
    .toLowerCase()
    .withMessage('Full name must be valid'),
  body('email')
    .isEmail()
    .normalizeEmail({ all_lowercase: true })
    .withMessage('Email must be valid'),
  body('password')
    .trim()
    .isLength({ min: 4, max: 50 })
    .withMessage('Password must be between 4 and 50 characters.'),
];

router.post(
  '/auth/signUp',
  signUpSchema,
  validateRequest,
  AuthController.signUp,
);

export { router as signUpRoute };
