




import { z } from 'zod';




export const Login_Zod_Type = z.object({
    body: z.object({
        email: z.string(),
        password: z.string()
    })
})