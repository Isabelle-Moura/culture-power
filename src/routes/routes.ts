import { Router } from "express";
import { userRouter } from "../modules/user/routes/user.routes";

export const routes = Router();

routes.use(userRouter); // Every user's routes.
