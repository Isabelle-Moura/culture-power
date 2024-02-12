import { ErrorsResponse } from "../../../utils/error/errors.response";
import { IUser } from "../../user/model/user.model.interface";
import { IUserRepository } from "../../user/repository/user.repository.interface";
import { IAdmin } from "../model/admin.model.interface";
import { AdminRepository } from "../repository/admin.repository";
import { IAdminService } from "./admin.services.interface";

export class AdminService implements IAdminService {
   constructor(private repository: IAdminRepository, private userRepository: IUserRepository) {}
   async findAdminByEmail(email: string): Promise<IAdmin> {
      return await this.repository.findAdminByEmail(email);
   }

   async sendJewelsToUser(userId: string): Promise<IUser | string> {
      const user = await this.userRepository.getUserById(userId);

      if (!user) {
         return await ErrorsResponse.notFound();
      }

      return await this.repository.sendJewelsToUser(userId);
   }
}
