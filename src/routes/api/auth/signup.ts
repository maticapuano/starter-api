import { validateRequest } from '@middlewares/validateRequest';
import { ApiResponse } from '@utils/ApiResponse';
import { Request, Response, Router } from 'express';
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
  (req: Request, res: Response) => {
    return ApiResponse.success(res, { route: 'SignUp user' });
  },
);

export { router as signUpRoute };
