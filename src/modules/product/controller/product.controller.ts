import { Request, Response } from "express";
import { IProductService } from "../service/product.services.interface";
import { ErrorsResponse } from "../../../utils/errors/errors.response";
import { productBodyValidator } from "../utils/product-body.validator";
import { env } from "../../../config/dotenv";

export class ProductController {
   constructor(private service: IProductService) {}

   async getAllProducts(req: Request, res: Response) {
      try {
         const products = await this.service.getAllProducts();

         if (!products) {
            await ErrorsResponse.notFound();
         }

         res.status(200).json({ success: true, data: products });
      } catch (error: any) {
         res.status(500).json({ error: true, message: error.message });
      }
   }

   async createProduct(req: Request, res: Response) {
      try {
         const { body } = req;
         const { file } = req;
         
         // Check for file presence before validation
         if (!file) {
            res.status(400).json({
               error: true,
               message: "Please select a photo.",
               status: 400,
            });
         }

         const bodyValidation = {
            name: body.name,
            description: body.description,
            value: body.value,
            quantity: body.quantity,
            photo: file?.originalname,
         };

         await productBodyValidator(bodyValidation);

         const product = await this.service.createProduct(body, file?.filename as string);

         const imageUrl = `${env.BASE_URL}/uploads/${file?.filename}`;

         res.status(201).json({ success: true, message: "Product was created successfully!", status: 201, data: { product , imageUrl} });
         
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
         const { id } = req.params
         const { body } = req

         const product = await this.service.updateProduct(id, body);

         if (!product) {
            await ErrorsResponse.customError("It was not possible to update the product", 500);
         }

         res.status(200).json({ success: true, data: product });
      } catch (error: any) {
        res.status(500).json({ error: true, message: error.message });
     }
   } 
}
