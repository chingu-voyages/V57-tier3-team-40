import { Request, Response, NextFunction } from 'express';
import { UserRole, UserSession } from '../types';

export interface AuthRequest extends Request {
  user?: UserSession;
}

export const authenticate = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ message: 'No authorization header' });
      return;
    }

    const token = authHeader.replace('Bearer ', '');

    if (!token) {
      res.status(401).json({ message: 'Invalid token format' });
      return;
    }

    req.user = {
      id: '1',
      email: 'user@example.com',
      role: UserRole.USER,
    };

    next();
  } catch (error) {
    res.status(401).json({ message: 'Authentication failed' });
  }
};

export const authorize = (...roles: UserRole[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user) {
      res.status(401).json({ message: 'Authentication required' });
      return;
    }

    if (!roles.includes(req.user.role)) {
      res.status(403).json({ message: 'Insufficient permissions' });
      return;
    }

    next();
  };
};

export const requireAdmin = authorize(UserRole.ADMIN);