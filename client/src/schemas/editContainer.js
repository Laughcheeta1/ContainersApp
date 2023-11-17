import { z } from "zod";

export const editContainerSchema = z.object({
  color: z.string(),

  size: z.string(),

  type: z.string(),

  notes: z.string()
});
