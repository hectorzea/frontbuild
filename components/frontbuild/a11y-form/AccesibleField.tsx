"use client";

import { useId } from "react";
import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";

type AccessibleFieldProps = {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: (props: {
    id: string;
    "aria-invalid": boolean;
    "aria-describedby": string | undefined;
    "aria-required": boolean;
  }) => React.ReactNode;
};

const AccessibleField = ({
  label,
  hint,
  error,
  required = false,
  children,
}: AccessibleFieldProps) => {
  const id = useId();
  const hintId = hint ? `${id}-hint` : undefined;
  const errorId = error ? `${id}-error` : undefined;

  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  console.log(describedBy);

  return (
    <Field data-invalid={!!error}>
      <FieldLabel htmlFor={id}>
        {label}
        {required && (
          <span aria-hidden="true" className="ml-0.5 text-destructive">
            *
          </span>
        )}
      </FieldLabel>
      {children({
        id,
        "aria-invalid": !!error,
        "aria-describedby": describedBy,
        "aria-required": required,
      })}
      {hint && !error && (
        <FieldDescription id={hintId}>{hint}</FieldDescription>
      )}

      {error && <FieldError id={errorId}>{error}</FieldError>}
    </Field>
  );
};

export default AccessibleField;
