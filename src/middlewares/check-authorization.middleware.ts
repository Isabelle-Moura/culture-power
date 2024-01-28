import { Request, Response, NextFunction } from "express";

export const checkAuthorization = (req: Request, res: Response, next: NextFunction) => {
   try {
      const token = req.headers.authorization?.split(" ")[1];
      if (!token) {
         return res.status(401).json({ message: "Token wasn't given." });
      }
      next();
   } catch (error: any) {
      res.status(403).json({ message: "You didn't receive the permission to this." });
   }
};
