import { Router } from 'express';
import { userRouter } from './modules/auth/auth.router';
import { sessionRouter } from './modules/session/session.router';

export const appRouter = Router();

appRouter.use('/users', userRouter);
appRouter.use('/session', sessionRouter);
