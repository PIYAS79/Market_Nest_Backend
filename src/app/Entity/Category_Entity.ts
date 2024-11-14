

import { EntitySchema } from 'typeorm';


export interface Category_Entity_Type {
    category_id: number,
    name: string,
}

export const Category_Entity = new EntitySchema<Category_Entity_Type>({
    name: "Category",
    columns: {
        category_id: {
            type: Number,
            generated: true,
            primary: true
        },
        name: {
            type: String,
        },
    }
})