import { expect, describe, it, vi } from "vitest";
import { fakeRequest, fakeResponse } from "../../_mocks/fake-req-res";
import { fakeAuthService } from "../_mocks/fake.auth.services";
import { AuthController } from "./auth.controller";

const authController = new AuthController(fakeAuthService)
const req = fakeRequest()
const res = fakeResponse()

describe("AuthController", () => {
    describe("userLogin", () => {
        it("Should return an user when logging in.", async () => {
            await authController.userLogin(req, res);
            expect(res.json).toHaveBeenCalled();
        })

        it("Should return an status 200.", async () => {
            await authController.userLogin(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
        })

        it("Should return an status 500.", async () => {
            vi.spyOn(fakeAuthService, "userLogin").mockImplementation(() => Promise.reject('Cannot login.'))
            await authController.userLogin(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
        })
    })

    describe("adminLogin", () => {
        it("Should return an admin when logging in.", async () => {
            await authController.adminLogin(req, res);
            expect(res.json).toHaveBeenCalled();
        })

        it("Should return an status 200.", async () => {
            await authController.adminLogin(req, res);
            expect(res.status).toHaveBeenCalledWith(200);
        })

        it("Should return an status 500.", async () => {
            vi.spyOn(fakeAuthService, "adminLogin").mockImplementation(() => Promise.reject('Cannot login.'))
            await authController.adminLogin(req, res);
            expect(res.status).toHaveBeenCalledWith(500);
        })
    })
})