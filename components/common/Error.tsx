import * as React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import Link from "next/link";

export interface IAppProps {
  message: string;
  description: string;
  route?: string;
}

export default function ServerError({
  message,
  description,
  route,
}: IAppProps) {
  const defaultRoute = route ?? "/";
  return (
    <Alert variant="destructive">
      <AlertCircleIcon />
      <AlertTitle>{message}</AlertTitle>
      <AlertDescription>
        <p data-testid="description-server-error-message">{description}</p>
        <Link href={defaultRoute}>Go back</Link>
      </AlertDescription>
    </Alert>
  );
}
