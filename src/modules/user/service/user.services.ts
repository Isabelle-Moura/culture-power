import { UserRepository } from "../repository/user.repository";
import { CreateUserDto } from "../dto/create-user.dto";
import { IUser } from "../model/user.model.interface";
import { hash } from "bcrypt";
import { IUserService } from "./user.services.interface";

export class UserService implements IUserService {
   constructor(private repository: UserRepository) {}

   async createUser(user: CreateUserDto, photo: Express.Multer.File): Promise<IUser> {
      const userAlreadyExists = await this.repository.findByEmail(user.email);

      if (userAlreadyExists) {
         throw {
            error: true,
            message:
               "This user already exists. Try putting another credentials.",
            status: 409,
         };
      }

      const information: CreateUserDto &  {photo: string } = {
         ...user,
         password: await hash(user.password, 10),
         photo: photo.filename
      };

      const result = await this.repository.createUser(information);
      return result;
   }
}
