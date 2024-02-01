import { Router } from 'express'
import { adminFactory } from '../factory/admin.factory'
import { isAdmin } from '../../../middlewares/isAdmin'

export const adminRouter = Router()

adminRouter.post("/admin/send-jewel/:id", isAdmin, adminFactory.sendJewelsToUser.bind(adminFactory))