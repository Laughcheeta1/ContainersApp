import { z } from "zod";

export const customerSchema = z.object({
    version: z.number().default(1),

    company_NIT: z.string().length(9,{
        message: "El NIT debe de constar de 9 digitos"
    }),

    name: z.string().min(1, {
        message: "La compañia debe de tener un nombre"
    }),
    
    phone: z.string().min(1, {
        message: "La compañia debe tener un numero"
    }),

    address: z.string().default("No aplica"),

    created_by: z.string().min(1, {
        message: "Alguien tuvo que haber ingresado el cliente"
    })
});