import { z } from "zod";

export const jobSearchSchema = z.object({
  _id: z.string().optional(),
  linkedinJobOfferUrl: z
    .string()
    .min(5, { error: "LinkedIN job offer link is required" }),
});
