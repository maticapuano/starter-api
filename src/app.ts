import '@config/dotenv';
import express, { Application } from 'express';

const app: Application = express();

app.get('/', (req, res) => res.json({ work: true }));

export { app };
