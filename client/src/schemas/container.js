import { z } from "zod";

export const containerSchema = z.object({
  version: z.number().default(1),

  container_id: z.string().min(6, {
    message: "El numero es de al menos 6 digitos",
  }),

  color: z.string().min(1, {
    message: "El color es necesario",
  }),

  size: z.string().min(1, {
    message: "El tamaño es necesario",
  }),

  qr_code: z.string().min(1, {
    message: "El QR es necesario",
  }),
  
  status: z.string().default("Available"),

  type: z.string().min(1, {
    message: "El tipo es necesario",
  }),

  notes: z.string().optional(),

  maintenance: z
    .object({
      done_by: z.string(),
      title: z.string(),
      duration: z.string(),
      date: z.string().datetime(),
      annotations: z.string().optional(),
    })
    .optional(),

  purchase: z
    .object({
      vendor: z.string({}),
      price: z.string({}),
      date: z.string({}),
      original_purpose: z.string({}),
    })
    .optional(),
});
