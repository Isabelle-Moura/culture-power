import { Router } from "express";
import { userRouter } from "../modules/user/routes/user.routes";
import { authRouter } from "../modules/auth/routes/auth.routes";
import { adminRouter } from "../modules/admin/routes/admin.routes";
import { productRouter } from "../modules/product/routes/product.routes";

export const routes = Router();

routes.use(userRouter); // Every user's routes.
routes.use(authRouter); // Every login's routes.
routes.use(adminRouter); // Every admin's routes.
routes.use(productRouter); // Every product's routes.

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../../docs/swagger.json";

routes.use("/api-docs", swaggerUi.serve);
routes.get("/api-docs", swaggerUi.setup(swaggerDocument));
