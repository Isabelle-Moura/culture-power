import { CreateUserDto } from "../dto/create-user.dto";
import { IUser } from "../model/user.model.interface";
import { IUserService } from "./user.services.interface";
import { HashBcrypt } from "../../../utils/bcrypt/hasher-bcrypt";
import { throwError } from "../../../utils/error/error-response";
import { IUserRepository } from "../repository/user.repository.interface";
import { StatusCode } from "../../../utils/status-code/all-status-code";

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
         return await throwError("Invalid credentials", StatusCode.BAD_REQUEST);
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
         return await throwError("Id not found.", StatusCode.NOT_FOUND);
      }

      return user;
   }
}
