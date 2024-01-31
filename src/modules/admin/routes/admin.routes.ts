import { Router } from 'express'
import { adminFactory } from '../factory/admin.factory'

export const adminRouter = Router()

adminRouter.post("/admin/send-jewel/:id", adminFactory.sendJewelsToUser.bind(adminFactory))