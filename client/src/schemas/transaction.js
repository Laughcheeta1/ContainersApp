import { z } from "zod";

// const itemObject = z.object({
//     id : z.string().default(""),
//     quantity : z.number().default("")
// });

export const transactionSchema = z.object({
    container : z.string().min(1),

    receiver : z.object({
        id : z.string().min(1),
        name : z.string().min(1),
        number : z.string().min(1)
    }),

    // items : z.array(itemObject).default([]),

    company : z.string().min(8),

    date : z.date().default(""),

    duration : z.string().min(1),

    action : z.string().min(1),

    price : z.string().min(1),
    
    transport_price : z.string().min(1)
});