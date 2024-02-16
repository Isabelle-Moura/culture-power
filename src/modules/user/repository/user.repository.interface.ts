import { CreateUserDto } from "../dto/create-user.dto";
import { IUser } from "../model/user.model.interface";

export interface IUserRepository {
   getAll(): Promise<Array<IUser | null>>
   createUser(user: IUser | CreateUserDto, photo?: string): Promise<IUser | null>;
   findByEmail(email: string): Promise<IUser | null>;
   getUserById(userId: string | any): Promise<IUser | null>;
}
