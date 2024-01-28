import { AuthService } from "../service/auth.services";
import { Request, Response } from "express";

export class AuthController {
   constructor(private service: AuthService) {}

   async login(req: Request, res: Response) {
      const { body } = req;

      const result = await this.service.login(body);
      if ("error" in result) {
         return res.status((result as { status: number }).status).json(result);
      }

      return res.json(result);
   }
}
