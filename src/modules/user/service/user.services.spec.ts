import { describe, expect, it, vi } from "vitest";
import { fakeUser, fakeUsersArray } from "../_mocks/fake.user.model";
import { fakeUserService } from "../_mocks/fake.user.services";
import { UserService } from "./user.services";

const userService = new UserService(fakeUserService);

describe("UserService", () => {
   describe("getAll", () => {
      it("Should return an array of users.", async () => {
         const users = await userService.getAll();
         expect(users).toEqual(fakeUsersArray);
      });

      it("Should return an error if no user is found.", async () => {
         vi.spyOn(userService, "getAll").mockRejectedValue(new Error("Users not found."));
         await expect(userService.getAll()).rejects.toThrowError("Users not found.");
      });
   });

   describe("findByEmail", () => {
      it("Should return an user by e-mail.", async () => {
         const user = await userService.findByEmail(fakeUser.email);
         expect(user).toEqual(fakeUser);
      });

      it("Should return an error if no user is found.", async () => {
         vi.spyOn(userService, "findByEmail").mockRejectedValue(new Error("User not found."));
         await expect(userService.findByEmail("batata@potato.com")).rejects.toThrowError("User not found.");
      });
   });

   describe("getUserById", () => {
      it("Should return an user by id.", async () => {
         const user = await userService.getUserById(fakeUser._id);
         expect(user).toEqual(fakeUser);
      });

      it("Should return an error if no user is found.", async () => {
         vi.spyOn(userService, "getUserById").mockRejectedValue(new Error("User not found."));
         await expect(userService.getUserById("50")).rejects.toThrowError("User not found.");
      });
   });

   describe("createUser", () => {
      it("Should return an user.", async () => {
         expect(await userService.createUser(fakeUser, fakeUser.photo)).toEqual(fakeUser);
      });

      it("Should return an error if not able to create user.", async () => {
         vi.spyOn(userService, "createUser").mockRejectedValue(new Error("Cannot create user."));
         await expect(userService.createUser(fakeUser, fakeUser.photo)).rejects.toThrowError("Cannot create user.");
      });
   });
});
