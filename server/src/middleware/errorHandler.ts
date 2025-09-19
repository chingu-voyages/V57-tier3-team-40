import { Request, Response, NextFunction } from 'express';

interface ErrorWithStatus extends Error {
  status?: number;
  statusCode?: number;
}

export const errorHandler = (
  err: ErrorWithStatus,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`Error ${status}: ${message}`);
  console.error(err.stack);

  res.status(status).json({
    error: {
      message,
      status,
      timestamp: new Date().toISOString(),
      path: req.path,
      method: req.method,
    },
  });
};

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(404).json({
    error: {
      message: 'Resource not found',
      status: 404,
      timestamp: new Date().toISOString(),
      path: req.path,
      method: req.method,
    },
  });
};