import mongoose from "mongoose";

export interface IUser extends Document {
   name: string;
   email: string;
   password: string;
   photo: mongoose.Types.ObjectId | string | null;
}
