import express from "express";
import { userFactory } from "../factory/user.factory";
import { uploadPhotoMiddleware } from "../../../middlewares/upload-photo.middleware";
import { userBodyValidator } from "../utils/user-body.validator";

export const userRouter = express.Router();

userRouter.post(
   "/user/new-user",
   uploadPhotoMiddleware.single("photo"),
   userFactory.createUser.bind(userFactory)
);
