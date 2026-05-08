"use client";

type AnnouncerProps = {
  message: string;
  politeness: "polite" | "assertive";
};

export function Announcer({ message, politeness }: AnnouncerProps) {
  return (
    <div
      role={politeness === "assertive" ? "alert" : "status"}
      aria-live={politeness}
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}
