import { IAdminRepository } from "./admin.repository.interface";
import { IAdmin } from "../model/admin.model.interface";
import { Model } from "mongoose";
import { IUser } from "../../user/model/user.model.interface";
import { throwError } from "../../../utils/error/error-response";
import { StatusCode } from "../../../utils/status-code/all-status-code";

export class AdminRepository implements IAdminRepository {
   constructor(private model: Model<IAdmin>, private userModel: Model<IUser>) {}

   async findAdminByEmail(email: string): Promise<IAdmin | null> {
      try {
         const adminEmail = await this.model.findOne({ email });

         if (!adminEmail) {
            throwError("Admin not found.", StatusCode.NOT_FOUND);
         }

         return adminEmail;
      } catch (error: any) {
         throwError(error.message, StatusCode.INTERNAL_SERVER_ERROR);
      }
   }

   async sendJewelsToUser(userId: string, amount: number): Promise<IUser | null> {
      try {
         const user = await this.userModel.findById(userId);

         if (!user) {
            throwError("User not found.", StatusCode.NOT_FOUND);
         }

         if (user.jewelsAmount || user.jewelsAmount >= 0) {
            await this.userModel.updateOne({ _id: userId }, { $inc: { jewelsAmount: amount } });
         }

         const updatedUser = await this.userModel.findById(userId);
         return updatedUser;
      } catch (error: any) {
         throwError(error.message, StatusCode.INTERNAL_SERVER_ERROR);
      }
   }
}
