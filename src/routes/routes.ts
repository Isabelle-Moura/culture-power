import { Router } from "express";
import { userRouter } from "../modules/user/routes/user.routes";
import { authRouter } from "../modules/auth/routes/auth.routes";
import { adminRouter } from "../modules/admin/routes/admin.routes";

export const routes = Router();

routes.use(userRouter); // Every user's routes.
routes.use(authRouter); 
routes.use(adminRouter) // Every admin's routes.
