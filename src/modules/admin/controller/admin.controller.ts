import { AdminService } from "../service/admin.services";
import { Request, Response } from "express";

export class AdminController {
   constructor(private service: AdminService) {}

   async loginAdmin(req: Request, res: Response): Promise<void>  {
      try {
         const { email, password } = req.body;
         
         const admin = await this.service.loginAdmin(email, password);

         if (!admin) {
         res.status(401).json({ error: "Invalid email or password" });
         }

         res.status(200).json({ success: true, data: admin });

      } catch (error) {
         console.log(error)
         res.status(500).json({ error: true, message: "Internal server error" });
      }
   }
}