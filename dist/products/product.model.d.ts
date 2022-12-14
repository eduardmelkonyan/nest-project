import * as mongoose from 'mongoose';
export declare const ProductSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    title: string;
    description: string;
    price: number;
}>;
export interface Product extends mongoose.Document {
    id: string;
    title: string;
    description: string;
    price: number;
}
