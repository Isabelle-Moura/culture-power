import mongoose, { Schema } from "mongoose";
import { IAdmin } from "./admin.model.interface";

const adminSchema = new Schema<IAdmin>(
   {
      name: { type: String },
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
   },
   { timestamps: true }
);

export const AdminModel = mongoose.model<IAdmin>("Admin", adminSchema);
