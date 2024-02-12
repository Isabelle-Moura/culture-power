import { vitest } from "vitest";
import { fakeAdmin } from "./fake-admin";
import { IAdmin } from "../model/admin.model.interface";
import { Model } from "mongoose";

export const fakeAdminModel = {
   findOne: vitest.fn().mockImplementation(() => fakeAdmin),
   findById: vitest.fn().mockImplementation(() => fakeAdmin),
} as unknown as Model<IAdmin>;
