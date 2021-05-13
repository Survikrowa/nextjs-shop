import { Router } from 'express';
import { createUser } from './auth.controller';
import { withAsync } from '../../middlewares/withAsync';

export const userRouter = Router();

userRouter.post('/', withAsync(createUser));
