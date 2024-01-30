import { UserController } from "../controller/user.controller";
import { UserModel } from "../model/user.model";
import { UserRepository } from "../repository/user.repository";
import { UserService } from "../service/user.services";

class UserFactory {
   static getInstance() {
      const repository = new UserRepository(UserModel);
      const service = new UserService(repository);
      const controller = new UserController(service);
      return controller;
   }
}

export const userFactory = UserFactory.getInstance();
