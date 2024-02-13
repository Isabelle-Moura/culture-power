import { expect, describe, it, beforeAll } from "vitest";
import { fakeAdminModel } from "../../_mocks/fake-admin.model";
import { AdminRepository } from "../admin.repository";
import { fakeAdmin } from "../../_mocks/fake-admin";
import { fakeUserModel } from "../../../user/_mocks/fake-user.model";
import { fakeUser } from "../../../user/_mocks/fake-user";
import { UserRepository } from "../../../user/repository/user.repository";
import { IAdminRepository } from "../admin.repository.interface";

describe("AdminRepository", () => {
   let adminRepository: IAdminRepository;
   const userRepository = new UserRepository(fakeUserModel);

   beforeAll(() => {
      adminRepository = new AdminRepository(fakeAdminModel, fakeUserModel);
   });

   describe("findAdminByEmail", () => {
      it("Should return an admin when admin's email is found.", async () => {
         try {
            const admin = await adminRepository.findAdminByEmail(fakeAdmin.email);
            expect(admin).toEqual(fakeAdmin);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should have called the findOne method from admin's model.", async () => {
         try {
            await adminRepository.findAdminByEmail(fakeAdmin.email);
            expect(fakeAdminModel.findOne).toHaveBeenCalled();
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("sendJewelsToUser", () => {
      it("Should send an jewels amount to an user.", async () => {
         try {
            const userId = fakeUser._id;
            const amount = fakeUser.jewelsAmount;

            await adminRepository.sendJewelsToUser(userId, amount);

            const updatedUser: any = await userRepository.getUserById(userId);

            expect(updatedUser.jewelsAmount).toBe(amount);
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
});
