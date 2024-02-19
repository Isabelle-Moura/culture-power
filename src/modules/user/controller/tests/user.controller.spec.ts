import { expect, describe, it, vi, beforeAll } from "vitest";
import { fakeUserService } from "../../_mocks/fake-user.services";
import { UserController } from "../user.controller";
import { fakeRequest, fakeResponse } from "../../../_mocks/fake-req-res";
import { fakeUser, fakeUsers } from "../../_mocks/fake-user";
import { IUserController } from "../user.controller.interface";
import { StatusCode } from "../../../../utils/status-code/all-status-code";

let userController: IUserController;
const req = fakeRequest();
const res = fakeResponse();

describe("UserController", () => {
   beforeAll(() => {
      userController = new UserController(fakeUserService);
   });

   describe("createUser", () => {
      it("Should return an user.", async () => {
         req.body = fakeUser;
         req.file = fakeUser.file;

         await userController.createUser(req, res);

         expect(res.json).toHaveBeenCalledWith({
            data: {
               imageUrl: `//uploads/${fakeUser.file?.filename}`,
               user: fakeUser,
            },
            message: "User was created successfully!",
            success: true,
         });
      });

      it("Should return an status 201.", async () => {
         await userController.createUser(req, res);

         expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeUserService, "createUser").mockRejectedValueOnce(() => Promise.reject(null));

         await userController.createUser(req, res);

         expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      });
   });

   describe("getUserById", () => {
      it("Should return an user by id.", async () => {
         req.params.id = fakeUser._id;

         await userController.getUserById(req, res);

         expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: "User found!",
            userData: fakeUser,
         });
      });

      it("Should return an status 200.", async () => {
         await userController.getUserById(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeUserService, "getUserById").mockRejectedValueOnce(() => Promise.reject(null));

         await userController.getUserById(req, res);

         expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      });
   });

   describe("getAll", () => {
      it("Should return an array of users.", async () => {
         await userController.getAll(req, res);

         expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: "Users found!",
            users: fakeUsers,
         });
      });

      it("Should return an status 200.", async () => {
         await userController.getAll(req, res);

         expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeUserService, "getAll").mockRejectedValueOnce(() => Promise.reject([]));

         await userController.getAll(req, res);

         expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      });
   });
});
