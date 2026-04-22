"use client";
import {
  createProfileSchema,
  ProfileFormValues,
} from "@/app/(frontbuild)/[locale]/a11y-form/schema/schema";
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import AccessibleField from "./AccesibleField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ProfileForm = () => {
  const t = useTranslations("profileForm");
  const schema = createProfileSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      bio: "",
    },
  });

  const onSubmit = async (data: ProfileFormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Data:", data);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-labelledby="profile-form-heading"
      >
        <FieldGroup>
          <FieldSet>
            <FieldLegend>{t("sections.personal")}</FieldLegend>
            <AccessibleField
              label={t("fields.fullName.label")}
              hint={t("fields.fullName.hint")}
              error={errors.fullName?.message}
              required
            >
              {(fieldProps) => (
                <Input
                  {...fieldProps}
                  {...register("fullName")}
                  type="text"
                  autoComplete="name"
                  autoCapitalize="words"
                />
              )}
            </AccessibleField>

            <AccessibleField
              label={t("fields.email.label")}
              hint={t("fields.email.hint")}
              error={errors.email?.message}
              required
            >
              {(fieldProps) => (
                <Input
                  {...fieldProps}
                  {...register("email")}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  spellCheck={false}
                />
              )}
            </AccessibleField>

            <AccessibleField
              label={t("fields.bio.label")}
              hint={t("fields.bio.hint")}
              error={errors.bio?.message}
            >
              {(fieldProps) => (
                <Textarea
                  {...fieldProps}
                  {...register("bio")}
                  rows={4}
                  maxLength={300}
                />
              )}
            </AccessibleField>
          </FieldSet>
        </FieldGroup>
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="mt-6"
        >
          {isSubmitting ? t("actions.submitting") : t("actions.submit")}
        </Button>
      </form>
    </div>
  );
};

export default ProfileForm;
