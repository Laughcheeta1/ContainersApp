import { z } from "zod";

// const itemObject = z.object({
//     id : z.string().default(""),
//     quantity : z.number().default("")
// });

export const transactionSchema = z.object({
  //   container: z.string().min(1),

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

  // items : z.array(itemObject).default([]),

  company: z.string().min(8),

  date: z.date().default(Date.now()),

  duration: z.string().min(1, {
    message: "La duración es necesaria",
  }),

  action: z.string().min(1, {
    message: "La acción es necesaria",
  }),

  price: z.string().min(1, {
    message: "El precio es necesario",
  }),

  transport_price: z.string().min(1, {
    message: "El precio de envío es necesario",
  }),
});
