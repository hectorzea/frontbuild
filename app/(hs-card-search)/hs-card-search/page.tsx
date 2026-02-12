import { HearthstoneCardSearchForm } from "@/components/frontbuild/HearthstoneCardSearchForm";
import MockServiceWorkerWrapper from "@/components/frontbuild/MockServiceWorkerWrapper";

export default function HearthstoneCardSearchPage() {
  return (
    <div
      data-testid="hs-card-search-page"
      className="flex flex-col justify-center items-center min-h-screen bg-[url(/hsbg.webp)] lg:bg-cover"
    >
      <MockServiceWorkerWrapper>
        <HearthstoneCardSearchForm />
      </MockServiceWorkerWrapper>
    </div>
  );
}
