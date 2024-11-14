


import { z } from 'zod';




export const Zod_Category_Type = z.object({
    body: z.object({
        category_name: z.string(),
    })
})

export const Update_Category_Zod_Type = z.object({
    body: z.object({
        category_name: z.string().optional(),
    })
})