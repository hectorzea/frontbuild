// app/[locale]/a11y-form/_components/ConfirmDialog.tsx
"use client";

import { useTranslations } from "next-intl";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ProfileFormValues } from "@/app/(frontbuild)/[locale]/a11y-form/schema/schema";

type ConfirmDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  values: ProfileFormValues | null;
  onConfirm: () => void;
  isSubmitting: boolean;
};

export function ConfirmDialog({
  open,
  onOpenChange,
  values,
  onConfirm,
  isSubmitting,
}: ConfirmDialogProps) {
  const t = useTranslations("profileForm");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("confirm.title")}</DialogTitle>
          <DialogDescription>
            {t("confirm.description", {
              name: values?.fullName ?? "",
              email: values?.email ?? "",
            })}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isSubmitting}
          >
            {t("confirm.cancel")}
          </Button>
          <Button
            type="button"
            onClick={onConfirm}
            disabled={isSubmitting}
            aria-busy={isSubmitting}
          >
            {isSubmitting ? t("actions.submitting") : t("confirm.confirm")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
