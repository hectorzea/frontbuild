import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.email(),
  password: z.string().min(2),
});

export type LoginFormValues = z.infer<typeof loginFormSchema>;
