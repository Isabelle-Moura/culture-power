import { expect, describe, it, vi } from "vitest";
import { fakeUserService } from "../_mocks/fake.user.services";
import { UserController } from "./user.controller";
import { fakeRequest, fakeResponse } from "../../_mocks/fake-req-res";
import { fakeUser } from "../_mocks/fake.user.model";

const userController = new UserController(fakeUserService);
const req = fakeRequest()
const res = fakeResponse()

describe("UserController", () => {
    describe("createUser", () => {
        it("Should return an user.", async () => {
            await userController.createUser(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeUser);
        })

        it("Should return an status 201.", async () => {
            await userController.createUser(req, res);
            expect(res.status).toHaveBeenCalledWith(201);
        })

        it("Should return an staus 500.", async () => {
            vi.spyOn(fakeUserService, "createUser").mockImplementation(() => Promise.reject('Cannot create user.'))
            await userController.createUser(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
        })
    })

    describe("getUserById", () => {
        it("Should return an user by id.", async () => {
            req.headers.authorization = fakeUser._id
            await userController.getUserById(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeUser);
        })

        it("Should return an status 200.", async () => {
            req.headers.authorization = fakeUser._id
            await userController.getUserById(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
        })

        it("Should return an status 500.", async () => {
            vi.spyOn(fakeUserService, "getUserById").mockImplementation(() => Promise.reject('User not found.'))
            await userController.getUserById(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
        })
    })
})