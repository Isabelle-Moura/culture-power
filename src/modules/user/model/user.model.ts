import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.model.interface";

const userSchema = new Schema<IUser>(
   {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      photo: { type: String, required: true },
   },
   { timestamps: true }
);

export const UserModel = mongoose.model<IUser>("User", userSchema);
