import { HearthstoneCardSearchForm } from "@/components/frontbuild/HearthstoneCardSearchForm";
import MockServiceWorkerWrapper from "@/components/frontbuild/MockServiceWorkerWrapper";
import React from "react";

export default function HearthstoneCardSearchPage() {
  return (
    <div data-testid="hs-card-search-page" className="flex flex-col">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <MockServiceWorkerWrapper>
          <HearthstoneCardSearchForm />
        </MockServiceWorkerWrapper>
      </div>
    </div>
  );
}
