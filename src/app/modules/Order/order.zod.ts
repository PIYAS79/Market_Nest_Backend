
import { z } from 'zod';




export const Order_Zod_Type = z.object({
    body: z.object({
        user_id: z.number(),
        product_id: z.number(),
        quantity: z.number(),
    })
})

export const Update_Order_Zod_Type = z.object({
    body: z.object({
        product_id: z.number().optional(),
        quantity: z.number().optional(),
    })
})