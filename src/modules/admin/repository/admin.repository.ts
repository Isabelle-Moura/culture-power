import { Model } from "mongoose";
import { IAdmin } from "../model/admin.model.interface";
import { IAdminRepository } from "./admin.repository.interface";
import { AdminDto } from "../dto/admin.dto";

export class AdminRepository implements IAdminRepository {
   constructor(private model: Model<IAdmin>) {}
   async loginAdmin(adminData: string): Promise<AdminDto | null> {
      const admin = await this.model.find({ adminData });
      return admin;
   }

   async findAdminEmail(email: string): Promise<AdminDto | null> {
      const adminEmail = await this.model.findOne({ email });
      return adminEmail;
   }
}
