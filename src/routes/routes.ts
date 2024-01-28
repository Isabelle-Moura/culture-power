import { Router } from "express";
import { userRouter } from "../modules/user/routes/user.routes";
import { authRouter } from "../modules/auth/routes/auth.routes";

export const routes = Router();

//TODO:Testa senhora, pra ver se tá bão.
routes.use(userRouter); // Every user's routes.
routes.use(authRouter);
