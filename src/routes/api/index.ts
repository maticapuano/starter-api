import { Router } from 'express';
import { meRoute } from './auth/me';
import { refreshTokenRoute } from './auth/refresh';
import { signInRoute } from './auth/signin';
import { signUpRoute } from './auth/signup';
import { createProductRoute } from './products/create';

const router = Router();

// Auth routes
router.use(meRoute);
router.use(refreshTokenRoute);

router.use(signInRoute);
router.use(signUpRoute);

//Products routes
router.use(createProductRoute);

export { router as ApiRoutes };
