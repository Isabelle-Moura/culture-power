import express from "express";
import { userFactory } from "../factory/user.factory";
import { uploadPhotoMiddleware } from "../../../middlewares/upload-photo.middleware";
import { checkAuthorization } from "../../../middlewares/authenticateToken";

export const userRouter = express.Router();

userRouter.post("/user/new-user", uploadPhotoMiddleware.single("photo"), userFactory.createUser.bind(userFactory));

userRouter.get("/user/me", checkAuthorization, userFactory.getUserById.bind(userFactory));
