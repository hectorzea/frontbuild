import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

export type ErrorSummaryItem = {
  fieldId: string;
  fieldLabel: string;
  message: string;
};

type ErrorSummaryProps = {
  errors: ErrorSummaryItem[];
  submitAttempt: number;
};

const ErrorSummary = ({ errors, submitAttempt }: ErrorSummaryProps) => {
  const t = useTranslations("profileForm");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (errors.length > 0 && ref.current) {
      ref.current.focus();
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [submitAttempt, errors.length]);

  if (errors.length === 0) return null;

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    fieldId: string,
  ) => {
    e.preventDefault();
    const field = document.getElementById(fieldId);
    field?.focus();
    field?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div
      ref={ref}
      tabIndex={-1}
      role="group"
      aria-labelledby="error-summary-title"
      className="
        mb-6 rounded-md border-2 border-destructive bg-destructive/10 p-4
        focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2
      "
    >
      <h2
        id="error-summary-title"
        className="mb-2 text-base font-semibold text-destructive"
      >
        {t("errors.summaryTitle", { count: errors.length })}
      </h2>
      <ul className="ml-5 list-disc space-y-1 text-sm">
        {errors.map((error) => (
          <li key={error.fieldId}>
            <a
              href={`#${error.fieldId}`}
              onClick={(e) => handleLinkClick(e, error.fieldId)}
              className="text-destructive underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2"
            >
              <span className="font-medium">{error.fieldLabel}:</span>{" "}
              {error.message}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ErrorSummary;
