import mongoose from "mongoose";
import { UserRole } from "../../../enum/roles";

export interface IUser extends Document {
   _id?: string;
   name: string;
   email: string;
   password: string;
   photo: string;
   role: UserRole;
   jewelsAmount: number;
   products: mongoose.Types.ObjectId[];
   favoriteProducts: mongoose.Types.ObjectId[];
}
