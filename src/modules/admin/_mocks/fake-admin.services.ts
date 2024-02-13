import { IAdminService } from "../service/admin.services.interface";
import { fakeAdmin } from "./fake-admin";

export const fakeAdminService = {
   findAdminByEmail() {
      return Promise.resolve(fakeAdmin);
   },
   sendJewelsToUser() {
      return Promise.resolve(fakeAdmin);
   },
} as unknown as IAdminService;
