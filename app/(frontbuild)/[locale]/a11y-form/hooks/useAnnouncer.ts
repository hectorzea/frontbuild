"use client";

import { useCallback, useState } from "react";

type Politeness = "polite" | "assertive";

export function useAnnouncer() {
  const [message, setMessage] = useState("");
  const [politeness, setPoliteness] = useState<Politeness>("polite");

  const announce = useCallback((msg: string, level: Politeness = "polite") => {
    setMessage("");
    setPoliteness(level);
    setTimeout(() => setMessage(msg), 100);
  }, []);

  return { announce, message, politeness };
}
