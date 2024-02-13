import { Request, Response } from "express";

export interface IProductController {
   findAllAvailableProducts(req: Request, res: Response): Promise<void>;
   findById(req: Request, res: Response): Promise<void>;
   createProduct(req: Request, res: Response): Promise<void>;
   updateProduct(req: Request, res: Response): Promise<void>;
   redeemProduct(req: Request, res: Response): Promise<void>;
}
