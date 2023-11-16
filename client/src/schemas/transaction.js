import { z } from "zod";

export const transactionSchema = z.object({
    container : z.string().min(1),

    receiver : z.object({
        id : z.string(),
        name : z.string(),
        quantity : z.number()
    }),

    items : z.array({
        name : z.string().min(1),
        brand : z.string().min(1),
        quantity : z.number()
    }),

    company : z.string().min(9),

    date : z.date(),

    duration : z.string(),

    action : z.string(),

    price : z.string(),
    
    transport_price : z.string()
});