"use client";

import { Frown } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex justify-center items-center flex-col space-y-4">
      <Frown width={200} height={200} />
      <h2>Something went wrong</h2>
      <button onClick={() => reset()}>Try again...</button>
    </div>
  );
}
