import { z } from "zod";

export const customerSchema = z.object({
  version: z.number().default(1),

  company_NIT: z.string().length(9, {
    message: "El NIT debe tener exactamente 9 digitos",
  }),

  name: z.string().min(1, {
    message: "El nombre de la compañía es necesario",
  }),

  phone: z.string().min(1, {
    message: "El número de la compañía es necesario",
  }),

  address: z.string().default("N/A"),
});
