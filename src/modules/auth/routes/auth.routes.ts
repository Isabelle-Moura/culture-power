import { Router } from "express";
import { AuthModule } from "../factory/auth.factory";

const authRouter = Router();
const { controller } = AuthModule.getInstance();

authRouter.post("/user/login", controller.userLogin.bind(controller));
authRouter.post("/admin/login", controller.adminLogin.bind(controller));

export { authRouter };
