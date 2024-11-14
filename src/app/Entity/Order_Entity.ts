import { EntitySchema } from 'typeorm';
import { User_Entity_Type } from './User_Entity';
import { Product_Entity_Type } from './Product_Entity';

export interface Order_Entity_Type {
    order_id: number;
    user: User_Entity_Type;
    product: Product_Entity_Type;
    time: Date;
    quantity: number;
    user_id: number;
}

export const Order_Entity = new EntitySchema<Order_Entity_Type>({
    name: "Order",
    columns: {
        order_id: {
            type: Number,
            generated: true,
            primary: true
        },
        time: {
            type: String,
        },
        quantity: {
            type: Number
        },
        user_id: {
            type: Number
        }
    },
    relations: {
        user: {
            type: "many-to-one",
            target: "User",
            joinColumn: { name: "user_id" },
            eager: false
        },
        product: {
            type: "many-to-one",
            target: "Product",
            joinColumn: { name: "product_id" },
            eager: true
        }
    }
});
