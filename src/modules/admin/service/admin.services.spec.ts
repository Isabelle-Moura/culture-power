// admin.services.spec.ts
import { vi, it, expect, describe } from "vitest";
import { fakeAdmin } from "../_mocks/fake-admin.model";
import { fakeAdminService } from "../_mocks/fake-admin.services";
import { AdminService } from "./admin.services";
import { fakeAdminRepository } from "../_mocks/fake-admin.repository";
import { fakeUserService } from "../../user/_mocks/fake-user.services";
import { UserService } from "../../user/service/user.services";

const userService = new UserService(fakeUserService);
const adminService = new AdminService(fakeAdminRepository, userService);

describe("AdminService", () => {
   describe("sendJewelsToUser", () => {
      it("Should return an admin when sending jewels to a user", async () => {
         const result = await adminService.sendJewelsToUser(fakeAdmin._id);
         expect(result).toEqual(fakeAdmin);
      });

      it("Should handle user not found when sending jewels", async () => {
         vi.spyOn(fakeAdminRepository, "sendJewelsToUser").mockRejectedValue(new Error("User not found"));
         await expect(adminService.sendJewelsToUser("nonexistentUserId")).rejects.toThrowError("User not found");
      });
   });

   describe("findAdminByEmail", () => {
      it("Should return an admin when finding admin email", async () => {
         const result = await adminService.findAdminByEmail(fakeAdmin.email);
         expect(result).toEqual(fakeAdmin);
      });

      it("Should handle admin not found when finding admin email", async () => {
         vi.spyOn(fakeAdminRepository, "findAdminByEmail").mockRejectedValue(new Error("Admin not found"));
         await expect(adminService.findAdminByEmail("nonexistentAdminEmail")).rejects.toThrowError("Admin not found");
      });
   });
});
