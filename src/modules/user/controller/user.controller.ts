import { Request, Response } from "express";
import { IUserController } from "./user.controller.interface";
import { IUserService } from "../service/user.services.interface";
import { userBodyValidator } from "../utils/user-body.validator";
import { env } from "../../../config/dotenv";
import jwt from "jsonwebtoken";

export class UserController implements IUserController {
   constructor(private service: IUserService) {}

   async createUser(req: Request, res: Response): Promise<void> {
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
            email: body.email,
            password: body.password,
            photo: file?.originalname,
         };

         await userBodyValidator(bodyValidation);
         const user = await this.service.createUser(body, file?.filename as string);

         const imageUrl = `${env.BASE_URL}/uploads/${file?.filename}`;

         res.status(201).json({
            success: true,
            message: "User was created successfully!",
            status: 201,
            data: {
               user,
               imageUrl,
            },
         });
      } catch (error: any) {
         console.error(error);
         res.status(500).json({
            error: true,
            message: error.message,
            status: 500,
         });
      }
   }
   async getUserById(req: Request, res: Response): Promise<void> {
      try {
         const { authorization } = req.headers;

         if (!authorization) {
            res.status(401).json({ message: "Unauthorized" });
         }

         const [, token] = authorization?.split(" ") || [];

         const decodeToken: any = jwt.decode(
            token as any,
            env.JWT_SECRET_KEY as any
         );

         const userId = decodeToken?.id;

         const user = await this.service.getUserById(userId);

         res.status(200).json({ userData: user });
      } catch (error: any) {
         res.status(500).json({ message: error.message });
      }
   }
}
