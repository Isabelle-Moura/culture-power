import { CreateUserDto } from "../dto/create-user.dto";
import { IUser } from "../model/user.model.interface";
import { IUserService } from "./user.services.interface";
import { HashBcrypt } from "../../../utils/bcrypt/hasher-bcrypt";
import { ErrorsResponse } from "../../../utils/error/errors.response";
import { IUserRepository } from "../repository/user.repository.interface";

export class UserService implements IUserService {
   constructor(private repository: IUserRepository) {}

   async findByEmail(email: string): Promise<IUser | null> {
      return this.repository.findByEmail(email);
   }

   async getAll(): Promise<IUser[]> {
      return await this.repository.getAll();
   }

   async createUser(user: CreateUserDto, photo: string): Promise<IUser> {
      const userAlreadyExists = await this.repository.findByEmail(user.email);

      if (userAlreadyExists) {
         await ErrorsResponse.invalidCredentials();
      }

      const information: CreateUserDto = {
         ...user,
         password: await HashBcrypt.encrypt(user.password),
         photo,
      };

      const newUser = await this.repository.createUser(information);
      return newUser;
   }

   async getUserById(userId: string): Promise<IUser | null> {
      const user = await this.repository.getUserById(userId);

      if (!user) {
         await ErrorsResponse.notFound();
      }

      return user;
   }
}
