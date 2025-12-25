import { HearthstoneCardSearchForm } from "@/components/frontbuild/HearthstoneCardSearchForm";
import MockServiceWorkerWrapper from "@/components/frontbuild/MockServiceWorkerWrapper";

export default function HearthstoneCardSearchPage() {
  return (
    <div
      data-testid="hs-card-search-page"
      className="flex flex-col justify-center items-center m-5 min-h-screen bg-[url(/hsbg.webp)] lg:bg-contain"
    >
      <MockServiceWorkerWrapper>
        <HearthstoneCardSearchForm />
      </MockServiceWorkerWrapper>
    </div>
  );
}
