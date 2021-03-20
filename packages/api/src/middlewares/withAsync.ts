import type { NextFunction, Request, RequestHandler, Response } from 'express';

export const withAsync = (routeCallback: RequestHandler) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await routeCallback(req, res, next);
  } catch (error) {
    if (error.status) {
      res.status(error.status).json({ message: error.message });
    }
    res.status(500).json({ message: 'Internal server error' });
  }
};
