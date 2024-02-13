import mongoose, { Schema } from "mongoose";
import { IAdmin } from "./admin.model.interface";
import { UserRole } from "../../../utils/roles/roles";

const adminSchema = new Schema<IAdmin>(
   {
      name: { type: String },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: Object.values(UserRole), default: UserRole.ADMIN },
   },
   { timestamps: true }
);

export const AdminModel = mongoose.model<IAdmin>("Admin", adminSchema);
