import { describe, expect, it, vi, beforeAll } from "vitest";
import { fakeUser, fakeUsers } from "../../_mocks/fake-user";
import { UserService } from "../user.services";
import { fakeUserRepository } from "../../_mocks/fake-user.repository";
import { IUserService } from "../user.services.interface";

let userService: IUserService;

describe("UserService", () => {
   beforeAll(() => {
      userService = new UserService(fakeUserRepository);
   });

   describe("getAll", () => {
      it("Should return an array of users.", async () => {
         try {
            const users = await userService.getAll();
            expect(users).toEqual(fakeUsers);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should return an error if no user is found.", async () => {
         try {
            vi.spyOn(fakeUserRepository, "getAll").mockImplementationOnce(() => Promise.resolve([]));
            await expect(userService.getAll()).rejects.toThrow();
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("findByEmail", () => {
      it("Should return an user by e-mail.", async () => {
         try {
            const user = await userService.findByEmail(fakeUser.email);
            expect(user).toEqual(fakeUser);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should return an error if no user is found.", async () => {
         try {
            vi.spyOn(userService, "findByEmail").mockImplementationOnce(() => Promise.resolve(null));
            await expect(userService.findByEmail("")).rejects.toThrow();
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("getUserById", () => {
      it("Should return an user by id.", async () => {
         try {
            const user = await userService.getUserById(fakeUser._id);
            expect(user).toEqual(fakeUser);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should return an error if no user is found.", async () => {
         try {
            vi.spyOn(userService, "getUserById").mockImplementationOnce(() => Promise.resolve(null));
            await expect(userService.getUserById("")).rejects.toThrow();
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("createUser", () => {
      it("Should return an user.", async () => {
         try {
            const newUser = await userService.createUser(fakeUser, fakeUser.photo);
            expect(newUser).toEqual(fakeUser);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should return an error if not able to create user.", async () => {
         try {
            vi.spyOn(userService, "createUser").mockImplementationOnce(() => Promise.resolve(null));
            await expect(userService.createUser(fakeUser, fakeUser.photo)).rejects.toThrow();
         } catch (error) {
            console.error(error);
         }
      });
   });
});
