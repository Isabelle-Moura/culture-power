import { Router } from "express";
import { authFactory } from "../factory/auth.factory";

const authRouter = Router();
const { controller } = authFactory;

authRouter.post("/user/login", controller.userLogin.bind(controller));
authRouter.post("/admin/login", controller.adminLogin.bind(controller));

export { authRouter };
