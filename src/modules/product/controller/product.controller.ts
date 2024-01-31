import { Request, Response } from "express";
import { IProductService } from "../service/product.services.interface";
import { ErrorsResponse } from "../../../utils/errors/errors.response";

export class ProductController {
   constructor(private service: IProductService) {}

   async getAllProducts() {
      return await this.service.getAllProducts();
   }

   async createProduct(req: Request, res: Response) {
      try {
         const { body } = req;
         const product = await this.service.createProduct(body);

         if (!product) {
            await ErrorsResponse.invalidCredentials();
         }

         res.status(201).json({ success: true, data: product });
      } catch (error: any) {
         res.status(500).json({ error: true, message: error.message });
      }
   }

   async getProductById(req: Request, res: Response) {
      try {
         const { id } = req.params;

         const product = await this.service.getProductById(id);

         if (!product) {
            await ErrorsResponse.notFound();
         }

         res.status(200).json({ success: true, data: product });
      } catch (error: any) {
         res.status(500).json({ error: true, message: error.message });
      }
   }

   async updateProduct(req: Request, res: Response) {
      try {

   //TODO: Stopped here!
          
      } catch (error: any) {
        res.status(500).json({ error: true, message: error.message });
     }
   } 
}
