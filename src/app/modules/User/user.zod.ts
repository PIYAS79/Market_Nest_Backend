
import { z } from 'zod';




export const User_Zod_Type = z.object({
    body: z.object({
        name: z.string(),
        image: z.string(),
        email: z.string(),
        password: z.string(),
    })
})

export const Update_User_Zod_Type = z.object({
    body: z.object({
        name: z.string().optional(),
        image: z.string().optional(),
        email: z.string().optional(),
        password: z.string().optional()
    })
})