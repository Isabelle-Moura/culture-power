import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.model.interface";

const productSchema = new Schema<IProduct>(
   {
      name: { type: String, required: true },
      value: { type: Number, required: true },
      quantity: { type: Number, required: true },
      description: { type: String, required: true },
      photo: { type: String, required: true },
   },
   { timestamps: true }
);

export const ProductModel = mongoose.model<IProduct>("Product", productSchema);
