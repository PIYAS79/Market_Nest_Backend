

import { EntitySchema } from 'typeorm';


export interface User_Entity_Type {
    user_id: number,
    name: string,
    image: string,
    email: string,
    password: string,
}

export const User_Entity = new EntitySchema<User_Entity_Type>({
    name: "User",
    columns: {
        user_id: {
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
        email: {
            type: String,
        },
        password: {
            type: String
        }
    }
})