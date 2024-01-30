import { AdminController } from "../controller/admin.controller";
import { AdminModel } from "../model/admin.model";
import { AdminRepository } from "../repository/admin.repository";
import { AdminService } from "../service/admin.services";

class AdminFactory {
   static initialize() {
      const repository = new AdminRepository(AdminModel);
      const service = new AdminService(repository);
      const controller = new AdminController(service);
      return controller;
   }
}

export const adminFactory = AdminFactory.initialize()