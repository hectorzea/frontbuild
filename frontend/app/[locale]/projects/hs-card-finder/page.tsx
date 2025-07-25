import { HearthstoneCardFinderForm } from "@/components/frontbuild/HearthstoneCardSearchForm";
import React from "react";

export default function HearthstoneCardFinderPage() {
  return (
    <div data-testid="hs-card-finder-page" className="flex flex-col">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <HearthstoneCardFinderForm />
      </div>
    </div>
  );
}
