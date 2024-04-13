import { z } from "zod";

export const wishSchema = z.object({
  cardname: z.string({
    required_error: "Cardname is required",
  }),
  description: z.string({
    required_error: "Description is required",
  }),
  cbu: z.string({
    required_error: "CBU is required",
  }),
  alias: z.string().optional(),
  paymentlink: z.string().optional(),
  date: z.string().datetime().optional(),
});
