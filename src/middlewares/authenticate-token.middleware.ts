import { Request, Response, NextFunction } from "express";
import { JwtToken } from "../utils/jwt/jwt";

export const authenticateTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
   try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
         return res.status(401).json({
            message: "Token wasn't given, so you didn't receive the permission to this.",
         });
      }

      const decodedToken: any = JwtToken.verifyToken(token);

      req.body.user = {
         _id: decodedToken._id,
         email: decodedToken.email,
         role: decodedToken.role,
      };

      next();
   } catch (error: any) {
      res.status(403).json({ error: true, message: error.message });
   }
};
