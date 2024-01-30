import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.model.interface";
import { UserRole } from "../../../enum/roles";

const userSchema = new Schema<IUser>(
   {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      photo: { type: String, required: true },
      role: { type: String, enum: Object.values(UserRole), default: UserRole.USER },
   },
   { timestamps: true }
);

export const UserModel = mongoose.model<IUser>("User", userSchema);
