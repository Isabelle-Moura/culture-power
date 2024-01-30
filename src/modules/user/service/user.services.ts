import { UserRepository } from "../repository/user.repository";
import { CreateUserDto } from "../dto/create-user.dto";
import { IUser } from "../model/user.model.interface";
import { IUserService } from "./user.services.interface";
import { HashBcrypt } from "../../../utils/hasher.bcrypt";

export class UserService implements IUserService {
   constructor(private repository: UserRepository) {}

   async createUser(user: CreateUserDto, photo: string): Promise<IUser> {
      const userAlreadyExists = await this.repository.findByEmail(user.email);

      if (userAlreadyExists) {
         throw new Error(
            "This user already exists. Try putting another credentials."
         );
      }

      const information: CreateUserDto = {
         ...user,
         password: await HashBcrypt.encrypt(user.password),
         photo,
      };

      const result = await this.repository.createUser(information);
      return result;
   }

   async getUserById(userId: string): Promise<IUser | null> {
      const user = await this.repository.getUserById(userId);
      return user;
   }
}
