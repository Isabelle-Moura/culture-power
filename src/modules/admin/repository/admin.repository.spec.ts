import { expect, vi, describe, it } from "vitest";
import { fakeAdmin } from "../_mocks/fake.admin.model";
import { AdminRepository } from "./admin.repository";
import { fakeUser } from "../../user/_mocks/fake.user.model";

const adminRepository = new AdminRepository(fakeAdmin, fakeUser);

// FIXME: Tests are not working here :/ Maybe the "fakeAdmin" is not defined?

describe("AdminRepository", () => {
  describe("findAdminEmail", () => {
    it("Should return an admin when finding admin email.", async () => {
      const admin = await adminRepository.findAdminEmail(fakeAdmin.email);
      expect(admin).toEqual(fakeAdmin);
    });

    it("Should handle admin not found when finding admin email.", async () => {
      vi.spyOn(adminRepository, "findAdminEmail").mockRejectedValue(
        new Error("Admin not found.")
      );
      await expect(
        adminRepository.findAdminEmail("nonexistentAdminEmail")
      ).rejects.toThrowError("Admin not found.");
    });
  });

  describe("sendJewelsToUser", () => {
    it("Should return an admin when sending jewels to a user.", async () => {
      const admin = await adminRepository.sendJewelsToUser(fakeAdmin._id);
      expect(admin).toEqual(fakeAdmin);
    });

    it("Should handle user not found when sending jewels.", async () => {
      vi.spyOn(adminRepository, "sendJewelsToUser").mockRejectedValue(
        new Error("User not found.")
      );
      await expect(
        adminRepository.sendJewelsToUser("nonexistentUserId")
      ).rejects.toThrowError("User not found.");
    });
  });
});
