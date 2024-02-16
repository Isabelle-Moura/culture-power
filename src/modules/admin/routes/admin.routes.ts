import { Router } from "express";
import { adminFactory } from "../factory/admin.factory";
import { adminVerificationMiddleware } from "../../../middlewares/admin-verification.middleware";

export const adminRouter = Router();

adminRouter.post("/admin/send-jewel/:id", adminVerificationMiddleware, adminFactory.sendJewelsToUser.bind(adminFactory));
