import { z } from "zod";

export const transactionSchema = z.object({
    container : z.string().min(1),

    receiver : z.object({
        id : z.string().min(1),
        name : z.string().min(1),
        quantity : z.number().min(1)
    }),

    items : z.array({
        name : z.string(),
        brand : z.string(),
        quantity : z.number()
    }).default([]),

    company : z.string().min(9),

    date : z.date().min(1),

    duration : z.string().min(1),

    action : z.string().min(1),

    price : z.string().min(1),
    
    transport_price : z.string().min(1)
});