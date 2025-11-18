import type {IProducts} from "./IProducts.ts";

export type IProductsResponseModelType = {
    total: number;
    skip: number;
    limit: number;
    products: IProducts[]

    }