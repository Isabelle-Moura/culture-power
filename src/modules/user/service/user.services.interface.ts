import { CreateUserDto } from "../dto/create-user.dto";
import { IUser } from "../model/user.model.interface";

export interface IUserService {
   createUser(user: CreateUserDto, photo: string): Promise<IUser>;
}
