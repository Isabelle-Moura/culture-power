import { CreateUserDto } from "../dto/create-user.dto";
import { IUser } from "../model/user.model.interface";

export interface IUserService {
   getAll(): Promise<Array<IUser>>;
   createUser(user: CreateUserDto, photo?: string): Promise<IUser | null>;
   findByEmail(email: string): Promise<IUser | null>;
   getUserById(userId: string): Promise<IUser | null>;
}
