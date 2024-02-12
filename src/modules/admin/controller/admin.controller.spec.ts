import { expect, describe, it, vi } from "vitest";
import { fakeRequest, fakeResponse } from "../../_mocks/fake-req-res";
import { fakeAdmin } from "../_mocks/fake-admin.model";
import { fakeAdminService } from "../_mocks/fake-admin.services";
import { AdminController } from "./admin.controller";
import { fakeUser } from "../../user/_mocks/fake-user";

const adminController = new AdminController(fakeAdminService);
const req = fakeRequest();
const res = fakeResponse();

describe("AdminController", () => {
   describe("sendJewelsToUser", () => {
      it("Should return an admin when sending jewels to a user", async () => {
         req.params._id = fakeUser._id;
         await adminController.sendJewelsToUser(req, res);
         expect(res.json).toHaveBeenCalledWith(fakeAdmin);
      });

      it("Should return an status 200.", async () => {
         await adminController.sendJewelsToUser(req, res);
         expect(res.status).toHaveBeenCalledWith(200);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeAdminService, "sendJewelsToUser").mockImplementation(() => Promise.reject("Cannot send jewels to user."));
         await adminController.sendJewelsToUser(req, res);
         expect(res.status).toHaveBeenCalledWith(500);
      });
   });
});
