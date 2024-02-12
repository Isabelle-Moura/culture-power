import { IAdminRepository } from "../repository/admin.repository.interface";
import { fakeAdmin } from "./fake-admin";

export const fakeAdminRepository = {
   findAdminByEmail() {
      return Promise.resolve(fakeAdmin);
   },
   sendJewelsToUser() {
      return Promise.resolve(fakeAdmin);
   },
} as unknown as IAdminRepository;
