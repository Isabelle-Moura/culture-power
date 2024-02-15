import mongoose from "mongoose";
import { UserRole } from "../../../utils/roles/roles";

export interface IUser extends Document {
   _id?: any;
   name: string;
   email: string;
   password: string;
   photo: string;
   role: UserRole;
   jewelsAmount: number;
   products: mongoose.Types.ObjectId[];
   favoriteProducts: mongoose.Types.ObjectId[];
}
