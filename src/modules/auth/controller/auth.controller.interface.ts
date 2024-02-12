import { Request, Response } from "express";

export interface IAuthController {
   userLogin(req: Request, res: Response): Promise<void>;
   adminLogin(req: Request, res: Response): Promise<void>;
}
