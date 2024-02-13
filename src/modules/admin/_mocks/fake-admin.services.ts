import { fakeUser } from "../../user/_mocks/fake-user";
import { IAdminService } from "../service/admin.services.interface";
import { fakeAdmin } from "./fake-admin";

export const fakeAdminService = {
   findAdminByEmail() {
      return Promise.resolve(fakeAdmin);
   },
   sendJewelsToUser() {
      return Promise.resolve(fakeUser);
   },
} as unknown as IAdminService;
