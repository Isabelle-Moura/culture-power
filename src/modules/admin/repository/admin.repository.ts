import { IAdminRepository } from "./admin.repository.interface";
import { IAdmin } from "../model/admin.model.interface";
import { Model } from "mongoose";

export class AdminRepository implements IAdminRepository {
   constructor(private model: Model<IAdmin>) {}

   async findAdminEmail(email: string): Promise<IAdmin> {
      const adminEmail = await this.model.findOne({ email });
   
      if (!adminEmail) {
         throw new Error("No admin was found by this e-mail.");
      }
   
      return adminEmail;
   }
   
}
