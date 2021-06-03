import { Router } from 'express';
import { authUser } from '../../middlewares/auth/authUser';
import { getCurrentUserSession } from './session.controller';

export const sessionRouter = Router();

sessionRouter.get('/me', authUser, getCurrentUserSession);
