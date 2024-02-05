import { Model } from "mongoose";
import { IUser } from "../model/user.model.interface";
import { vitest } from "vitest";

export const fakeUserModel = {
  find: vitest.fn().mockImplementation(() => fakeUsersArray),
  findOne: vitest.fn().mockImplementation(() => fakeUser),
  create: vitest.fn().mockImplementation(() => fakeUser),
  findByIdAndUpdate: vitest.fn().mockImplementation(() => fakeUser),
} as unknown as Model<IUser>;

export const fakeUsersArray = [
  {
    _id: "65725f4f264acb30ac7a881f",
    name: "Isa",
    email: "isamoura@gmail.com",
    password: "hamster",
    photo: "test.png",
    role: "user",
    jewelsAmount: 0,
    products: [],
    favoriteProducts: [],
  },
  {
    _id: "65725f4f264acb30ac7a882f",
    name: "Nana",
    email: "nanamoura@gmail.com",
    password: "panda",
    photo: "test.png",
    role: "user",
    jewelsAmount: 0,
    products: [],
    favoriteProducts: [],
  },
  {
    _id: "65725f4f264acb30ac7a883f",
    name: "Jessie",
    email: "jessiemoura@gmail.com",
    password: "pizza",
    photo: "test.png",
    role: "user",
    jewelsAmount: 0,
    products: [],
    favoriteProducts: [],
  },
];

export const fakeUser = fakeUsersArray[0];
