import { faker } from "@faker-js/faker";
import { fakeObjectIdForProduct } from "../../_mocks/fake-objectId";
import { IProduct } from "../model/product.model.interface";

const generateFakeImageFile = () => ({
   originalname: `${faker.string.uuid()}.jpg`,
   filename: `${faker.string.uuid()}.jpg`,
   mimetype: "image/jpeg",
});

const fakeImageFile = generateFakeImageFile();

const generateFakeProduct = () =>
   ({
      _id: fakeObjectIdForProduct,
      name: faker.commerce.productName(),
      value: faker.number.int({ min: 0, max: 100 }),
      quantity: faker.number.int({ min: 0, max: 100 }),
      description: faker.lorem.text(),
      photo: fakeImageFile,
   } as unknown as IProduct);

export const fakeProduct = generateFakeProduct();

export const fakeProducts = () => {
   const products = [];

   for (let i = 0; i < 3; i++) {
      products.push(generateFakeProduct());
   }

   return products;
};
