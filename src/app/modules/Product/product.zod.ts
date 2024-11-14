
import { z } from 'zod';




export const Product_Zod_Type = z.object({
    body: z.object({
        name: z.string(),
        image: z.string(),
        description: z.string(),
        price: z.number(),
        category: z.string()
    })
})

export const Update_Product_Zod_Type = z.object({
    body: z.object({
        name: z.string().optional(),
        image: z.string().optional(),
        description: z.string().optional(),
        price: z.number().optional(),
        category: z.string().optional()
    })
})