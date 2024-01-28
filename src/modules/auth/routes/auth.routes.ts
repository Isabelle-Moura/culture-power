import { Router } from "express";
import { AuthModule } from "../factory/auth.factory";

const authRouter = Router();
const { controller } = AuthModule.getInstance();

authRouter.post("/user/login", controller.login.bind(controller));

export { authRouter };
