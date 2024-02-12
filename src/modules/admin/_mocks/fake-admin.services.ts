import { IAdminService } from "../service/admin.services.interface";
import { fakeAdmin } from "./fake-admin";

export const fakeAdminService = {
   sendJewelsToUser() {
      return Promise.resolve(fakeAdmin);
   },
   findAdminByEmail() {
      return Promise.resolve(fakeAdmin);
   },
} as unknown as IAdminService;
