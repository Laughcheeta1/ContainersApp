import { z } from "zod";

export const editContainerSchema = z.object({
  color: z.string().min(1, { message : "El color es necesario" }),

  size: z.string().min(1, { message : "El tamaño es necesario" }),

  type: z.string().min(1, { message : "El tipo es necesario" }),

  notes: z.string()
});
