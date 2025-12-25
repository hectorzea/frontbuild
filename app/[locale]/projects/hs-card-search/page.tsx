import { HearthstoneCardSearchForm } from "@/components/frontbuild/HearthstoneCardSearchForm";
import MockServiceWorkerWrapper from "@/components/frontbuild/MockServiceWorkerWrapper";
import image from "@/public/hsbg.webp";

export default function HearthstoneCardSearchPage() {
  return (
    <div
      data-testid="hs-card-search-page"
      className="flex flex-col justify-center items-center m-5 min-h-screen"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <MockServiceWorkerWrapper>
        <HearthstoneCardSearchForm />
      </MockServiceWorkerWrapper>
    </div>
  );
}
