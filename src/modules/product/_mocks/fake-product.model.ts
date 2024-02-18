import { vitest } from "vitest";
import { IProduct } from "../model/product.model.interface";
import { Model } from "mongoose";
import { fakeProducts, fakeProduct } from "./fake-product";

export const fakeProductsModel = {
  find: vitest.fn().mockImplementation(() => fakeProducts),
  create: vitest.fn().mockImplementation(() => fakeProduct),
  findById: vitest.fn().mockImplementation(() => fakeProduct),
  findByIdAndUpdate: vitest.fn().mockImplementation(() => fakeProduct),
  updateOne: vitest.fn().mockImplementation(() => fakeProduct),
} as unknown as Model<IProduct>;
