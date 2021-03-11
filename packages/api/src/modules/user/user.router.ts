import { Router } from 'express';
import { withAsync } from '../../middlewares/withAsync';
import type { Request, Response, NextFunction } from 'express';

export const userRouter = Router();

userRouter.get(
  '/',
  withAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (req) {
      Promise.reject();
      let cos;
    }
  }),
);
