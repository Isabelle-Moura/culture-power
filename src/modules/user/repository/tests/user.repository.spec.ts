import { expect, describe, it, beforeAll } from "vitest";
import { fakeUser, fakeUsers } from "../../_mocks/fake-user";
import { UserRepository } from "../user.repository";
import { fakeUserModel } from "../../_mocks/fake-user.model";
import { IUserRepository } from "../user.repository.interface";

describe("UserRepository", () => {
   let userRepository: IUserRepository;

   beforeAll(() => {
      userRepository = new UserRepository(fakeUserModel);
   });

   describe("getAll.", () => {
      it("Should return an array of users.", async () => {
         try {
            const users = await userRepository.getAll();
            expect(users).toEqual(fakeUsers);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should have called the find method from user's model.", async () => {
         try {
            await userRepository.getAll();
            expect(fakeUserModel.find).toHaveBeenCalled();
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("createUser", () => {
      it("Should return an new user.", async () => {
         try {
            const newUser = await userRepository.createUser(fakeUser);
            expect(newUser).toEqual(fakeUser);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should have called the create method from user's model.", async () => {
         try {
            await userRepository.createUser(fakeUser);
            expect(fakeUserModel.create).toHaveBeenCalled();
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("getUserById", () => {
      it("Should return an user by id.", async () => {
         try {
            const user = await userRepository.getUserById(fakeUser._id);
            expect(user).toEqual(fakeUser);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should have called the findById method from user's model.", async () => {
         try {
            await userRepository.getUserById(fakeUser._id);
            expect(fakeUserModel.findById).toHaveBeenCalled();
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("findByEmail", () => {
      it("Should return an user by e-mail.", async () => {
         try {
            const user = await userRepository.findByEmail(fakeUser.email);
            expect(user).toEqual(fakeUser);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should have called the findOne method from user's model.", async () => {
         try {
            await userRepository.findByEmail(fakeUser.email);
            expect(fakeUserModel.findOne).toHaveBeenCalled();
         } catch (error) {
            console.error(error);
         }
      });
   });
});
