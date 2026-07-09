"use client";
import {
  createProfileSchema,
  ProfileFormValues,
} from "@/app/(frontbuild)/[locale]/a11y-form/schema/schema";
import { FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import { useForm, useWatch } from "react-hook-form";
import AccessibleField from "./AccesibleField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import ErrorSummary, { ErrorSummaryItem } from "./ErrorSummary";
import { useId, useState } from "react";
import { useAnnouncer } from "@/app/(frontbuild)/[locale]/a11y-form/hooks/useAnnouncer";
import { CharacterCounter } from "./CharacterCounter";
import { Announcer } from "./Announcer";
import { ConfirmDialog } from "./ConfirmDialog";

const ProfileForm = () => {
  const t = useTranslations("profileForm");
  const schema = createProfileSchema(t);
  const [submitAttempt, setSubmitAttempt] = useState<number>(0);

  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingValues, setPendingValues] = useState<ProfileFormValues | null>(
    null,
  );

  const fullNameId = useId();
  const emailId = useId();
  const bioId = useId();

  const { announce, message, politeness } = useAnnouncer();

  const {
    control,
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

  const bioValue = useWatch({ control, name: "bio" }) ?? "";
  const bioCounterId = `${bioId}-counter`;

  // submit → validate → open modal → confirm → send
  const onValid = (data: ProfileFormValues) => {
    setPendingValues(data);
    setConfirmOpen(true);
  };

  const onInvalid = () => {
    setSubmitAttempt((n) => n + 1);
  };

  const handleConfirm = async () => {
    if (!pendingValues) return;
    // Aquí el envío real
    await new Promise((r) => setTimeout(r, 800));
    console.log("Datos enviados:", pendingValues);
    setConfirmOpen(false);
    setPendingValues(null);
    announce(t("actions.success"), "polite");
  };

  const summaryErrors: ErrorSummaryItem[] = [
    errors.fullName && {
      fieldId: fullNameId,
      fieldLabel: t("fields.fullName.label"),
      message: errors.fullName.message ?? "",
    },
    errors.email && {
      fieldId: emailId,
      fieldLabel: t("fields.email.label"),
      message: errors.email.message ?? "",
    },
    errors.bio && {
      fieldId: bioId,
      fieldLabel: t("fields.bio.label"),
      message: errors.bio.message ?? "",
    },
  ].filter(Boolean) as ErrorSummaryItem[];

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onValid, onInvalid)}
        noValidate
        aria-labelledby="profile-form-heading"
      >
        <ErrorSummary errors={summaryErrors} submitAttempt={submitAttempt} />
        <FieldGroup>
          <FieldSet>
            <FieldLegend>{t("sections.personal")}</FieldLegend>
            <AccessibleField
              id={fullNameId}
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
                  data-testid="ay11-form-name-input"
                />
              )}
            </AccessibleField>

            <AccessibleField
              id={emailId}
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
                  data-testid="ay11-form-email-input"
                />
              )}
            </AccessibleField>

            <AccessibleField
              id={bioId}
              label={t("fields.bio.label")}
              // hint={t("fields.bio.hint")}
              error={errors.bio?.message}
            >
              {(fieldProps) => (
                <>
                  <Textarea
                    {...fieldProps}
                    {...register("bio")}
                    rows={4}
                    maxLength={300}
                    aria-describedby={[
                      fieldProps["aria-describedby"],
                      bioCounterId,
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    data-testid="ay11-form-bio-input"
                  />
                  <CharacterCounter
                    id={bioCounterId}
                    current={bioValue.length}
                    max={300}
                  />
                </>
              )}
            </AccessibleField>
          </FieldSet>
        </FieldGroup>
        <Announcer message={message} politeness={politeness} />
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="mt-6"
          data-testid="ay11-form-submit-button"
        >
          {isSubmitting ? t("actions.submitting") : t("actions.submit")}
        </Button>
      </form>
      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        values={pendingValues}
        onConfirm={handleConfirm}
        isSubmitting={isSubmitting}
      />
    </div>
  );
};

export default ProfileForm;
