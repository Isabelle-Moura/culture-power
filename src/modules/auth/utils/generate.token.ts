import jwt from "jsonwebtoken";
import { env } from "../../../config/dotenv";

export class JwtToken {
   static async generateToken(payload: { id?: string; email: string }) {
      const secretKey = env.JWT_SECRET_KEY;
      const options = { expiresIn: "1h" };
      return jwt.sign(payload, secretKey, options);
   }

   static async verifyToken(token: string) {
      const secretKey = env.JWT_SECRET_KEY;
      return jwt.verify(token, secretKey);
   }
}