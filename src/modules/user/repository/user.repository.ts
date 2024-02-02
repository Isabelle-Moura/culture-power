import { CreateUserDto } from "../dto/create-user.dto";
import { Model } from "mongoose";
import { IUser } from "../model/user.model.interface";
import { IUserRepository } from "./user.repository.interface";

export class UserRepository implements IUserRepository {
   constructor(private model: Model<IUser>) {}

   async createUser(user: CreateUserDto): Promise<IUser> {
      const newUser = await this.model.create(user);
      return newUser;
   }

   async findByEmail(email: string): Promise<IUser | null> {
      const userEmail = await this.model.findOne({ email });
      return userEmail;
   }

   async getUserById(userId: string): Promise<IUser | null> {
      const user = await this.model.findById(userId);
      return user ? user.toObject() : null;
   }   
}
