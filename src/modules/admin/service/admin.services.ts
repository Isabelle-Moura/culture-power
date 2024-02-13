import { throwError } from "../../../utils/error/error-response";
import { StatusCode } from "../../../utils/status-code/all-status-code";
import { IUser } from "../../user/model/user.model.interface";
import { IUserRepository } from "../../user/repository/user.repository.interface";
import { IAdmin } from "../model/admin.model.interface";
import { IAdminRepository } from "../repository/admin.repository.interface";
import { IAdminService } from "./admin.services.interface";

export class AdminService implements IAdminService {
   constructor(private repository: IAdminRepository, private userRepository: IUserRepository) {}

   async findAdminByEmail(email: string): Promise<IAdmin | null> {
      try {
         const admin = await this.repository.findAdminByEmail(email);

         if (!admin) {
            throwError("Admin not found.", StatusCode.NOT_FOUND);
         }

         return admin;
      } catch (error: any) {
         throwError(error.message, StatusCode.INTERNAL_SERVER_ERROR);
      }
   }

   async sendJewelsToUser(userId: string, amount: number): Promise<IUser | null> {
      try {
         const user = await this.userRepository.getUserById(userId);

         if (!user) {
            throwError("User not found.", StatusCode.NOT_FOUND);
         }

         const jewels = await this.repository.sendJewelsToUser(userId, amount);

         return jewels;
      } catch (error: any) {
         throwError(error.message, StatusCode.INTERNAL_SERVER_ERROR);
      }
   }
}
