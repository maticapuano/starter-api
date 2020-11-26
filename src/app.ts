import '@config/dotenv';
import { CORS_DOMAIN, NODE_ENV } from '@config/secrets.env';
import express, { Application } from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import mongoSanitize from 'express-mongo-sanitize';
import helmet from 'helmet';

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

export { app };
