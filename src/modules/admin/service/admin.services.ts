import { ErrorsResponse } from "../../../utils/errors/errors.response";
import { IUser } from "../../user/model/user.model.interface";
import { UserRepository } from "../../user/repository/user.repository";
import { AdminRepository } from "../repository/admin.repository";
import { IAdminService } from "./admin.services.interface";

export class AdminService implements IAdminService {
   constructor(private repository: AdminRepository, private userRepository: UserRepository) {}

   async sendJewelsToUser(userId: string): Promise<IUser | string> {
      const user = await this.userRepository.getUserById(userId);

      if (!user) {
        return ErrorsResponse.notFound()
      }

      return await this.repository.sendJewelsToUser(userId);
   }
}
