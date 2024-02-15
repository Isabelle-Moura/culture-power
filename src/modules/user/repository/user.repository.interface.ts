import { CreateUserDto } from "../dto/create-user.dto";
import { IUser } from "../model/user.model.interface";

export interface IUserRepository {
   getAll(): Promise<Array<IUser>>;
   createUser(user: IUser, photo?: string): Promise<IUser>;
   findByEmail(email: string): Promise<IUser | null>;
   getUserById(userId: string): Promise<IUser | null>;
}
