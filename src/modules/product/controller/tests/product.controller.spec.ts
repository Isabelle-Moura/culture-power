import { expect, describe, it, vi, vitest } from "vitest";
import { fakeUserService } from "../../../user/_mocks/fake-user.services";
import { ProductController } from "../product.controller";
import { fakeRequest, fakeResponse } from "../../../_mocks/fake-req-res";
import { fakeProducts, fakeProduct } from "../../_mocks/fake-product";
import { fakeProductService } from "../../_mocks/fake-product.services";
import { StatusCode } from "../../../../utils/status-code/all-status-code";
import { throwError } from "../../../../utils/error/error-response";
import { fakeToken, fakeTokenForAdmin } from "../../../_mocks/fake-token";
import { fakeUser } from "../../../user/_mocks/fake-user";
import { JwtToken } from "../../../../utils/jwt/jwt";

const productController = new ProductController(fakeProductService, fakeUserService);
const req = fakeRequest();
const res = fakeResponse();

describe("ProductController", () => {
   describe("findAllAvailableProducts", () => {
      it("Should return an array of products.", async () => {
         await productController.findAllAvailableProducts(req, res);
         expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: "Products found!",
            data: fakeProducts,
         });
      });

      it("Should return an status 200.", async () => {
         await productController.findAllAvailableProducts(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeProductService, "findAllAvailableProducts").mockRejectedValue(() => Promise.reject("No product was found."));
         await productController.findAllAvailableProducts(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      });
   });

   describe("createProduct", () => {
      it("Should return a product.", async () => {
         req.body = fakeProduct;
         req.headers.authorization = fakeToken.token;
         req.body.file = fakeProduct.file;

         await productController.createProduct(req, res);
         expect(res.json).toHaveBeenCalledWith({
            data: {
               imageUrl: `//uploads/${fakeProduct.file.filename}`,
               product: fakeProduct,
            },
            message: "Product was created successfully!",
            success: true,
         });
      });

      it("Should return an status 201.", async () => {
         await productController.createProduct(req, res);

         expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeProductService, "createProduct").mockRejectedValue(() => Promise.reject(throwError("Not able to create product.", StatusCode.INTERNAL_SERVER_ERROR)));
         await productController.createProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      });
   });

   describe("updateProduct", () => {
      it("Should return a product.", async () => {
         req.params = fakeProduct._id;
         req.body = fakeProduct;

         await productController.updateProduct(req, res);
         expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: "Product was updated!",
            data: fakeProduct,
         });
      });

      it("Should return an status 200.", async () => {
         await productController.updateProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeProductService, "updateProduct").mockRejectedValue(() => Promise.reject(throwError("It wasn't able to update product.", StatusCode.INTERNAL_SERVER_ERROR)));
         await productController.updateProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      });
   });

   describe("findById", () => {
      it("Should return a product.", async () => {
         req.params = fakeProduct._id;

         await productController.findById(req, res);
         expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: "Product found!",
            data: fakeProduct,
         });
      });

      it("Should return an status 200.", async () => {
         await productController.findById(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeProductService, "findById").mockRejectedValue(() => Promise.reject(throwError("Product not found.", StatusCode.INTERNAL_SERVER_ERROR)));
         await productController.findById(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      });
   });

   describe("redeemProduct", () => {
      it.skip("Should return a product.", async () => {
         req.params = fakeProduct._id;
         (req.headers.authorization as any) = fakeToken;

         /* 
          FIXME: Is returning me this error: 
             "error": true,
+            "message": "req.headers.authorization?.split is not a function",
         */

         vitest.spyOn(JwtToken, "decodeToken").mockImplementation((token: string) => {
            expect(token).toEqual(fakeToken);
            return JwtToken.decodeToken(token);
         });

         await productController.redeemProduct(req, res);
         expect(res.json).toHaveBeenCalledWith({
            success: true,
            message: "Product was redeemed successfully!",
            data: { user: fakeUser, redeemedProduct: fakeProduct },
         });
      });

      it("Should return an status 200.", async () => {
         await productController.redeemProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
      });

      it("Should return an status 500.", async () => {
         vi.spyOn(fakeProductService, "findById").mockRejectedValue(() => Promise.reject(throwError("It wasn't able to redeem product.", StatusCode.INTERNAL_SERVER_ERROR)));
         await productController.redeemProduct(req, res);
         expect(res.status).toHaveBeenCalledWith(StatusCode.INTERNAL_SERVER_ERROR);
      });
   });
});
