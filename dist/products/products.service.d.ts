import { Model } from 'mongoose';
import { Product } from './product.model';
export declare class ProductsService {
    private readonly productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): Promise<Product & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getProducts(): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }[]>;
    updateProduct(productId: string, title: string, desc: string, price: number): Promise<void>;
    getSingleProduct(productId: string): Promise<{
        id: string;
        title: string;
        description: string;
        price: number;
    }>;
    deleteProduct(prodId: string): Promise<void>;
    private findProduct;
}
