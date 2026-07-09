"use client";

import { useTranslations } from "next-intl";

type CharacterCounterProps = {
  current: number;
  max: number;
  id: string;
};

export function CharacterCounter({ current, max, id }: CharacterCounterProps) {
  const t = useTranslations("profileForm");
  const remaining = max - current;

  return (
    <div
      id={id}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="mt-1 text-xs text-muted-foreground"
    >
      {t("fields.bio.charactersRemaining", { count: remaining })}
    </div>
  );
}
