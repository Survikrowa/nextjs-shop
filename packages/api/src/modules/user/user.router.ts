import { Router } from 'express';
import { createUser } from './user.controller';
import { withAsync } from '../../middlewares/withAsync';

export const userRouter = Router();

userRouter.post('/', withAsync(createUser));
