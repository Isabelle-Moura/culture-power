import { vitest } from "vitest";
import { fakeUser, fakeAdmin } from "./fake.auth.model";

export const fakeAuthRepository = {
  findByEmail: vitest.fn().mockImplementation(() => fakeUser),
  findAdminEmail: vitest.fn().mockImplementation(() => fakeAdmin),
}