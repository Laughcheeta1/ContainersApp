import { z } from "zod";

export const commodatumSchema = z.object({
  receiver: z.object({
    id: z.string().min(1, {
      message: "La cédula de quién recibe es necesaria",
    }),

    name: z.string().min(1, {
      message: "El nombre de quién recibe es necesario",
    }),

    number: z.string().min(1, {
      message: "El teléfono de quién recibe es necesario",
    }),
  }),

  commodatum_id: z.string().min(1, {
    message: "El numero del comodato es necesario",
  }),

  company: z.string().min(8, {
    message: "El NIT de la compañía tiene como mínimo 8 caracteres",
  }),

  duration: z.string().min(1, {
    message: "La duración es necesaria",
  }),

  signature: z.string().min(1, {
    message: "La firma es necesaria",
  }),

  action: z.string().min(1, {
    message: "La acción es necesaria",
  }),

  price: z
    .string()
    .min(1, {
      message: "El precio es necesario",
    })
    .transform((value) =>
      typeof value === "string" ? parseInt(value, 10) : value
    )
    .refine((value) => typeof value === "number", {
      message: "La cantidad total debe ser un número",
    }),

  transport_price: z
    .string()
    .min(1, {
      message: "El precio de envío es necesario",
    })
    .transform((value) =>
      typeof value === "string" ? parseInt(value, 10) : value
    )
    .refine((value) => typeof value === "number", {
      message: "La cantidad total debe ser un número",
    }),
});
