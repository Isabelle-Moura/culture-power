import { AdminModel } from "../../admin/model/admin.model";
import { AdminRepository } from "../../admin/repository/admin.repository";
import { UserModel } from "../../user/model/user.model";
import { UserRepository } from "../../user/repository/user.repository";
import { AuthController } from "../controller/auth.controller";
import { AuthService } from "../service/auth.services";

export class AuthModule {
   static getInstance() {
      const userRepository = new UserRepository(UserModel);
      const adminRepository = new AdminRepository(AdminModel);
      const service = new AuthService(userRepository, adminRepository);
      const controller = new AuthController(service);
      return { service, controller };
   }
}
