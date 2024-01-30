import { Router } from 'express'
import { adminFactory } from '../factory/admin.factory'

export const adminRouter = Router()

adminRouter.post("/admin/login", adminFactory.loginAdmin.bind(adminFactory))