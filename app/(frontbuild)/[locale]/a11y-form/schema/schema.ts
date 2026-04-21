import { z } from "zod";
export function createProfileSchema(t: (key: string) => string) {
  return z.object({
    fullName: z
      .string({ required_error: t("fields.fullName.errors.required") })
      .trim()
      .min(1, { message: t("fields.fullName.errors.required") })
      .min(2, { message: t("fields.fullName.errors.tooShort") }),

    email: z
      .string({ required_error: t("fields.email.errors.required") })
      .trim()
      .min(1, { message: t("fields.email.errors.required") })
      .email({ message: t("fields.email.errors.invalid") }),

    bio: z.string().max(300).optional(),
  });
}

export type ProfileFormValues = z.infer<ReturnType<typeof createProfileSchema>>;
