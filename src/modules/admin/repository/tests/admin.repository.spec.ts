import { expect, vi, describe, it, beforeEach } from "vitest";
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

   beforeEach(() => {
      adminRepository = new AdminRepository(fakeAdminModel, fakeUserModel);
   });

   describe("findAdminByEmail", () => {
      it("Should return an admin when admin's email is found.", async () => {
         const admin = await adminRepository.findAdminByEmail(fakeAdmin.email);
         expect(admin).toEqual(fakeAdmin);
      });

      it("Should have called the findOne method from admin's model.", async () => {
         await adminRepository.findAdminByEmail(fakeAdmin.email);
         expect(fakeAdminModel.findOne).toHaveBeenCalled();
      });
   });

   describe("sendJewelsToUser", () => {
      it("Should send an jewels amount to a user.", async () => {
         const user = fakeUser._id;
         const amount = 10;

         const jewelsSentByAdmin = await adminRepository.sendJewelsToUser(user, amount);

         expect(jewelsSentByAdmin).toEqual(amount);
      });

      it("Should have called the findOne method from user's model.", async () => {
         await userRepository.getUserById(fakeUser._id);
         expect(fakeUserModel.findOne).toHaveBeenCalled();
      });
   });
});
