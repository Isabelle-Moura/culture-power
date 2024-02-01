import { NextFunction, Request, Response } from 'express';
import { JwtToken } from '../modules/auth/utils/generate.token'; 
import { UserRole } from '../enum/roles';

export const isAdmin = async (req: Request, res: Response, next: NextFunction) => {
    //WIP: Add middleware to check if user is admin.
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: true, message: 'Unauthorized - Token not provided' });
    }

    const decodedToken = await JwtToken.verifyToken(authorization as string);

    if (typeof decodedToken !== 'object' || !('role' in decodedToken) || decodedToken.role !== UserRole.ADMIN) {
      return res.status(403).json({ error: true, message: 'Forbidden - Admin role required' });
    }

    req.body.user = decodedToken;

    next();
  } catch (error: any) {
    console.error('Error in isAdmin middleware:', error);
    return res.status(500).json({ error: true, message: 'Internal Server Error', details: error.message });
  }
};
