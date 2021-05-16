import { Router } from 'express';
import { createUser, logInUser } from './auth.controller';
import { withAsync } from '../../middlewares/withAsync';

export const userRouter = Router();

userRouter.post('/', withAsync(createUser));
userRouter.post('/login', withAsync(logInUser));
