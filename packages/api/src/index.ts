import express from 'express';
import { config } from 'dotenv';
import { appRouter } from './routes';

config();
const PORT = process.env.APP_PORT || 3000;

const app = express();

app.use('/api', appRouter);

app.listen(PORT, () => console.log(`I'm listening on port ${PORT}`));
