import { describe, expect, it, vi, beforeAll } from "vitest";
import { fakeUser, fakeUsers } from "../../_mocks/fake-user";
import { UserService } from "../user.services";
import { fakeUserRepository } from "../../_mocks/fake-user.repository";
import { IUserService } from "../user.services.interface";

let userService: IUserService;

describe("UserService", () => {
   beforeAll(() => {
      userService = new UserService(fakeUserRepository);
   })

   describe("getAll", () => {
      it("Should return an array of users.", async () => {
            const users = await userService.getAll();
            expect(users).toEqual(fakeUsers);
      });

      it("Should return an error if no user is found.", async () => {
            vi.spyOn(fakeUserRepository, "getAll").mockImplementationOnce(() => Promise.resolve());
            await expect(userService.getAll()).rejects.toThrow();
      });
   });

   describe("findByEmail", () => {
      it("Should return an user by e-mail.", async () => {
            const user = await userService.findByEmail(fakeUser.email)
            expect(user).toEqual(fakeUser);
      });

      it("Should return an error if no user is found.", async () => {
            vi.spyOn(fakeUserRepository, "findByEmail").mockImplementationOnce(() => Promise.resolve(null));
            await expect(userService.findByEmail(fakeUser.email)).rejects.toThrow()
      });
   });

   describe("getUserById", () => {
      it("Should return an user by id.", async () => {
            const user = await userService.getUserById(fakeUser._id);
            expect(user).toEqual(fakeUser);
      });

      it("Should return an error if no user is found.", async () => {
            vi.spyOn(fakeUserRepository, "getUserById").mockImplementationOnce(() => Promise.resolve(null));
            await expect(userService.getUserById(fakeUser._id)).rejects.toThrow();
      });
   });

   describe("createUser", () => {
      it.skip("Should return an user.", async () => {
         //FIXME: Is returning the message error: "User already exists."
         const newUser = await userService.createUser(fakeUser, fakeUser.photo)
         expect(newUser).toEqual(fakeUser);
      })

      it("Should return an error if not able to create user.", async () => {
            vi.spyOn(fakeUserRepository, "createUser").mockImplementationOnce(() => Promise.resolve(null))
            await expect(userService.createUser(fakeUser, fakeUser.photo)).rejects.toThrow();
      });
   });
});
