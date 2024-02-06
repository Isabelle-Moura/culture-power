import { vitest } from "vitest";
import { IProduct } from "../model/product.model.interface";
import { Model } from "mongoose";
import { IProductRepository } from "../repository/product.repository.interface";

export const fakeProductsModel = {
  find: vitest.fn().mockImplementation(() => fakeProductsArray),
  create: vitest.fn().mockImplementation(() => fakeProduct),
  findById: vitest.fn().mockImplementation(() => fakeProduct),
  findByIdAndUpdate: vitest.fn().mockImplementation(() => fakeProduct),
  updateOne: vitest.fn().mockImplementation(() => fakeProduct),
} as unknown as Model<IProduct>;

export const fakeProductsArray = [
  {
    _id: "65725f4f264acb30ac7a881f",
    name: "Headphone Master 2000",
    value: 10,
    quantity: 10,
    description: "Esse headphone é muito bom",
    photo: "headphone.png",
  },
  {
    _id: "65725f4f264acb30ac7a882f",
    name: "Teclado Gamer Ultra",
    value: 10,
    quantity: 10,
    description: "Esse teclado é muito bom",
    photo: "teclado.png",
  },
] as IProduct[];

export const fakeProduct = fakeProductsArray[0];
