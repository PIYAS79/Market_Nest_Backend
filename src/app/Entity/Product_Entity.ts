

import { EntitySchema } from 'typeorm';


export interface Product_Entity_Type {
    product_id: number,
    name: string,
    description: string,
    image: string,
    category: string,
    price: number
}

export const Product_Entity = new EntitySchema<Product_Entity_Type>({
    name: "Product",
    columns: {
        product_id: {
            type: Number,
            generated: true,
            primary: true
        },
        name: {
            type: String,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        price: {
            type: Number,
        },
        category: {
            type: String
        }
    }
})