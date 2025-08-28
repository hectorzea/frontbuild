import { MulliganTable } from "@/components/frontbuild/MulliganTable";
import React from "react";

export default function MulliganPage() {
  return (
    <div
      data-testid="hs-mulligan-creator-page"
      className="flex flex-col gap-4 m-6"
    >
      <MulliganTable />
    </div>
  );
}
