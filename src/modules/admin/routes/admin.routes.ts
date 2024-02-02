import { Router } from 'express'
import { adminFactory } from '../factory/admin.factory'
import { isAdminMiddleware } from '../../../middlewares/is-admin.middleware'

export const adminRouter = Router()

adminRouter.post("/admin/send-jewel/:id", isAdminMiddleware, adminFactory.sendJewelsToUser.bind(adminFactory))