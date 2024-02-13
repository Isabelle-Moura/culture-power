// import { describe, expect, it, vi } from "vitest";
// import { ProductService } from "./product.services";
// import { fakeProductService } from "../_mocks/fake.product.services";
// import { UserService } from "../../user/service/user.services";
// import { fakeUserService } from "../../user/_mocks/fake-user.services";
// import { fakeProduct, fakeProductsArray } from "../_mocks/fake.product.model";
// import { fakeUser } from "../../user/_mocks/fake-user";

// const userService = new UserService(fakeUserService);
// const productService = new ProductService(fakeProductService, userService);

// describe("ProductService", () => {
//    describe("findAllAvailableProducts", async () => {
//       it("Should return an array of products.", async () => {
//          const products = await productService.findAllAvailableProducts();
//          expect(products).toEqual(fakeProductsArray);
//       });

//       it("Should return an error if no product is found.", async () => {
//          vi.spyOn(productService, "findAllAvailableProducts").mockRejectedValue(new Error("Products not found."));
//          await expect(productService.findAllAvailableProducts()).rejects.toThrowError("Products not found.");
//       });
//    });

//    describe("findById", async () => {
//       it("Should return an product by id.", async () => {
//          const product = await productService.findById(fakeProduct._id);
//          expect(product).toBeDefined();
//       });

//       it("Should return an error if no product is found.", async () => {
//          vi.spyOn(productService, "findById").mockRejectedValue(new Error("Product not found."));
//          await expect(productService.findById("50")).rejects.toThrowError("Product not found.");
//       });
//    });

//    describe("createProduct", async () => {
//       it("Should return an new product.", async () => {
//          expect(await productService.createProduct(fakeProduct, fakeProduct.photo)).toEqual(fakeProduct);
//       });

//       it("Should return an error if not able to create product.", async () => {
//          vi.spyOn(productService, "createProduct").mockRejectedValue(new Error("Cannot create product."));
//          await expect(productService.createProduct(fakeProduct, fakeProduct.photo)).rejects.toThrowError("Cannot create product.");
//       });
//    });

//    describe("updateProduct", async () => {
//       it("Should return an product updated.", async () => {
//          expect(await productService.updateProduct(fakeProduct._id, fakeProduct)).toEqual(fakeProduct);
//       });

//       it("Should return an error if not able to update product.", async () => {
//          vi.spyOn(productService, "updateProduct").mockRejectedValue(new Error("Cannot update product."));
//          await expect(productService.updateProduct(fakeProduct._id, fakeProduct)).rejects.toThrowError("Cannot update product.");
//       });
//    });

//    describe("redeemProduct", async () => {
//       it("Should return an product redeemed.", async () => {
//          expect(await productService.redeemProduct(fakeUser._id, fakeProduct._id)).toEqual(fakeProduct);
//       });

//       it("Should return an error if not able to redeem product.", async () => {
//          vi.spyOn(productService, "redeemProduct").mockRejectedValue(new Error("Cannot redeem product."));
//          await expect(productService.redeemProduct(fakeProduct._id, fakeProduct)).rejects.toThrowError("Cannot redeem product.");
//       });
//    });
// });
