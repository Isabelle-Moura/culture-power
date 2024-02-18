import { CreateUserDto } from "../dto/create-user.dto";
import { IUser } from "../model/user.model.interface";
import { IUserService } from "./user.services.interface";
import { HashBcrypt } from "../../../utils/bcrypt/hasher-bcrypt";
import { throwError } from "../../../utils/error/error-response";
import { IUserRepository } from "../repository/user.repository.interface";
import { StatusCode } from "../../../utils/status-code/all-status-code";

export class UserService implements IUserService {
   constructor(private repository: IUserRepository) {}

   async getAll(): Promise<Array<IUser | null>> {
      const products = await this.repository.getAll();

      if (!products) {
         throwError("Products not found", StatusCode.NOT_FOUND);
      }

      return products;
   }

   async findByEmail(email: string): Promise<IUser | null> {
      const user = await this.repository.findByEmail(email);

      if (!user) {
         throwError("Invalid credentials.", StatusCode.BAD_REQUEST);
      }

      return user;
   }

   async createUser(user: CreateUserDto, photo: string): Promise<IUser | null> {
      const userAlreadyExists = await this.repository.findByEmail(user.email);

      if (userAlreadyExists) {
         throwError("User already exists.", StatusCode.BAD_REQUEST);
      }

      const information: CreateUserDto = {
         ...user,
         password: await HashBcrypt.encrypt(user.password),
         photo,
      };

      const newUser = await this.repository.createUser(information);

      if (!newUser) {
         throwError("Not able to create user.", StatusCode.BAD_REQUEST);
      }

      return newUser;
   }

   async getUserById(userId: string): Promise<IUser | null> {
      const user = await this.repository.getUserById(userId);

      if (!user) {
         throwError("User not found.", StatusCode.NOT_FOUND);
      }

      return user;
   }
}
