import { IProductService } from "../service/product.services.interface";
import { fakeProduct, fakeProductsArray } from "./fake.product.model";

export const fakeProductService = {
   findAllAvailableProducts(){
    return Promise.resolve(fakeProductsArray)
   },
   findById(){
    return Promise.resolve(fakeProduct)
   },
   createProduct(){
    return Promise.resolve(fakeProduct)
   },
   updateProduct(){
    return Promise.resolve(fakeProduct)
   },
   redeemProduct(){
    return Promise.resolve(fakeProduct)
   },
} as unknown as IProductService

fakeProductService.findAllAvailableProducts()