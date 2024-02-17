import jwt from "jsonwebtoken";
import { UserRole } from "../roles/roles";
import "dotenv/config";

export class JwtToken {
   static async generateToken(payload: { id?: string; email: string; role: UserRole }) {
      const secretKey = process.env.JWT_SECRET_KEY;
      const options = { expiresIn: "1h" };

      return jwt.sign(payload, secretKey as any, options);
   }

   static async verifyToken(token: string) {
      const secretKey = process.env.JWT_SECRET_KEY;

      return jwt.verify(token, secretKey as any);
   }

   static async decodeToken(token: string) {
      const secretKey = process.env.JWT_SECRET_KEY;

      return jwt.decode(token, secretKey as any);
   }
}
