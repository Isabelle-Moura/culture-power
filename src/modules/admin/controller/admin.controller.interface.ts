import {Request, Response} from 'express'
export interface IAdminController {
    sendJewelsToUser(req: Request, res: Response): Promise<void>
}