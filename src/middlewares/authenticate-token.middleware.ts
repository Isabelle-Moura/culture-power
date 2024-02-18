import { Request, Response, NextFunction } from "express";
import { JwtToken } from "../utils/jwt/jwt";

export const authenticateTokenMiddleware = (req: Request, res: Response, next: NextFunction) => {
   try {
      const token = req.headers.authorization?.split(" ")[1];

      if (!token) {
         return res.status(401).json({
            error: true,
            message: "Token wasn't given.",
         });
      }

      const tokenVerified: any = JwtToken.verifyToken(token);

      req.body.user = {
         _id: tokenVerified._id,
         email: tokenVerified.email,
         role: tokenVerified.role,
      };

      next();
   } catch (error: any) {
      res.status(403).json({ error: true, message: error.message });
   }
};
