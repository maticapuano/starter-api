import '@config/dotenv';
import 'express-async-errors';
import {
  CORS_DOMAIN,
  NODE_ENV,
  ROUTE_PREFIX,
} from '@config/secrets.env';
import express, {
  Application,
  Request,
  Response,
  NextFunction,
} from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';
import { errorHandler } from '@middlewares/errorHandler';
import { NotFoundError } from '@errors/error/NotFoundError';
import { ApiRoutes } from '@routes/api';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Compress request
app.use(compression());

// Set cors
app.options('*', cors({ origin: CORS_DOMAIN }));

// Prevent injection NoSql
app.use(mongoSanitize());

app.use(helmet());

//Routes
app.use(`/${ROUTE_PREFIX}`, ApiRoutes);

app.use((req: Request, res: Response, next: NextFunction) =>
  next(new NotFoundError()),
);

//Error Handler
app.use(errorHandler);

export { app };
