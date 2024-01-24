import express from "express";
import { userFactory } from "../factory/user.factory";

export const userRouter = express.Router();

userRouter.post("/user/new-user", userFactory.createUser.bind(userFactory));
