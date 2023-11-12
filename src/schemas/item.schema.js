const { z } = require("zod");

const createItemsSchema = z.object({
  version: z.number().default(1),

  name: z.string({
    required_error: "Name is required",
  }),

  brand: z.string().optional(),

  total_quantity: z.number().default(0),

  available_quantity: z.number().default(0),
});

module.exports = createItemsSchema;
