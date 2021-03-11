/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { NextFunction, Request, RequestHandler, Response } from 'express';

export const withAsync = (routeCallback: RequestHandler) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await routeCallback(req, res, next);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
