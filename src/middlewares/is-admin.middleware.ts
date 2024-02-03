import { NextFunction, Request, Response } from "express";
import { JwtToken } from "../modules/auth/utils/jwt";

export const isAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
   const token = req.headers["authorization"]?.split(" ")[1];

   if (!token) {
      return res.status(401).json({ error: true, message: "Token not found." });
   }

   try {
      const decoded: any = await JwtToken.verifyToken(token);

      const { role } = decoded;

      if (role !== "admin") {
         return res.status(403).json({ error: true, message: "You don't have the permission to this." });
      }

      next();
   } catch (error: any) {
      return res.status(500).json({ error: true, message: error.message });
   }
};
