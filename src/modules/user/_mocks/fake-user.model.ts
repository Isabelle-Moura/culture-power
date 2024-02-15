import { Model } from "mongoose";
import { vitest } from "vitest";
import { IUser } from "../model/user.model.interface";
import { fakeUser, fakeUsers } from "./fake-user";

export const fakeUserModel = {
   find: vitest.fn().mockImplementation(() => fakeUsers),
   findOne: vitest.fn().mockImplementation(() => fakeUser),
   create: vitest.fn().mockImplementation(() => fakeUser),
   findById: vitest.fn().mockImplementation(() => fakeUser),
   findByIdAndUpdate: vitest.fn().mockImplementation(() => fakeUser),
   updateOne: vitest.fn().mockImplementation(() => fakeUser),
} as unknown as Model<IUser>;
