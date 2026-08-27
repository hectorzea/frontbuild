import { z } from "zod";

export const jobSearchSchema = z.object({
  linkedinJobOfferUrl: z
    .string()
    .min(5, { error: "LinkedIN job offer link is required" }),
});

export type JobSearch = z.infer<typeof jobSearchSchema>;
