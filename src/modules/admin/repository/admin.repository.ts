import { IAdminRepository } from "./admin.repository.interface";
import { IAdmin } from "../model/admin.model.interface";
import { Model } from "mongoose";
import { ErrorsResponse } from "../../../utils/errors/errors.response";
import { IUser } from "../../user/model/user.model.interface";

export class AdminRepository implements IAdminRepository {
   constructor(private model: Model<IAdmin>, private userModel: Model<IUser>) {}

   async findAdminEmail(email: string): Promise<IAdmin> {
      const adminEmail = await this.model.findOne({ email });

      if (!adminEmail) {
         return await ErrorsResponse.notFound();
      }

      return adminEmail;
   }

   async sendJewelsToUser(userId: string) {
      const user = await this.userModel.findById(userId);

      if (!user) {
         return await ErrorsResponse.notFound();
      }

      if (user.jewelsAmount || user.jewelsAmount >= 0) {
         await this.userModel.updateOne({ _id: userId }, { $inc: { jewelsAmount: 1 } });
      }

      const updatedUser = await this.userModel.findById(userId);
      return updatedUser;
   }
}
