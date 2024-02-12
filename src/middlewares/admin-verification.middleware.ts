import { NextFunction, Request, Response } from "express";
import { JwtToken } from "../modules/auth/utils/jwt";

export const adminVerificationMiddleware = async (req: Request, res: Response, next: NextFunction) => {
   const token = req.headers["authorization"]?.split(" ")[1];

   if (!token) {
      return res.status(401).json({ error: true, message: "Token not found." });
   }

   try {
      const decodedToken: any = await JwtToken.verifyToken(token);

      const { role } = decodedToken;

      if (role !== "admin") {
         return res.status(403).json({ error: true, message: "You're not an admin, so you didn't receive the permission to this." });
      }

      next();
   } catch (error: any) {
      return res.status(500).json({ error: true, message: error.message });
   }
};
