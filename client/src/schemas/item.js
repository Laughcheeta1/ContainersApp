import { z } from "zod";

export const itemSchema = z.object({
  version: z.number().default(1),

  name: z.string().min(1, {
    message: "El nombre es necesario",
  }),

  brand: z.string().min(1, {
    message: "La marca es necesaria",
  }),

  total_quantity: z
    .string()
    .transform((value) =>
      typeof value === "string" ? parseInt(value, 10) : value
    )
    .refine((value) => typeof value === "number", {
      message: "La cantidad total debe ser un número",
    })
    .default(0),

  available_quantity: z
    .string()
    .transform((value) =>
      typeof value === "string" ? parseInt(value, 10) : value
    )
    .refine((value) => typeof value === "number", {
      message: "La cantidad disponible debe ser un número",
    })
    .default(0),
});
