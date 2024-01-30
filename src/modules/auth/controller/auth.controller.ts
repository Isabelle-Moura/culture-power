import { AuthService } from "../service/auth.services";
import { Request, Response } from "express";

export class AuthController {
   constructor(private service: AuthService) {}

   async userLogin(req: Request, res: Response) {
      const { body } = req;

      const result = await this.service.userLogin(body);
      if ("error" in result) {
         return res.status((result as { status: number }).status).json(result);
      }

      return res.json(result);
   }

   async adminLogin(req: Request, res: Response) {
      const { body } = req;

      const result = await this.service.adminLogin(body);

      if ("error" in result) {
         return res.status((result as { status: number }).status).json(result);
      }

      return res.json(result);
   }
}
