const { z } = require("zod");

const containerSchema = z.object({
  version: z.number().default(1),

  container_id: z.string({
    required_error: "El numero de contenedor es necesario",
  }),

  color: z.string({
    required_error: "El color es necesario",
  }),

  size: z.string({
    required_error: "El color es necesario",
  }),

  qr_code: z.string({
    required_error: "El codigo QR es necesario",
  }),

  status: z.string().default("Libre"),

  type: z.string({
    required_error: "El tipo es necesario",
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

module.exports = containerSchema;
