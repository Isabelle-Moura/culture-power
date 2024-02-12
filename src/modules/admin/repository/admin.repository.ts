import { IAdminRepository } from "./admin.repository.interface";
import { IAdmin } from "../model/admin.model.interface";
import { Model } from "mongoose";
import { IUser } from "../../user/model/user.model.interface";
import { ErrorsResponse } from "../../../utils/error/error.response";
import { StatusCode } from "../../../utils/enum/all-status-code";

export class AdminRepository implements IAdminRepository {
   constructor(private model: Model<IAdmin>, private userModel: Model<IUser>) {}

   async findAdminByEmail(email: string): Promise<IAdmin | null> {
      const adminEmail = await this.model.findOne({ email });

      if (!adminEmail) {
         return await ErrorsResponse.error("Admin not found.", StatusCode.NOT_FOUND);
      }

      return adminEmail;
   }

   async sendJewelsToUser(userId: string): Promise<IUser | null> {
      const user = await this.userModel.findById(userId);

      if (!user) {
         return await ErrorsResponse.error("User not found.", StatusCode.NOT_FOUND);
      }

      if (user.jewelsAmount || user.jewelsAmount >= 0) {
         await this.userModel.updateOne({ _id: userId }, { $inc: { jewelsAmount: 1 } });
      }

      const updatedUser = await this.userModel.findById(userId);
      return updatedUser;
   }
}
