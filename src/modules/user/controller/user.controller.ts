import { Request, Response } from 'express';
import { IUserController } from './user.controller.interface';
import { IUserService } from '../service/user.services.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { uploadPhotoMiddleware } from '../../../middlewares/upload-photo.middleware';

export class UserController implements IUserController {
   constructor(private service: IUserService) {}

   async createUser(req: Request, res: Response): Promise<void> {
      try {
         const userDto: CreateUserDto = req.body;
         const { file } = req;

         uploadPhotoMiddleware.single('photo')(req, res, async (error) => {
            if (error) {
               throw {
                  error: true,
                  message: 'Error uploading photo.',
                  status: 500,
               };
            }

            if (!file) {
               throw new Error(`There's no such file.`);
            }

            const user = await this.service.createUser(userDto, file);

            res.status(201).json({
               success: true,
               message: 'User was created successfully!',
               status: 201,
               data: user,
            });
         });

      } catch (error) {
         res.status(500).json({
            error: true,
            message: 'Error at creating user. Try again later :/',
            status: 500,
         });
      }
   }
}
