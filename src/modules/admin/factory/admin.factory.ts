import { UserModel } from "../../user/model/user.model";
import { UserRepository } from "../../user/repository/user.repository";
import { AdminController } from "../controller/admin.controller";
import { AdminModel } from "../model/admin.model";
import { AdminRepository } from "../repository/admin.repository";
import { AdminService } from "../service/admin.services";

class AdminFactory {
   static getInstance() {
      const repository = new AdminRepository(AdminModel, UserModel);
      const userRepository = new UserRepository(UserModel);
      const service = new AdminService(repository, userRepository);
      const controller = new AdminController(service);
      return controller;
   }
}

export const adminFactory = AdminFactory.getInstance()