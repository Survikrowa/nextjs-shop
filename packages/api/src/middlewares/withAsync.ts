import type { NextFunction, Request, RequestHandler, Response } from 'express';

export const withAsync = (routeCallback: RequestHandler) => async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await routeCallback(req, res, next);
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
};
