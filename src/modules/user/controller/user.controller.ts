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
   
         if (!file) {
            throw new Error(`There's no such file.`);
         }
   
         const user = await this.service.createUser(userDto, file);
         const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${file.filename}`;
   
         res.status(201).json({
            success: true,
            message: 'User was created successfully!',
            status: 201,
            data: {
               user,
               imageUrl, 
            }, 
         });
      } catch (error) {
         console.error(error);
         res.status(500).json({
            error: true,
            message: 'There was an error at creating user. Try again later :/',
            status: 500,
         });
      }
   }
}
