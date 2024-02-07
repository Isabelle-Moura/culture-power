import { vitest } from "vitest";
import { fakeUser } from "./fake.auth.model";
import { IAuthService } from "../service/auth.services.interface";

export const fakeAuthService = {
    userLogin: vitest.fn().mockImplementation(() => fakeUser),
    adminLogin: vitest.fn().mockImplementation(() => fakeUser),
} as unknown as IAuthService