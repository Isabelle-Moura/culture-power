import { expect, describe, it, vi } from "vitest";
import { fakeRequest, fakeResponse } from "../../../_mocks/fake-req-res";
import { fakeAdminService } from "../../_mocks/fake-admin.services";
import { AdminController } from "../admin.controller";
import { fakeUser } from "../../../user/_mocks/fake-user";
import { throwError } from "../../../../utils/error/error-response";
import { StatusCode } from "../../../../utils/status-code/all-status-code";

const adminController = new AdminController(fakeAdminService);
const req = fakeRequest();
const res = fakeResponse();

describe("AdminController", () => {
   describe("sendJewelsToUser", () => {
      it("Should send an jewels amount to an user.", async () => {
         req.params.id = fakeUser._id;
         req.body.amount = 10;

         await adminController.sendJewelsToUser(req, res);

         expect(res.json).toHaveBeenCalledWith({
            data: expect.objectContaining({ _id: fakeUser._id }),
            message: "Jewels sent to user successfully!",
            success: true,
         });
      });

      it("Should return an status 200.", async () => {
         await adminController.sendJewelsToUser(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeAdminService, "sendJewelsToUser").mockRejectedValueOnce(() => Promise.reject(throwError("It wasn't able to send jewels to user", StatusCode.INTERNAL_SERVER_ERROR)));
         await adminController.sendJewelsToUser(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      });
   });
});
