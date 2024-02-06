import { IUserService } from "../service/user.services.interface";
import { fakeUsersArray, fakeUser } from "./fake.user.model";

export const fakeUserService = {
   getAll() {
      return Promise.resolve(fakeUsersArray);
   },
   getUserById() {
      return Promise.resolve(fakeUser);
   },
   findByEmail() {
      return Promise.resolve(fakeUser);
   },
   createUser() {
      return Promise.resolve(fakeUser);
   },
} as unknown as IUserService;

fakeUserService.getAll();
