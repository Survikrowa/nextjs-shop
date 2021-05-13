import { Router } from 'express';
import { userRouter } from './modules/auth/auth.router';

export const appRouter = Router();

appRouter.use('/users', userRouter);
