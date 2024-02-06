import { IUserRepository } from "../repository/user.repository.interface";
import { fakeUsersArray, fakeUser } from "./fake.user.model";

export const fakeUserRepository = {
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
} as unknown as IUserRepository;

fakeUserRepository.getAll();
