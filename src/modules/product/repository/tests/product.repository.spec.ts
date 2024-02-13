// import { expect, describe, it, vi } from "vitest";
// import { fakeProduct, fakeProductsArray, fakeProductsModel } from "../../_mocks/fake.product.model";
// import { ProductRepository } from "../product.repository";
// import { fakeUser, fakeUserModel } from "../../../user/_mocks/fake-user";

// const productRepository = new ProductRepository(fakeProductsModel, fakeUserModel);

// describe("ProductRepository", () => {
//    describe("findAllAvailableProducts", () => {
//       it("Should return an array of products.", async () => {
//          const products = await productRepository.findAllAvailableProducts();
//          expect(products).toEqual(fakeProductsArray);
//       });

//       it("Should return an error if no product is found.", async () => {
//          vi.spyOn(productRepository, "findAllAvailableProducts").mockRejectedValue(new Error("Products not found."));
//          await expect(productRepository.findAllAvailableProducts()).rejects.toThrowError("Products not found.");
//       });
//    });

//    describe("findById", () => {
//       it("Should return an product by id.", async () => {
//          const product = await productRepository.findById(fakeProductsArray[0]._id);
//          expect(product).toEqual(fakeProductsArray[0]);
//       });

//       it("Should return an error if no product is found.", async () => {
//          vi.spyOn(productRepository, "findById").mockRejectedValue(new Error("Product not found."));
//          await expect(productRepository.findById("50")).rejects.toThrowError("Product not found.");
//       });
//    });

//    describe("createProduct", () => {
//       it("Should return an product.", async () => {
//          expect(await productRepository.createProduct(fakeProductsArray[0])).toEqual(fakeProductsArray[0]);
//       });

//       it("Should return an error if not able to create product.", async () => {
//          vi.spyOn(productRepository, "createProduct").mockRejectedValue(new Error("Product not created."));
//          await expect(productRepository.createProduct(fakeProductsArray[0])).rejects.toThrowError("Product not created.");
//       });
//    });

//    describe("updateProduct", () => {
//       it("Should return an product.", async () => {
//          expect(await productRepository.updateProduct(fakeProductsArray[0]._id, fakeProductsArray[0])).toEqual(fakeProductsArray[0]);
//       });

//       it("Should return an error if not able to update product.", async () => {
//          vi.spyOn(productRepository, "updateProduct").mockRejectedValue(new Error("Product not updated."));
//          await expect(productRepository.updateProduct(fakeProductsArray[0]._id, fakeProductsArray[0])).rejects.toThrowError("Product not updated.");
//       });
//    });

//    describe("redeemProduct", () => {
//       it("Should return an product.", async () => {
//          expect(await productRepository.redeemProduct(fakeUser, fakeProduct)).toBe(fakeProduct);
//       });

//       it("Should return an error if not able to redeem product.", async () => {
//          vi.spyOn(productRepository, "redeemProduct").mockRejectedValue(new Error("Product not redeemed."));
//          await expect(productRepository.redeemProduct(fakeUser, fakeProduct)).rejects.toThrowError("Product not redeemed.");
//       });
//    });
// });
