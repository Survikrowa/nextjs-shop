import express, { urlencoded, json } from 'express';
import { config } from 'dotenv';
import { appRouter } from './routes';

if (process.env.NODE_ENV === 'TEST') {
  config({
    path: '../.env.test',
  });
} else {
  config();
}

export const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use('/api', appRouter);
