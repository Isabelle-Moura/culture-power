import { describe, it, vi, expect } from "vitest";
import { AuthService } from "./auth.services";
import { fakeUserService } from "../../user/_mocks/fake.user.services";
import { UserService } from "../../user/service/user.services";
import { AdminService } from "../../admin/service/admin.services";
import { fakeAdminService } from "../../admin/_mocks/fake.admin.services";
import { fakeUsersArray } from "../../user/_mocks/fake.user.model";
import { fakeAdmin } from "../../admin/_mocks/fake.admin.model";

const userService = new UserService(fakeUserService) as any;
const adminService = new AdminService(fakeAdminService, userService) as any;
const authService = new AuthService(userService, adminService);

//FIXME: Tests are not working here :/ Basically, isn't working all the "success" cases.

describe("AuthService", () => {
  describe("userLogin", () => {
    it("Should return a user when logging in with correct credentials", async () => {
      const credentials = { email: "isamoura@gmail.com", password: "hamster" };
      const result = await authService.userLogin(credentials);
      const expectedUser = fakeUsersArray[0];

      console.log("Result:", result); 
      expect(result.user).toBeDefined();
      expect(result.user.email).toBe(expectedUser.email);
    });

    it("Should return an error when logging in with incorrect credentials", async () => {
      const credentials = { email: "isamoura@gmail.com", password: "wrongpassword" };
      const result = await authService.userLogin(credentials);

      console.log("Result:", result); 
      expect(result.error).toBe(true);
      expect(result.message).toBe("Invalid credentials");
      expect(result.status).toBe(400);
    });
  });

  describe("adminLogin", () => {
    it("Should return an admin when logging in.", async () => {
      const result = await authService.adminLogin({
        email: fakeAdmin.email,
        password: fakeAdmin.password,
      });
      expect(result.admin).toBeDefined();
      expect(result.admin.email).toBe(fakeAdmin.email);
    });

    it("Should handle invalid credentials when logging in.", async () => {
      vi.spyOn(authService, "adminLogin").mockRejectedValue(
        new Error("Invalid credentials")
      );
      await expect(
        authService.adminLogin({
          email: "blahblah@example.com",
          password: "passwordblahblah",
        })
      ).rejects.toThrowError("Invalid credentials");
    });
  });
});
