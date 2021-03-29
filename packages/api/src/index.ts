import express, { urlencoded, json } from 'express';
import { config } from 'dotenv';
import { appRouter } from './routes';

config();
const PORT = process.env.APP_PORT || 3000;

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use('/api', appRouter);

const server = app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));

process.on('SIGTERM', () => {
  server.close();
});
