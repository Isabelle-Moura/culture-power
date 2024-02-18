import { IUserRepository } from "../repository/user.repository.interface";
import { fakeUsers, fakeUser } from "./fake-user";

export const fakeUserRepository = {
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
} as unknown as IUserRepository;

fakeUserRepository.getAll();
