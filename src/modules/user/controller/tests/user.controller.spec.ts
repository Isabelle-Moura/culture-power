import { expect, describe, it, vi, beforeAll, beforeEach } from "vitest";
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
         try {
            req.body.file = fakeUser.file;
            req.body = fakeUser;

            await userController.createUser(req, res);
            expect(res.json).toHaveBeenCalledWith({
               success: true,
               message: "User was created successfully!",
               data: fakeUser,
            });
         } catch (error) {
            console.error(error);
         }
      });

      it("Should return an status 201.", async () => {
         try {
            await userController.createUser(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should return an status 500.", async () => {
         try {
            vi.spyOn(fakeUserService, "createUser").mockImplementationOnce(() => Promise.reject(null));
            await userController.createUser(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("getUserById", () => {
      it("Should return an user by id.", async () => {
         try {
            req.params.id = fakeUser._id;
            await userController.getUserById(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeUser);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should return an status 200.", async () => {
         try {
            await userController.getUserById(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should return an status 500.", async () => {
         try {
            vi.spyOn(fakeUserService, "getUserById").mockRejectedValueOnce(() => Promise.reject(null));
            await userController.getUserById(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
         } catch (error) {
            console.error(error);
         }
      });
   });

   describe("getAll", () => {
      it("Should return an array of users.", async () => {
         try {
            await userController.getAll(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeUsers);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should return an status 200.", async () => {
         try {
            await userController.getAll(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
         } catch (error) {
            console.error(error);
         }
      });

      it("Should return an status 500.", async () => {
         try {
            vi.spyOn(fakeUserService, "getAll").mockRejectedValueOnce(() => Promise.reject([]));
            await userController.getAll(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
         } catch (error) {
            console.error(error);
         }
      });
   });
});
