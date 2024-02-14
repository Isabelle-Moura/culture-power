import { fakeUsers, fakeUser } from "./fake-user";

export const fakeUserService = {
   getAll() {
      return Promise.resolve(fakeUsers);
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
} as any;

fakeUserService.getAll();
