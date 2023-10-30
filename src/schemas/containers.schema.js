const { z } = require("zod");

const containerSchema = z.object({
  version: z.number({
    required_error: "La version es necesaria",
  }),
  container: z.string({
    required_error: "El numero de contenedor es necesario",
  }),
  color: z.string({
    required_error: "El color es necesario",
  }),
  size: z.string({
    required_error: "El tamaño es necesario",
  }),
  qr_code: z.string({
    required_error: "El tamaño es necesario",
  }),
  status: z.string({
    required_error: "El tamaño es necesario",
  }),
  type: z.string({
    required_error: "El tamaño es necesario",
  }),
  notes: z.string().optional(),
  maintenance: {
    done_by: z.string(),
    title: z.string(),
    duration: z.string(),
    date: z.string().datetime(),
    annotations: z.string().optional(),
  },
  purchase: {
    vendor: z.string({}),
    price: z.string({}),
    date: z.string({}),
    original_purpose: z.string({}),
  },
});

module.exports = containerSchemaZod;