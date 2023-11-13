import { z } from "zod";

/**
 * The edit customer page only changes name, phone and address;
 * But it does not force any of them
 */
export const editCustomerSchema = z.object({
    name: z.string(),

    phone: z.string(),

    address: z.string()
});