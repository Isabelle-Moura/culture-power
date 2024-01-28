import { UserModel } from "../../user/model/user.model";
import { UserRepository } from "../../user/repository/user.repository";
import { AuthController } from "../controller/auth.controller";
import { AuthService } from "../service/auth.services";

export class AuthModule {
   static getInstance() {
      const repository = new UserRepository(UserModel);
      const service = new AuthService(repository);
      const controller = new AuthController(service);
      return { service, controller };
   }
}
