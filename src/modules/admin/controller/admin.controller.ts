import { AdminService } from "../service/admin.services";
import { Request, Response } from "express";
import { IAdminController } from "./admin.controller.interface";
import { ErrorsResponse } from "../../../utils/errors/errors.response";

export class AdminController implements IAdminController{
   constructor(private service: AdminService) {}

   async sendJewelsToUser(req: Request, res: Response) {
      try {
         const { id } = req.params;

         if (!id) {
            throw new Error(ErrorsResponse.notFound());
         }

         const result = await this.service.sendJewelsToUser(id);

         res.status(200).json({ success: true, data: result });

      } catch (error: any) {
         res.status(500).json({ error: true, message: error.message });
      }
   }
}