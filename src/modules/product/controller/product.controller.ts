import { Request, Response } from "express";
import { IProductService } from "../service/product.services.interface";
import { IProductController } from "./product.controller.interface";
import { productBodyValidator } from "../utils/product-body.validator";
import { IUserService } from "../../user/service/user.services.interface";
import { JwtToken } from "../../../utils/jwt/jwt";
import { env } from "../../../utils/dotenv/dotenv";
import { throwError } from "../../../utils/error/error-response";
import { StatusCode } from "../../../utils/status-code/all-status-code";

export class ProductController implements IProductController {
   constructor(private service: IProductService, private userService: IUserService) {}

   async findAllAvailableProducts(req: Request, res: Response): Promise<void> {
      try {
         const products = await this.service.findAllAvailableProducts();

         if (!products) {
            throwError("Products not found.", StatusCode.NOT_FOUND);
         }

         res.status(StatusCode.OK).json({ success: true, message: "Products found!", data: products });
      } catch (error: any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ error: true, message: error.message });
      }
   }

   async createProduct(req: Request, res: Response): Promise<void> {
      try {
         const { body } = req;
         const { file } = req;
         req.body.file = file;

         if (!file) {
            res.status(StatusCode.BAD_REQUEST).json({
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

         res.status(StatusCode.CREATED).json({
            success: true,
            message: "Product was created successfully!",
            data: { product, imageUrl },
         });
      } catch (error: any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ error: true, message: error.message });
      }
   }

   async findById(req: Request, res: Response): Promise<void> {
      try {
         const { id } = req.params;

         const product = await this.service.findById(id);

         if (!product) {
            throwError("Product not found.", StatusCode.NOT_FOUND);
         }

         res.status(StatusCode.OK).json({ success: true, message: "Product found!", data: product });
      } catch (error: any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ error: true, message: error.message });
      }
   }

   async updateProduct(req: Request, res: Response): Promise<void> {
      try {
         const { id } = req.params;
         const { body } = req;

         const product = await this.service.updateProduct(id, body);

         if (!product) {
            throwError("It wasn't able to update product.", StatusCode.BAD_REQUEST);
         }

         res.status(StatusCode.OK).json({
            success: true,
            message: "Product was updated!",
            data: product,
         });
      } catch (error: any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ error: true, message: error.message });
      }
   }

   async redeemProduct(req: Request, res: Response): Promise<void> {
      try {
         const token: any = req.headers.authorization?.split(" ")[1];

         const { productId } = req.params;

         const decodedToken: any = await JwtToken.verifyToken(token);
         const userId = decodedToken.id;

         if (!userId || !productId) {
            throwError("User id or Product id not found.", StatusCode.NOT_FOUND);
         }

         const redeemedProduct = await this.service.redeemProduct(userId, productId);

         if (!redeemedProduct) {
            throwError("It wasn't able to redeem product.", StatusCode.BAD_REQUEST);
         }

         const user = await this.userService.getUserById(userId);

         if (!user) {
            throwError("User not found.", StatusCode.NOT_FOUND);
         }

         res.status(StatusCode.OK).json({
            success: true,
            message: "Product was redeemed successfully!",
            data: { user: user, redeemedProduct },
         });
      } catch (error: any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR).json({ error: true, message: error.message });
      }
   }
}
