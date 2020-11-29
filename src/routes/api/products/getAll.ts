import ProductController from '@controllers/Product.controller';
import { Router } from 'express';

const router = Router();

router.get('/products', ProductController.getAll);

export { router as getAllProductRoute };
