import { z } from "zod";

export const hearthstoneCardSchema = z.object({
  cardName: z.string().min(2, {
    message: "Card name must be have at least 2 characters.",
  }),
});

export type HearthstoneCardFormValues = z.infer<typeof hearthstoneCardSchema>;
