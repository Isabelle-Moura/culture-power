import express from "express";
import { userFactory } from "../factory/user.factory";
import { uploadPhotoMiddleware } from "../../../middlewares/upload-photo.middleware";

export const userRouter = express.Router();

userRouter.post("/user/new-user", uploadPhotoMiddleware, userFactory.createUser.bind(userFactory));
