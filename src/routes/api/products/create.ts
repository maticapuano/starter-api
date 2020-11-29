import ProductController from '@controllers/Product.controller';
import { requireAuth } from '@middlewares/requireAuth';
import { validateRequest } from '@middlewares/validateRequest';
import { Router } from 'express';
import { body } from 'express-validator';

const router = Router();

const productSchema = [
  body('name').not().isEmpty().withMessage('Name is requerid'),
  body('description')
    .not()
    .isEmpty()
    .withMessage('Description is requerid'),
  body('price')
    .isFloat({ gt: 0 })
    .withMessage('Price must be greater than 0'),
];

router.post(
  '/products',
  productSchema,
  validateRequest,
  requireAuth,
  ProductController.create,
);

export { router as createProductRoute };
