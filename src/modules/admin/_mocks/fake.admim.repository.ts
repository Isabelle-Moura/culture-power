// fake.admin.repository.ts
import { vitest } from "vitest";
import { IAdminRepository } from "../repository/admin.repository.interface";
import { fakeAdmin } from "./fake.admin.model";

export const fakeAdminRepository: IAdminRepository = {
  findAdminEmail: vitest.fn().mockImplementation(() => fakeAdmin),
  sendJewelsToUser: vitest.fn().mockImplementation(() => fakeAdmin),
}
