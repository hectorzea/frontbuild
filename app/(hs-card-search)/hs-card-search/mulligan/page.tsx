import MockServiceWorkerWrapper from "@/components/frontbuild/MockServiceWorkerWrapper";
import { MulliganTable } from "@/components/frontbuild/MulliganTable";

export default function MulliganPage() {
  return (
    <div
      data-testid="hs-mulligan-creator-page"
      className="flex flex-col gap-4 m-6"
    >
      <MockServiceWorkerWrapper>
        <MulliganTable />
      </MockServiceWorkerWrapper>
    </div>
  );
}
